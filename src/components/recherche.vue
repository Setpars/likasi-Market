<script setup>
import { ref } from "vue"
import section from "@/services/card"

const sections = ref(section.read() ?? []) // sécurise l'import


</script>

<template>
  <div class="input">
    <input
      type="text"
      v-model="recherche"
      placeholder="Rechercher un commerce, un produit..."
    />
    <button @click="filter">Recherche</button>
    </div>
   
</template>
