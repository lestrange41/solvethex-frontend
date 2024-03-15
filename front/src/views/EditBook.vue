<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-full max-w-md">
      <h1 class="text-2xl font-bold mb-4 text-center">Editar libro</h1>
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
        <div>
          <label for="is_read" class="block">Leído:</label>
          <input
            type="checkbox"
            v-model="is_read"
            id="is_read"
            class="border border-gray-300 px-4 py-2 w-full rounded-md"
          />
        </div>
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded-md text-center"
        >
          Guardar cambios
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const nombre = ref("");
const descripcion = ref("");
const is_read = ref(false);
const bookIdToEdit = ref(null);

const loadBookToEdit = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/book/${id}`);
    console.log(`http://localhost:3000/book/${id}`);
    const bookData = response.data;
    console.log(response);
    nombre.value = bookData[0].nombre;
    descripcion.value = bookData[0].descripcion;
    is_read.value = Boolean(bookData[0].is_read);
  } catch (error) {
    console.error("Error al cargar los datos del libro:", error);
  }
};

const submitForm = async () => {
  try {
    console.log(
      "name",
      nombre.value,
      "descripcion",
      descripcion.value,
      "is_read",
      is_read.value
    );
    console.log(
      `http://localhost:3000/book/${window.location.href.split("/").pop()}`
    );
    const response = await axios.put(
      `http://localhost:3000/book/${window.location.href.split("/").pop()}`,
      {
        nombre: nombre.value,
        descripcion: descripcion.value,
        is_read: is_read.value,
      }
    );
    console.log("Libro editado correctamente:", response.data);

    router.push("/libros");
    nombre.value = "";
    descripcion.value = "";
    is_read.value = false;
  } catch (error) {
    console.error("Error al guardar cambios:", error);
  }
};

const router = useRouter();

onMounted(() => {
  const bookIdToEdit = window.location.href.split("/").pop();

  loadBookToEdit(bookIdToEdit);
});
</script>
