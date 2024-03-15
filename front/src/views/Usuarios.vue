<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold mb-4 text-center mt-4">Lista de Usuarios</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="user in users" :key="user.id" class="bg-white rounded-lg shadow-md p-4">
        <h2 class="text-lg font-semibold">{{ user.username }}</h2>
        <p class="text-gray-500">{{ user.email }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const users = ref([]);


const getAllUsers = async () => {
  try {
    const response = await axios.get('http://localhost:3000/users');
    users.value = response.data; 
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
  }
};


onMounted(() => {
  getAllUsers();
});
</script>

