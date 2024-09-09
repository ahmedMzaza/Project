import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Loge from '../views/Loge.vue'
import Promotions from '../views/Promotions.vue'
import Prodect from '../views/Prodect.vue'
import Checkout from '../views/Checkout.vue'
import dashboard from '../views/dashboard.vue'
import vue from '../views/vue.vue'
import vunse from '../views/navtest.vue'
import Like from '../views/Like.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Like',
    name: 'Like',
    component: Like,

  },

  {
    path: '/vueTest',
    name: 'vueTest',
    component: vunse
  },
  {
    path: '/vue',
    name: 'vue',
    component: vue
  },
  {
    path: '/Loge',
    name: 'Loge',
    component: Loge
  },
  {
    path: '/Promotions',
    name: 'Promotions',
    component: Promotions
  },
  {
    path: '/Promotions',
    name: 'Promotions',
    component: Promotions
  },
  {
    path: '/Prodect:id',
    name: 'Prodect',
    component: Prodect,
    props: true
  },
  {
    path: '/Checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
