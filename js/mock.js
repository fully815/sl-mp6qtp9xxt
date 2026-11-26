/* ==========================================================
   mock.js  模擬試験
   ・設定画面 → 試験 → 結果画面
   ・本番モード：回答中は正解・解説を出さず、終了後にまとめて採点
   ・練習モード：1問ごとに正解・解説を表示（全体の制限時間つき）
   共通の道具（esc / formatTime など）は app.js にあります。
   ========================================================== */

/* 模擬試験の設定（設定画面で選んだ内容） */
let mockSetup = {
  examId: '',          // '' は全試験
  categoryIds: null,   // null はすべての分野
  count: 10,           // 問題数。'all' は全問
  minutes: 'auto',     // 制限時間（分）。'auto' は目標時間の合計
  mode: 'real'         // real=本番 / practice=練習
};

function isRealMock() {
  return Boolean(session && !session.finished && session.kind === 'mock' && session.mock.mode === 'real');
}

/* 設定に当てはまる問題 */
function mockPool(setup) {
  return QUESTIONS.filter(function (q) {
    if (setup.examId && q.examType !== setup.examId) return false;
    if (setup.examId && setup.categoryIds && setup.categoryIds.indexOf(q.category) === -1) return false;
    return true;
  });
}

function mockTitle(examId) {
  return '模擬試験（' + (examId ? examName(examId) : '全試験') + '）';
}

/* ---------- 設定画面 ---------- */

function renderMockSetup() {
  const available = mockPool(mockSetup).length;
  const exam = findExam(mockSetup.examId);

  function option(value, label, current) {
    return '<option value="' + esc(value) + '"' + (String(current) === String(value) ? ' selected' : '') + '>' + esc(label) + '</option>';
  }

  let html = '<div class="stack">' +
    '<a class="back-link" href="#/study">‹ 学習へ戻る</a>' +
    '<h1>模擬試験</h1>' +
    '<p class="note">' + esc(FORMAT_NOTE) + '</p>' +
    '<div class="card">' +
      '<label class="field"><span class="toggle__label">試験</span>' +
        '<select data-mock="examId">' + option('', '全試験', mockSetup.examId) +
          EXAMS.filter(function (e) { return mockPool({ examId: e.id, categoryIds: null }).length > 0; })
            .map(function (e) { return option(e.id, e.name, mockSetup.examId); }).join('') +
        '</select></label>';

  if (exam) {
    html += '<fieldset class="checks"><legend>分野</legend>' +
      exam.categories.map(function (c) {
        const on = !mockSetup.categoryIds || mockSetup.categoryIds.indexOf(c.id) !== -1;
        return '<label class="toggle"><input type="checkbox" data-mock-category="' + esc(c.id) + '"' + (on ? ' checked' : '') + '>' +
          '<span>' + esc(c.name) + '</span></label>';
      }).join('') + '</fieldset>';
  }

  html += '<label class="field"><span class="toggle__label">問題数</span>' +
      '<select data-mock="count">' +
        [5, 10, 20].filter(function (n) { return n < available; })
          .map(function (n) { return option(n, n + '問', mockSetup.count); }).join('') +
        option('all', '全問（' + available + '問）', mockSetup.count >= available ? 'all' : mockSetup.count) +
      '</select></label>' +
    '<label class="field"><span class="toggle__label">制限時間</span>' +
      '<select data-mock="minutes">' + option('auto', '目安（目標時間の合計）', mockSetup.minutes) +
        [3, 5, 10, 15, 20, 30].map(function (m) { return option(m, m + '分', mockSetup.minutes); }).join('') +
      '</select></label>' +
    '<fieldset class="segmented"><legend>モード</legend>' +
      '<label><input type="radio" name="mockMode" value="real"' + (mockSetup.mode === 'real' ? ' checked' : '') + '>本番モード</label>' +
      '<label><input type="radio" name="mockMode" value="practice"' + (mockSetup.mode === 'practice' ? ' checked' : '') + '>練習モード</label>' +
    '</fieldset>' +
    '<p class="note">' + (mockSetup.mode === 'real'
      ? '本番モード：回答中は正解や解説を表示しません。終了後にまとめて採点します。問題を行き来して見直せます。'
      : '練習モード：1問ごとに正解と解説を表示します。全体の制限時間があります。') + '</p>' +
    '</div>' +
    (available === 0 ? '<p class="message message--error">出題できる問題がありません。分野を1つ以上選んでください。</p>' : '') +
    '<button type="button" class="btn btn--primary btn--block" data-action="mock-start"' + (available === 0 ? ' disabled' : '') + '>模擬試験を始める</button>' +
  '</div>';
  return html;
}

/* ---------- 試験の開始 ---------- */

function startMock() {
  const settings = Store.getSettings();
  let pool = shuffled(mockPool(mockSetup));
  if (pool.length === 0) return;
  if (mockSetup.count !== 'all') pool = pool.slice(0, Number(mockSetup.count));

  // 制限時間（秒）。「目安」は目標時間の合計を、分単位に切り上げたもの
  const targetTotal = pool.reduce(function (sum, q) { return sum + q.targetSeconds; }, 0);
  const limitSeconds = mockSetup.minutes === 'auto'
    ? Math.max(60, Math.ceil(targetTotal / 60) * 60)
    : Number(mockSetup.minutes) * 60;
  const now = Date.now();

  session = {
    id: 'm' + now,
    kind: 'mock',
    config: { examId: mockSetup.examId || null, categoryIds: mockSetup.categoryIds },
    mock: { mode: mockSetup.mode, limitSeconds: limitSeconds, startedAt: now, deadline: now + limitSeconds * 1000 },
    items: pool.map(function (q) {
      let order = q.choices.map(function (_, i) { return i; });
      if (settings.shuffleChoices && q.questionType !== 'judge') order = shuffled(order);
      return { questionId: q.id, order: order };
    }),
    index: 0,
    phase: 'question',
    questionStartedAt: now,
    answers: [],                                       // 練習モードで使う
    selections: pool.map(function () { return null; }), // 本番モード：各問題で選んだ選択肢
    marks: pool.map(function () { return false; }),     // 本番モード：見直しの印
    times: pool.map(function () { return 0; }),         // 本番モード：各問題にかけた秒数
    enteredAt: now,
    finished: false
  };
  Store.saveSession(session);
  if (location.hash === '#/quiz') {
    render();
  } else {
    location.hash = '#/quiz';
  }
}

/* ---------- 本番モードの問題画面 ---------- */

function renderMockQuiz() {
  const item = session.items[session.index];
  const q = findQuestion(item.questionId);
  const total = session.items.length;
  const number = session.index + 1;
  const selected = session.selections[session.index];
  const answeredCount = session.selections.filter(function (s) { return s !== null; }).length;

  let html = '<div class="stack quiz">' +
    '<div class="quiz__meta">' +
      '<span>' + esc(mockTitle(session.config.examId)) + '／本番</span>' +
      '<span>' + esc(categoryName(q.examType, q.category)) + '</span>' +
    '</div>' +
    '<div class="quiz__meta quiz__meta--strong">' +
      '<span>問 ' + number + '／' + total + '（回答済み ' + answeredCount + '問）</span>' +
      '<span id="timer">残り 0:00</span>' +
    '</div>';

  if (q.passage) {
    html += '<div class="card passage"><p class="note">本文</p><p class="pre">' + esc(q.passage) + '</p></div>';
  }
  html += figureHtml(q.figureData);
  html += '<h1 class="quiz__text pre">' + esc(q.questionText) + '</h1>';

  html += '<fieldset class="choices"><legend class="visually-hidden">選択肢</legend>' +
    item.order.map(function (originalIndex, position) {
      return '<label class="choice">' +
        '<input type="radio" name="choice" value="' + position + '"' + (originalIndex === selected ? ' checked' : '') + '>' +
        '<span class="choice__text">' + esc(q.choices[originalIndex]) + '</span></label>';
    }).join('') + '</fieldset>';

  html += '<div class="flag-row">' +
    '<button type="button" class="btn btn--small btn--grow" data-action="mock-mark" aria-pressed="' + session.marks[session.index] + '">' +
      (session.marks[session.index] ? '✓ 見直しの印あり' : '後で見直す') + '</button></div>';

  // 問題番号の一覧（押すとその問題へ移動）
  html += '<nav class="card" aria-label="問題の一覧"><p class="note">●＝回答済み　⚑＝見直しの印</p><div class="qgrid">' +
    session.items.map(function (_, i) {
      const done = session.selections[i] !== null;
      const marked = session.marks[i];
      return '<button type="button" class="qgrid__btn' + (done ? ' is-answered' : '') + '" data-action="mock-jump" data-index="' + i + '"' +
        (i === session.index ? ' aria-current="true"' : '') +
        ' aria-label="問' + (i + 1) + (done ? ' 回答済み' : ' 未回答') + (marked ? ' 見直しの印あり' : '') + '">' +
        (i + 1) + '<span class="qgrid__state" aria-hidden="true">' + (done ? '●' : '') + (marked ? '⚑' : '') + '</span></button>';
    }).join('') + '</div>' +
    '<button type="button" class="btn btn--small btn--block" data-action="mock-abort">試験をやめる（記録しません）</button></nav>';

  html += '<div class="actionbar">' +
    '<button type="button" class="btn" data-action="mock-prev"' + (session.index === 0 ? ' disabled' : '') + '>前へ</button>' +
    '<button type="button" class="btn btn--grow" data-action="mock-next"' + (number >= total ? ' disabled' : '') + '>次へ</button>' +
    '<button type="button" class="btn btn--primary" data-action="mock-finish">採点する</button>' +
    '</div>';
  return html + '</div>';
}

/* いま表示している問題にかけた時間を加算する（本番モード） */
function mockAddTime() {
  const now = Date.now();
  session.times[session.index] += (now - session.enteredAt) / 1000;
  session.enteredAt = now;
}

function mockGo(index) {
  if (index < 0 || index >= session.items.length) return;
  mockAddTime();
  session.index = index;
  Store.saveSession(session);
  render();
}

/* ---------- 採点 ---------- */

/* 模擬試験を終了して採点する。timeUp が true のときは時間切れによる終了 */
function finishMock(timeUp) {
  if (!session || session.finished || session.kind !== 'mock') return;
  Timer.stop();
  const isReal = session.mock.mode === 'real';
  const flags = Store.getFlags();
  let rows;

  if (isReal) {
    mockAddTime();
    rows = session.items.map(function (item, i) {
      const q = findQuestion(item.questionId);
      const selected = session.selections[i];
      return {
        questionId: q.id,
        selected: selected,
        isCorrect: selected !== null && selected === q.correctAnswer,
        seconds: Math.round(session.times[i])
      };
    });
    // 回答した問題だけを学習履歴に記録する（未回答は模擬試験の結果にだけ数える）
    const now = new Date().toISOString();
    rows.forEach(function (row) {
      if (row.selected === null) return;
      const q = findQuestion(row.questionId);
      Store.addAnswer({
        questionId: q.id, answeredAt: now, selected: row.selected, isCorrect: row.isCorrect,
        seconds: row.seconds, examType: q.examType, category: q.category, difficulty: q.difficulty,
        mode: 'mock',
        review: flags.reviews.indexOf(q.id) !== -1,
        favorite: flags.favorites.indexOf(q.id) !== -1,
        timedOut: false,
        sessionId: session.id
      });
    });
  } else {
    // 練習モード：回答は1問ごとに記録済み。残りの問題は未回答として数える
    rows = session.items.map(function (item) {
      const a = session.answers.find(function (x) { return x.questionId === item.questionId; });
      return a
        ? { questionId: a.questionId, selected: a.selected, isCorrect: a.isCorrect, seconds: a.seconds }
        : { questionId: item.questionId, selected: null, isCorrect: false, seconds: 0 };
    });
  }

  const total = rows.length;
  const correct = rows.filter(function (r) { return r.isCorrect; }).length;
  const unanswered = rows.filter(function (r) { return r.selected === null; }).length;
  const elapsed = Math.round((Date.now() - session.mock.startedAt) / 1000);

  const result = {
    id: session.id,
    finishedAt: new Date().toISOString(),
    examId: session.config.examId || '',
    categoryIds: session.config.categoryIds || null,
    mockMode: session.mock.mode,
    total: total,
    correct: correct,
    unanswered: unanswered,
    timedOut: Boolean(timeUp),
    timedOutCount: timeUp ? unanswered : 0,   // 時間切れで回答できなかった問題数
    seconds: Math.min(session.mock.limitSeconds, elapsed),
    limitSeconds: session.mock.limitSeconds,
    score: Analytics.percent(correct, total) || 0,   // 100点満点。未回答は不正解として数える
    rows: rows
  };
  Store.addMock(result);
  Store.clearSession();
  session = null;
  location.hash = '#/mock-result/' + result.id;
}

/* ---------- 結果画面 ---------- */

function renderMockResult(id) {
  const mocks = Store.getMocks();
  const index = mocks.findIndex(function (m) { return m.id === id; });
  if (index === -1) {
    return '<div class="stack"><h1>結果が見つかりません</h1>' +
      '<a class="btn" href="#/history">学習履歴へ戻る</a></div>';
  }
  const r = mocks[index];
  // 前回の結果（同じ試験の、ひとつ前の模擬試験）
  let previous = null;
  for (let i = index - 1; i >= 0; i--) {
    if (mocks[i].examId === r.examId) { previous = mocks[i]; break; }
  }

  // 問題データが残っている行だけを集計に使う
  const rows = r.rows.map(function (row) {
    return { q: findQuestion(row.questionId), isCorrect: row.isCorrect, selected: row.selected, seconds: row.seconds };
  }).filter(function (row) { return row.q; });
  const answered = r.total - r.unanswered;
  const toReview = rows.filter(function (row) { return !row.isCorrect; });

  const byCategory = Analytics.group(rows, function (row) { return row.q.examType + '|' + row.q.category; });
  const byDifficulty = Analytics.group(rows, function (row) { return String(row.q.difficulty); })
    .sort(function (a, b) { return Number(a.key) - Number(b.key); });
  const difficultyNames = { 1: 'やさしい（★）', 2: 'ふつう（★★）', 3: '難しい（★★★）' };
  function catName(key) {
    const parts = key.split('|');
    return examName(parts[0]) + '／' + categoryName(parts[0], parts[1]);
  }
  function rowsOf(groups, nameFn) {
    return groups.map(function (g) {
      return { name: nameFn(g.key), ratio: g.correct / g.count, text: g.accuracy + '%（' + g.correct + '／' + g.count + '問）' };
    });
  }

  let html = '<div class="stack">' +
    '<h1>模擬試験の結果</h1>' +
    '<p class="note">' + esc(mockTitle(r.examId)) + '／' + (r.mockMode === 'real' ? '本番モード' : '練習モード') + '　' + formatDateTime(r.finishedAt) + '</p>' +
    (r.timedOut ? '<p class="message message--error">制限時間になったため、試験を終了しました。</p>' : '') +
    '<div class="stats">' +
      '<div class="stat"><p class="stat__label">得点（100点満点）</p><p class="stat__value">' + r.score + '<span class="stat__unit">点</span></p></div>' +
      '<div class="stat"><p class="stat__label">正答数</p><p class="stat__value">' + r.correct + '<span class="stat__unit">／' + r.total + '問</span></p></div>' +
      '<div class="stat"><p class="stat__label">正答率</p><p class="stat__value">' + rateTile(Analytics.percent(r.correct, r.total)) + '</p></div>' +
      '<div class="stat"><p class="stat__label">所要時間</p><p class="stat__value">' + formatTime(r.seconds) + '<span class="stat__unit">／' + formatTime(r.limitSeconds) + '</span></p></div>' +
      '<div class="stat"><p class="stat__label">1問あたり平均</p><p class="stat__value">' + (answered ? formatTime(r.seconds / answered) : '—') + '</p></div>' +
      '<div class="stat"><p class="stat__label">未回答</p><p class="stat__value">' + r.unanswered + '<span class="stat__unit">問</span></p></div>' +
    '</div>' +
    '<p class="note">時間切れで回答できなかった問題：' + r.timedOutCount + '問　／　未回答は不正解として採点しています。</p>';

  // 前回との比較
  html += '<section class="card" aria-labelledby="mr-prev"><h2 id="mr-prev">前回との比較</h2>';
  if (previous) {
    const diff = r.score - previous.score;
    html += '<p>前回 ' + previous.score + '点 → 今回 ' + r.score + '点（' +
      (diff > 0 ? '↑ ' + diff + '点アップ' : diff < 0 ? '↓ ' + (-diff) + '点ダウン' : '→ 変わらず') + '）</p>' +
      '<p class="note">前回：' + formatDateTime(previous.finishedAt) + '（' + previous.correct + '／' + previous.total + '問）</p>';
  } else {
    html += '<p class="note">同じ試験の前回の結果はまだありません。</p>';
  }
  html += '</section>';

  if (rows.length > 0) {
    html += '<section class="card" aria-labelledby="mr-cat"><h2 id="mr-cat">分野別の正答率</h2>' + barListHtml(rowsOf(byCategory, catName)) + '</section>' +
      '<section class="card" aria-labelledby="mr-diff"><h2 id="mr-diff">難易度別の正答率</h2>' +
        barListHtml(rowsOf(byDifficulty, function (key) { return difficultyNames[key] || '不明'; })) + '</section>';
  }

  // 苦手分野と、次に学習すべき内容（この模擬試験で正答率が低かった分野）
  const weak = byCategory.filter(function (g) { return g.correct < g.count; })
    .sort(function (a, b) { return a.correct / a.count - b.correct / b.count; });
  html += '<section class="card" aria-labelledby="mr-next"><h2 id="mr-next">苦手分野と、次に学習する内容</h2>';
  if (weak.length === 0) {
    html += '<p>✓ 全問正解です。問題数を増やすか、別の試験にも挑戦してみましょう。</p>';
  } else {
    html += '<p>正答率が低かった分野：' + esc(weak.slice(0, 3).map(function (g) { return catName(g.key); }).join('、')) + '</p>' +
      weak.slice(0, 3).map(function (g) {
        const parts = g.key.split('|');
        return '<button type="button" class="btn btn--block" data-action="start" data-exam="' + esc(parts[0]) + '" data-category="' + esc(parts[1]) + '">' +
          esc(categoryName(parts[0], parts[1])) + 'を分野別に学習する</button>';
      }).join('');
  }
  html += '</section>';

  // 復習する問題（本番モードでは、ここで初めて正解と解説を表示する）
  html += '<section class="card" aria-labelledby="mr-review"><h2 id="mr-review">復習する問題</h2>';
  if (toReview.length === 0) {
    html += '<p>✓ 間違えた問題はありません。</p>';
  } else {
    html += '<ul class="review-list">' + toReview.map(function (row) {
      return '<li><p class="note">' + esc(catName(row.q.examType + '|' + row.q.category)) + '　' +
          (row.selected === null ? '未回答' : '× 不正解') + '</p>' +
        '<p class="review-list__text">' + esc(row.q.questionText) + '</p>' +
        (row.selected !== null ? '<p>あなたの回答：' + esc(row.q.choices[row.selected]) + '</p>' : '') +
        '<p><strong>正解：</strong>' + esc(row.q.choices[row.q.correctAnswer]) + '</p>' +
        '<details class="details"><summary>解説を見る</summary><p class="pre">' + esc(row.q.explanation) + '</p>' +
          '<p class="note pre">考え方：' + esc(row.q.shortCut) + '</p></details></li>';
    }).join('') + '</ul>' +
    '<button type="button" class="btn btn--primary btn--block" data-action="mock-review" data-id="' + esc(r.id) + '">間違えた問題だけ復習する（' + toReview.length + '問）</button>';
  }
  html += '</section>' +
    '<button type="button" class="btn btn--block" data-action="mock-retry" data-id="' + esc(r.id) + '">同じ条件でもう一度挑戦する</button>' +
    '<a class="btn btn--block" href="#/home">ホームへ戻る</a>' +
  '</div>';
  return html;
}

/* 学習履歴画面に出す、過去の模擬試験の一覧 */
function mockListHtml() {
  const mocks = Store.getMocks();
  if (mocks.length === 0) {
    return '<p class="note">まだ模擬試験の結果がありません。</p>';
  }
  return '<ul class="list list--tight">' + mocks.slice().reverse().slice(0, 20).map(function (m) {
    return '<li><a class="list-link" href="#/mock-result/' + esc(m.id) + '">' +
      '<span><span class="list-link__title">' + m.score + '点（' + m.correct + '／' + m.total + '問）</span>' +
      '<span class="list-link__sub">' + formatDateTime(m.finishedAt) + '　' + esc(m.examId ? examName(m.examId) : '全試験') + '　' +
        (m.mockMode === 'real' ? '本番' : '練習') + '</span></span>' +
      '<span class="list-link__arrow" aria-hidden="true">›</span></a></li>';
  }).join('') + '</ul>';
}

/* ---------- 操作の受け付け（app.js から呼ばれる） ---------- */

/* ボタン操作。処理したら true を返す */
function handleMockAction(action, button) {
  if (action === 'open-mock') {
    mockSetup.examId = button.dataset.exam || '';
    mockSetup.categoryIds = null;
    location.hash = '#/mock';
    return true;
  }
  if (action === 'mock-start') {
    if (hasActiveSession() && !confirm('中断中の学習があります。破棄して模擬試験を始めますか？\n（回答済みの記録は残ります）')) return true;
    startMock();
    return true;
  }
  if (action === 'mock-retry' || action === 'mock-review') {
    const r = Store.getMocks().find(function (m) { return m.id === button.dataset.id; });
    if (!r) return true;
    if (action === 'mock-review') {
      startSession({
        examId: r.examId || null,
        questionIds: r.rows.filter(function (row) { return !row.isCorrect; }).map(function (row) { return row.questionId; })
      });
    } else {
      mockSetup = {
        examId: r.examId, categoryIds: r.categoryIds, count: r.total,
        minutes: Math.max(1, Math.round(r.limitSeconds / 60)), mode: r.mockMode
      };
      startMock();
    }
    return true;
  }
  if (!isRealMock()) return false;

  if (action === 'mock-prev') {
    mockGo(session.index - 1);
  } else if (action === 'mock-next') {
    mockGo(session.index + 1);
  } else if (action === 'mock-jump') {
    mockGo(Number(button.dataset.index));
  } else if (action === 'mock-mark') {
    session.marks[session.index] = !session.marks[session.index];
    Store.saveSession(session);
    render();
    const again = appEl.querySelector('[data-action="mock-mark"]');
    if (again) again.focus();
  } else if (action === 'mock-finish') {
    const left = session.selections.filter(function (s) { return s === null; }).length;
    if (confirm((left > 0 ? '未回答の問題が ' + left + '問あります。\n' : '') + '試験を終了して採点しますか？')) finishMock(false);
  } else if (action === 'mock-abort') {
    if (confirm('模擬試験をやめますか？\nこの試験の回答は記録されません。')) {
      Timer.stop();
      Store.clearSession();
      session = null;
      location.hash = '#/mock';
    }
  } else {
    return false;
  }
  return true;
}

/* 入力の変更。処理したら true を返す */
function handleMockChange(target) {
  // 設定画面
  if (target.dataset.mock || target.dataset.mockCategory || target.name === 'mockMode') {
    let focusSelector = '';
    if (target.dataset.mock === 'examId') {
      mockSetup.examId = target.value;
      mockSetup.categoryIds = null;
      focusSelector = '[data-mock="examId"]';
    } else if (target.dataset.mock === 'count') {
      mockSetup.count = target.value === 'all' ? 'all' : Number(target.value);
      focusSelector = '[data-mock="count"]';
    } else if (target.dataset.mock === 'minutes') {
      mockSetup.minutes = target.value === 'auto' ? 'auto' : Number(target.value);
      focusSelector = '[data-mock="minutes"]';
    } else if (target.name === 'mockMode') {
      mockSetup.mode = target.value;
      focusSelector = 'input[name="mockMode"]:checked';
    } else {
      const checked = Array.from(appEl.querySelectorAll('[data-mock-category]'))
        .filter(function (el) { return el.checked; })
        .map(function (el) { return el.dataset.mockCategory; });
      mockSetup.categoryIds = checked;
      focusSelector = '[data-mock-category="' + target.dataset.mockCategory + '"]';
    }
    render();
    const again = appEl.querySelector(focusSelector);   // 描き直した後も、キーボード操作の位置を保つ
    if (again) again.focus();
    return true;
  }
  // 本番モード：選択肢を選んだらすぐ保存する（あとで変更できる）
  if (target.name === 'choice' && isRealMock()) {
    const item = session.items[session.index];
    session.selections[session.index] = item.order[Number(target.value)];
    Store.saveSession(session);
    const gridBtn = appEl.querySelector('[data-action="mock-jump"][data-index="' + session.index + '"]');
    if (gridBtn && !gridBtn.classList.contains('is-answered')) {
      gridBtn.classList.add('is-answered');
      gridBtn.setAttribute('aria-label', gridBtn.getAttribute('aria-label').replace('未回答', '回答済み'));
      gridBtn.querySelector('.qgrid__state').textContent = '●' + (session.marks[session.index] ? '⚑' : '');
    }
    return true;
  }
  return false;
}
