<template>
  <div class=" container-fluid home">
    <h1>Home</h1>
    <div class="clock ">
      <button id="singin" class="p-4 rounded-2 m-5">Time-in</button>
      <button id="singin" class="p-4 rounded-2">Time-out</button>
    </div>
    <div class="row justify-content-center">
      <div class="bg-primary-subtle w-25 row h-50"><span>Total employees</span></div>
      <div class="bg-primary-subtle w-25 h-50 row"><span>Total Departments</span></div>
      <div class="bg-primary-subtle w-25 h-50 row"><span>Total active employees</span></div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {
  
  }
}
</script>
