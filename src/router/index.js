import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoriesView from '../views/CategoriesView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import Moviedisplay from '../views/Moviedisplay.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { 
    path: '/film/:id',
    name: 'Movie',
    component: Moviedisplay,
    props: true
  },
  { 
    path: '/login',
    name: 'login',
    component: LoginView,
    props: true
  },
  { 
    path: '/register',
    name: 'register',
    component: RegisterView,
    props: true
  },
  { 
    path: '/categories/:type',
    name: 'CategoriesView',
    component: CategoriesView,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
