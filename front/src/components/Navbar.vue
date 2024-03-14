<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-center items-center">
      <router-link to="/" class="text-white text-xl font-bold mx-4">Registrarse</router-link>
      <router-link to="/acceder" class="text-white text-xl font-bold mx-4">Acceder</router-link>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

