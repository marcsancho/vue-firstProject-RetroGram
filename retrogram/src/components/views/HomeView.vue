<script setup>
import Carousel from "@/components/HomeComponents/CarouselMain.vue";
</script>

<template>
  <Carousel />
</template>

<script>
export default {
  name: "Home",
  computed: {
    username() {
      return this.$route.params.username
    },
  },
  methods: {
    goToDashboard() {
      if (isAuthenticated) {
        this.$router.push('/dashboard')
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped>

</style>
