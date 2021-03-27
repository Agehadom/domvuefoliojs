import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Engineering from '../views/About.vue'
import Funnycolors from '../views/TempHello.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/engineering',
    name: 'engineering',
    component: Engineering
  },
  {
    path: '/funnycolors',
    name: 'Funnycolors',
    component: Funnycolors
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
