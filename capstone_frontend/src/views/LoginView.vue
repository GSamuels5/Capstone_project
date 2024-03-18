<template>
    <div class="login rounded-5 mb-5">
        <div class="col">
            <h1>Login-Form</h1>
            <form @submit.prevent="loginUser">
        
             <label id="email">
                Enter email:
            </label>
            <input type="text" for="email" placeholder="enter your email" required v-model="data.email"><br>
             <label id="password">
                Enter password:
            </label>
            <input type="password" for="staffNo" v-model="data.password" placeholder="enter your password" required><br>
            <button type="submit" @click=" loginUser" >Log-in</button>

            </form>
        </div>

    </div>
</template>

<script>
export default {
     name: "LoginView",
    data(){
        return{
            data:{

                email: '',
                password: ''
             }
        }
    },
methods:{ 
    loginUser(){
        this.$store.dispatch("login", this.data)
        // this.$router.push('employee')
    }
     },
    mounted(){
        this.$store.dispatch("fetchEmployees")
    }}

</script>

<style scoped>

</style>