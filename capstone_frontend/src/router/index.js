import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
    {
      path: '/dash',
      name: 'dash',
  
      component: () => import( '@/views/DashboardView.vue')
    },
    {
      path: '/employees',
      name: 'employees',
  
      component: () => import( '@/views/EmployeesView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
  
      component: () => import( '@/views/AdminView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
  
      component: () => import( '@/views/ContactView.vue')
    },
    {
      path: '/login',
      name: 'login',
  
      component: () => import( '@/views/LoginView.vue')
    }
  ]
  

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
