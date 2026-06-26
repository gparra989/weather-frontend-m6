import { createRouter, createWebHashHistory } from 'vue-router';
import HomeComponent from '@/components/HomeComponent.vue';
import DetalleComponent from '@/components/DetalleComponent.vue';
import AcercaDeComponent from '@/components/AcercaDeComponent.vue'; 

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/lugar/:id', component: DetalleComponent },

  { path: '/acerca-de', component: AcercaDeComponent } 
];

const router = createRouter({
  history: createWebHashHistory(), 
  routes
});

export default router;