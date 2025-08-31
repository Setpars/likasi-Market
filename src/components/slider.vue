<script setup>

import { ref, onMounted } from 'vue'

const slides = [
  { image: '/image/boutiq.jpg', text:"🛍️ Des boutiques variées, des prix accessibles Explorez des dizaines de commerces locaux : mode, artisanat, beauté, maison, enfants… "},
  { image: '/image/food.jpg', text:"🍽️ Restauration authentique et rapide Du fufu braisé aux jus naturels, nos restaurateurs vous proposent des plats savoureux livrés dans toute la ville." },
  { image: '/image/service.jpg', text:"🛠️ Services pratiques à portée de clic Réparation, transport, design, nettoyage, consulting… " },
  { image: '/image/bg2.jpg', text:"Bienvenue sur Likasi Market"}
]
const currentIndex = ref(0)

onMounted(() => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.length
  }, 3000)
})

</script>

<template>
     <div class="slider">
    <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="slide in slides" :key="slide.text" class="slide">
        <img :src="slide.image" :alt="slide.text" />
        <div class="caption">{{ slide.text }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped>

.slider {
  width: 100%;
  max-width: 800px;
  overflow: hidden;
  position: relative;
  border-radius: 9px;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  position: relative;
  min-width: 100%;
}

.slide img {
  width: 100%;
  height: auto;
  display: block;
}

.caption {
  position: absolute;
  bottom: 20px;
  left: 30px;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
}

</style>






