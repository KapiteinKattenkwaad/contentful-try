importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/22383700c1381122d30d.css",
    "revision": "e37d1617e6181ae7dac08fa36ce3b651"
  },
  {
    "url": "/_nuxt/22a1e048775104ec5149.js",
    "revision": "c364b0a03b6f87765792e76a38348508"
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
    "url": "/_nuxt/31da2779960b24f2f584.css",
    "revision": "e1f3bfd37f0c63554df10f81d550f651"
  },
  {
    "url": "/_nuxt/6fa2879ab8c3f2b83718.js",
    "revision": "e73d129e12ed5543982205946a664438"
  },
  {
    "url": "/_nuxt/81b197fde8e9bddbe02c.js",
    "revision": "d0f69a9943fcd7382032826a4381fa10"
  },
  {
    "url": "/_nuxt/83ee08e2bca49c55bf93.js",
    "revision": "0c444db746e432fb8e3a9a1ed5e51eec"
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
    "url": "/_nuxt/ad9e1978ab9064c08620.js",
    "revision": "bcbc60432d28509c544af41271ee2ff4"
  },
  {
    "url": "/_nuxt/bd958844aeccd881711b.css",
    "revision": "1e61f70bc0cc10ee204011736c1db78f"
  },
  {
    "url": "/_nuxt/cf46f0fd2fa8b56bd915.js",
    "revision": "460fd613a672729e495ed7b65dde9cb5"
  },
  {
    "url": "/_nuxt/d10303a973b9101e0b77.js",
    "revision": "755dc3b5087e2f2abb89d2c8de61bc5d"
  },
  {
    "url": "/_nuxt/e0fa7b6e4a34af7c31df.css",
    "revision": "202a093f5cf1765d90ce603357f98e6c"
  },
  {
    "url": "/_nuxt/e8078c1a73967c78f601.css",
    "revision": "b73fd55b46c59baf26f735a5cc35788f"
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
