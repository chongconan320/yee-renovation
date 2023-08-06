import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/views/Landing'
import AboutUs from '@/views/AboutUs'

const router = createRouter({
  scrollBehavior() {
    return { top: 0 }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUs
    }
  ]
})

export default router
