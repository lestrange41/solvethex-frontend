<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-full max-w-md">
      
      <h1 class="text-5xl font-bold mb-4 text-center text-red-500">IMPORTANTE!</h1>
      
      <p class="text-lg mb-4 text-center">Ir a Usuarios y iniciar sesión con un usuario ya creado, </p>
            <p class=" mb-4 text-gray-500 text-center">La contraseña es hola</p>

      <h1 class="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h1>
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
      
      <div v-if="showSuccessPopup" class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
        <div class="bg-white p-8 rounded-md">
          <p class="text-lg font-semibold mb-4">Has iniciado sesión correctamente</p>
          <button @click="acceptSuccessPopup" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Aceptar</button>
        </div>
      </div>
      
      <div v-if="showErrorPopup" class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
        <div class="bg-white p-8 rounded-md">
          <p class="text-lg font-semibold mb-4">Correo electrónico o contraseña incorrectos. Vuelve a intentarlo.</p>
          <button @click="acceptErrorPopup" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Aceptar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios'; 
const email = ref('');
const password = ref('');
const showSuccessPopup = ref(false); 
const showErrorPopup = ref(false);

const submitForm = async () => {
  try {
    
    const response = await axios.post('http://localhost:3000/login', {
      email: email.value,
      password: password.value
    });
    
    
    console.log('Respuesta del servidor:', response.data);
    showSuccessPopup.value = true; 
  } catch (error) {
    
    console.error('Error al iniciar sesión:', error);
    showErrorPopup.value = true; 
  }
};

const acceptSuccessPopup = () => {
  showSuccessPopup.value = false;
   router.push("/libros");
};

const acceptErrorPopup = () => {
  
  showErrorPopup.value = false;
};
</script>
