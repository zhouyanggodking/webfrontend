// in service worker context, self keyword refers to the ServiceWorker itself

const cacheName = 'PWA-Cache';
const staticAssets = [
  './',
  './index.html',
  './main.js',
  './main.css'
];

self.addEventListener('install', async event => {
  // console.log('install event')
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
});

self.addEventListener('fetch', async event => {
  // console.log('fetch event')
  const req = event.request;
  console.log(req.url);

  event.respondWith(cacheFirst(req));
});

async function cacheFirst(req) {
  const cache = await caches.open(cacheName);
  const cachedRes = await cache.match(req);
  console.log(cachedRes);
  return cachedRes || fetch(req);
}

