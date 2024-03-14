// src/main.js
import { createApp } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import App from './App.vue';
import Home from './views/Registrarse.vue';
import SignUp from './views/Acceder.vue'
import './index.css'


// Definir las rutas
const routes: RouteRecordRaw[] = [
    { path: '/', component: Home },
    { path: '/acceder', component: SignUp }
  ];
  
  // Crear el enrutador
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  // Crear la aplicación Vue
  const app = createApp(App);
  
  // Usar el enrutador en la aplicación
  app.use(router);
  
  // Montar la aplicación en el elemento con el id "app" en el HTML
  app.mount('#app');