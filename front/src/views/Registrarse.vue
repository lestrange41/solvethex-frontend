<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-full max-w-md">
      <h1 class="text-2xl font-bold mb-4 text-center">Crear Nuevo Usuario</h1>
      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label for="username" class="block">Nombre de usuario:</label>
          <input type="text" v-model="username" id="username" placeholder="Ingrese su nombre de usuario" class="border border-gray-300 px-4 py-2 w-full rounded-md">
        </div>
        <div>
          <label for="email" class="block">Correo Electrónico:</label>
          <input type="email" v-model="email" id="email" placeholder="Ingrese su correo electrónico" class="border border-gray-300 px-4 py-2 w-full rounded-md">
        </div>
        <div>
          <label for="password" class="block">Contraseña:</label>
          <input type="password" v-model="password" id="password" placeholder="Ingrese su contraseña" class="border border-gray-300 px-4 py-2 w-full rounded-md">
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Crear Usuario</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const username = ref('');
const email = ref('');
const password = ref('');

const submitForm = async () => {
  try {
    // Hacer la solicitud POST al backend para crear un nuevo usuario
    const response = await axios.post<User>('http://localhost:3000/register', {
      username: username.value,
      email: email.value,
      password: password.value
    });
    
    // Manejar la respuesta del servidor
    console.log('Respuesta del servidor:', response.data);
  } catch (error) {
    // Manejar errores
    console.error('Error al crear usuario:', error);
  }
};
</script>
