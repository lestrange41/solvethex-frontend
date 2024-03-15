<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-full max-w-md">
      <h1 class="text-2xl font-bold mb-4 text-center">Añadir nuevo libro:</h1>
      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label for="nombre" class="block">Titulo:</label>
          <input
            type="text"
            v-model="nombre"
            id="nombre"
            placeholder="Pon el titulo del libro"
            class="border border-gray-300 px-4 py-2 w-full rounded-md"
          />
        </div>
        <div>
          <label for="descripcion" class="block">Descripción:</label>
          <textarea
            v-model="descripcion"
            id="descripcion"
            placeholder="Añade una descripción del libro"
            class="border border-gray-300 px-4 py-2 w-full rounded-md"
          ></textarea>
        </div>
        <div class="flex items-center">
          <label for="is_read" class="text-gray-700">Leído</label>
           <input
            type="checkbox"
            v-model="is_read"
            id="is_read"
            class="h-5 w-5 text-blue-500 rounded-md border-gray-300 mr-2"
          />
        </div>
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded-md text-center"
        >
          Añadir libro
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const nombre = ref("");
const descripcion = ref("");
const is_read = ref(false);

const submitForm = async () => {
  try {
    const response = await axios.post("http://localhost:3000/book", {
      nombre: nombre.value,
      descripcion: descripcion.value,
      is_read: is_read.value,
    });

    console.log("Respuesta del servidor:", response.data);

    nombre.value = "";
    descripcion.value = "";
    is_read.value = false;
  } catch (error) {
    console.error("Error al crear libro:", error);
  }
};
</script>
