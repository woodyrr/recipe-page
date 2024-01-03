import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/home.vue'
import details from '../components/details.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name:'home',
      component:home
    },
    {
      path: '/meals/:id',
      name:'meal Details',
      component:details
    }
    
  ]
})

export default router
