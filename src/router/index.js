import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/home.vue'
import details from '../views/details.vue'
import categories from '../components/categoryDetails.vue'
import area from '../views/areadetails.vue'

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
    },
    {
      path: '/category/:id',
      name:'category Details',
      component:categories
    },
    {
      path: '/area/:id',
      name:'area Details',
      component:area
    }
    
  ]
})

export default router
