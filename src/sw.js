/* global importScripts, workbox */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.0/workbox-sw.js')

workbox.setConfig({
  debug: false
})

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
  /\.(?:js|css)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'static-resources'
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
