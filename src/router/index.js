import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import signIN from '../components/signIN.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld
  },
  {
    path: '/signup',
    name: 'signup',
    component: signIN
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
