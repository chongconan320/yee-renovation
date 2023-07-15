import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/views/Landing'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    }
  ]
})

export default router
