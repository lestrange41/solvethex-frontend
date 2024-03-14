
import { createApp } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import App from './App.vue'
import Home from './views/Registrarse.vue'
import SignUp from './views/Acceder.vue'
import Usuarios from './views/Usuarios.vue'
import './index.css'
import axios from 'axios'


const routes: RouteRecordRaw[] = [
    { path: '/', component: Home },
    { path: '/acceder', component: SignUp },
    { path: '/users', component: Usuarios }
  ];
  

  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  

  const app = createApp(App);
  

  app.use(router);
  
  app.config.globalProperties.$axios = axios;

  app.mount('#app');