
import { createApp } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import App from './App.vue'
import Registrarse from './views/Registrarse.vue'
import SignUp from './views/Acceder.vue'
import Usuarios from './views/Usuarios.vue'
import Perfil from './views/Perfil.vue'
import './index.css'
import axios from 'axios'


const routes: RouteRecordRaw[] = [
    { path: '/', component: Registrarse },
    { path: '/acceder', component: SignUp },
    { path: '/users', component: Usuarios },
    { path: '/perfil', component: Perfil }
  ];
  

  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  

  const app = createApp(App);
  

  app.use(router);
  
  app.config.globalProperties.$axios = axios;

  app.mount('#app');