<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold mb-4 text-center">Lista de libros:</h1>
    <router-link to="/" class="text-black text-xl font-bold mx-4"
      >Libros</router-link
    >
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="book in books"
        :key="book.id"
        class="bg-white rounded-lg shadow-md p-4"
      >
        <button
          @click="editarLibro(book.id)"
          class="mb-2 bg-blue-500 text-white px-4 py-2 rounded-md text-center"
        >
          Editar
        </button>
        <button
          @click="eliminarLibro(book.id)"
          style="
            cursor: pointer;
            display: inline-block;
            border: none;
            background: none;
            padding: 0;
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x-circle"
            viewBox="0 0 16 16"
            style="color: black"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
            />
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </button>
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
import { useRouter } from "vue-router"; // Importa el enrutador de Vue

const books = ref([]);
const router = useRouter(); // Asigna el enrutador

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
    // Eliminar el libro de la lista después de eliminarlo del servidor
    books.value = books.value.filter((book) => book.id !== id);
    console.log(`Libro con ID ${id} eliminado exitosamente`);
  } catch (error) {
    console.error(`Error al eliminar libro con ID ${id}:`, error);
  }
};

const editarLibro = (id) => {
  // Redirigir a la vista de edición del libro con el ID correspondiente
  router.push({ name: "EditBook", params: { bookIdToEdit: id } });
};

// obtener libros cuando el componente se monta
onMounted(() => {
  getAllBooks();
});
</script>