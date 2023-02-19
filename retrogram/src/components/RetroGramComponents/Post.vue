<template>

  <div id="theme-card" class="card text-center bg-dark text-light">
    <div class="card-body container-fluid align-content-start">
      <h5 class="card-title text-start py-5 px-5 overflow-hidden">{{this.postDesc}}</h5>
      <img class="card-img mw-75 " :src="this.array.urls.full">
    </div>
  </div>
  <a id="botonModificar" type="button"  class="btn btn-primary my-2">Editar tematica</a>
  <a type="button" @click="eliminarPost" class="btn btn-secondary my-2 ">Eliminar tematica</a>
</template>

<script>
import axios from "axios";
export default {
  name: "Post",
  data() {
    return {
      postId: this.$route.params.post,
      postDesc: this.$route.params.postDesc,
      postImg: this.$route.params.postImg,
      array: [],
    }
  },
  methods: {
    async eliminarPost(){
      await axios.delete('http://localhost:3000/posts/' + this.postId);
    }
  },
  async created() {
    try {
      const promise = await this.$unsplash.getPhoto(this.postImg);
      this.array = promise;
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style scoped>
  img{
    Max-width: 75vh;
  }
</style>