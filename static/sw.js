importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/22383700c1381122d30d.css",
    "revision": "e37d1617e6181ae7dac08fa36ce3b651"
  },
  {
    "url": "/_nuxt/250e8e861ac684fc030a.js",
    "revision": "e097b3e9f8687bdc18f1455a14b521e0"
  },
  {
    "url": "/_nuxt/252d2967c397c5fae52c.css",
    "revision": "f2f0a74e94f361dc6ce8d2e4ff51b55e"
  },
  {
    "url": "/_nuxt/26c4a0cd9a51d3abeee4.css",
    "revision": "73acbf08162d219742d5aa494e17443f"
  },
  {
    "url": "/_nuxt/6fdffb554ab7309d43ee.css",
    "revision": "9b6205568897a43bdc6890b16cb54506"
  },
  {
    "url": "/_nuxt/81b197fde8e9bddbe02c.js",
    "revision": "d0f69a9943fcd7382032826a4381fa10"
  },
  {
    "url": "/_nuxt/905237b54b474c9b6160.css",
    "revision": "618100f3d1323b1a4c06cb5da371ba11"
  },
  {
    "url": "/_nuxt/924c923eef69caea1b25.js",
    "revision": "c072cd1279a42f15eccb40e68aab8b02"
  },
  {
    "url": "/_nuxt/a740928ddc1be749c5d4.js",
    "revision": "21bb83d8190dcfc07b7e133c356fa603"
  },
  {
    "url": "/_nuxt/ad9e1978ab9064c08620.js",
    "revision": "bcbc60432d28509c544af41271ee2ff4"
  },
  {
    "url": "/_nuxt/b030c3b270f7db5dbb96.js",
    "revision": "3d62bcc85a672ed6c48e808ab3298dd5"
  },
  {
    "url": "/_nuxt/ccddd1d815408dbca62c.js",
    "revision": "f64f3213bc16840cfd023276e0e9580d"
  },
  {
    "url": "/_nuxt/cf46f0fd2fa8b56bd915.js",
    "revision": "460fd613a672729e495ed7b65dde9cb5"
  },
  {
    "url": "/_nuxt/e0fa7b6e4a34af7c31df.css",
    "revision": "202a093f5cf1765d90ce603357f98e6c"
  },
  {
    "url": "/_nuxt/e8078c1a73967c78f601.css",
    "revision": "b73fd55b46c59baf26f735a5cc35788f"
  },
  {
    "url": "/_nuxt/ff3e3f68ee2bd08a40c3.js",
    "revision": "6da5b7148f868b11bc385ce13eb2c391"
  }
], {
  "cacheId": "nuxt-contentful-starter",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
