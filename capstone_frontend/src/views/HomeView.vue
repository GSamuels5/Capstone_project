<template>
  <div class=" container-fluid home "  >
    <h1>Home</h1>
    <div class="clock ">
      <button id="singin" class="p-4 rounded-2 m-5" @click="showLoginComp">Clock-in</button>
     
    </div>
    <div id="employees" class="row justify-content-center mb-4  m-auto" v-show="!showLogin">
      <div class="bbg  mb-2 row "><span>Total employees</span></div>
      <div class=" bbg mb-2  row"><span>Total Departments</span></div>
      <div class="bbg mb-2  row"><span>Total active employees</span></div>
    </div>
    <LoginView v-if="showLogin"/>
  </div>
</template>

<script>
import LoginView from './LoginView.vue'



export default {
  name: 'HomeView',
  components: {
  LoginView
  },
  data(){
    return{
      showLogin: false//do to not show login component
    }
  },
  methods:{
    showLoginComp(){

      this.showLogin = true
      // show login component if clicked
    }
  }
}
</script>
<style scoped>
.clock{
  position: relative;
  animation: fallDown 1.5s ease forwards;
}
@keyframes fallDown{
  from{
    transform: translateY(-100%);
    opacity: 0;
  }
  to{
    transform: translateY(0);
    opacity: 1;
  }
}
@media (300px<= width<=900px){
   .clock{
    font-size: smaller;
   } 
#employees{
  display: flex;
  flex-direction: column;
  align-items: center;

}
.bbg{
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
  justify-content: center;
}
}
</style>
