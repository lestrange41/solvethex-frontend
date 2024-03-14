<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-full max-w-md">
      <h1 class="text-2xl font-bold mb-4">Crear Nuevo Usuario</h1>
      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label for="nombre" class="block">Nombre:</label>
          <input type="text" v-model="nombre" id="nombre" placeholder="Ingrese su nombre" class="border border-gray-300 px-4 py-2 w-full rounded-md">
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

const nombre = ref('');
const email = ref('');
const password = ref('');

const submitForm = () => {
  console.log('Nombre:', nombre.value);
  console.log('Email:', email.value);
  console.log('Contraseña:', password.value);
};

</script>


