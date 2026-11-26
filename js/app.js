/* ==========================================================
   app.js  画面の描画と切り替え
   ・URL の「#/home」などの部分で画面を切り替えます
     （GitHub Pages のサブフォルダでも 404 にならない方式）
   ========================================================== */

/* アプリのバージョン。
   ★ 変えるときは、service-worker.js の CACHE_VERSION も同じ番号にしてください ★ */
const APP_VERSION = '0.7.0';

const DISCLAIMER =
  '本アプリは個人学習用に作成された非公式の練習アプリです。' +
  '各試験の運営会社、出版社、採用企業とは関係ありません。' +
  '掲載している問題は学習用に独自作成したものであり、実際の試験問題を再現するものではありません。';

const FORMAT_NOTE = '出題形式や時間は目安です。学習用の内容であり、実際の受検案内を確認してください。';

/* 条件を選んで学習するときの種類 */
const MODE_LABELS = {
  wrong: '間違えた問題',
  unanswered: '未回答の問題',
  favorite: 'お気に入り',
  review: '見直し対象',
  weak: '苦手分野に集中'
};

const appEl = document.getElementById('app');

/* ---------- 小さな道具 ---------- */

/* 文字を安全に画面へ出すための変換（< > などを無害化） */
function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* 秒を「1:05」の形にする */
function formatTime(totalSeconds) {
  const s = Math.max(0, Math.floor(totalSeconds));
  return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
}

/* 秒を「1時間5分」「12分34秒」の形にする（学習時間の表示用） */
function formatDuration(totalSeconds) {
  const s = Math.max(0, Math.round(totalSeconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  if (h > 0) return h + '時間' + m + '分';
  if (m > 0) return m + '分' + (s % 60) + '秒';
  return s + '秒';
}

/* 日時を「11/26 09:05」の形にする */
function formatDateTime(iso) {
  const d = new Date(iso);
  return (d.getMonth() + 1) + '/' + d.getDate() + ' ' +
    String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
}

/* 正答率の表示。まだ回答がないとき（null）は「%」を付けずに「—」だけにする */
function rateText(value) {
  return value === null ? '—' : value + '%';
}
function rateTile(value) {
  return value === null ? '—' : value + '<span class="stat__unit">%</span>';
}

/* 配列をランダムに並べ替えた新しい配列を返す */
function shuffled(list) {
  const a = list.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a;
}

function findExam(examId) {
  return EXAMS.find(function (e) { return e.id === examId; }) || null;
}

function findQuestion(questionId) {
  return QUESTIONS.find(function (q) { return q.id === questionId; }) || null;
}

function examName(examId) {
  const exam = findExam(examId);
  return exam ? exam.name : (examId || '不明');
}

function categoryName(examId, categoryId) {
  const exam = findExam(examId);
  const c = exam && exam.categories.find(function (x) { return x.id === categoryId; });
  return c ? c.name : (categoryId || '不明');
}

/* 設定（テーマ・文字サイズ）を画面全体に反映する */
function applySettings() {
  const s = Store.getSettings();
  document.documentElement.dataset.theme = s.theme;
  document.documentElement.dataset.font = s.fontSize;
}

/* ---------- 出題する問題を選ぶ ----------
   config の形：
   { examId, categoryId, limit, mode, questionIds }
   ・examId / categoryId … null のときは「すべて」
   ・limit       … 出題数の上限（ランダム10問など）
   ・mode        … wrong / unanswered / favorite / review（MODE_LABELS 参照）
   ・questionIds … 問題を直接指定するとき（結果画面の「間違えた問題だけ復習」） */
function questionPool(config) {
  if (config.questionIds) {
    return config.questionIds.map(findQuestion).filter(Boolean);
  }
  let pool = QUESTIONS.filter(function (q) {
    return (!config.examId || q.examType === config.examId) &&
           (!config.categoryId || q.category === config.categoryId);
  });
  if (config.mode === 'wrong') {
    const wrong = Analytics.wrongIds(Store.getHistory());
    pool = pool.filter(function (q) { return wrong.has(q.id); });
  } else if (config.mode === 'unanswered') {
    const answered = Analytics.answeredIds(Store.getHistory());
    pool = pool.filter(function (q) { return !answered.has(q.id); });
  } else if (config.mode === 'favorite' || config.mode === 'review') {
    const flags = Store.getFlags();
    const ids = config.mode === 'favorite' ? flags.favorites : flags.reviews;
    pool = pool.filter(function (q) { return ids.indexOf(q.id) !== -1; });
  } else if (config.mode === 'weak') {
    // 苦手度の高い分野（最大3つ）の問題を出題する
    const keys = weakList(config.examId).slice(0, 3).map(function (w) { return w.key; });
    pool = pool.filter(function (q) { return keys.indexOf(q.examType + '|' + q.category) !== -1; });
  }
  return pool;
}

/* 苦手分野の一覧（苦手度の高い順）。examId を渡すと、その試験の分野だけにする。
   苦手度の計算方法は analytics.js の説明を参照 */
function weakList(examId) {
  const targets = {};
  QUESTIONS.forEach(function (q) { targets[q.id] = q.targetSeconds; });
  return Analytics.weakness(Store.getHistory(), targets).filter(function (w) {
    return w.isWeak && (!examId || w.key.split('|')[0] === examId);
  }).map(function (w) {
    const parts = w.key.split('|');
    w.examId = parts[0];
    w.categoryId = parts[1];
    w.name = examName(parts[0]) + '／' + categoryName(parts[0], parts[1]);
    return w;
  });
}

/* 学習内容を短い言葉で表す（「前回の続き」の表示用） */
function sessionLabel(config) {
  if (config.questionIds) return '間違えた問題の復習';
  let label = config.examId ? examName(config.examId) : '全試験';
  if (config.categoryId) label += '／' + categoryName(config.examId, config.categoryId);
  if (config.mode) label += '／' + MODE_LABELS[config.mode];
  if (config.limit && !config.mode && !config.categoryId) label += '／ランダム出題';
  return label;
}

/* ---------- タイマー ----------
   動かすタイマーは常に1つだけ。start のたびに前のものを止めるので、二重には動きません。
   経過時間は「開始時刻との差」で計算するので、画面が止まっていてもずれません。 */
const Timer = (function () {
  let intervalId = null;
  let options = null;

  // canExpire が false のときは表示だけ更新する（画面を描いている途中で終了処理が走らないようにするため）
  function tick(canExpire) {
    const el = document.getElementById('timer');
    if (options.deadline) {
      const left = (options.deadline - Date.now()) / 1000;
      if (el) el.textContent = '残り ' + formatTime(Math.ceil(left));
      if (left <= 0 && canExpire) {
        const onExpire = options.onExpire;
        stop();
        if (onExpire) onExpire();
      }
    } else if (el) {
      el.textContent = '経過 ' + formatTime((Date.now() - options.startedAt) / 1000);
    }
  }

  /* 使い方
     Timer.start({ startedAt: 開始時刻 })                      … 経過時間を表示
     Timer.start({ deadline: 終了時刻, onExpire: 関数 })        … 残り時間を表示し、0 になったら関数を呼ぶ */
  function start(newOptions) {
    stop();
    options = newOptions;
    tick(false);
    intervalId = setInterval(function () { tick(true); }, 500);
  }
  function stop() {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }
  return { start: start, stop: stop };
})();

/* 通常学習で「問題ごとの時間制限」がオンのときの制限秒数（オフなら 0）。目標時間の1.5倍 */
function questionLimitSeconds(q) {
  return Store.getSettings().questionTimeLimit ? Math.round(q.targetSeconds * 1.5) : 0;
}

/* 問題画面に合ったタイマーを動かす */
function startQuizTimer() {
  if (session.kind === 'mock') {
    // 模擬試験：全体の残り時間。0 になったら採点へ
    Timer.start({ deadline: session.mock.deadline, onExpire: function () { finishMock(true); } });
    return;
  }
  if (session.phase !== 'question') return;
  const limit = questionLimitSeconds(findQuestion(session.items[session.index].questionId));
  if (limit) {
    Timer.start({
      deadline: session.questionStartedAt + limit * 1000,
      onExpire: function () { recordAnswer(null, true); }
    });
  } else {
    Timer.start({ startedAt: session.questionStartedAt });
  }
}

/* ---------- 効果音と振動（設定でオンのときだけ） ---------- */
let audioContext = null;

function playEffects(isCorrect) {
  const s = Store.getSettings();
  if (s.vibration && navigator.vibrate) {
    navigator.vibrate(isCorrect ? 40 : [60, 60, 60]);
  }
  if (!s.sound) return;
  try {
    // 音声ファイルは使わず、その場で短い音を作る（オフラインでも鳴る）
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    audioContext = audioContext || new AudioCtx();
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.frequency.value = isCorrect ? 880 : 220;
    gain.gain.value = 0.08;
    osc.connect(gain);
    gain.connect(audioContext.destination);
    osc.start();
    osc.stop(audioContext.currentTime + (isCorrect ? 0.12 : 0.25));
  } catch (e) {
    console.warn('[効果音] 再生できませんでした', e);
  }
}

/* ---------- 学習セッション（いま解いている問題のまとまり） ----------
   端末にも保存するので、アプリを閉じても「前回の続き」から再開できます。 */

let session = restoreSession();

function restoreSession() {
  const saved = Store.getSession();
  if (!saved || saved.finished) return null;
  // 問題データが変わって、保存した問題が見つからないときは再開しない
  const allFound = saved.items.every(function (item) { return findQuestion(item.questionId); });
  if (!allFound || saved.index >= saved.items.length) {
    Store.clearSession();
    return null;
  }
  return saved;
}

function hasActiveSession() {
  return Boolean(session && !session.finished);
}

function startSession(config) {
  const settings = Store.getSettings();
  let pool = questionPool(config);
  if (pool.length === 0) {
    alert('この条件に当てはまる問題がありません。');
    return;
  }
  // 問題数に上限があるとき（ランダム10問など）は、必ずランダムに選ぶ
  if (settings.shuffleQuestions || config.limit) pool = shuffled(pool);
  if (config.limit) pool = pool.slice(0, config.limit);

  session = {
    id: 's' + Date.now(),
    kind: 'study',              // study=通常学習 / mock=模擬試験（mock.js）
    config: config,
    items: pool.map(function (q) {
      // order は選択肢の表示順。judge 形式（正しい／誤り／判断できない）は並べ替えない
      let order = q.choices.map(function (_, i) { return i; });
      if (settings.shuffleChoices && q.questionType !== 'judge') order = shuffled(order);
      return { questionId: q.id, order: order };
    }),
    index: 0,
    phase: 'question',          // question=回答中 / feedback=解説表示中
    questionStartedAt: Date.now(),
    answers: [],                // { questionId, selected, isCorrect, seconds }
    finished: false
  };
  Store.saveSession(session);
  if (location.hash === '#/quiz') {
    render();
  } else {
    location.hash = '#/quiz';
  }
}

function submitAnswer() {
  if (!hasActiveSession() || session.phase !== 'question') return;
  const checked = appEl.querySelector('input[name="choice"]:checked');
  if (!checked) return;
  const item = session.items[session.index];
  recordAnswer(item.order[Number(checked.value)], false);   // 元の選択肢番号に戻して記録する
}

/* 回答を1件記録して、解説の表示に切り替える。
   時間切れのときは selected が null、timedOut が true */
function recordAnswer(selected, timedOut) {
  if (!hasActiveSession() || session.phase !== 'question') return;
  const item = session.items[session.index];
  const q = findQuestion(item.questionId);
  const isCorrect = selected !== null && selected === q.correctAnswer;
  const seconds = Math.round((Date.now() - session.questionStartedAt) / 1000);
  const flags = Store.getFlags();

  // 学習履歴に1件追加する
  const saved = Store.addAnswer({
    questionId: q.id,
    answeredAt: new Date().toISOString(),
    selected: selected,
    isCorrect: isCorrect,
    seconds: seconds,
    examType: q.examType,
    category: q.category,
    difficulty: q.difficulty,
    mode: session.kind === 'mock' ? 'mock' : 'study',
    review: flags.reviews.indexOf(q.id) !== -1,
    favorite: flags.favorites.indexOf(q.id) !== -1,
    timedOut: timedOut,
    sessionId: session.id
  });
  if (!saved) {
    alert('回答を保存できませんでした。端末の空き容量や、ブラウザのプライベートモードを確認してください。');
  }
  playEffects(isCorrect);

  session.answers.push({ questionId: q.id, selected: selected, isCorrect: isCorrect, seconds: seconds, timedOut: timedOut });
  session.phase = 'feedback';
  Store.saveSession(session);
  render();
}

function nextQuestion() {
  if (!hasActiveSession() || session.phase !== 'feedback') return;
  if (session.index + 1 >= session.items.length) {
    if (session.kind === 'mock') {
      finishMock(false);         // 模擬試験（練習モード）は結果画面へ
      return;
    }
    session.finished = true;
    Store.clearSession();        // 最後まで解いたので「前回の続き」は不要
    location.hash = '#/done';
    return;
  }
  session.index += 1;
  session.phase = 'question';
  session.questionStartedAt = Date.now();
  Store.saveSession(session);
  render();
}

function quitSession() {
  if (session && session.kind === 'mock') {
    if (confirm('模擬試験をやめますか？\nここまでの回答は学習履歴に残りますが、模擬試験の結果としては記録されません。')) {
      Timer.stop();
      Store.clearSession();
      session = null;
      location.hash = '#/mock';
    }
    return;
  }
  if (!confirm('学習を中断しますか？\nここまでの回答は保存されています。ホームの「前回の続き」から再開できます。')) return;
  const examId = session && session.config.examId;
  location.hash = examId ? '#/exam/' + examId : '#/home';
}

/* ---------- 図の描画（すべて独自に生成する SVG / 表） ---------- */

function shapeSvg(item) {
  const fill = item.filled ? 'currentColor' : 'none';
  let inner = '';
  if (item.shape === 'circle') {
    inner = '<circle cx="24" cy="24" r="15" fill="' + fill + '" stroke="currentColor" stroke-width="2.5"/>';
  } else if (item.shape === 'square') {
    inner = '<rect x="9" y="9" width="30" height="30" fill="' + fill + '" stroke="currentColor" stroke-width="2.5"/>';
  } else if (item.shape === 'triangle') {
    inner = '<polygon points="24,8 40,38 8,38" fill="' + fill + '" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>';
  } else if (item.shape === 'arrow') {
    inner = '<g transform="rotate(' + (Number(item.rotate) || 0) + ' 24 24)">' +
      '<path d="M24 40 V12 M13 22 L24 10 L35 22" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></g>';
  } else {
    inner = '<text x="24" y="33" text-anchor="middle" font-size="26" font-weight="700" fill="currentColor">？</text>';
  }
  return '<svg class="shape" viewBox="0 0 48 48" width="48" height="48" aria-hidden="true" focusable="false">' + inner + '</svg>';
}

function figureHtml(fd) {
  if (!fd) return '';
  if (fd.type === 'table') {
    return '<div class="figure"><table class="data-table">' +
      (fd.caption ? '<caption>' + esc(fd.caption) + '</caption>' : '') +
      '<thead><tr>' + fd.headers.map(function (h) { return '<th scope="col">' + esc(h) + '</th>'; }).join('') + '</tr></thead>' +
      '<tbody>' + fd.rows.map(function (row) {
        return '<tr>' + row.map(function (cell, i) {
          return i === 0 ? '<th scope="row">' + esc(cell) + '</th>' : '<td>' + esc(cell) + '</td>';
        }).join('') + '</tr>';
      }).join('') + '</tbody></table></div>';
  }
  if (fd.type === 'shapes') {
    return '<div class="figure figure--shapes" role="img" aria-label="' + esc(fd.alt || '図') + '">' +
      fd.items.map(shapeSvg).join('') + '</div>';
  }
  if (fd.type === 'grid') {
    const size = 36;
    let cells = '';
    for (let r = 0; r < fd.rows; r++) {
      for (let c = 0; c < fd.cols; c++) {
        cells += '<rect x="' + (2 + c * size) + '" y="' + (2 + r * size) + '" width="' + size + '" height="' + size +
          '" fill="none" stroke="currentColor" stroke-width="2"/>';
      }
    }
    const w = fd.cols * size + 4;
    const h = fd.rows * size + 4;
    return '<div class="figure figure--shapes" role="img" aria-label="' + esc(fd.alt || '図') + '">' +
      '<svg viewBox="0 0 ' + w + ' ' + h + '" width="' + w + '" height="' + h + '" aria-hidden="true" focusable="false">' + cells + '</svg></div>';
  }
  return '';
}

/* ---------- グラフ（外部ライブラリを使わず SVG で描く） ---------- */

/* 縦棒グラフ。
   data    … [{ label: '11/26', value: 5 }]（value が null の日は棒なし）
   options … { max: 目盛りの最大, ariaLabel: 読み上げ用の説明 } */
function barChartSvg(data, options) {
  const W = 320;
  const H = 130;
  const top = 18;
  const bottom = 20;
  const n = data.length;
  const slot = W / n;
  const barW = Math.max(3, Math.min(28, slot * 0.6));
  const max = Math.max(options.max || 0, 1, Math.max.apply(null, data.map(function (d) { return d.value || 0; })));
  const few = n <= 7;
  let body = '';

  data.forEach(function (d, i) {
    const cx = i * slot + slot / 2;
    if (d.value !== null && d.value > 0) {
      const h = Math.max(2, (d.value / max) * (H - top - bottom));
      body += '<rect class="chart__bar" x="' + (cx - barW / 2).toFixed(1) + '" y="' + (H - bottom - h).toFixed(1) +
        '" width="' + barW.toFixed(1) + '" height="' + h.toFixed(1) + '" rx="2"/>';
      if (few) {
        body += '<text class="chart__value" x="' + cx.toFixed(1) + '" y="' + (H - bottom - h - 4).toFixed(1) + '" text-anchor="middle">' + d.value + '</text>';
      }
    } else if (few) {
      body += '<text class="chart__value chart__value--none" x="' + cx.toFixed(1) + '" y="' + (H - bottom - 4) + '" text-anchor="middle">' +
        (d.value === null ? '—' : '0') + '</text>';
    }
    // 日数が多いときは、ラベルを5日おきにして重なりを防ぐ
    if (few || (n - 1 - i) % 5 === 0) {
      body += '<text class="chart__label" x="' + cx.toFixed(1) + '" y="' + (H - 5) + '" text-anchor="middle">' + esc(d.label) + '</text>';
    }
  });

  return '<svg class="chart" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(options.ariaLabel) + '">' +
    '<line class="chart__axis" x1="0" y1="' + (H - bottom) + '" x2="' + W + '" y2="' + (H - bottom) + '"/>' + body + '</svg>';
}

/* 横棒の一覧（分野別正答率など）。
   rows … [{ name, ratio（0〜1）, text（右側の文字）, sub（補足） }] */
function barListHtml(rows) {
  return '<ul class="barlist">' + rows.map(function (row) {
    const width = Math.max(0, Math.min(100, Math.round(row.ratio * 100)));
    return '<li class="barlist__row">' +
      '<div class="barlist__head"><span>' + esc(row.name) + '</span><span class="barlist__value">' + esc(row.text) + '</span></div>' +
      '<div class="barlist__track" aria-hidden="true"><div class="barlist__fill" style="width:' + width + '%"></div></div>' +
      (row.sub ? '<p class="note">' + esc(row.sub) + '</p>' : '') +
    '</li>';
  }).join('') + '</ul>';
}

/* ---------- 共通部品 ---------- */

/* 「間違えた問題」などの条件付き学習ボタン。examId が null なら全試験が対象 */
function modeButtonsHtml(examId) {
  return Object.keys(MODE_LABELS).map(function (mode) {
    const n = questionPool({ examId: examId, mode: mode }).length;
    return '<button type="button" class="btn btn--block" data-action="start" data-mode="' + mode + '"' +
      (examId ? ' data-exam="' + esc(examId) + '"' : '') + (n === 0 ? ' disabled' : '') + '>' +
      MODE_LABELS[mode] + '（' + n + '問）</button>';
  }).join('');
}

/* バックアップと復元の操作パネル（履歴画面と設定画面の両方で使う） */
let dataMessage = null;   // { type: 'ok' | 'error', text: '...' } 直前の操作結果

function dataPanelHtml() {
  let html = '<section class="card" aria-labelledby="data-title">' +
    '<h2 id="data-title">バックアップと復元</h2>' +
    '<p class="note">学習データはこの端末の中だけに保存されています。アプリを削除すると消えるため、ときどきバックアップしてください。</p>' +
    '<button type="button" class="btn btn--block" data-action="export">バックアップを保存する（JSON）</button>' +
    '<fieldset class="segmented"><legend>復元の方法</legend>' +
      '<label><input type="radio" name="importMode" value="merge" checked>今のデータに追加</label>' +
      '<label><input type="radio" name="importMode" value="replace">すべて置き換える</label>' +
    '</fieldset>' +
    '<label class="btn btn--block file-btn">バックアップから復元する' +
      '<input type="file" id="import-file" class="visually-hidden" accept=".json,application/json"></label>';
  html += '<p id="data-message" class="message' + (dataMessage ? ' message--' + dataMessage.type : '') + '" role="status">' +
    (dataMessage ? esc(dataMessage.text) : '') + '</p>';
  return html + '</section>';
}

function setDataMessage(type, text) {
  dataMessage = { type: type, text: text };
}

/* ---------- 各画面 ---------- */

/* ホームの「おすすめ学習」。学習状況に合わせて、次にやるとよい内容を最大3つ出す */
function recommendHtml() {
  const items = [];
  const weak = weakList(null);
  const wrongCount = questionPool({ mode: 'wrong' }).length;
  const newCount = questionPool({ mode: 'unanswered' }).length;

  if (weak.length > 0) {
    items.push({
      text: '苦手分野「' + weak[0].name + '」を学習する',
      attrs: 'data-action="start" data-exam="' + esc(weak[0].examId) + '" data-category="' + esc(weak[0].categoryId) + '"'
    });
  }
  if (wrongCount > 0) {
    items.push({ text: '間違えた問題を復習する（' + wrongCount + '問）', attrs: 'data-action="start" data-mode="wrong"' });
  }
  if (newCount > 0) {
    items.push({ text: '未回答の問題に挑戦する（' + newCount + '問中 最大10問）', attrs: 'data-action="start" data-mode="unanswered" data-limit="10"' });
  }
  if (items.length < 3) {
    items.push({ text: '模擬試験で実力を確認する', attrs: 'data-action="open-mock"' });
  }
  return '<section class="card" aria-labelledby="home-rec"><h2 id="home-rec">おすすめ学習</h2>' +
    items.slice(0, 3).map(function (item, i) {
      return '<button type="button" class="btn btn--block' + (i === 0 ? ' btn--primary' : '') + '" ' + item.attrs + '>' + esc(item.text) + '</button>';
    }).join('') + '</section>';
}

/* ホームの「苦手分野トップ3」 */
function weakTopHtml() {
  const weak = weakList(null).slice(0, 3);
  let html = '<section class="card" aria-labelledby="home-weak"><h2 id="home-weak">苦手分野トップ3</h2>';
  if (weak.length === 0) {
    html += '<p class="note">まだ苦手分野は見つかっていません。同じ分野に5回以上回答すると判定します。</p>';
  } else {
    html += barListHtml(weak.map(function (w) {
      return { name: w.name, ratio: w.score / 100, text: '苦手度 ' + w.score, sub: '正答率 ' + rateText(w.accuracy) + '（' + w.count + '回）' };
    })) +
    '<button type="button" class="btn btn--block" data-action="start" data-mode="weak">苦手分野に集中して学習する</button>';
  }
  return html + '</section>';
}

/* 試験ごとの苦手分野を、短い文で返す */
function weakNamesText(examId) {
  const weak = weakList(examId);
  if (weak.length === 0) return 'まだ見つかっていません';
  return weak.slice(0, 3).map(function (w) { return categoryName(w.examId, w.categoryId); }).join('、');
}

function renderHome() {
  const history = Store.getHistory();
  const sum = Analytics.summary(history);
  const goal = Store.getSettings().dailyGoal;
  const goalRatio = goal > 0 ? Math.min(1, sum.todayCount / goal) : 0;
  const week = Analytics.lastDays(history, 7);
  const weekTotal = week.reduce(function (s, d) { return s + d.count; }, 0);

  let html = '<div class="stack">' +
    '<h1>ホーム</h1>' +
    '<div class="stats">' +
      '<div class="stat"><p class="stat__label">本日の回答数</p>' +
        '<p class="stat__value">' + sum.todayCount + '<span class="stat__unit">／目標' + goal + '問</span></p>' +
        '<div class="progress" role="progressbar" aria-label="本日の目標の達成度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(goalRatio * 100) + '">' +
          '<div class="progress__fill" style="width:' + Math.round(goalRatio * 100) + '%"></div></div>' +
        (sum.todayCount >= goal ? '<p class="stat__label">✓ 目標達成</p>' : '') + '</div>' +
      '<div class="stat"><p class="stat__label">連続学習日数</p>' +
        '<p class="stat__value">' + sum.streak + '<span class="stat__unit">日</span></p></div>' +
      '<div class="stat"><p class="stat__label">累計回答数</p>' +
        '<p class="stat__value">' + sum.totalCount + '<span class="stat__unit">問</span></p></div>' +
      '<div class="stat"><p class="stat__label">全体正答率</p>' +
        '<p class="stat__value">' + rateTile(sum.accuracy) + '</p></div>' +
    '</div>';

  if (hasActiveSession()) {
    html += '<section class="card" aria-labelledby="home-resume">' +
      '<h2 id="home-resume">前回の続き</h2>' +
      '<p>' + esc(session.kind === 'mock' ? mockTitle(session.config.examId) : sessionLabel(session.config)) + '</p>' +
      '<p class="note">' + session.items.length + '問中 ' + session.answers.length + '問を回答済み</p>' +
      '<a class="btn btn--primary btn--block" href="#/quiz">続きから再開する</a>' +
    '</section>';
  }

  html += recommendHtml() + weakTopHtml() +
    '<section class="card" aria-labelledby="home-quick">' +
      '<h2 id="home-quick">クイックスタート</h2>' +
      '<p class="note">全試験の中からランダムに10問を出題します。</p>' +
      '<button type="button" class="btn btn--primary btn--block" data-action="start" data-limit="10">ランダム10問を始める</button>' +
      '<button type="button" class="btn btn--block" data-action="open-mock">模擬試験を始める</button>' +
    '</section>' +
    '<section class="card" aria-labelledby="home-week">' +
      '<h2 id="home-week">直近7日間の回答数</h2>' +
      barChartSvg(week.map(function (d) { return { label: d.label, value: d.count }; }),
        { max: goal, ariaLabel: '直近7日間の回答数のグラフ。合計' + weekTotal + '問' }) +
    '</section>' +
    '<section class="stack" aria-labelledby="home-exams">' +
      '<h2 id="home-exams">試験カテゴリー</h2>' +
      '<ul class="list">' + EXAMS.map(function (exam) {
        const fields = exam.categories.map(function (c) { return c.name; }).join('・');
        return '<li><a class="list-link" href="#/exam/' + esc(exam.id) + '">' +
          '<span><span class="list-link__title">' + esc(exam.name) + '</span>' +
          '<span class="list-link__sub">' + esc(fields) + '　／　' + questionPool({ examId: exam.id }).length + '問</span></span>' +
          '<span class="list-link__arrow" aria-hidden="true">›</span></a></li>';
      }).join('') + '</ul>' +
    '</section>' +
    '<p class="note">' + esc(DISCLAIMER) + '</p>' +
  '</div>';
  return html;
}

/* 試験ごとの学習状況（学習済み問題数と正答率） */
function examProgress(examId, history) {
  const total = questionPool({ examId: examId }).length;
  const records = history.filter(function (r) { return r.examType === examId; });
  const ids = QUESTIONS.filter(function (q) { return q.examType === examId; }).map(function (q) { return q.id; });
  const answered = Analytics.answeredIds(records);
  const learned = ids.filter(function (id) { return answered.has(id); }).length;
  return {
    total: total,
    learned: learned,
    accuracy: Analytics.percent(Analytics.countCorrect(records), records.length)
  };
}

function renderStudy() {
  const history = Store.getHistory();
  return '<div class="stack">' +
    '<h1>学習</h1>' +
    '<p class="lead">試験を選んで学習します。' + esc(FORMAT_NOTE) + '</p>' +
    '<button type="button" class="btn btn--block" data-action="open-mock">模擬試験（全試験から出題）</button>' +
    '<ul class="list">' + EXAMS.map(function (exam) {
      const p = examProgress(exam.id, history);
      return '<li class="card"><h2>' + esc(exam.name) + '</h2>' +
        '<p>' + esc(exam.overview) + '</p>' +
        '<p class="note">主な分野：' + esc(exam.categories.map(function (c) { return c.name; }).join('、')) +
        '<br>学習済み：' + p.learned + '／' + p.total + '問　正答率：' + rateText(p.accuracy) +
        '<br>苦手分野：' + esc(weakNamesText(exam.id)) + '</p>' +
        '<a class="btn btn--primary btn--block" href="#/exam/' + esc(exam.id) + '">' +
        '<span class="visually-hidden">' + esc(exam.name) + 'の</span>通常学習</a>' +
        (p.total > 0 ? '<button type="button" class="btn btn--block" data-action="open-mock" data-exam="' + esc(exam.id) + '">' +
        '<span class="visually-hidden">' + esc(exam.name) + 'の</span>模擬試験</button>' : '') + '</li>';
    }).join('') + '</ul>' +
    '<section class="card" aria-labelledby="study-all">' +
      '<h2 id="study-all">全試験から条件で選ぶ</h2>' + modeButtonsHtml(null) +
    '</section>' +
  '</div>';
}

function renderExam(examId) {
  const exam = findExam(examId);
  if (!exam) {
    return '<div class="stack"><h1>試験が見つかりません</h1>' +
      '<a class="btn" href="#/study">試験の一覧へ戻る</a></div>';
  }
  const p = examProgress(exam.id, Store.getHistory());
  const id = esc(exam.id);

  let html = '<div class="stack">' +
    '<a class="back-link" href="#/study">‹ 試験の一覧へ</a>' +
    '<h1>' + esc(exam.name) + '</h1>' +
    '<p>' + esc(exam.overview) + '</p>' +
    '<p class="note">' + esc(FORMAT_NOTE) + '</p>' +
    '<p class="note">学習済み：' + p.learned + '／' + p.total + '問　正答率：' + rateText(p.accuracy) +
      '<br>苦手分野：' + esc(weakNamesText(exam.id)) + '</p>';

  if (p.total === 0) {
    html += '<div class="card"><p>このカテゴリーには、まだ問題がありません。</p></div>';
  } else {
    html += '<section class="card" aria-labelledby="exam-all">' +
      '<h2 id="exam-all">まとめて学習</h2>' +
      '<button type="button" class="btn btn--primary btn--block" data-action="start" data-exam="' + id + '" data-limit="10">' +
        'ランダム出題（' + Math.min(10, p.total) + '問）</button>' +
      '<button type="button" class="btn btn--block" data-action="start" data-exam="' + id + '">全問を解く（' + p.total + '問）</button>' +
      '<button type="button" class="btn btn--block" data-action="open-mock" data-exam="' + id + '">模擬試験を受ける</button>' +
    '</section>' +
    '<section class="card" aria-labelledby="exam-cat">' +
      '<h2 id="exam-cat">分野別学習</h2>' +
      exam.categories.map(function (c) {
        const n = questionPool({ examId: exam.id, categoryId: c.id }).length;
        return '<button type="button" class="btn btn--block" data-action="start" data-exam="' + id + '" data-category="' + esc(c.id) + '"' +
          (n === 0 ? ' disabled' : '') + '>' + esc(c.name) + '（' + n + '問）</button>';
      }).join('') +
    '</section>' +
    '<section class="card" aria-labelledby="exam-mode">' +
      '<h2 id="exam-mode">条件を選んで学習</h2>' + modeButtonsHtml(exam.id) +
    '</section>';
  }

  if (exam.hasPersonality) {
    html += '<details class="card details">' +
      '<summary>性格検査の概要と注意点</summary>' +
      '<ul class="bullets">' + PERSONALITY_GUIDE.map(function (line) { return '<li>' + esc(line) + '</li>'; }).join('') + '</ul>' +
    '</details>';
  }
  return html + '</div>';
}

function difficultyHtml(level) {
  const stars = '★'.repeat(level) + '☆'.repeat(3 - level);
  return '<span aria-label="難易度 ' + level + '（3段階中）">難易度 <span aria-hidden="true">' + stars + '</span></span>';
}

/* お気に入り・見直しの切り替えボタン */
function flagButtonHtml(type, questionId) {
  const on = Store.getFlags()[type].indexOf(questionId) !== -1;
  return '<button type="button" class="btn btn--small btn--grow" data-action="flag" data-flag="' + type +
    '" data-question="' + esc(questionId) + '" aria-pressed="' + on + '">' + flagButtonText(type, on) + '</button>';
}

function flagButtonText(type, on) {
  if (type === 'favorites') return on ? '★ お気に入り済み' : '☆ お気に入り';
  return on ? '✓ 見直し対象' : '後で見直す';
}

function renderQuiz() {
  if (isRealMock()) return renderMockQuiz();   // 模擬試験の本番モードは専用の画面（mock.js）

  const item = session.items[session.index];
  const q = findQuestion(item.questionId);
  const total = session.items.length;
  const number = session.index + 1;
  const isFeedback = session.phase === 'feedback';
  const answer = isFeedback ? session.answers[session.answers.length - 1] : null;

  let html = '<div class="stack quiz">' +
    '<div class="quiz__meta">' +
      '<span>' + (session.kind === 'mock' ? '模擬試験（練習）　' : '') + esc(examName(q.examType)) + '／' + esc(categoryName(q.examType, q.category)) + '</span>' +
      difficultyHtml(q.difficulty) +
    '</div>' +
    '<div class="quiz__meta quiz__meta--strong">' +
      '<span>問 ' + number + '／' + total + '（残り' + (total - number) + '問）</span>' +
      (isFeedback && session.kind !== 'mock'
        ? '<span>回答時間 ' + formatTime(answer.seconds) + '</span>'
        : '<span id="timer">' + (session.kind === 'mock' ? '残り' : '経過') + ' 0:00</span>') +
    '</div>';

  if (q.passage) {
    html += '<div class="card passage"><p class="note">本文</p><p class="pre">' + esc(q.passage) + '</p></div>';
  }
  html += figureHtml(q.figureData);
  html += '<h1 class="quiz__text pre">' + esc(q.questionText) + '</h1>';

  // 選択肢
  html += '<fieldset class="choices"><legend class="visually-hidden">選択肢</legend>' +
    item.order.map(function (originalIndex, position) {
      let cls = 'choice';
      let mark = '';
      if (isFeedback) {
        if (originalIndex === q.correctAnswer) {
          cls += ' choice--correct';
          mark = '<span class="choice__mark">○ 正解</span>';
        } else if (originalIndex === answer.selected) {
          cls += ' choice--wrong';
          mark = '<span class="choice__mark">× あなたの回答</span>';
        }
      }
      const checked = isFeedback && originalIndex === answer.selected ? ' checked' : '';
      return '<label class="' + cls + '">' +
        '<input type="radio" name="choice" value="' + position + '"' + checked + (isFeedback ? ' disabled' : '') + '>' +
        '<span class="choice__text">' + esc(q.choices[originalIndex]) + '</span>' + mark + '</label>';
    }).join('') + '</fieldset>';

  html += '<div class="flag-row">' + flagButtonHtml('reviews', q.id) + flagButtonHtml('favorites', q.id) + '</div>';

  if (isFeedback) {
    // 色だけに頼らず、記号（○×）と文字でも正誤を伝える
    html += '<section class="feedback ' + (answer.isCorrect ? 'feedback--ok' : 'feedback--ng') + '" aria-labelledby="fb-title">' +
      '<h2 id="fb-title" class="feedback__title" tabindex="-1" data-autofocus>' +
        (answer.isCorrect ? '○ 正解' : answer.timedOut ? '× 時間切れ' : '× 不正解') + '</h2>' +
      '<p><strong>正解：</strong>' + esc(q.choices[q.correctAnswer]) + '</p>' +
      '<p class="note">あなたの回答時間 ' + formatTime(answer.seconds) + '　／　目標 ' + formatTime(q.targetSeconds) +
        (answer.seconds > q.targetSeconds ? '（目標より遅い）' : '（目標以内）') + '</p>' +
      '<h3>解説</h3><p class="pre">' + esc(q.explanation) + '</p>' +
      '<h3>最短で解くための考え方</h3><p class="pre">' + esc(q.shortCut) + '</p>' +
      '<h3>間違えやすいポイント</h3><p class="pre">' + esc(q.commonMistakes) + '</p>' +
      (q.tags && q.tags.length ? '<p class="note">関連する知識：' + esc(q.tags.join('、')) + '</p>' : '') +
    '</section>';
  }

  // 画面下部の操作ボタン
  html += '<div class="actionbar">' +
    '<button type="button" class="btn" data-action="quit">中断</button>' +
    (isFeedback
      ? '<button type="button" class="btn btn--primary btn--grow" data-action="next">' +
          (number >= total ? '結果を見る' : '次の問題へ') + '</button>'
      : '<button type="button" class="btn btn--primary btn--grow" data-action="answer" id="answer-btn" disabled>回答する</button>') +
    '</div>';

  return html + '</div>';
}

/* 結果画面。今回の学習（session.answers）だけを集計する */
function renderDone() {
  const total = session.items.length;
  const rows = session.answers.map(function (a) {
    const q = findQuestion(a.questionId);
    return { q: q, isCorrect: a.isCorrect, seconds: a.seconds, selected: a.selected };
  });
  const correct = Analytics.countCorrect(rows);
  const seconds = Analytics.totalSeconds(rows);
  const slow = rows.filter(function (r) { return r.seconds > r.q.targetSeconds; }).length;
  const wrong = rows.filter(function (r) { return !r.isCorrect; });
  const examId = session.config.examId;

  const byCategory = Analytics.group(rows, function (r) { return r.q.examType + '|' + r.q.category; });
  const byDifficulty = Analytics.group(rows, function (r) { return String(r.q.difficulty); })
    .sort(function (a, b) { return Number(a.key) - Number(b.key); });
  const difficultyNames = { 1: 'やさしい（★）', 2: 'ふつう（★★）', 3: '難しい（★★★）' };

  let html = '<div class="stack">' +
    '<h1>学習の結果</h1>' +
    '<div class="stats">' +
      '<div class="stat"><p class="stat__label">正答数</p>' +
        '<p class="stat__value">' + correct + '<span class="stat__unit">／' + total + '問</span></p></div>' +
      '<div class="stat"><p class="stat__label">正答率</p>' +
        '<p class="stat__value">' + rateTile(Analytics.percent(correct, rows.length)) + '</p></div>' +
      '<div class="stat"><p class="stat__label">所要時間</p>' +
        '<p class="stat__value">' + formatTime(seconds) + '</p></div>' +
      '<div class="stat"><p class="stat__label">1問あたり平均</p>' +
        '<p class="stat__value">' + (rows.length ? formatTime(seconds / rows.length) : '—') + '</p></div>' +
    '</div>' +
    '<p class="note">目標時間を超えた問題：' + slow + '問</p>' +
    '<section class="card" aria-labelledby="done-cat"><h2 id="done-cat">分野別の正答率</h2>' +
      barListHtml(byCategory.map(function (g) {
        const parts = g.key.split('|');
        return {
          name: examName(parts[0]) + '／' + categoryName(parts[0], parts[1]),
          ratio: g.correct / g.count,
          text: g.accuracy + '%（' + g.correct + '／' + g.count + '問）'
        };
      })) + '</section>' +
    '<section class="card" aria-labelledby="done-diff"><h2 id="done-diff">難易度別の正答率</h2>' +
      barListHtml(byDifficulty.map(function (g) {
        return {
          name: difficultyNames[g.key] || '不明',
          ratio: g.correct / g.count,
          text: g.accuracy + '%（' + g.correct + '／' + g.count + '問）'
        };
      })) + '</section>';

  html += '<section class="card" aria-labelledby="done-wrong"><h2 id="done-wrong">復習する問題</h2>';
  if (wrong.length === 0) {
    html += '<p>✓ 全問正解です。間違えた問題はありません。</p>';
  } else {
    html += '<ul class="review-list">' + wrong.map(function (r) {
      return '<li><p class="note">' + esc(examName(r.q.examType)) + '／' + esc(categoryName(r.q.examType, r.q.category)) + '</p>' +
        '<p class="review-list__text">' + esc(r.q.questionText) + '</p>' +
        '<p><strong>正解：</strong>' + esc(r.q.choices[r.q.correctAnswer]) + '</p></li>';
    }).join('') + '</ul>' +
    '<button type="button" class="btn btn--primary btn--block" data-action="retry-wrong">間違えた問題だけ復習する（' + wrong.length + '問）</button>';
  }
  html += '</section>' +
    '<button type="button" class="btn btn--block" data-action="retry">もう一度挑戦する</button>' +
    '<a class="btn btn--block" href="' + (examId ? '#/exam/' + esc(examId) : '#/home') + '">' +
      (examId ? '試験のページへ戻る' : 'ホームへ戻る') + '</a>' +
  '</div>';
  return html;
}

/* 学習履歴画面 */
let historyPeriod = 7;   // 7 / 30 / 0（0 は全期間）

function renderHistory() {
  const all = Store.getHistory();
  const records = Analytics.inPeriod(all, historyPeriod);
  const periodName = historyPeriod === 0 ? '全期間' : '直近' + historyPeriod + '日';

  function periodRadio(value, label) {
    return '<label><input type="radio" name="period" value="' + value + '"' +
      (historyPeriod === value ? ' checked' : '') + '>' + label + '</label>';
  }

  let html = '<div class="stack">' +
    '<h1>学習履歴</h1>' +
    '<fieldset class="segmented"><legend class="visually-hidden">表示する期間</legend>' +
      periodRadio(7, '直近7日') + periodRadio(30, '直近30日') + periodRadio(0, '全期間') +
    '</fieldset>';

  if (records.length === 0) {
    html += '<div class="card"><p>' + (all.length === 0 ? 'まだ学習記録がありません。' : 'この期間の学習記録はありません。') + '</p>' +
      '<p class="note">問題に回答すると、ここに記録とグラフが表示されます。</p></div>';
  } else {
    const correct = Analytics.countCorrect(records);
    const days = new Set(records.map(function (r) { return Analytics.dayKey(r.answeredAt); })).size;
    // グラフは日別。全期間のときは直近30日分を表示する
    const chartDays = Analytics.lastDays(all, historyPeriod === 7 ? 7 : 30);
    const chartNote = historyPeriod === 0 ? '<p class="note">グラフは直近30日分を表示しています。</p>' : '';

    html += '<div class="stats">' +
        '<div class="stat"><p class="stat__label">回答数</p><p class="stat__value">' + records.length + '<span class="stat__unit">問</span></p></div>' +
        '<div class="stat"><p class="stat__label">正答率</p><p class="stat__value">' + rateTile(Analytics.percent(correct, records.length)) + '</p></div>' +
        '<div class="stat"><p class="stat__label">学習時間</p><p class="stat__value stat__value--small">' + formatDuration(Analytics.totalSeconds(records)) + '</p></div>' +
        '<div class="stat"><p class="stat__label">学習した日数</p><p class="stat__value">' + days + '<span class="stat__unit">日</span></p></div>' +
      '</div>' +
      '<section class="card" aria-labelledby="h-count"><h2 id="h-count">日付別の回答数</h2>' +
        barChartSvg(chartDays.map(function (d) { return { label: d.label, value: d.count }; }),
          { ariaLabel: '日付別の回答数のグラフ。' + periodName + 'の合計は' + records.length + '問' }) + chartNote +
      '</section>' +
      '<section class="card" aria-labelledby="h-rate"><h2 id="h-rate">日付別の正答率（%）</h2>' +
        barChartSvg(chartDays.map(function (d) { return { label: d.label, value: d.accuracy }; }),
          { max: 100, ariaLabel: '日付別の正答率のグラフ。' + periodName + 'の正答率は' + rateText(Analytics.percent(correct, records.length)) + '' }) + chartNote +
      '</section>';

    const byExam = Analytics.group(records, function (r) { return r.examType; });
    const maxSeconds = Math.max.apply(null, byExam.map(function (g) { return g.seconds; }).concat([1]));
    html += '<section class="card" aria-labelledby="h-time"><h2 id="h-time">試験別の学習時間</h2>' +
      barListHtml(byExam.map(function (g) {
        return { name: examName(g.key), ratio: g.seconds / maxSeconds, text: formatDuration(g.seconds), sub: g.count + '問' };
      })) + '</section>';

    const byCategory = Analytics.group(records, function (r) { return r.examType + '|' + r.category; });
    html += '<section class="card" aria-labelledby="h-cat"><h2 id="h-cat">分野別の正答率</h2>' +
      barListHtml(byCategory.map(function (g) {
        const parts = g.key.split('|');
        return {
          name: examName(parts[0]) + '／' + categoryName(parts[0], parts[1]),
          ratio: g.correct / g.count,
          text: g.accuracy + '%（' + g.correct + '／' + g.count + '問）'
        };
      })) + '</section>';

    const LIST_MAX = 50;
    const latest = records.slice(-LIST_MAX).reverse();
    html += '<section class="card" aria-labelledby="h-list"><h2 id="h-list">回答履歴</h2>' +
      (records.length > LIST_MAX ? '<p class="note">新しい順に' + LIST_MAX + '件を表示しています（全' + records.length + '件）。</p>' : '') +
      '<ul class="log">' + latest.map(function (r) {
        const q = findQuestion(r.questionId);
        return '<li class="log__row">' +
          '<span class="log__mark ' + (r.isCorrect ? 'log__mark--ok' : 'log__mark--ng') + '">' + (r.isCorrect ? '○ 正解' : '× 不正解') + '</span>' +
          '<span class="log__main">' + esc(examName(r.examType)) + '／' + esc(categoryName(r.examType, r.category)) +
            (q ? '<span class="log__sub">' + esc(q.subCategory) + '</span>' : '<span class="log__sub">（削除された問題）</span>') + '</span>' +
          '<span class="log__side">' + formatDateTime(r.answeredAt) + '<br>' + formatTime(r.seconds) + '</span></li>';
      }).join('') + '</ul></section>';
  }

  html += '<section class="card" aria-labelledby="h-mock"><h2 id="h-mock">模擬試験の結果</h2>' +
    mockListHtml() + '</section>';

  html += dataPanelHtml();

  if (all.length > 0 || Store.getMocks().length > 0) {
    html += '<section class="card" aria-labelledby="h-del"><h2 id="h-del">履歴の削除</h2>' +
      '<p class="note">回答の記録（' + all.length + '件）と模擬試験の結果をすべて削除します。お気に入りと見直し対象は残ります。元に戻せません。</p>' +
      '<button type="button" class="btn btn--danger btn--block" data-action="clear-history">回答履歴を削除する</button></section>';
  }
  return html + '</div>';
}

function renderSettings() {
  const s = Store.getSettings();
  function radio(name, value, label, current) {
    return '<label><input type="radio" name="' + name + '" value="' + value + '" data-setting="' + name + '"' +
      (current === value ? ' checked' : '') + '>' + label + '</label>';
  }
  function toggle(name, label, note) {
    return '<label class="toggle"><input type="checkbox" data-setting="' + name + '"' + (s[name] ? ' checked' : '') + '>' +
      '<span><span class="toggle__label">' + label + '</span>' + (note ? '<span class="toggle__note">' + note + '</span>' : '') + '</span></label>';
  }
  const goals = [5, 10, 20, 30, 50];

  return '<div class="stack">' +
    '<h1>設定</h1>' +
    '<div class="card">' +
      '<fieldset class="segmented"><legend>表示テーマ</legend>' +
        radio('theme', 'auto', '端末に合わせる', s.theme) +
        radio('theme', 'light', 'ライト', s.theme) +
        radio('theme', 'dark', 'ダーク', s.theme) +
      '</fieldset>' +
    '</div>' +
    '<div class="card">' +
      '<fieldset class="segmented"><legend>文字サイズ</legend>' +
        radio('fontSize', 'small', '小', s.fontSize) +
        radio('fontSize', 'medium', '標準', s.fontSize) +
        radio('fontSize', 'large', '大', s.fontSize) +
        radio('fontSize', 'xlarge', '特大', s.fontSize) +
      '</fieldset>' +
    '</div>' +
    '<div class="card"><h2>出題</h2>' +
      toggle('shuffleQuestions', '問題の順番をランダムにする', '') +
      toggle('shuffleChoices', '選択肢の順番をランダムにする', '「正しい／誤り／判断できない」形式は並べ替えません。') +
      toggle('questionTimeLimit', '問題ごとに時間制限をつける', '通常学習で、目標時間の1.5倍を過ぎると時間切れ（不正解）になります。オフのときは時間制限なしです。') +
      '<label class="field"><span class="toggle__label">1日の目標問題数</span>' +
        '<select data-setting="dailyGoal" data-type="number">' + goals.map(function (g) {
          return '<option value="' + g + '"' + (s.dailyGoal === g ? ' selected' : '') + '>' + g + '問</option>';
        }).join('') + '</select></label>' +
    '</div>' +
    '<div class="card"><h2>音と振動</h2>' +
      toggle('sound', '効果音を鳴らす', '回答したときに短い音が鳴ります。') +
      toggle('vibration', '振動させる', 'iPhone の Safari は振動に対応していないため、iPhone では動作しません。') +
    '</div>' +
    dataPanelHtml() +
    '<section class="card" aria-labelledby="s-reset"><h2 id="s-reset">全学習データの初期化</h2>' +
      '<p class="note">回答履歴、模擬試験の結果、お気に入り、見直し対象、中断中の学習をすべて削除します。設定は残ります。元に戻せません。</p>' +
      '<button type="button" class="btn btn--danger btn--block" data-action="reset-all">全学習データを初期化する</button></section>' +
    '<details class="card details"><summary>アプリの使い方</summary>' +
      '<ul class="bullets">' +
        '<li>「ホーム」のクイックスタート、または「学習」から試験と分野を選んで問題を解きます。</li>' +
        '<li>回答すると、正誤と解説が表示され、記録が端末に保存されます。</li>' +
        '<li>「後で見直す」「お気に入り」を付けた問題は、あとからまとめて学習できます。</li>' +
        '<li>途中で中断しても、ホームの「前回の続き」から再開できます。</li>' +
        '<li>「模擬試験」では、制限時間つきで本番に近い形式の練習ができます。結果は「履歴」に残ります。</li>' +
        '<li>iPhone では、Safari の共有ボタンから「ホーム画面に追加」すると、アプリとして使えます。一度開けば、電波がなくても起動できます。</li>' +
        '<li>「履歴」で、日ごとの回答数や分野別の正答率を確認できます。</li>' +
      '</ul></details>' +
    '<div class="card"><h2>免責事項</h2><p class="note">' + esc(DISCLAIMER) + '</p>' +
      '<p class="note">' + esc(FORMAT_NOTE) + '</p></div>' +
    '<p class="note">バージョン ' + APP_VERSION + '</p>' +
  '</div>';
}

/* ---------- 画面の切り替え ----------
   tab   … 下部タブのどれを「現在地」にするか
   guard … false を返す画面は表示せず、試験一覧へ戻す */
const ROUTES = {
  home: { title: 'ホーム', tab: 'home', render: renderHome },
  study: { title: '学習', tab: 'study', render: renderStudy },
  exam: { title: '試験の詳細', tab: 'study', render: renderExam },
  quiz: { title: '問題', tab: 'study', render: renderQuiz, guard: hasActiveSession },
  done: { title: '結果', tab: 'study', render: renderDone, guard: function () { return Boolean(session && session.finished); } },
  mock: { title: '模擬試験', tab: 'study', render: renderMockSetup },
  'mock-result': { title: '模擬試験の結果', tab: 'study', render: renderMockResult },
  history: { title: '学習履歴', tab: 'history', render: renderHistory },
  settings: { title: '設定', tab: 'settings', render: renderSettings }
};

let currentRoute = null;   // いま表示している画面の名前

function render() {
  // 「#/exam/spi3」→ name=「exam」、param=「spi3」。知らない名前のときはホームにする
  const parts = location.hash.replace(/^#\/?/, '').split('/');
  const name = ROUTES[parts[0]] ? parts[0] : 'home';
  const route = ROUTES[name];
  const isFirstRender = currentRoute === null;
  const routeChanged = currentRoute !== name;

  // 模擬試験の制限時間を過ぎていたら（アプリを閉じていた間など）、その場で採点する
  if (hasActiveSession() && session.kind === 'mock' && Date.now() >= session.mock.deadline) {
    finishMock(true);
    return;
  }

  if (route.guard && !route.guard()) {
    location.replace('#/study');   // 学習中のデータがないのに問題画面を開いたとき
    return;
  }

  Timer.stop();
  if (routeChanged) dataMessage = null;   // 別の画面に移ったら、前の操作結果の表示は消す

  // 他の画面から問題画面に戻ってきたときは、離れていた時間を回答時間に含めない
  if (name === 'quiz' && routeChanged) {
    if (session.phase === 'question') session.questionStartedAt = Date.now();
    session.enteredAt = Date.now();
  }

  appEl.innerHTML = route.render(parts[1] ? decodeURIComponent(parts[1]) : '');
  document.title = route.title + '｜Study Log';
  currentRoute = name;

  // 問題を解いている間は下部タブを隠し、押し間違いを防ぐ
  document.body.classList.toggle('is-quiz', name === 'quiz');
  if (name === 'quiz') startQuizTimer();

  // 下部タブの「現在地」を更新（読み上げソフトにも伝わる）
  document.querySelectorAll('.tabbar__item').forEach(function (el) {
    if (el.dataset.tab === route.tab) {
      el.setAttribute('aria-current', 'page');
    } else {
      el.removeAttribute('aria-current');
    }
  });

  // 読み上げ位置を移す。解説が出たときは解説へ、画面が変わったときは先頭へ
  if (!isFirstRender) {
    const target = appEl.querySelector('[data-autofocus]');
    if (target) {
      target.focus();
      target.scrollIntoView({ block: 'start' });
    } else if (routeChanged || name === 'quiz') {
      appEl.focus({ preventScroll: true });
      window.scrollTo(0, 0);
    }
  }
}

/* ---------- バックアップの保存と復元 ---------- */

function exportBackup() {
  const d = new Date();
  const stamp = d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0');
  const filename = 'studylog-backup-' + stamp + '.json';
  const blob = new Blob([JSON.stringify(Store.exportData(), null, 2)], { type: 'application/json' });

  // iPhone のホーム画面から起動しているときは、共有メニュー（「ファイルに保存」など）を使う
  if (navigator.standalone && navigator.canShare) {
    const file = new File([blob], filename, { type: 'application/json' });
    if (navigator.canShare({ files: [file] })) {
      navigator.share({ files: [file], title: filename }).catch(function () { /* 取り消したときは何もしない */ });
      return;
    }
  }
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  setDataMessage('ok', 'バックアップを保存しました（' + filename + '）。');
  render();
}

function importBackup(file, mode) {
  if (!file) return;
  const reader = new FileReader();
  reader.onerror = function () {
    setDataMessage('error', 'ファイルを読み込めませんでした。');
    render();
  };
  reader.onload = function () {
    const parsed = Store.parseImport(String(reader.result));
    if (!parsed.ok) {
      setDataMessage('error', '復元できませんでした。' + parsed.error);
      render();
      return;
    }
    if (mode === 'replace' &&
        !confirm('今の学習データと設定をすべて消して、ファイルの内容（' + parsed.data.history.length + '件）に置き換えます。\n元に戻せません。よろしいですか？')) {
      setDataMessage('error', '復元を取り消しました。データは変更されていません。');
      render();
      return;
    }
    const result = Store.importData(parsed.data, mode);
    if (!result.ok) {
      setDataMessage('error', '保存に失敗しました。端末の空き容量を確認してください。');
    } else if (mode === 'replace') {
      session = null;
      applySettings();
      setDataMessage('ok', 'ファイルの内容に置き換えました（' + result.total + '件）。');
    } else {
      setDataMessage('ok', result.added + '件を追加しました（重複は除きました。合計' + result.total + '件）。');
    }
    render();
  };
  reader.readAsText(file);
}

/* ---------- 操作の受け付け ---------- */

appEl.addEventListener('click', function (event) {
  const button = event.target.closest('[data-action]');
  if (!button || button.disabled) return;
  const action = button.dataset.action;

  if (handleMockAction(action, button)) return;   // 模擬試験の操作（mock.js）

  if (action === 'start') {
    startSession({
      examId: button.dataset.exam || null,
      categoryId: button.dataset.category || null,
      limit: button.dataset.limit ? Number(button.dataset.limit) : null,
      mode: button.dataset.mode || null
    });
  } else if (action === 'answer') {
    submitAnswer();
  } else if (action === 'next') {
    nextQuestion();
  } else if (action === 'quit') {
    quitSession();
  } else if (action === 'retry' && session) {
    startSession(session.config);
  } else if (action === 'retry-wrong' && session) {
    startSession({
      examId: session.config.examId || null,
      questionIds: session.answers.filter(function (a) { return !a.isCorrect; }).map(function (a) { return a.questionId; })
    });
  } else if (action === 'flag') {
    const on = Store.toggleFlag(button.dataset.flag, button.dataset.question);
    button.setAttribute('aria-pressed', String(on));
    button.textContent = flagButtonText(button.dataset.flag, on);
  } else if (action === 'export') {
    exportBackup();
  } else if (action === 'clear-history') {
    if (confirm('回答履歴と模擬試験の結果をすべて削除します。元に戻せません。\n先にバックアップを保存しましたか？\n\n削除してよろしいですか？')) {
      Store.clearHistory();
      session = null;
      setDataMessage('ok', '回答履歴を削除しました。');
      render();
    }
  } else if (action === 'reset-all') {
    if (confirm('回答履歴、お気に入り、見直し対象をすべて削除します。元に戻せません。\n\n初期化してよろしいですか？')) {
      Store.resetLearningData();
      session = null;
      setDataMessage('ok', '全学習データを初期化しました。');
      render();
    }
  }
});

appEl.addEventListener('change', function (event) {
  const target = event.target;

  if (handleMockChange(target)) return;   // 模擬試験の入力（mock.js）

  // 選択肢を選んだら「回答する」ボタンを押せるようにする
  if (target.name === 'choice') {
    const btn = document.getElementById('answer-btn');
    if (btn) btn.disabled = false;
    return;
  }
  // 履歴画面の期間切り替え
  if (target.name === 'period') {
    historyPeriod = Number(target.value);
    render();
    const checked = appEl.querySelector('input[name="period"]:checked');
    if (checked) checked.focus();   // 描き直した後も、キーボード操作の位置を保つ
    return;
  }
  // バックアップファイルを選んだとき
  if (target.id === 'import-file') {
    const modeEl = appEl.querySelector('input[name="importMode"]:checked');
    importBackup(target.files[0], modeEl ? modeEl.value : 'merge');
    return;
  }
  // 設定画面：保存して、すぐ反映する
  const key = target.dataset.setting;
  if (key) {
    const changes = {};
    if (target.type === 'checkbox') {
      changes[key] = target.checked;
    } else if (target.dataset.type === 'number') {
      changes[key] = Number(target.value);
    } else {
      changes[key] = target.value;
    }
    Store.saveSettings(changes);
    applySettings();
  }
});

window.addEventListener('hashchange', render);

applySettings();
render();
