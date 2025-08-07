<script setup>
import { onMounted, ref } from 'vue';
import Card from './components/card.vue';
import Preload from './components/preload.vue';
const loading = ref(true);


onMounted(async () => {
  // Attendre que les polices et le CSS soient prêts
  await document.fonts.ready;
  requestAnimationFrame(() => {
    loading.value = false;
  })});
</script>

<template>
  <link rel="stylesheet" href="/src/assets/image/style.css">
  <Preload v-if="loading"/> 
  <body v-else>
    <header>
    <h1>🛍️ Likasi Market</h1>
    <p>
      Découvre les commerçants et artisans de Likasi et contacte-les facilement !
    </p>
  </header>
  <main>
   <Card/>
  </main>
   <footer>
    <p>Vous êtes commerçant à Likasi ?</p>
    <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="WhatsApp" width="20" style="vertical-align: middle;">
    <a href="https://wa.me/message/3KDY4AQVNZNHO1" target="_blank" style="font-weight: bold; color: green;">
    Cliquez ici pour ajouter votre commerce via WhatsApp
    </a>
    <p>© 2025 Likasi Market - Projet de Seth Kevin</p>
  </footer>
  </body>
</template>

