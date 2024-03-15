<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-full max-w-md">
      <h1 class="text-2xl font-bold mb-4 text-center">Añadir nuevo libro:</h1>
      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label for="nombre" class="block">Titulo:</label>
          <input type="text" v-model="nombre" id="nombre" placeholder="Pon el titulo del libro" class="border border-gray-300 px-4 py-2 w-full rounded-md">
        </div>
        <div>
          <label for="descripcion" class="block">Descripción:</label>
          <textarea v-model="descripcion" id="descripcion" placeholder="Añade una descripción del libro" class="border border-gray-300 px-4 py-2 w-full rounded-md"></textarea>
        </div>
        <div>
          <label for="is_read" class="block">Leído:</label>
          <input type="checkbox" v-model="is_read" id="is_read" class="border border-gray-300 px-4 py-2 w-full rounded-md">
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md text-center">Añadir libro</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const nombre = ref('');
const descripcion = ref('');
const is_read = ref(false); // Inicializar el valor de is_read como falso

const submitForm = async () => {
 try {
    // Hacer la solicitud POST al backend para crear un nuevo libro
    const response = await axios.post('http://localhost:3000/book', {
      nombre: nombre.value,
      descripcion: descripcion.value,
      is_read: is_read.value
    });
    
    // Manejar la respuesta del servidor
    console.log('Respuesta del servidor:', response.data);
    
    // Limpiar los campos del formulario después de enviar con éxito
    nombre.value = '';
    descripcion.value = '';
    is_read.value = false;
  } catch (error) {
    // Manejar errores
    console.error('Error al crear libro:', error);
  }
};
</script>
