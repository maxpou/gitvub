/* global importScripts, workbox */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.1/workbox-sw.js')

workbox.setConfig({
  debug: false
})

workbox.precaching.precacheAndRoute([
  {
    "url": "css/app.8f354e9c.css",
    "revision": "91e0fac8c14150f36c42e4e7af706531"
  },
  {
    "url": "index.html",
    "revision": "9cc97ccd35ed75750d1b65d020dd3a99"
  },
  {
    "url": "js/app.1ba9b42f.js",
    "revision": "54f64cc3a12a8b0069aaa7da12920b64"
  },
  {
    "url": "js/vendor.e9e01068.js",
    "revision": "66d5aef12f60a0e874faa6d48a2a96e3"
  }
])

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
      })
    ]
  })
)

workbox.routing.registerRoute(
  new RegExp('https://api.github.com.*'),
  workbox.strategies.networkFirst({
    cacheName: 'gh-api'
  })
)

workbox.routing.registerRoute(
  new RegExp('https://avatars3.githubusercontent.com'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'avatars'
  })
)

workbox.routing.registerRoute(
  new RegExp('https://code.getmdl.io/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'googleapis',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30
      })
    ]
  })
)

workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'googleapis',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30
      })
    ]
  })
)
