/* ==========================================================
   analytics.js  学習記録の集計
   画面には触らず、数字を計算するだけのファイルです。
   ========================================================== */

const Analytics = (function () {
  // 正答率（%）。回答が0件のときは null を返す（NaN を画面に出さないため）
  function percent(correct, total) {
    if (!total) return null;
    return Math.round((correct / total) * 100);
  }

  // 画面表示用。null のときは「—」にする
  function show(value) {
    return value === null || value === undefined || Number.isNaN(value) ? '—' : String(value);
  }

  // 日付を「2026-11-26」の形にする（端末の現地時間）
  function dayKey(date) {
    const d = new Date(date);
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return d.getFullYear() + '-' + m + '-' + day;
  }

  // 今日から n 日前の日付（時刻は 0:00）
  function daysAgo(n) {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() - n);
    return d;
  }

  function countCorrect(records) {
    return records.filter(function (r) { return r.isCorrect; }).length;
  }

  function totalSeconds(records) {
    return records.reduce(function (sum, r) { return sum + (r.seconds || 0); }, 0);
  }

  /* 連続学習日数。
     今日まだ学習していなくても、昨日まで続いていれば途切れた扱いにしない。 */
  function streak(history) {
    const days = new Set(history.map(function (r) { return dayKey(r.answeredAt); }));
    let offset = days.has(dayKey(daysAgo(0))) ? 0 : 1;
    let count = 0;
    while (days.has(dayKey(daysAgo(offset)))) {
      count += 1;
      offset += 1;
    }
    return count;
  }

  // ホーム画面用のまとめ
  function summary(history) {
    const today = dayKey(new Date());
    return {
      todayCount: history.filter(function (r) { return dayKey(r.answeredAt) === today; }).length,
      totalCount: history.length,
      accuracy: percent(countCorrect(history), history.length),
      streak: streak(history)
    };
  }

  /* 直近 n 日分の日別集計（古い日 → 今日 の順）。
     回答がない日も、count: 0 として必ず入る。 */
  function lastDays(history, n) {
    const map = {};
    history.forEach(function (r) {
      const key = dayKey(r.answeredAt);
      if (!map[key]) map[key] = { count: 0, correct: 0 };
      map[key].count += 1;
      if (r.isCorrect) map[key].correct += 1;
    });
    const result = [];
    for (let i = n - 1; i >= 0; i--) {
      const d = daysAgo(i);
      const stat = map[dayKey(d)] || { count: 0, correct: 0 };
      result.push({
        label: (d.getMonth() + 1) + '/' + d.getDate(),
        count: stat.count,
        correct: stat.correct,
        accuracy: percent(stat.correct, stat.count)
      });
    }
    return result;
  }

  // 直近 days 日の記録だけにする。days が 0 のときは全期間
  function inPeriod(history, days) {
    if (!days) return history;
    const from = daysAgo(days - 1).getTime();
    return history.filter(function (r) { return Date.parse(r.answeredAt) >= from; });
  }

  /* 記録をグループ分けして集計する。
     keyFn は、記録からグループ名を取り出す関数。
     戻り値：[{ key, count, correct, seconds, accuracy }]（回答数の多い順） */
  function group(records, keyFn) {
    const map = {};
    records.forEach(function (r) {
      const key = keyFn(r);
      if (!map[key]) map[key] = { key: key, count: 0, correct: 0, seconds: 0 };
      map[key].count += 1;
      map[key].seconds += r.seconds || 0;
      if (r.isCorrect) map[key].correct += 1;
    });
    return Object.keys(map).map(function (key) {
      const g = map[key];
      g.accuracy = percent(g.correct, g.count);
      return g;
    }).sort(function (a, b) { return b.count - a.count; });
  }

  // 一度でも回答した問題のID
  function answeredIds(history) {
    return new Set(history.map(function (r) { return r.questionId; }));
  }

  // 「いちばん最近の回答が不正解」の問題のID（後で正解すれば外れる）
  function wrongIds(history) {
    const latest = {};
    history.forEach(function (r) { latest[r.questionId] = r.isCorrect; });
    return new Set(Object.keys(latest).filter(function (id) { return latest[id] === false; }));
  }

  /* ==========================================================
     苦手度の計算
     分野（試験＋分野）ごとに 0〜100 の「苦手度」を出します。大きいほど苦手です。

     苦手度 ＝（ 正答率の低さ × 45
               ＋ 回答の遅さ   × 20
               ＋ 直近の誤答率 × 20
               ＋ くり返し誤答 × 10
               ＋ 難易度の補正 ×  5 ）× 信頼度

     ・正答率の低さ … 1 −（補正した正答率）。
         補正した正答率 ＝（正解数 ＋ 4 × 全体の正答率）÷（回答数 ＋ 4）
         → 回答が少ないうちは、全体の平均に近い値になります。
     ・回答の遅さ   … 「回答時間 ÷ 目標時間」の平均が 1倍なら 0、2倍以上なら 1。
     ・直近の誤答率 … その分野の最近5回のうち、不正解だった割合。
     ・くり返し誤答 … 回答した問題のうち、2回以上間違えた問題の割合。
     ・難易度の補正 … やさしい問題での誤答ほど重く数えます。
     ・信頼度       … 回答数 ÷ 8（上限 1）。回答が少ない分野は苦手度が小さくなります。

     さらに、回答数が 5 回未満の分野は「データ不足」として、苦手ランキングに入れません。
     ========================================================== */
  const WEAK_MIN_ANSWERS = 5;    // これ未満は「データ不足」
  const WEAK_FULL_ANSWERS = 8;   // この回答数で信頼度が 1 になる
  const WEAK_PRIOR = 4;          // 正答率の補正に使う「仮の回答数」
  const WEAK_THRESHOLD = 15;     // 苦手度がこれ以上のとき「苦手分野」として表示する

  function clamp01(x) {
    return Math.max(0, Math.min(1, x));
  }

  /* history … 回答記録の配列
     targets … { 問題ID: 目標秒数 } の対応表
     戻り値  … [{ key: '試験|分野', count, correct, accuracy, score, enough, isWeak }]（苦手度の高い順） */
  function weakness(history, targets) {
    const overall = history.length ? countCorrect(history) / history.length : 0.6;
    const groups = {};
    history.forEach(function (r) {
      const key = r.examType + '|' + r.category;
      if (!groups[key]) groups[key] = [];
      groups[key].push(r);
    });

    return Object.keys(groups).map(function (key) {
      const list = groups[key];
      const n = list.length;
      const correct = countCorrect(list);

      // 正答率の低さ
      const lowAccuracy = 1 - (correct + WEAK_PRIOR * overall) / (n + WEAK_PRIOR);

      // 回答の遅さ
      const ratioSum = list.reduce(function (sum, r) {
        const target = targets[r.questionId];
        return sum + (target ? (r.seconds || 0) / target : 1);
      }, 0);
      const slowness = clamp01(ratioSum / n - 1);

      // 直近の誤答率
      const recent = list.slice(-5);
      const recentMiss = (recent.length - countCorrect(recent)) / recent.length;

      // くり返し誤答
      const wrongCount = {};
      const asked = {};
      list.forEach(function (r) {
        asked[r.questionId] = true;
        if (!r.isCorrect) wrongCount[r.questionId] = (wrongCount[r.questionId] || 0) + 1;
      });
      const repeated = Object.keys(wrongCount).filter(function (id) { return wrongCount[id] >= 2; }).length;
      const repeatRate = repeated / Object.keys(asked).length;

      // 難易度の補正（難易度1の誤答＝1、難易度3の誤答＝1/3 として平均）
      const easyMiss = list.reduce(function (sum, r) {
        if (r.isCorrect) return sum;
        const d = r.difficulty >= 1 && r.difficulty <= 3 ? r.difficulty : 2;
        return sum + (4 - d) / 3;
      }, 0) / n;

      const raw = 45 * lowAccuracy + 20 * slowness + 20 * recentMiss + 10 * repeatRate + 5 * easyMiss;
      const confidence = Math.min(1, n / WEAK_FULL_ANSWERS);
      const score = Math.round(raw * confidence);
      const enough = n >= WEAK_MIN_ANSWERS;

      return {
        key: key,
        count: n,
        correct: correct,
        accuracy: percent(correct, n),
        score: score,
        enough: enough,
        isWeak: enough && score >= WEAK_THRESHOLD
      };
    }).sort(function (a, b) { return b.score - a.score; });
  }

  return {
    weakness: weakness,
    percent: percent,
    show: show,
    dayKey: dayKey,
    countCorrect: countCorrect,
    totalSeconds: totalSeconds,
    streak: streak,
    summary: summary,
    lastDays: lastDays,
    inPeriod: inPeriod,
    group: group,
    answeredIds: answeredIds,
    wrongIds: wrongIds
  };
})();
