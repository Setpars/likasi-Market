<script setup>
import Card from '@/components/card.vue';
import Categorie from '@/components/categorie.vue';
import Slider from '@/components/slider.vue';
</script>

<template>
 <main>
  <section class="categorie">
    <Categorie/>
  </section>
  <section class="slider">
    <Slider/>
  </section>
  <section class="resto">
    <Card/>
  </section>
 </main>

</template>
<style scoped>

</style>
