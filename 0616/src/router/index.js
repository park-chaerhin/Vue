import Vue from 'vue' // .js 또는 .vue 확장자 생략가능
import VueRouter from 'vue-router'

// main_page와 sub_page 컴포넌트 모듈 가져오기
// var rBtn = document.getElementById('rBtn')과 같은 개념
import MainPage from '@/components/main_page' // @대신 ../사용 가능 / .vue(확장자) 생략 가능
import SubPage from '@/components/sub_page'
import NewPage from '../components/new_page'

Vue.use(VueRouter)

// 'const routes'->'const router' : 순서 반대로 하니까 정의가 되지 않아서 불러올 수 없다고 뜸
const routes = [
  {
    // 루트 페이지를 main_page로 설정
    path: '/', // 주소 입력했을 때 첫 화면= '/'생략가능
    name: 'home', // 같은 component지만 다른 용도로 사용 -> 'name'속성 사용(다르게 지정)하여 구분
    component: MainPage
  },
  {
    path: '/main',
    name: 'main_page',
    component: MainPage
  },
  {
    path: '/sub',
    name: 'sub_page',
    component: SubPage
  },
  {
    path: '/new',
    name: 'new_page',
    component: NewPage
  },
]

const router = new VueRouter({ //
  mode: 'history',  // history:페이지 새로고침 할 때마다 re-rendering / hash(#):'가상시뮬레이터' 내에서 새로고침 -> 페이지 다시 불러와지지않아
  base: process.env.BASE_URL,
  routes // const=routes:[] 여기에 입력해도 되지만 너무 복잡 / 따로 빼서 사용
})

export default router
