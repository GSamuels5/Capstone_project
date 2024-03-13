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

  

<style src="./assets/CSS/style.css">

</style>
