<script setup>
 import CrearTematica from "@/components/RetroGramComponents/CrearTematica.vue";
 console.log(CrearTematica)
</script>

<template>

  <div class="container px-4 py-5" id="custom-cards">
    <h1 class="pb-2 border-bottom border-secondary text-light">Todas las tematicas de RetroGram</h1>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div class="col" v-for="item in ListaTematicas" :key="item.id">
        <div id="fondo" class="h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" v-bind:style="{ 'background-image': 'url(' + this.ListaUrls[item.id].urls.regular + ')', 'background-size': 'cover;' } ">
          <RouterLink :to="{ name: 'Tematica', params: { tematica: parseInt(item.id) }, }" class="d-flex flex-column py-5 text-black text-shadow-1">
            <h2 class="py-5 my-5 lh-1 display-6 text-black fw-bold text-center">{{ item.titulo }}</h2>
          </RouterLink>
        </div>
      </div>

    </div>
  </div>

  <CrearTematica />

</template>

<script>

import axios from "axios";
export default {
  name: "RetroGram",
  data() {
    return {
      ListaTematicas: [],
      ListaUrls: [],
    };
  },
  async created() {
    try {
      const res = await axios.get('http://localhost:3000/tematica');
      this.ListaTematicas = res.data;
      for (let i = 0; i < res.data.length; i++) {
        this.ListaUrls.push(await this.$unsplash.getPhoto(this.ListaTematicas[i].imagenPortada).then(result => {
          return result;
        }))
      }
    } catch (error) {
      console.log(error);
    };

  },
}
</script>

<style scoped>
#fondo{
  opacity: 0.8;
  color: black;
}
.card{
  --bs-card-height: 300px;
}
</style>