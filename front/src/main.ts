
import { createApp } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import App from './App.vue'
import Books from './views/Books.vue'
import Acceder from './views/Acceder.vue'
import Usuarios from './views/Usuarios.vue'
import Libros from './views/Libros.vue'
import EditBook from './views/EditBook.vue'
import './index.css'
import axios from 'axios'


const routes: RouteRecordRaw[] = [
    { path: '/añadirlibro', component: Books },
    { path: '/', component: Acceder },
    { path: '/users', component: Usuarios },
    { path: '/edit/:bookIdToEdit', name: 'EditBook', component: EditBook },
    { path: '/libros', component: Libros }
  ];
  

  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  

  const app = createApp(App);
  

  app.use(router);
  
  app.config.globalProperties.$axios = axios;

  app.mount('#app');