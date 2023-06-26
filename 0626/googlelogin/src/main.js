import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

//파이어베이스 앱 객체 모듈 가져오기
import firebase from 'firebase/compat/app'
import '@/datasources/firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  created(){
    //사용자가 로그아웃, 비밀번호 변경 등의 변경을 했을 때 처리
    /// pUserInfo : 전달받은 매개변수(현재상태갖고있음)
    /// vuex 명령어 - store, dispatch
    /// 모든정보 저장 = vuex / 백엔드에서 모든 컴포넌트들이 정보를 공유할 수 있도록 해주는(?) = 세션
    firebase.auth().onAuthStateChanged(pUserInfo => {
      if (pUserInfo !== null){
        //이미 로그인 되어있었는지 등의 상태를 파악하여 처리함
        store.dispatch('fnDoLoginAuto',pUserInfo)
      }
    })
  },
  render: h => h(App)
}).$mount('#app')
