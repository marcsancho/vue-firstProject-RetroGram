<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <main class="bg-dark">
    <Header />
    <div class="container-fluid d-flex justify-content-center text-bg-dark border-secondary border-bottom border-5">
      <RouterLink to="/"><img src="@/assets/DarkLogo.png" class="img-fluid" /></RouterLink>
    </div>
    <suspense>
      <RouterView />
    </suspense>
    <Footer />
  </main>
</template>

<script>
export default {
  name: "App"
}
</script>

<style scoped>

</style>
