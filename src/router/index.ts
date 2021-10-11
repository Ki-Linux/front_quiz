import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/begin',
    name: 'Beginner',
    component: () => import('../views/beginner.vue')
  },
  {
    path: '/int',
    name: 'Intermediate',
    component: () => import('../views/intermediate.vue')
  },
  {
    path: '/adv',
    name: 'Advanced',
    component: () => import('../views/advanced.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/form.vue')
  },
  {
    path: '/back',
    name: 'Back',
    component: () => import('../views/back.vue')
  },
  {
    path: '/rule',
    name: 'Rule',
    component: () => import('../views/rule.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
