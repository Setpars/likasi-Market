<template>
  <div v-if="loading" id="preloader">
    <div class="loader"></div>
    <p>Chargement de Likasi Market...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const loading = ref(true);

onMounted(() => {
  window.addEventListener("load", () => {
    loading.value = false;
  });
});
</script>
