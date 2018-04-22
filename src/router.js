// config router

import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/', redirect: '/home' }
  ]
})
export default router