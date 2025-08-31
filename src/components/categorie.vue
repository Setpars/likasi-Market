<script setup>
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


</script>
<template>
    <ul>
        <li><RouterLink to="/">Acceuil</RouterLink></li>
        <li><RouterLink to="/All">Catégories</RouterLink></li>
    </ul>
</template>

