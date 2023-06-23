importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'); // workbox 최신버전 CDN 추가

// workbox를 디버그모드로 설정
workbox.setConfig({
  debug: true,
})

// Vue-Cli에서 기본으로 제공하는 프리캐시 설정을 Workbox에 적용
// self.__WB_MANIFEST로 변경
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

//촬영된 이미지 캐시
workbox.routing.registerRoute(
  new RegExp('https://firebasestorage.googleapis.com/v0/b/camera-fd2bf.appspot.com/.*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'camera-images',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 365*24*60*60, //1년 지정
      }),
    ],
})
);

