<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/dash" class="nav-link">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/employees" class="nav-link"
              >Employees</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/checkout" class="nav-link">Checkout</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact us</router-link>
          </li>
        
        </ul>
        <form class="d-flex" role="search">
          
          <button class="btn btn-outline-success w-100" type="submit">Log out</button>
        </form>
      </div>
    </div>
  </nav>
  
</template>

<script></script>

<style scoped></style>
