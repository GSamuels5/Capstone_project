<template>
  <div class=" container-fluid home "  >
    <h1>Home</h1>
    <div class="clock ">
      <button id="singin" class="p-4 rounded-2 m-5" @click="showLoginComp">Clock-in</button>
     
    </div>
    <div class="row justify-content-center mb-4" v-show="!showLogin">
      <div class="bbg w-25 row "><span>Total employees</span></div>
      <div class=" bbg w-25  row"><span>Total Departments</span></div>
      <div class="bbg w-25  row"><span>Total active employees</span></div>
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
