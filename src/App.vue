<script setup>
import Categorie from '@/components/categorie.vue';
import Recherche from '@/components/recherche.vue';
import All from '@/views/all.vue';

</script>

<template>
 <header>
  <div class="navbar">
    <h1>Likasi Market</h1>
    <button>Ajouter mon commerce</button>
  </div>
  <div class="search">
    <Recherche />
  </div>
 </header> 
 <main>
  <RouterView/>
 </main>

</template>
<style scoped>

</style>
