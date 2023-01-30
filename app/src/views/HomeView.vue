<template>
  <div class="home">
    <Carousel />  
    <MainContent />
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import MainContent from '@/components/MainContent.vue'


export default {
  name: 'HomeView',
  components: {
    Carousel,
    MainContent
  }
}
</script>


