import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/menu',
    name: 'menu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MenuView.vue')
  },
  {
    path: '/build-pizza',
    name: 'buildPizza',
    component: () => import ('../views/BuildYourPizzaView.vue')
  },
  {
    path: '/order-view',
    name: 'orderView',
    component: () => import ('../views/OrderView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
