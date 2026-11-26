/* ==========================================================
   storage.js  端末内（localStorage）への保存と読み込み
   ・設定と学習履歴は別々のキーに保存します
   ・データは端末の外へ送信しません
   ・氏名やメールアドレスなどの個人情報は保存しません
   ========================================================== */

const Store = (function () {
  // キー名の末尾の v1 はデータ形式のバージョン
  const KEYS = {
    settings: 'studylog.settings.v1',   // 設定
    history: 'studylog.history.v1',     // 回答の記録
    flags: 'studylog.flags.v1',         // お気に入り・見直し対象
    session: 'studylog.session.v1',     // 中断中の学習（「前回の続き」用）
    mocks: 'studylog.mocks.v1',         // 模擬試験の結果
    notes: 'studylog.notes.v1'          // 問題ごとのメモ
  };

  const APP_ID = 'studylog';
  const FORMAT_VERSION = 1;

  const DEFAULT_SETTINGS = {
    theme: 'auto',        // auto=端末に合わせる / light / dark
    fontSize: 'medium',   // small / medium / large / xlarge
    sound: false,
    vibration: false,
    shuffleQuestions: true,
    shuffleChoices: false,
    questionTimeLimit: false,   // 通常学習で、問題ごとに時間制限をつけるか
    dailyGoal: 10,
    examDate: ''          // 目標の受検日（例：'2027-03-01'。未設定は空）
  };

  /* ---------- 基本の読み書き ---------- */

  // 読み込み。壊れたデータや保存不可の環境でも止まらないようにする
  function read(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (e) {
      console.warn('[保存] 読み込みに失敗しました: ' + key, e);
      return fallback;
    }
  }

  // 書き込み。成功したら true
  function write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.warn('[保存] 書き込みに失敗しました: ' + key, e);
      return false;
    }
  }

  function remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.warn('[保存] 削除に失敗しました: ' + key, e);
    }
  }

  /* ---------- 設定 ---------- */

  // 既定値にある項目だけを、型が合うときに取り出す（余計なデータを混ぜない）
  function cleanSettings(raw) {
    const result = {};
    if (!raw || typeof raw !== 'object') return result;
    Object.keys(DEFAULT_SETTINGS).forEach(function (key) {
      if (typeof raw[key] === typeof DEFAULT_SETTINGS[key]) result[key] = raw[key];
    });
    return result;
  }

  function getSettings() {
    // 新しい設定項目が増えても、既定値で補えるようにする
    return Object.assign({}, DEFAULT_SETTINGS, cleanSettings(read(KEYS.settings, {})));
  }

  function saveSettings(changes) {
    const next = Object.assign(getSettings(), changes);
    write(KEYS.settings, next);
    return next;
  }

  /* ---------- 回答の記録 ----------
     1件の形：
     {
       questionId: 'spi3-verbal-001',
       answeredAt: '2026-11-26T09:00:00.000Z',   回答日時
       selected: 0,            選んだ選択肢の番号
       isCorrect: true,        正解したか
       seconds: 25,            回答時間（秒）
       examType: 'spi3',       試験
       category: 'verbal',     分野
       difficulty: 1,          難易度
       mode: 'study',          study=通常学習 / mock=模擬試験
       review: false,          回答時点で「見直し対象」だったか
       favorite: false,        回答時点で「お気に入り」だったか
       timedOut: false,        時間切れで回答できなかったか
       sessionId: 's1764...'   同じ回の学習をまとめる番号
     } */

  function getHistory() {
    const list = read(KEYS.history, []);
    return Array.isArray(list) ? list : [];
  }

  function addAnswer(record) {
    const list = getHistory();
    list.push(record);
    return write(KEYS.history, list);
  }

  // 回答の記録と模擬試験の結果を削除する（お気に入り・見直し対象は残す）
  function clearHistory() {
    remove(KEYS.history);
    remove(KEYS.mocks);
    remove(KEYS.session);
  }

  /* ---------- 模擬試験の結果 ---------- */

  function getMocks() {
    const list = read(KEYS.mocks, []);
    return Array.isArray(list) ? list : [];
  }

  function addMock(result) {
    const list = getMocks();
    list.push(result);
    return write(KEYS.mocks, list);
  }

  /* ---------- お気に入り・見直し対象 ---------- */

  function getFlags() {
    const raw = read(KEYS.flags, {});
    return {
      favorites: Array.isArray(raw.favorites) ? raw.favorites : [],
      reviews: Array.isArray(raw.reviews) ? raw.reviews : []
    };
  }

  // type は 'favorites' か 'reviews'。切り替え後の状態（true=登録済み）を返す
  function toggleFlag(type, questionId) {
    const flags = getFlags();
    const index = flags[type].indexOf(questionId);
    if (index === -1) {
      flags[type].push(questionId);
    } else {
      flags[type].splice(index, 1);
    }
    write(KEYS.flags, flags);
    return index === -1;
  }

  /* ---------- 中断中の学習 ---------- */

  function getSession() {
    const s = read(KEYS.session, null);
    return s && Array.isArray(s.items) && Array.isArray(s.answers) ? s : null;
  }
  function saveSession(session) { return write(KEYS.session, session); }
  function clearSession() { remove(KEYS.session); }

  /* ---------- 全学習データの初期化（設定は残す） ---------- */

  function resetLearningData() {
    remove(KEYS.history);
    remove(KEYS.flags);
    remove(KEYS.notes);
    remove(KEYS.mocks);
    remove(KEYS.session);
  }

  /* ---------- 問題ごとのメモ ----------
     { '問題のid': 'メモの文章', ... } の形で保存する */

  function cleanNotes(raw) {
    const result = {};
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return result;
    Object.keys(raw).forEach(function (id) {
      if (typeof raw[id] === 'string' && raw[id].trim()) result[id] = raw[id].slice(0, 500);
    });
    return result;
  }

  function getNotes() {
    return cleanNotes(read(KEYS.notes, {}));
  }

  // メモを保存する。空にしたときは、その問題のメモを消す
  function setNote(questionId, text) {
    const notes = getNotes();
    const value = String(text || '').slice(0, 500);
    if (value.trim()) {
      notes[questionId] = value;
    } else {
      delete notes[questionId];
    }
    return write(KEYS.notes, notes);
  }

  /* ---------- バックアップ（エクスポート） ---------- */

  function exportData() {
    return {
      app: APP_ID,
      formatVersion: FORMAT_VERSION,
      exportedAt: new Date().toISOString(),
      settings: getSettings(),
      history: getHistory(),
      flags: getFlags(),
      mocks: getMocks(),
      notes: getNotes()
    };
  }

  /* ---------- 復元（インポート） ---------- */

  function isStringList(value) {
    return Array.isArray(value) && value.every(function (v) { return typeof v === 'string'; });
  }

  // 回答記録1件の形式チェック。正しければ必要な項目だけの記録を、だめなら null を返す
  function cleanRecord(r) {
    if (!r || typeof r !== 'object') return null;
    if (typeof r.questionId !== 'string' || r.questionId === '') return null;
    if (typeof r.answeredAt !== 'string' || Number.isNaN(Date.parse(r.answeredAt))) return null;
    if (typeof r.isCorrect !== 'boolean') return null;
    if (typeof r.seconds !== 'number' || !Number.isFinite(r.seconds) || r.seconds < 0) return null;
    return {
      questionId: r.questionId,
      answeredAt: r.answeredAt,
      selected: typeof r.selected === 'number' ? r.selected : null,
      isCorrect: r.isCorrect,
      seconds: r.seconds,
      examType: typeof r.examType === 'string' ? r.examType : '',
      category: typeof r.category === 'string' ? r.category : '',
      difficulty: typeof r.difficulty === 'number' ? r.difficulty : 0,
      mode: r.mode === 'mock' ? 'mock' : 'study',
      review: r.review === true,
      favorite: r.favorite === true,
      timedOut: r.timedOut === true,
      sessionId: typeof r.sessionId === 'string' ? r.sessionId : ''
    };
  }

  function num(value) {
    return typeof value === 'number' && Number.isFinite(value) ? value : 0;
  }

  // 模擬試験の結果1件の形式チェック。だめなら null（その1件だけ読み飛ばす）
  function cleanMock(m) {
    if (!m || typeof m !== 'object') return null;
    if (typeof m.id !== 'string' || m.id === '') return null;
    if (typeof m.finishedAt !== 'string' || Number.isNaN(Date.parse(m.finishedAt))) return null;
    if (typeof m.total !== 'number' || typeof m.correct !== 'number') return null;
    const rows = Array.isArray(m.rows) ? m.rows.filter(function (r) {
      return r && typeof r.questionId === 'string' && typeof r.isCorrect === 'boolean';
    }).map(function (r) {
      return {
        questionId: r.questionId,
        selected: typeof r.selected === 'number' ? r.selected : null,
        isCorrect: r.isCorrect,
        seconds: num(r.seconds)
      };
    }) : [];
    return {
      id: m.id,
      finishedAt: m.finishedAt,
      examId: typeof m.examId === 'string' ? m.examId : '',
      categoryIds: isStringList(m.categoryIds) ? m.categoryIds : null,
      mockMode: m.mockMode === 'practice' ? 'practice' : 'real',
      total: m.total,
      correct: m.correct,
      unanswered: num(m.unanswered),
      timedOut: m.timedOut === true,
      timedOutCount: num(m.timedOutCount),
      seconds: num(m.seconds),
      limitSeconds: num(m.limitSeconds),
      score: num(m.score),
      rows: rows
    };
  }

  /* 読み込んだファイルの文字列を調べる。
     戻り値：成功 { ok: true, data: {...} } ／ 失敗 { ok: false, error: '理由' } */
  function parseImport(text) {
    let raw;
    try {
      raw = JSON.parse(text);
    } catch (e) {
      return { ok: false, error: 'JSON として読み込めませんでした。ファイルが壊れているか、別の種類のファイルです。' };
    }
    if (!raw || typeof raw !== 'object' || raw.app !== APP_ID) {
      return { ok: false, error: 'このアプリのバックアップファイルではありません。' };
    }
    if (typeof raw.formatVersion !== 'number' || raw.formatVersion > FORMAT_VERSION) {
      return { ok: false, error: 'このバージョンのアプリでは読み込めない形式です。アプリを更新してください。' };
    }
    if (!Array.isArray(raw.history)) {
      return { ok: false, error: '学習履歴（history）が見つかりません。' };
    }
    const history = [];
    for (let i = 0; i < raw.history.length; i++) {
      const record = cleanRecord(raw.history[i]);
      if (!record) {
        return { ok: false, error: '学習履歴の ' + (i + 1) + ' 件目の形式が正しくありません。' };
      }
      history.push(record);
    }
    const flags = raw.flags && typeof raw.flags === 'object' ? raw.flags : {};
    return {
      ok: true,
      data: {
        history: history,
        flags: {
          favorites: isStringList(flags.favorites) ? flags.favorites : [],
          reviews: isStringList(flags.reviews) ? flags.reviews : []
        },
        settings: cleanSettings(raw.settings),
        mocks: Array.isArray(raw.mocks) ? raw.mocks.map(cleanMock).filter(Boolean) : [],
        notes: cleanNotes(raw.notes)
      }
    };
  }

  function byDate(a, b) {
    return Date.parse(a.answeredAt) - Date.parse(b.answeredAt);
  }

  function union(a, b) {
    return Array.from(new Set(a.concat(b)));
  }

  /* 復元を実行する。
     mode 'merge'   … 既存データに追加（同じ記録は重複させない。設定は変えない）
     mode 'replace' … すべて置き換える（設定もファイルの内容にする）
     戻り値：{ ok, added（追加した件数）, total（復元後の件数） } */
  function importData(data, mode) {
    let history;
    let flags;
    let mocks;
    let added;
    if (mode === 'replace') {
      history = data.history.slice();
      flags = data.flags;
      mocks = data.mocks.slice();
      added = history.length;
    } else {
      const current = getHistory();
      const seen = new Set(current.map(function (r) { return r.questionId + '|' + r.answeredAt; }));
      const fresh = data.history.filter(function (r) {
        const key = r.questionId + '|' + r.answeredAt;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
      history = current.concat(fresh);
      added = fresh.length;
      const currentFlags = getFlags();
      flags = {
        favorites: union(currentFlags.favorites, data.flags.favorites),
        reviews: union(currentFlags.reviews, data.flags.reviews)
      };
      const currentMocks = getMocks();
      const mockIds = new Set(currentMocks.map(function (m) { return m.id; }));
      mocks = currentMocks.concat(data.mocks.filter(function (m) { return !mockIds.has(m.id); }));
    }
    history.sort(byDate);
    mocks.sort(function (a, b) { return Date.parse(a.finishedAt) - Date.parse(b.finishedAt); });

    // メモ：置き換えのときはファイルの内容にする。追加のときは、今あるメモを優先して残す
    const notes = mode === 'replace' ? (data.notes || {}) : Object.assign({}, data.notes || {}, getNotes());

    const ok = write(KEYS.history, history) && write(KEYS.flags, flags) && write(KEYS.mocks, mocks) && write(KEYS.notes, notes);
    if (ok && mode === 'replace') {
      write(KEYS.settings, Object.assign({}, DEFAULT_SETTINGS, data.settings));
      remove(KEYS.session);
    }
    return { ok: ok, added: added, total: history.length };
  }

  return {
    getSettings: getSettings,
    saveSettings: saveSettings,
    getHistory: getHistory,
    addAnswer: addAnswer,
    clearHistory: clearHistory,
    getMocks: getMocks,
    addMock: addMock,
    getFlags: getFlags,
    toggleFlag: toggleFlag,
    getNotes: getNotes,
    setNote: setNote,
    getSession: getSession,
    saveSession: saveSession,
    clearSession: clearSession,
    resetLearningData: resetLearningData,
    exportData: exportData,
    parseImport: parseImport,
    importData: importData
  };
})();
