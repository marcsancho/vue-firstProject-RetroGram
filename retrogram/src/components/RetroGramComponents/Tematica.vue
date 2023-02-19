<script setup>

</script>

<template>
  <section class="py-5 mb-5 mx-0 text-start container-fluid rounded-2 align-content-start"  v-bind:style="{ 'background-image': 'url(' + this.imagenTematica + ')', 'background-size': 'cover', 'background-repeat': 'no-repeat' } ">
    <div class="row py-lg-5">
      <div class="col-lg-auto col-md-9 mx-auto rounded-3 bg-dark text-light text-start align-content-center">
        <bold><h1 id="tituloTematica" class="fw-light pt-3 text-start px-4">{{ this.tematica.titulo }}</h1></bold>
        <p id="descripcionTematica" class="lead text-muted px-4">{{ this.tematica.descripcion }}</p>
        <p class="m-4">
          <a id="botonModificar" type="button" @click="modificarTematica(this.botonModificar)" class="btn btn-primary my-2">Editar tematica</a>
          <a type="button" @click="eliminarTematica" class="btn btn-secondary my-2 ">Eliminar tematica</a>
        </p>
      </div>
    </div>
  </section>

  <div class="container px-4 py-5">
    <h1 class="pb-2 border-bottom border-secondary text-light">Crear nuevo post</h1>
    <form class="form">
      <div class="form-group">
        <label for="titulo" class="form-label text-light mx-3">Descripcion del post</label>
        <input type="text" v-model="descripcion" class="form-control mx-3" placeholder="Descripcion del post" required>
      </div>
      <div class="form-group py-2">
        <label for="titulo" class="form-label text-light mx-3">Busca en unsplash la id de una imagen</label>
        <input type="text" v-model="idImagen" class="form-control mx-3" placeholder="Id de la Imagen de unsplash">
      </div>
      <button type="button" @click="addPost" class="btn btn-primary m-3">Submit</button>
      <small id="mensaje" class="form-text text-muted mx-3">Si no sabe la id de una imagen esta sera una escogida al azar de la misma tematica</small>
    </form>
  </div>

  <div class="container posts-content">
    <div class="row">
      <div class="col-lg-6" v-for="item in PostsTematica">
        <div class="card mb-4 bg-secondary text-light ">
          <div class="card-body">
            <p class="px-3 pt-3">
              {{ item.descripcion }}
            </p>
            <img class="img-fluid p-3 rounded-5" :src="this.ListaUrls[this.i].urls.regular">
          </div>
          <div class="card-footer" v-bind:i="this.i = i++">
            <router-link :to="{
              name: 'Post',
              params: {
                post: parseInt(item.id),
                postImg: String(item.img),
                postDesc: String(item.descripcion),
                tematicaId: parseInt(item.tematicaId)
                },
              }" class="btn btn-tertiary">
              Mas info
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Post from "@/components/RetroGramComponents/Post.vue";
export default {
  name: "Tematica",
  computed: {
    Post() {
      return Post
    }
  },
  data() {
    return {
      botonModificar: false,
      i: 0,
      ListaPosts: [],
      PostsTematica: [],
      tematica: [],
      imagenTematica: "",
      ListaUrls: [],
      descripcion: "",
      idImagen: [],
      tituloTematica: "",
      descripcionTematica: "",
    };
  },
  async created() {
    try {
      const res = await axios.get('http://localhost:3000/tematica/'+this.$route.params.tematica);
      this.tematica = res.data;
      console.log(this.tematica)

      const posts = await axios.get('http://localhost:3000/posts');
      this.ListaPosts = posts.data;
      for(let i=0; i < this.ListaPosts.length; i++){
        if (parseInt(this.ListaPosts[i].tematicaId) == this.tematica.id){
          this.PostsTematica.push(this.ListaPosts[i])
        }
      };

      await this.$unsplash.getPhoto(this.tematica.imagenPortada).then(result => {
        this.imagenTematica=result.urls.regular;
      })

      for (let i=0; i<this.PostsTematica.length;i++){
          this.ListaUrls.push(await this.$unsplash.getPhoto(this.PostsTematica[i].img).then(result => {
            return result;
          }))}

    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async eliminarTematica() {
      try {
        for(let i=0; i< this.ListaPosts; i++){
          if (this.ListaPosts[i].tematicaId == this.tematica.id){
            await axios.delete('http://localhost:3000/posts/' + this.ListaPosts[i])
          }
        }
        await axios.delete('http://localhost:3000/tematicas' + this.tematica.id)
      } catch (error){
        console.log(error)
      }
    },
    async modificarTematica() {
    try {
        console.log(this.tematica)
        const titulo = document.getElementById('tituloTematica')
        titulo.innerHTML = "<input type='text' v-model='tituloTematica' value='" + this.tematica.titulo + "' />";

        const descripcion = document.getElementById('descripcionTematica')
        descripcion.innerHTML = "<input type='text' v-model='descripcionTematica' value='" + this.tematica.descripcion + "' />";

        const boton = document.getElementById('botonModificar');

        const promise = new Promise((resolve) => {
          boton.addEventListener('click', resolve);
        });
        async function onConfirm() {
          let id = this.tematica.id
          console.log(this.tematica + 2)
          await axios.patch('http://localhost:3000/tematica/' + id, {
            titulo: this.tituloTematica,
            descripcion: this.descripcionTematica,
          })
          console.log(this.tematica + 3.5)
          const titulo = document.getElementById('tituloTematica')
          titulo.innerHTML = "<h1 id='tituloTematica' class='fw-light pt-3 texclassNamert px-4' value='" + this.tematica.titulo + "' />";
          const descripcion = document.getElementById('descripcionTematica')
          descripcion.innerHTML = "<p id='descripcionTematica' class='lead text-muted px-4' value='" + this.tematica.descripcion + "' />";
        }

        async function waitClick() {
          return await promise
              .then(onConfirm)
        }

        waitClick();
    } catch (error) {
        console.log(error)
      }
    },
    async addPost() {
      if (this.idImagen == ""){
        this.idImagen = await this.$unsplash.getCollection(this.tematica.coleccion);
        this.idImagen = this.idImagen[2].id
      } else {
        this.idImagen = await this.$unsplash.getPhoto(this.idImagen);
        this.idImagen = this.idImagen.id
      }
      try {
        await axios.post('http://localhost:3000/posts/', {
              img: this.idImagen,
              descripcion: this.descripcion,
              tematicaId: this.tematica.id
        });
      } catch (error) {
        console.log(error)
      }
    },

  }
}
</script>

<style scoped>
  .bg-secondary {
    background-color: #333333 !important;
  }
</style>