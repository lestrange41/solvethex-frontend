<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-full max-w-md">
      <h1 class="text-2xl font-bold mb-4">Iniciar Sesión</h1>
      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label for="email" class="block">Correo Electrónico:</label>
          <input type="email" v-model="email" id="email" placeholder="Ingrese su correo electrónico" class="border border-gray-300 px-4 py-2 w-full rounded-md">
        </div>
        <div>
          <label for="password" class="block">Contraseña:</label>
          <input type="password" v-model="password" id="password" placeholder="Ingrese su contraseña" class="border border-gray-300 px-4 py-2 w-full rounded-md">
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Iniciar Sesión</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios'; // Importa Axios

const email = ref('');
const password = ref('');

const submitForm = async () => {
  try {
    // Hacer la solicitud POST al backend para iniciar sesión
    const response = await axios.post('http://localhost:3000/login', {
      email: email.value,
      password: password.value
    });
    
    // Manejar la respuesta del servidor
    console.log('Respuesta del servidor:', response.data);
  } catch (error) {
    // Manejar errores
    console.error('Error al iniciar sesión:', error);
  }
};
</script>

