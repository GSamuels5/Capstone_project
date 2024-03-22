<template>
  <nav class="navbar navbar-expand-lg bg-dark-subtle sticky-top ">
    <div class="container-fluid">
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
          <li class="nav-item mx-2">
            <router-link to="/" class="nav-link active" aria-current="page"
              >Home</router-link
            >
          </li>
          <li class="nav-item mx-2">
            <router-link to="/dash" class="nav-link">Dashboard</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link to="/employee" class="nav-link"
              >Employee</router-link
            >
          </li>
          <li class="nav-item mx-2">
            <router-link to="/admin" class="nav-link">Admin</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link to="/contact" class="nav-link">Contact us</router-link>
          </li>
        
        </ul>
        <form class="d-flex" role="search">

          <button class="btn btn-outline-dark bg-primary-subtle w-100" type="submit"><b>Sign-up</b></button>
          <button class="btn btn-outline-dark bg-primary-subtle w-100" @click="logOut"  ><b>Logout</b></button>
        </form>
      </div>
    </div>
  </nav>
  
</template>

<script>
import {useCookies} from "vue3-cookies"
const {cookies} = useCookies()
export default{
  computed:{
    loggedIn(){
      return cookies.get('Worker') !== undefined
    }
  },
  methods:{
    logOut(){
      cookies.remove('Worker')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
@media (300px >= width <= 900px){
.nav-item{
  background-color: none;
}
}
</style>
