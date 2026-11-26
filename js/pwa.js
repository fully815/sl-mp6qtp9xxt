/* ==========================================================
   pwa.js  アプリ化（PWA）まわり
   ・Service Worker の登録（オフライン対応）
   ・新しいバージョンが公開されたときの更新案内
   ・iPhone の Safari で開いたときの「ホーム画面に追加」案内
   ========================================================== */

(function () {
  const noticeArea = document.getElementById('notice-area');
  const HINT_KEY = 'studylog.installHint.v1';   // 「ホーム画面に追加」案内を閉じたかどうか

  /* 画面上部に案内を1つ表示する。buttons は [{ label, primary, onClick }] */
  function showNotice(id, text, buttons) {
    if (!noticeArea || document.getElementById(id)) return;
    const box = document.createElement('div');
    box.className = 'notice';
    box.id = id;

    const p = document.createElement('p');
    p.textContent = text;
    box.appendChild(p);

    const row = document.createElement('div');
    row.className = 'notice__actions';
    buttons.forEach(function (b) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn btn--small' + (b.primary ? ' btn--primary' : '');
      btn.textContent = b.label;
      btn.addEventListener('click', function () { b.onClick(box); });
      row.appendChild(btn);
    });
    box.appendChild(row);
    noticeArea.appendChild(box);
  }

  /* ---------- ホーム画面に追加の案内（iPhone / iPad） ---------- */

  function isIos() {
    // iPadOS は「Mac」と名乗るため、タッチ操作の有無でも判定する
    return /iphone|ipad|ipod/i.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  }

  function isStandalone() {
    return navigator.standalone === true || window.matchMedia('(display-mode: standalone)').matches;
  }

  function showInstallHint() {
    if (!isIos() || isStandalone()) return;
    let dismissed = false;
    try { dismissed = localStorage.getItem(HINT_KEY) === '1'; } catch (e) { /* 保存不可でも案内は出す */ }
    if (dismissed) return;

    // iPhone の Chrome などは CriOS / FxiOS / EdgiOS と名乗る
    const isSafari = !/crios|fxios|edgios/i.test(navigator.userAgent);
    const text = isSafari
      ? 'アプリとして使うには、画面下の共有ボタン（四角から上向き矢印）を押し、「ホーム画面に追加」を選んでください。学習の記録は、追加したアプリの中に保存されます。'
      : 'アプリとして使うには、このページを Safari で開き、共有ボタンから「ホーム画面に追加」を選んでください。';

    showNotice('install-hint', text, [{
      label: '閉じる',
      onClick: function (box) {
        try { localStorage.setItem(HINT_KEY, '1'); } catch (e) { /* 何もしない */ }
        box.remove();
      }
    }]);
  }

  /* ---------- Service Worker の登録と更新案内 ---------- */

  function showUpdateNotice(registration) {
    showNotice('update-notice', '新しいバージョンがあります。更新すると最新の内容になります（学習の記録は消えません）。', [
      {
        label: '更新する',
        primary: true,
        onClick: function () {
          // 待機中の新しい版に切り替えを指示する。切り替わると下の controllerchange で再読み込みされる
          if (registration.waiting) registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        }
      },
      { label: 'あとで', onClick: function (box) { box.remove(); } }
    ]);
  }

  function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) return;

    /* パソコンでの開発中（localhost）は、ファイルの変更がすぐ反映されるよう、保存機能を使わない。
       オフライン動作を試したいときだけ、URL の最後に「?pwa=1」を付けて開く。
       例： http://localhost:8123/?pwa=1 */
    const isLocal = ['localhost', '127.0.0.1', '[::1]'].indexOf(location.hostname) !== -1;
    const wantsPwa = new URLSearchParams(location.search).has('pwa');
    if (isLocal && !wantsPwa) {
      navigator.serviceWorker.getRegistrations().then(function (list) {
        list.forEach(function (r) { r.unregister(); });
      });
      if (window.caches) {
        caches.keys().then(function (names) {
          names.filter(function (n) { return n.indexOf('studylog-') === 0; })
            .forEach(function (n) { caches.delete(n); });
        });
      }
      return;
    }

    // 「./」始まりなので、GitHub Pages のサブフォルダでも、そのフォルダの中だけが対象になる
    navigator.serviceWorker.register('./service-worker.js').then(function (registration) {
      // すでに新しい版が待機しているとき
      if (registration.waiting && navigator.serviceWorker.controller) {
        showUpdateNotice(registration);
      }
      // 新しい版が見つかったとき
      registration.addEventListener('updatefound', function () {
        const worker = registration.installing;
        if (!worker) return;
        worker.addEventListener('statechange', function () {
          // controller があるのは「更新」のとき。初回インストールでは案内を出さない
          if (worker.state === 'installed' && navigator.serviceWorker.controller) {
            showUpdateNotice(registration);
          }
        });
      });
      // ホーム画面のアプリは開きっぱなしになりやすいので、画面に戻ってきたときに更新を確認する
      document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'visible') {
          registration.update().catch(function () { /* オフラインのときは何もしない */ });
        }
      });
    }).catch(function (error) {
      console.warn('[PWA] Service Worker を登録できませんでした', error);
    });

    // 新しい版に切り替わったら、1回だけ再読み込みする
    let reloading = false;
    const hadController = Boolean(navigator.serviceWorker.controller);
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (reloading || !hadController) return;   // 初回インストール時は再読み込みしない
      reloading = true;
      location.reload();
    });
  }

  showInstallHint();
  window.addEventListener('load', registerServiceWorker);
})();
