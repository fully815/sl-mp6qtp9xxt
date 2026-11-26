/* ==========================================================
   extras.js  追加機能
   ・目標の受検日と残り日数（ホーム・設定）
   ・問題ごとのメモ（解説の下）
   ・問題の検索（学習 → 問題を検索する）
   ・学習カレンダー（履歴）
   画面の部品を作る関数をここにまとめ、js/app.js から呼び出します。
   ========================================================== */

/* ---------- 目標の受検日と残り日数 ---------- */

/* 「2027-03-01」のような文字を日付にする。形が違うときは null */
function parseExamDate(text) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(text || '');
  if (!m) return null;
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  return isNaN(d.getTime()) ? null : d;
}

/* 今日から受検日までの日数。受検日が未設定のときは null、過ぎているときは負の数 */
function daysUntilExam() {
  const exam = parseExamDate(Store.getSettings().examDate);
  if (!exam) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.round((exam.getTime() - today.getTime()) / 86400000);
}

/* ホームに表示する「本番まであと○日」 */
function examDayHtml() {
  const days = daysUntilExam();
  if (days === null) {
    return '<p class="note"><a href="#/settings">設定</a>で目標の受検日を入れると、ここに残り日数を表示します。</p>';
  }
  const exam = parseExamDate(Store.getSettings().examDate);
  const dateText = exam.getFullYear() + '年' + (exam.getMonth() + 1) + '月' + exam.getDate() + '日';
  if (days < 0) {
    return '<section class="card" aria-labelledby="home-examday"><h2 id="home-examday">目標の受検日</h2>' +
      '<p>設定した受検日（' + dateText + '）を過ぎています。</p>' +
      '<p class="note">次の予定があれば、<a href="#/settings">設定</a>で日付を更新してください。</p></section>';
  }
  const answered = Analytics.answeredIds(Store.getHistory());
  const unanswered = QUESTIONS.filter(function (q) { return !answered.has(q.id); }).length;
  const perDay = Math.ceil(unanswered / Math.max(days, 1));
  return '<section class="card examday" aria-labelledby="home-examday"><h2 id="home-examday">目標の受検日まで</h2>' +
    '<p class="examday__value">' + (days === 0 ? '今日が受検日です' : 'あと <strong>' + days + '</strong> 日') + '</p>' +
    '<p class="note">受検日：' + dateText + '</p>' +
    (unanswered > 0
      ? '<p class="note">まだ解いていない問題は' + unanswered + '問です。受検日までに一通り解くには、1日あたり約' + perDay + '問が目安です。</p>'
      : '<p class="note">すべての問題を一度は解いています。間違えた問題の復習を続けましょう。</p>') +
    '</section>';
}

/* 設定画面の「目標の受検日」 */
function examDateSettingHtml(settings) {
  return '<div class="card"><h2>目標の受検日</h2>' +
    '<label class="field"><span class="toggle__label">受検日</span>' +
      '<input type="date" class="input" data-setting="examDate" value="' + esc(parseExamDate(settings.examDate) ? settings.examDate : '') + '"></label>' +
    '<p class="note">設定すると、ホームに残り日数と1日あたりの目安を表示します。日付を消すと表示をやめます。</p>' +
    '</div>';
}

/* ---------- 問題ごとのメモ ---------- */

/* 解説の下に出すメモ欄。入力するたびに自動で保存する（下の input の処理） */
function noteEditorHtml(questionId) {
  const text = Store.getNotes()[questionId] || '';
  return '<section class="card" aria-labelledby="memo-title">' +
    '<h2 id="memo-title"><label for="memo-input">自分用のメモ</label></h2>' +
    '<textarea id="memo-input" class="input memo" rows="3" maxlength="500" data-note="' + esc(questionId) + '"' +
      ' placeholder="間違えた理由や、次に気をつけることを書いておけます">' + esc(text) + '</textarea>' +
    '<p class="note" id="memo-status" aria-live="polite">入力すると自動で保存されます。</p>' +
    '</section>';
}

/* ---------- 問題の検索 ---------- */

let searchQuery = '';
const SEARCH_SHOW_MAX = 30;   // 一覧に表示する最大の件数

/* 検索の対象にする文字（試験名・分野名・単元名・タグ・問題文・本文） */
function searchTextOf(q) {
  return [examName(q.examType), categoryName(q.examType, q.category), q.subCategory,
    (q.tags || []).join(' '), q.questionText, q.passage || ''].join(' ').toLowerCase();
}

/* 空白で区切った語を、すべて含む問題を返す */
function searchQuestions(query) {
  const words = query.toLowerCase().split(/[\s　]+/).filter(Boolean);
  if (words.length === 0) return [];
  return QUESTIONS.filter(function (q) {
    const text = searchTextOf(q);
    return words.every(function (w) { return text.indexOf(w) !== -1; });
  });
}

function searchResultsHtml() {
  if (!searchQuery.trim()) {
    return '<p class="note">単元名（例：確率、長文読解）、試験名、問題文の言葉で探せます。空白で区切ると、すべてを含む問題にしぼれます。</p>';
  }
  const found = searchQuestions(searchQuery);
  if (found.length === 0) {
    return '<div class="card"><p>当てはまる問題が見つかりませんでした。</p><p class="note">言葉を短くするか、別の言葉で試してください。</p></div>';
  }
  const history = Store.getHistory();
  const answered = Analytics.answeredIds(history);
  const wrong = Analytics.wrongIds(history);
  const notes = Store.getNotes();
  let html = '<p><strong>' + found.length + '問</strong>が見つかりました。</p>' +
    '<button type="button" class="btn btn--primary btn--block" data-action="start-search">見つかった' + found.length + '問を解く</button>' +
    '<ul class="list">' + found.slice(0, SEARCH_SHOW_MAX).map(function (q) {
      const status = !answered.has(q.id) ? '未回答' : wrong.has(q.id) ? '× 前回は不正解' : '○ 前回は正解';
      return '<li class="card">' +
        '<p class="note">' + esc(examName(q.examType) + '／' + categoryName(q.examType, q.category) + '／' + q.subCategory) + '</p>' +
        '<p class="review-list__text">' + esc(q.questionText) + '</p>' +
        '<p class="note">' + status + (notes[q.id] ? '　／　メモあり' : '') + '</p>' +
        '<button type="button" class="btn btn--small btn--block" data-action="start-one" data-question="' + esc(q.id) + '">この問題を解く</button>' +
        '</li>';
    }).join('') + '</ul>';
  if (found.length > SEARCH_SHOW_MAX) {
    html += '<p class="note">一覧には最初の' + SEARCH_SHOW_MAX + '問を表示しています。言葉を足すと、さらにしぼれます。</p>';
  }
  return html;
}

function renderSearch() {
  return '<div class="stack">' +
    '<a class="back-link" href="#/study">‹ 学習へ</a>' +
    '<h1>問題の検索</h1>' +
    '<label class="visually-hidden" for="search-input">検索する言葉</label>' +
    '<input type="search" id="search-input" class="input" value="' + esc(searchQuery) + '" placeholder="例：確率　／　長文　／　暗号" autocomplete="off">' +
    '<div id="search-results" class="stack" aria-live="polite">' + searchResultsHtml() + '</div>' +
    '</div>';
}

/* ---------- 学習カレンダー ---------- */

let calendarOffset = 0;   // 0=今月、-1=先月…

function calendarHtml(history) {
  const today = new Date();
  const first = new Date(today.getFullYear(), today.getMonth() + calendarOffset, 1);
  const year = first.getFullYear();
  const month = first.getMonth();
  const lastDay = new Date(year, month + 1, 0).getDate();
  const goal = Store.getSettings().dailyGoal;
  const todayKey = Analytics.dayKey(today);

  // 日ごとの回答数を数える
  const counts = {};
  history.forEach(function (r) {
    const key = Analytics.dayKey(r.answeredAt);
    counts[key] = (counts[key] || 0) + 1;
  });

  let studyDays = 0;
  let total = 0;
  const cells = [];
  for (let i = 0; i < first.getDay(); i++) cells.push('<td></td>');
  for (let day = 1; day <= lastDay; day++) {
    const key = Analytics.dayKey(new Date(year, month, day));
    const count = counts[key] || 0;
    if (count > 0) { studyDays += 1; total += count; }
    let cls = 'cal__day';
    if (count >= goal) cls += ' cal__day--full';
    else if (count > 0) cls += ' cal__day--some';
    if (key === todayKey) cls += ' cal__day--today';
    cells.push('<td class="' + cls + '"><span class="cal__num">' + day + '</span>' +
      '<span class="cal__count">' + (count > 0 ? count + '<span class="visually-hidden">問</span>' : '<span class="visually-hidden">学習なし</span>') + '</span></td>');
  }
  while (cells.length % 7 !== 0) cells.push('<td></td>');
  const rows = [];
  for (let i = 0; i < cells.length; i += 7) rows.push('<tr>' + cells.slice(i, i + 7).join('') + '</tr>');

  return '<section class="card" aria-labelledby="h-cal">' +
    '<h2 id="h-cal">学習カレンダー</h2>' +
    '<div class="cal__nav">' +
      '<button type="button" class="btn btn--small" data-action="cal-prev" aria-label="前の月">‹ 前の月</button>' +
      '<p class="cal__title" aria-live="polite">' + year + '年' + (month + 1) + '月</p>' +
      '<button type="button" class="btn btn--small" data-action="cal-next" aria-label="次の月"' + (calendarOffset >= 0 ? ' disabled' : '') + '>次の月 ›</button>' +
    '</div>' +
    '<table class="cal"><caption class="visually-hidden">' + year + '年' + (month + 1) + '月の日ごとの回答数</caption>' +
      '<thead><tr>' + ['日', '月', '火', '水', '木', '金', '土'].map(function (w) { return '<th scope="col">' + w + '</th>'; }).join('') + '</tr></thead>' +
      '<tbody>' + rows.join('') + '</tbody></table>' +
    '<p class="note">この月は ' + studyDays + '日学習し、' + total + '問に回答しました。数字はその日の回答数です。濃い色は、1日の目標（' + goal + '問）を達成した日です。</p>' +
    '</section>';
}

/* ---------- 操作の受け付け ---------- */

/* ボタン操作。処理したら true を返す（js/app.js の click の処理から呼ばれる） */
function handleExtraAction(action, button) {
  if (action === 'cal-prev' || action === 'cal-next') {
    calendarOffset += action === 'cal-prev' ? -1 : 1;
    if (calendarOffset > 0) calendarOffset = 0;
    render();
    const again = document.querySelector('[data-action="' + action + '"]');
    if (again && !again.disabled) again.focus();   // 描き直した後も、キーボード操作の位置を保つ
    return true;
  }
  if (action === 'start-search') {
    const ids = searchQuestions(searchQuery).map(function (q) { return q.id; });
    if (ids.length > 0) startSession({ questionIds: ids, label: '検索：' + searchQuery.trim() });
    return true;
  }
  if (action === 'start-one') {
    startSession({ questionIds: [button.dataset.question], label: '検索した問題' });
    return true;
  }
  return false;
}

/* 文字の入力（メモ・検索）。入力のたびに呼ばれる */
document.getElementById('app').addEventListener('input', function (event) {
  const target = event.target;
  if (target.dataset && target.dataset.note) {
    const ok = Store.setNote(target.dataset.note, target.value);
    const status = document.getElementById('memo-status');
    if (status) status.textContent = ok ? '保存しました。' : '保存できませんでした。端末の空き容量を確認してください。';
    return;
  }
  if (target.id === 'search-input') {
    searchQuery = target.value;
    const box = document.getElementById('search-results');
    if (box) box.innerHTML = searchResultsHtml();   // 入力欄は描き直さない（入力中の位置を保つため）
  }
});
