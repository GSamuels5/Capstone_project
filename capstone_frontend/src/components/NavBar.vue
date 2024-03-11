<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary text-black">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link  class="nav-link" href="#">Log out</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link active" aria-current="page" href="#">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/dash" class="nav-link" href="#">Dashboard</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/employees" class="nav-link" href="#">Employees</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin" class="nav-link" href="#">Admin</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link" href="#">Contact us</router-link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</template>

<script>
    export default  {
       name: 'NavBar',
    }
</script>

<style  scoped>

</style>