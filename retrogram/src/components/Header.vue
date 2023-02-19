<template>
  <header class="p-3 text-bg-dark border-5 border-secondary">
    <div class="container ">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><RouterLink to="/" class="nav-link px-2 text-white">Home </RouterLink></li>
          <li><RouterLink to="/RetroGram" class="nav-link px-2 text-white">RetroGram</RouterLink></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search">
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-secondary me-2">Login</button>
          <button type="button" class="btn btn-secondary">Sign-up</button>
        </div>
      </div>
    </div>

  </header>

</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  img{
    width: 30px;
    margin-right: 3em;
  }
  RouterLink{
    color: white;
  }
</style>