 // Very basic service worker - cache important files
const CACHE_NAME = 'my-pwa-v1';
const urlsToCache = [
  '/dance-app/',
  '/dance-app/index.html',
  '/dance-app/pair.html',
  '/dance-app/events.html',
  '/dance-app/style.css',
  '/dance-app/app.js',
  '/dance-app/manifest.json',
  '/dance-app/icons/icon-192.png',
  '/dance-app/icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
