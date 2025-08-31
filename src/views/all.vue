<script setup>
import Card from '@/components/card.vue';
import { ref } from "vue";
import data from "@/services/card"

let sections=ref([])

const showAll=()=>{
    sections.value=data.read()
    console.log(sections.value);
    }

const showServices=()=>{
    sections.value=data.read()
    sections.value=sections.value.filter(element => element.name =='Services')
    console.log(sections.value);
    }

const showBoutique=()=>{
    sections.value=data.read()
    sections.value=sections.value.filter(element => element.name =='Boutique')
    console.log(sections.value);
    }

const showAutre=()=>{
    sections.value=data.read()
    sections.value=sections.value.filter(element => element.name =='Autres')
    console.log(sections.value);
    }

const showResto=()=>{
    sections.value=data.read()
    sections.value=sections.value.filter(element => element.name =='Restauration')
    console.log(sections.value);
    }

window.onload=showAll()
</script>

<template>
    <section class="categorie">
     <ul>
        <li><RouterLink to="/">Acceuil</RouterLink></li>
        <li @click="showAll"><RouterLink to="#">Tous</RouterLink></li>
        <li @click="showServices">Services</li> 
        <li @click="showBoutique">Boutique</li>
        <li @click="showResto">Restauration</li>
        <li @click="showAutre">Autres</li>
     </ul>
    </section>
    <section v-for="section in sections" :key="section.name" class="resto">
    <h2>{{ section.name }}</h2>
    <div class="sectionCard">
      <div class="cardContain" v-for="item in section.items" :key="section.name" >
        <div class="card">
          <div class="img">
            <img :src="item.image" :alt="item.image">
          </div>
          <h3>{{ item.nom }}</h3>
          <span class="categ">{{ section.name }}</span>
          <br> 
          <div class="description" v-for="items in item.items" :key="section.name" >
            <li>{{items}}</li>
          </div>
          <div class="action">
            <button>{{ item.btn }}</button>
          </div>
        </div>
    </div>
    </div>
  </section>
  
</template>
<style scoped>
.sectionCard{
width: 100%;
 display: grid;
 grid-template-columns: 50% 50%;
 gap: 20px;

}
.cardContain{
    width: 100%;
}
.card{
    width: 100%;
}

h2{
    width: 100%;
    background: rgb(243, 243, 245);
    
}

.description{
    list-style: circle;
    padding: 0;
}






</style>