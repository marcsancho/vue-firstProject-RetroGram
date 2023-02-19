
<template>
  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div  class="carousel-inner" v-for="item in this.array" :key="item.id">
      <div v-bind:class="item.id == this.array[0].id?'carousel-item active':'carousel-item'">
        <img :src="item.urls.regular" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      array: [],
    }
  },
  methods: {
    async getImagenes() {
      try {
        const promise = await this.$unsplash.random(3, 'landscape');
        console.log(promise);
        this.array = promise;
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.getImagenes()
  }
}
</script>
