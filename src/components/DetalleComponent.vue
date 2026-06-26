<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

                    
import db from '../../db.json';

const route = useRoute();


const ciudad = computed(() => {
  const idUrl = parseInt(route.params.id);
  return db.ciudades.find(c => c.id === idUrl);
});

const cuentas = computed(() => {
  if (!ciudad.value) return null;

  const minimas = ciudad.value.pronosticoSemanal.map(dia => dia.min);
  const maximas = ciudad.value.pronosticoSemanal.map(dia => dia.max);

  const minimaMasBaja = Math.min(...minimas);
  const maximaMasAlta = Math.max(...maximas);

  const sumaMin = minimas.reduce((total, num) => total + num, 0);
  const sumaMax = maximas.reduce((total, num) => total + num, 0);
  const totalDias = ciudad.value.pronosticoSemanal.length;

  return {
    minimaMasBaja,
    maximaMasAlta,
    promedioMin: Math.round(sumaMin / totalDias),
    promedioMax: Math.round(sumaMax / totalDias)
  };
});
</script>

<template>

  <div class="container my-4" v-if="ciudad">

    <h2 class="text-center">{{ ciudad.nombre }}</h2>
    <p class="text-center text-muted mb-4">Estadísticas y pronóstico semanal</p>

    <div class="row g-4">
      <div class="col-12 col-md-7">
        <h4>Días de la semana</h4>
        <div class="list-group">
          <div v-for="item in ciudad.pronosticoSemanal" :key="item.dia" class="list-group-item d-flex justify-content-between align-items-center">
            <strong>{{ item.dia }}</strong>
            <span class="text-muted">{{ item.estado }}</span>
            <span>{{ item.max }}°C / {{ item.min }}°C</span>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-5">
        <h4>Resumen</h4>
        <div class="card p-3 bg-light shadow-sm" v-if="cuentas">
          <p><strong>Temperatura Mínima:</strong> {{ cuentas.minimaMasBaja }}°C</p>
          <p><strong>Temperatura Máxima:</strong> {{ cuentas.maximaMasAlta }}°C</p>
          <hr>
          <p><strong>Promedio de temperaturas Mínimas:</strong> {{ cuentas.promedioMin }}°C</p>
          <p><strong>Promedio de temperaturas Máximas:</strong> {{ cuentas.promedioMax }}°C</p>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="container my-5 text-center text-danger">
    <h3>Error: Esta ciudad no se encuentra en nuestros registros.</h3>
    <router-link to="/" class="btn btn-primary mt-2">Regresar a la lista</router-link>
  </div>
</template>