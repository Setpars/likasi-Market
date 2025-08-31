<script setup>
import Card from '@/components/card.vue';
import { ref } from "vue";
import data from "@/services/card"
const sections=[
  {
    "name": "Restauration",
    "items": [
      { "nom": "Chez Mama Rose", "image": '/image/boutiq.jpg',"btn":"Consultez le menu", "items": ["Fufu", "Poulet braisé"], "livraison": true },
      { "nom": "Boulangerie Likasi", "image": "/image/resto.jpg","btn":"Consultez le menu", "items": ["Pain", "Croissants"], "livraison": true },
      { "nom": "Snack Express", "image": "/image/resto.jpg","btn":"Consultez le menu","items": ["Burger", "Frites"], "livraison": false },
      { "nom": "Jus Nature", "image": "/image/resto.jpg","btn":"Consultez le menu", "items": ["Jus de mangue", "Jus de bissap"], "livraison": true },
      { "nom": "Grill Likasi", "image": "/image/resto.jpg","btn":"Consultez le menu", "items": ["Brochettes", "Plantains"], "livraison": false },
      { "nom": "Mama Mado", "image": "/image/resto.jpg","btn":"Consultez le menu", "items": ["Saka Saka", "Riz coco"], "livraison": true },
      { "nom": "Délices du Congo", "image": "/image/resto.jpg", "items": ["Liboke", "Ngulu"], "livraison": true },
      { "nom": "Likasi Pizza", "image": "/image/resto.jpg","btn":"Consultez le menu", "items": ["Pizza viande", "Pizza veggie"], "livraison": false },
      { "nom": "Tchop & Yamo", "image": "/image/resto.jpg","btn":"Consultez le menu", "items": ["Ndolé", "Baton de manioc"], "livraison": true },
      { "nom": "Café Central", "image": "/image/resto.jpg","btn":"Consultez le menu", "items": ["Café", "Viennoiseries"], "livraison": false }
    ]
  },
  {
    "name": "Boutique",
    "items": [
      { "nom": "Likasi Style", "image": "/image/boutique.jpg","btn":"Consulter le catalogue", "items": ["T-shirts wax", "Sacs raphia"], "livraison": false },
      { "nom": "Mode Élite", "image": "/image/boutiques.jpg","btn":"Consulter le catalogue", "items": ["Robes", "Chaussures"], "livraison": true },
      { "nom": "Bijoux Likasi", "image": "/image/boutique.jpg","btn":"Consulter le catalogue", "items": ["Colliers", "Bracelets"], "livraison": false },
      { "nom": "Beauté Naturelle", "image": "/image/boutique3.jpg","btn":"Consulter le catalogue", "items": ["Crèmes", "Savons bio"], "livraison": true },
      { "nom": "Maison Chic", "image": "/image/boutique.jpg","btn":"Consulter le catalogue", "items": ["Rideaux", "Coussins"], "livraison": false },
      { "nom": "Artisanat Likasi", "image": "/image/boutique2.jpg","btn":"Consulter le catalogue", "items": ["Objets déco", "Statues bois"], "livraison": true },
      { "nom": "Kids Fashion", "image": "/image/boutique.jpg","btn":"Consulter le catalogue", "items": ["Vêtements enfants", "Chaussures bébé"], "livraison": false },
      { "nom": "Wax & Co", "image": "/image/boutique3.jpg","btn":"Consulter le catalogue", "items": ["Pagne", "Vestes wax"], "livraison": true },
      { "nom": "Access Likasi", "image": "/image/boutique2.jpg","btn":"Consulter le catalogue", "items": ["Montres", "Lunettes"], "livraison": false },
      { "nom": "Déco Express", "image": "/image/boutiques.jpg","btn":"Consulter le catalogue", "items": ["Lampes", "Tableaux"], "livraison": true }
    ]
  },
  {
    "name": "Services",
    "items": [
      { "nom": "Coiffure Divine", "image": "/image/service.jpg","btn":"Réservez un service maintenant", "items": ["Tresses", "Défrisage"], "livraison": false },
      { "nom": "Tech Repair", "image": "/image/service.jpg","btn":"Réservez un service maintenant", "items": ["Réparation téléphone", "PC"], "livraison": true },
      { "nom": "Transport Likasi", "image": "/image/service.jpg","btn":"Réservez un service maintenant", "items": ["Moto-taxi", "Livraison colis"], "livraison": true },
      { "nom": "Studio Photo", "image": "/image/service.jpg","btn":"Réservez un service maintenant", "items": ["Portraits", "Événements"], "livraison": false },
      { "nom": "Design Graphique", "image": "/image/service.jpg","btn":"Réservez un service maintenant", "items": ["Logos", "Flyers"], "livraison": true },
      { "nom": "Nettoyage Pro", "image": "/image/service.jpg","btn":"Réservez un service maintenant", "items": ["Bureaux", "Maisons"], "livraison": true },
      { "nom": "Impression Rapide", "image": "/image/service.jpg","btn":"Réservez un service maintenant", "items": ["Cartes", "Affiches"], "livraison": false },
      { "nom": "Événementiel Likasi", "image": "/image/service.jpg","btn":"Réservez un service maintenant", "items": ["Décoration", "Sonorisation"], "livraison": true },
      { "nom": "Consulting Web", "image": "/image/service.jpg","btn":"Réservez un service maintenant", "items": ["Sites web", "SEO"], "livraison": false },
      { "nom": "Cours Privés", "image": "/image/service.jpg","btn":"Réservez un service maintenant", "items": ["Maths", "Informatique"], "livraison": true }
    ]
  },
  {
    "name": "Autres",
    "items": [
      { "nom": "Occasions Likasi", "image": "/image/service2.jpg","btn":"Réservez un service maintenant", "items": ["Téléphone", "Vélo"], "livraison": true },
      { "nom": "Recyclage Express", "image": "/image/service2.jpg","btn":"Réservez un service maintenant", "items": ["Plastique", "Métal"], "livraison": false },
      { "nom": "Petites Annonces", "image": "/image/service2.jpg","btn":"Réservez un service maintenant", "items": ["Offres d’emploi", "Vente terrain"], "livraison": true },
      { "nom": "Livres & BD", "image": "/image/service2.jpg","btn":"Réservez un service maintenant", "items": ["Romans", "Bandes dessinées"], "livraison": false },
      { "nom": "Meubles d’occasion", "image": "/image/service2.jpg","btn":"Réservez un service maintenant", "items": ["Canapé", "Table bois"], "livraison": true },
      { "nom": "Électronique Reconditionnée", "image": "/image/service2.jpg","btn":"Réservez un service maintenant", "items": ["TV", "Radio"], "livraison": false },
      { "nom": "Vêtements Seconde Main", "image": "/image/service2.jpg","btn":"Réservez un service maintenant", "items": ["Jeans", "Vestes"], "livraison": true },
      { "nom": "Objets Rares", "image": "/image/service2.jpg","btn":"Réservez un service maintenant", "items": ["Antiquités", "Pièces uniques"], "livraison": false },
      { "nom": "Matériel Scolaire", "image": "/image/service2.jpg","btn":"Réservez un service maintenant", "items": ["Cahiers", "Stylos"], "livraison": true },
      { "nom": "Accessoires Moto", "image": "/image/service2.jpg","btn":"Réservez un service maintenant", "items": ["Casques", "Gants"], "livraison": false }
    ]
  }
]


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