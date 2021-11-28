import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: { title: 'いろいろ3択クイズ', desc: 'このクイズはアニメ、映画、観光地など様々なジャンルの問題が出題されるクイズです。問題はランダムで出題されます。' }
  },
  {
    path: '/begin',
    name: 'Beginner',
    component: () => import('../views/beginner.vue'),
    meta: { title: 'いろいろ3択クイズ[初級]'}
  },
  {
    path: '/int',
    name: 'Intermediate',
    component: () => import('../views/intermediate.vue'),
    meta: { title: 'いろいろ3択クイズ[中級]'}
  },
  {
    path: '/adv',
    name: 'Advanced',
    component: () => import('../views/advanced.vue'),
    meta: { title: 'いろいろ3択クイズ[上級]'}
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/form.vue'),
    meta: { title: 'いろいろ3択クイズ[お問い合わせ]'}
  },
  {
    path: '/back',
    name: 'Back',
    component: () => import('../views/back.vue'),
    meta: { title: 'いろいろ3択クイズ[戻る]'}
  },
  {
    path: '/rule',
    name: 'Rule',
    component: () => import('../views/rule.vue'),
    meta: { title: 'いろいろ3択クイズ[ご利用に関して]'}
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import('../views/add.vue'),
    meta: { title: 'いろいろ3択クイズ[新規登録]' }
  },
  {
    path: '/login',
    name: "Login",
    component: () =>import('../views/login.vue'),
    meta: { title: 'いろいろ3択クイズ[ログイン]' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
