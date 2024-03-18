<template>
    <div class="login rounded-5 mb-5">
        <div class="col">
            <h1>Login-Form</h1>
            <form>
        
             <label id="email">
                Enter email:
            </label>
            <input type="text" for="email" placeholder="enter your email" required v-model="data.empEmail"><br>
             <label id="password">
                Enter password:
            </label>
            <input type="password" for="staffNo" v-model="data.empPwd" placeholder="enter your password" required><br>
            <button type="button" @click.prevent=" loginUser" >Log-in</button>

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

                empEmail: '',
                empPwd: ''
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