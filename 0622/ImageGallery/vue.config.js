const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pwa: {
    workboxOptions:{
      runtimeCaching: [
        {
          urlPattern: /\.jpg$/,
          handler: 'CacheFirst',
          options: {
            cacheName:'jpg-cache',
            expiration: {
              maxEntries: 10, //총 파일 10개까지 캐시
              maxAgeSeconds: 60*60*24*365, //1년 캐시
            }
          }
        },
        {
          urlPattern: /\.json$/,
          handler: 'StaleWhileRevalidate',
          options:{
            cacheName: 'json-cache',
            cacheableResponse: {
              statuses: [200]  //온라인 연결 시 캐시!
            }
          }
        }
    ]
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
})
