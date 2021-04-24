const version = '1.11.0'
const cacheName = `instabuddy-${version}`
const assets = [
  '/js/reconnecting-websocket.min.js',
  '/app.min.css',
  '/app.min.js',
  '/android-chrome-192x192.png',
  '/android-chrome-256x256.png',
  '/apple-touch-icon.png',
  '/button-not-found.html',
  '/button.html',
  '/button.min.css',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/favicon.ico',
  '/index.html',
  '/manifest.json',
  '/mstile-150x150.png',
  '/safari-pinned-tab.svg'
]

const assetsDev = [
  '/js/app.js',
  '/js/el.js',
  '/js/events.js',
  '/js/prophet.js',
  '/js/reconnecting-websocket.min.js',
  '/android-chrome-192x192.png',
  '/android-chrome-256x256.png',
  '/apple-touch-icon.png',
  '/button-not-found.html',
  '/button.html',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/favicon.ico',
  '/index.html',
  '/manifest.json',
  '/mstile-150x150.png',
  '/safari-pinned-tab.svg'
]

// Fill cache.
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(assetsDev)
          .then(() => self.skipWaiting())
      })
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim())
})

// Fetch from cache.
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
        return response || fetch(event.request)
    })
  )
})
