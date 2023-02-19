<template>
  <div class="container px-4 py-5">
    <h1 class="pb-2 border-bottom border-secondary text-light">Crear Tematica</h1>
    <form class="form">
      <div class="form-group">
        <label for="Titulo" class="form-label text-light mx-3">Titulo de la tematica</label>
        <input type="text" v-model="titulo" class="form-control mx-3" placeholder="Nombre de la Tematica" required>
      </div>
      <div class="form-group">
        <label for="Descripcion" class="form-label text-light mx-3">Descripcion de la tematica</label>
        <input type="text" v-model="descripcion" class="form-control mx-3" placeholder="Descripcion de la Tematica" required>
      </div>
      <div class="form-group">
        <label for="Coleccion" class="form-label text-light mx-3">Busca o cambia la id de una coleccion (esta la obtendras en unsplash.com)</label>
        <input type="text" v-model="coleccion" class="form-control mx-3" placeholder="Id de la Coleccion de unsplash">
      </div>
      <button type="button" @click="modificarTematica" class="btn btn-primary m-3">Enviar</button>
    </form>
  </div>
</template>

<script>

import axios from "axios";
export default {
  name: "CrearTematica",
  data(){
    return {
      titulo: "",
      descripcion: "",
      coleccion: "",
      tematicas: [],
      imagen: [],
    }
  },
  async created() {
    this.tematicas = await axios.get('http://localhost:3000/tematica');
    this.tematicas = this.tematicas.data;

  },
  methods: {
    async modificarTematica(){
      for (let i = 0; i < this.tematicas.length; i++){
        if (this.titulo == this.tematicas[i].titulo){
          await axios.patch('http://localhost:3000/tematica/' + this.tematicas[i].id, {
            descripcion: this.descripcion
          });
        } else if (this.coleccion == ""){
          this.imagen = await this.$unsplash.random(1, 'landscape');
          this.imagen = this.imagen.id;
          console.log(this.imagen)
          await axios.post('http://localhost:3000/tematica/', {
            titulo: this.titulo,
            descripcion: this.descripcion,
            imagenPortada: this.imagen,
            coleccion: "2183133",
          })

        }
      }
    }
  }
}

</script>
<!-- Home: 2183133 -->
<style scoped>

</style>