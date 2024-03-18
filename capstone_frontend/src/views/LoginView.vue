<template>
    <div class="login rounded-5 mb-5">
        <div class="col">
            <h1>Login-Form</h1>
            <form @submit.prevent="loginUSer">
        
             <label id="email">
                Enter email:
            </label>
            <input type="text" for="email" placeholder="enter your email" required v-model="email"><br>
             <label id="password">
                Enter password:
            </label>
            <input type="number" for="staffNo" v-model="password" placeholder="enter your password" required><br>
            <button type="submit">Log-in</button>

            </form>
        </div>

    </div>
</template>

<script>
import {mapActions} from'vuex'
    export default {
        name: "LoginView",
        data(){
return{
    email: '',
    password: ''
}
        },
        methods:
{
    ...mapActions(['login']),
    async loginUser(){
        try {
            await this.login({
                email: this.email, password: this.password})
                // pushing user to another page
                this.$router.push({ name: 'Employee'})
            }
         catch (error) {
           alert("Login failed:", error) 
        }
    }
}    }
</script>

<style scoped>

</style>