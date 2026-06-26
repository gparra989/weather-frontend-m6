<script setup>
import { ref, computed } from 'vue'
import db from '../../db.json'

const listaCiudades = ref(db.ciudades)
const textoBuscado = ref('')

const ciudadesFiltradas = computed(() => {
  return listaCiudades.value.filter(ciudad =>
    ciudad.nombre.toLowerCase().includes(textoBuscado.value.toLowerCase())
  )
})
</script>

<template>
  <div class="container my-4">
    <h2 class="text-center mb-4">Buscador de Clima</h2>

    <div class="mb-4">
      <input 
        type="text" 
        v-model="textoBuscado" 
        class="form-control" 
        placeholder="Escribe el nombre de una ciudad..."
      />
    </div>

    <div v-if="ciudadesFiltradas.length === 0" class="text-center text-muted">
      <p>No se encontró ninguna ciudad con ese nombre.</p>
    </div>

    <div v-else class="row g-3">
      <div v-for="ciudad in ciudadesFiltradas" :key="ciudad.id" class="col-12 col-md-4">
        <!-- Router-link envuelve toda la card -->
        <router-link 
          :to="'/lugar/' + ciudad.id" 
          class="card p-3 text-center shadow-sm text-decoration-none text-dark"
        >
          <h4>{{ ciudad.nombre }}</h4>
          <p class="fs-5 m-0">Actual: {{ ciudad.estadoActual }}</p>
          <p class="fw-bold text-primary">{{ ciudad.tempMax }}°C / {{ ciudad.tempMin }}°C</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
