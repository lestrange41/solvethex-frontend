
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import SignUp from '../components/SignUp.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/signup', component: SignUp }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
