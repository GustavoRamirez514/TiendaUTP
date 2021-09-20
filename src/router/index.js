import Vue from 'vue'
import VueRouter from 'vue-router'
import Productos from '../views/Productos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Productos',
    component: Productos
  },
  {
    path: '/Login',
    name: 'Ingreso',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
