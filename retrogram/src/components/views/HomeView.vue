<script setup>
import Carousel from "@/components/HomeComponents/CarouselMain.vue";
</script>

<template>
  <Carousel />

  <div class="row flex-lg-row-reverse align-items-center g-5 py-5 text-bg-dark">
    <div class="col-lg ">
      <h1 class="display-5 fw-bold lh-1 mb-3 ps-4">Accede a RetroGram</h1>
      <p class="lead px-4">RetroGram es una red social en web en la cual podras subir tus fotografias, para compartirlas en un futuro, con otros usuarios. Estamos avanzando para conseguir crear usuarios correctamente y asi hacer un mejor control de los posts que se van subiendo a la web. <br> Por el momento se podran publicar imagenes en los distintos foros que la comunidad irá creando, donde se podran compartir experiencias mediante las imagenes.</p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-center mb-3">
        <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Accede a RetroGram</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Sube tu propio post en Amaneceres</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
}
</script>
