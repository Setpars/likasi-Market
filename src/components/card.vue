<script setup>
import vendeur from '@/services/task.js'
import { ref } from 'vue'
const vendeurs =ref([
  {
    name: "Mama Mado - Légumes frais",
    description: "Des légumes bio chaque jour au marché central de Likasi.",
    image: "https://images.pexels.com/photos/33136498/pexels-photo-33136498.jpeg",
    typeActivité:"vente",
    adresse:'LIKASI',
    whatsapp: "+243831271968"

  },
  {
    name: "Tony - Vêtements pour hommes",
    description: "Vêtements classe et pas chers. Livraison dans toute la ville.",
    typeActivité:"vente",
    image: "https://images.pexels.com/photos/33136498/pexels-photo-33136498.jpeg",
    adresse:'LIKASI',
    whatsapp: "+243831271968"
  },
  {
    name: "Bakery Likasi",
    description: "Pain, gâteaux, croissants... Livraison possible.",
    typeActivité:"vente",
    image: "https://images.pexels.com/photos/33136498/pexels-photo-33136498.jpeg",
    adresse:'LIKASI',
    whatsapp: "+243831271968"

  }
])

//let vendeurs = ref([])
//vendeurs.value = vendeur.read()
</script>

<template>
  <div class="card" v-for="vendeur in vendeurs" :key="vendeur.name">
   <img :src="vendeur.image" :alt="vendeur.name"/>
    <div class="card-content" style="position: relative;">
      <span style="width: fit-content; border-radius: 20px; box-shadow: 0 0 2px black; padding: 0 10px;">
        {{ vendeur.typeActivité }}
      </span>
      <h3>{{ vendeur.name }}</h3>
      <p>{{ vendeur.description }}</p>
      <p style="position: absolute; bottom: -40px; font-weight: bold;">
        {{ vendeur.adresse }}
      </p>
    </div>
    <a :href="`https://wa.me/${vendeur.whatsapp}`" target="_blank" rel="noopener" class="btn-whatsapp">
      <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="WhatsApp" style="vertical-align: middle; width: 20px; height: 20px;">
      Contacter sur WhatsApp
    </a>
  </div>
</template>
