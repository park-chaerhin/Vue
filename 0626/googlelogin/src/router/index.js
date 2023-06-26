import Vue from 'vue'
import VueRouter from 'vue-router'
//파이어베이스 앱 객체 모듈 가져오기
import firebase from 'firebase/compat/app'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'start_page',
    component: () => import('../components/start_page.vue')
  },
  {    
    path: '/main',
    name: 'main_page',
    component: () => import('../components/main_page.vue'),
    // 메인페이지는 인증과 연동 
    /// : '인증결과가 true일 때에만 메인페이지 갈 수 있어' 
    /// -> 로그인 하지 않은 사람이 주소갖고 접근하려고 할 때 로그인 페이지로 이동 할 수 있도록 함수 만들어야해
    ///    = router.beforeEach() 에 정의
    meta: {bAuth: true}
  },
  {
    path: '/login',
    name: 'login_page',
    component: () => import('../components/login_page.vue')
  },
  {
    path: '/register',
    name: 'register_page',
    component: () => import('../components/register_page.vue')
  },
  {
    // 사용자가 라우터에 등록된 것 외에 다른 주소 입력 시 에러 페이지 연결
    path: '/*',
    name: 'error_page',
    component: () => import('../components/error_page.vue')
  },
]

const router = new VueRouter({
  routes
})

//라우터 이동에 개입하여 인증이 필요한 경우 login 페이지로 전환
router.beforeEach((to, from, next) => {
  const bNeedAuth = to.matched.some(record => record.meta.bAuth)
  const bCheckAuth = firebase.auth().currentUser /// : 현재 사용자가 있냐?
  if(bNeedAuth && !bCheckAuth) { /// : 현재사용자가 인증페이지 데이터베이스에 없으면~
    next('/login') /// foreach 완료 이후 실행method = next 
  } else{ /// : 인증받은 사용자는 다음 라우터 주소로 이동~
    next()
  }
})

export default router
