import { createRouter, createWebHistory } from 'vue-router'
import ContentView from '../views/ContentView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component:() => import('../views/HomeView.vue')
  },
  {
    path: '/',
    name: 'content',
    component: ContentView
  },
  {
    path: '/about',
    name: 'about',
  component: () => import('../views/AboutView.vue')
  },
  {
    path: '/add',
    name: 'add',
  component: () => import( '../views/AddView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
