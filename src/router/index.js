import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Alumnos from '../components/Alumnos'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Alumnos',
    name: 'Alumnos',
    component: Alumnos,
    
    /* component: () => import(/* webpackChunkName: "about"  '../components/Alumnos')*/
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
