<template>
  <div class="container px-4 py-5">
    <h1 class="pb-2 border-bottom border-secondary text-light">Crear Tematica</h1>
    <form class="form" @submit.prevent="modificarTematica">
      <div class="form-group">
        <label for="Titulo" class="form-label text-light mx-3">Titulo de la tematica</label>
        <input type="text" name="titulo" class="form-control mx-3" placeholder="Nombre de la Tematica" required>
      </div>
      <div class="form-group">
        <label for="Descripcion" class="form-label text-light mx-3">Descripcion de la tematica</label>
        <input type="text" name="descripcion" class="form-control mx-3" placeholder="Descripcion de la Tematica" required>
      </div>
      <div class="form-group">
        <label for="Coleccion" class="form-label text-light mx-3">Busca o cambia la id de una coleccion (esta la obtendras en unsplash.com)</label>
        <input type="text" name="coleccion" class="form-control mx-3" placeholder="Id de la Coleccion de unsplash">
      </div>
      <button type="button" class="btn btn-primary m-3">Enviar</button>
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
      tematica: [],
      imagen: [],
    }
  },
  async created() {
    this.tematicas = await axios.get('http://localhost:3000/tematica');
    this.tematicas = this.tematicas.data;

  },
  methods: {
    async modificarTematica(submitEvent){
      this.titulo = submitEvent.target.elements.titulo.value
      this.descripcion = submitEvent.target.elements.descripcion.value
      this.coleccion = submitEvent.target.elements.coleccion.value
      console.log('Estoy dentro del metodo')
      for (let i = 0; i < this.tematicas.length; i++){
        console.log('Estoy dentro de el for')
        console.log(titulo)
        if (titulo == this.tematicas[i].titulo){
          console.log('Estoy dentro de el if')
          await axios.patch('https://localhost:3000/tematica/' + this.tematicas[i].id, {
            descripcion: descripcion
          });
          console.log('He hecho el patch')
        } else {

        }
      }
    }
  }
}

</script>
<!-- Home: 2183133 -->
<style scoped>

</style>