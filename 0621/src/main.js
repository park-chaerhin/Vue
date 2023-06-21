import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'

//뷰파이어 노드 모듈 가져와서 Vue에 연결
import {rtdbPlugin} from 'vuefire'//rtdb: firebase의 realtime database 사용하겠다!+plugin: 연결시키겠다
Vue.use(rtdbPlugin);

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
