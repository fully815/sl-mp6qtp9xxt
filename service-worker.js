/* ==========================================================
   service-worker.js  オフライン対応
   アプリのファイルを端末に保存（キャッシュ）し、電波がなくても起動できるようにします。

   ★ アプリを更新したら、必ず下の CACHE_VERSION を変えてください ★
     （js/app.js の APP_VERSION と同じ番号にします）
     番号を変えると、新しいファイルが保存され直し、古い保存分は自動で消えます。
     番号を変えないと、利用者の端末には古いファイルが残り続けます。
   ========================================================== */

const CACHE_VERSION = '0.9.0';
const CACHE_PREFIX = 'studylog-';
const CACHE_NAME = CACHE_PREFIX + CACHE_VERSION;

/* 保存するファイルの一覧。
   すべて「./」始まりの相対パスなので、GitHub Pages のサブフォルダでも動きます。
   ファイルを追加したら、ここにも追加してください。 */
const FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/style.css',
  './js/questions.js',
  './js/questions-2.js',
  './js/questions-3.js',
  './js/questions-4.js',
  './js/questions-5.js',
  './js/questions-6.js',
  './js/questions-7.js',
  './js/questions-8.js',
  './js/storage.js',
  './js/analytics.js',
  './js/mock.js',
  './js/app.js',
  './js/pwa.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

/* インストール時：ファイルをまとめて保存する。
   cache: 'reload' で、ブラウザの古い一時保存を使わず、必ずサーバーから取り直す。 */
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(FILES.map(function (url) {
        return new Request(url, { cache: 'reload' });
      }));
    })
  );
  // ここでは skipWaiting しない。利用者が「更新する」を押すまで、古い版を動かし続ける。
});

/* 有効化時：このアプリの古いバージョンの保存分を削除する */
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (names) {
      return Promise.all(names.filter(function (name) {
        return name.indexOf(CACHE_PREFIX) === 0 && name !== CACHE_NAME;
      }).map(function (name) {
        return caches.delete(name);
      }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

/* 画面側（js/pwa.js）から「更新する」が押されたら、新しい版に切り替える */
self.addEventListener('message', function (event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/* 通信時：保存済みのファイルがあればそれを返し、なければネットワークから取得する */
self.addEventListener('fetch', function (event) {
  const request = event.request;
  if (request.method !== 'GET') return;
  if (new URL(request.url).origin !== self.location.origin) return;   // 他サイトへの通信には手を出さない

  event.respondWith(
    caches.open(CACHE_NAME).then(function (cache) {
      // ページを開く通信は、URL が何であっても index.html を返す
      const key = request.mode === 'navigate' ? './index.html' : request;
      return cache.match(key, { ignoreSearch: true }).then(function (cached) {
        return cached || fetch(request);
      });
    })
  );
});
