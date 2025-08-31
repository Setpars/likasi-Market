<script setup>
import data from "@/services/card"
import { ref } from "vue";
let sections=ref([])
sections.value=data.read()
</script>
<template>
  <section v-for="section in sections" :key="section.name">
    <h2>{{ section.name }}</h2>
    <div class="sectionCard">
      <div class="cardContain" v-for="item in section.items" :key="section.name" >
        <div class="card">
          <div class="img">
            <img :src="item.image" :alt="item.image">
          </div>
          <h3>{{ item.nom }}</h3>
          <h4 class="categ">{{ section.name }}</h4>
          <div class="description" v-for="items in item.items" :key="section.name" >
           <li>{{items}}</li>
          </div>
          <div class="action">
            <button>{{ item.btn}}</button>
          </div>
        </div>
    </div>
    </div>
  </section>
</template>

<style scoped>
  section{
    display: flex;
    width: 100%;
    position: relative;
    flex-direction: column;
  }
  .cardContain{
    width: 100%;
  }
 .sectionCard{
  display: flex;
  overflow-y: auto;
  width: 100%;
 }
 .card{
   display: flex;
   flex-direction: column;
   width: 180px;
   margin-right:20px;
 }
 .description{
  padding: 0;
 }
</style>