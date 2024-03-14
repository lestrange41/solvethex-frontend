<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold mb-4 text-center">Perfil de Usuario</h1>
    <div v-if="user" class="bg-white rounded-lg shadow-md p-4">
      <h2 class="text-lg font-semibold">{{ user.username }}</h2>
      <p class="text-gray-500">Correo electrónico: {{ user.email }}</p>
      <p class="text-gray-500">Fecha de creación: {{ formatDate(user.created_at) }}</p>
    </div>
    <div v-else class="text-red-500">Usuario no encontrado</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const user = ref(null);

const getUserProfile = async () => {
  try {
    const userId = $route.params.userId;
    const response = await axios.get(`/users/${userId}`);
    user.value = response.data;
  } catch (error) {
    console.error('Error al obtener el perfil del usuario:', error);
  }
};

// Función para dar formato a la fecha
const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

onMounted(() => {
  getUserProfile();
});
</script>
