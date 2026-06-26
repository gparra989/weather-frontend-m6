<script setup>
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <main>
    <NavbarComponent />
    <router-view />
    <FooterComponent />
  </main>
</template>
