import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },

    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
   
  ]
})

export default router
