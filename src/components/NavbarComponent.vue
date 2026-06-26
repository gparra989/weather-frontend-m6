<script setup>
import { ref } from 'vue'

const esColapsado = ref(true)

function toggleMenu() {
  esColapsado.value = !esColapsado.value
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light navbar__bg">
      <div class="container-fluid">
        
        
        <router-link class="navbar-brand" to="/">TuClima</router-link>

        
        <button
          class="navbar-toggler"
          type="button"
          @click="toggleMenu"
          :aria-expanded="!esColapsado"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        
        <div 
          class="collapse navbar-collapse"
          :class="{ show: !esColapsado }"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <router-link 
              class="nav-link" 
              to="/acerca-de"
              active-class="active"
            >
              Acerca de
            </router-link>
          </div>
        </div>

      </div>
    </nav>
  </header>
</template>
