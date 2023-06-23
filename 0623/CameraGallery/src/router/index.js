import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home_page',
      component: () => import('../components/home_page.vue')  //'2가지 표현식': 1/gallerypj같이 미리 임포트해놓고 component:homeview 이렇게 불러도 되고 // 2/함수형식으로 직접 불러와도 됨
    },
    {
      path:'/camera',
      name:'camera_page',
      component: () => import('../components/camera_page.vue')
    },
    {
      path:'/info',
      name:'info_page',
      component: () => import('../components/info_page.vue')
    },
    {
      path:'/post',
      name:'post_page',
      component: () => import('../components/post_page.vue')
    },
  ]
})
