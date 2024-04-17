import { createRouter, createWebHistory } from 'vue-router'
import DashView from '../views/DashView.vue'
import RaiseView from '../views/RaiseView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashView
    },
    {
      path: '/raise',
      name: 'raise',
      component: RaiseView
    }
  ]
})

export default router
