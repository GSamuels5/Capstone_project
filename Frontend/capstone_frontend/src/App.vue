<template>
  <div>
    <NavBar />
    <main class="container-fluid" @routeChangeStart="startSpinner" @routeChangeEnd="stopSpinner" >
<router-view />
     <Spinner v-if="showSpinner"/>
    </main>
    <Footer/>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Footer from './components/Footer.vue';
import Spinner from './components/Spinner.vue';


export default {

  components: {
    NavBar,
    Footer,
    Spinner
  },

data(){
    return{
      showSpinner: true,
    }
  },
  methods:{
    startSpinner(){
      this.showSpinner = true;
    },
    stopSpinner(){
      this.showSpinner = false
    }
  },
  mounted(){
    setTimeout(()=>{
      this.showSpinner = false
      this.$emit("routeChangeEnd")
    },1000)
  }
}

</script>

  

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
