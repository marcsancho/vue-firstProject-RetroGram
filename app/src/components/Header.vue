<template>
    <header class="p-3 text-light bg-dark">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                        <use xlink:href="#bootstrap"></use>
                    </svg>
                </a>
    
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><RouterLink to="/" class="nav-link px-2 text-secondary">Home</RouterLink></li>
                    <li>
                        <RouterLink to="/RetroGram" class="nav-link px-2 text-secondary">RetroGram</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/Galeria" class="nav-link px-2 text-secondary">Galeria</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/Perfil" class="nav-link px-2 text-secondary">Perfil</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/Ayuda" class="nav-link px-2 text-secondary">Ayuda</RouterLink>
                    </li>
                </ul>
    
                <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                    <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Buscar Usuario..."
                        aria-label="Search">
                </form>
    
                <div class="text-end">
                    <button type="button" class="btn btn-outline-color me-2">Login</button>
                    <button type="button" class="btn btn-primary">Sign-up</button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        components: {}
    }
</script>