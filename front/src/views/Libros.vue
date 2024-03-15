<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold mb-4 text-center mt-4">Lista de libros:</h1>
    <router-link to="/añadirlibro" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4 mx-4">
      Añadir un libro nuevo
    </router-link>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="book in books"
        :key="book.id"
        class="bg-white rounded-lg shadow-md p-4"
      >
        <div class="flex justify-between mb-2">
          <button
            @click="editarLibro(book.id)"
            class="bg-blue-500 text-white px-4 py-2 rounded-md text-center"
          >
            Editar
          </button>
          <button
            @click="eliminarLibro(book.id)"
            class="bg-red-500 text-white px-4 py-2 rounded-md text-center"
          >
            Eliminar
          </button>
        </div>
        <h2 class="text-lg font-semibold">{{ book.nombre }}</h2>
        <p class="text-gray-500">{{ book.descripcion }}</p>
        <p v-if="book.is_read" class="text-gray-500">Leído</p>
        <p v-if="!book.is_read" class="text-gray-500">No lo he leído</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const books = ref([]);
const router = useRouter();

const getAllBooks = async () => {
  try {
    const response = await axios.get("http://localhost:3000/book");
    books.value = response.data;
  } catch (error) {
    console.error("Error al obtener libros:", error);
  }
};

const eliminarLibro = async (id) => {
  try {
    await axios.delete(`http://localhost:3000/book/${id}`);

    books.value = books.value.filter((book) => book.id !== id);
    console.log(`Libro con ID ${id} eliminado exitosamente`);
  } catch (error) {
    console.error(`Error al eliminar libro con ID ${id}:`, error);
  }
};

const editarLibro = (id) => {
  router.push({ name: "EditBook", params: { bookIdToEdit: id } });
};

onMounted(() => {
  getAllBooks();
});
</script>
