import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router' // , {RouteConfig} & : Array<RouteConfig> 생략가능

Vue.use(VueRouter)

import main_page from '../components/main_page.vue';
import sub_page from '../components/sub_page.vue';

const routes: Array<RouteConfig> = [
  {
    path: '/main',
    name: 'main',
    component: main_page
  },
  {
    path: '/sub',
    name: 'sub',
    component: sub_page
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
