import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import BuildYourPizzaView from '../views/BuildYourPizzaView.vue'
import OrderView from '../views/OrderView.vue'
import OwnerView from '../views/OwnerView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/MenuView.vue')
  },
  {
    path: '/build-pizza',
    name: 'buildPizza',
    component: BuildYourPizzaView
    // component: () => import ('../views/BuildYourPizzaView.vue')
  },
  {
    path: '/order-view',
    name: 'orderView',
    component: OrderView
    // component: () => import ('../views/OrderView.vue')
  },
  {
    path: '/owner-view',
    name: 'ownerView',
    component: OwnerView
    // component: () => import ('../views/OwnerView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
