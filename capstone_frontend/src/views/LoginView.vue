<template>
    <div class="login-container">
        <div class="login rounded-5">
            <h1>Login Form</h1>
            <form>
                <div class="form-group">
                    <label for="email">Enter email:</label>
                    <input type="text" id="email" placeholder="Enter your email" required v-model="data.empEmail">
                </div>
                <div class="form-group">
                    <label for="password">Enter password:</label>
                    <input type="password" id="password" placeholder="Enter your password" required v-model="data.empPwd">
                </div>
                <button type="button" @click.prevent="loginUser">Log in</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginView",
    data() {
        return {
            data: {
                empEmail: '',
                empPwd: ''
            }
        }
    },
    methods: {
        loginUser() {
            this.$store.dispatch("login", this.data);
            // this.$router.push('employee')
        }
    },
    mounted() {
        this.$store.dispatch("fetchEmployees");
    }
}
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.login {
    width: 300px;
    padding: 20px;
    background-color: #1a237e;
    color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.login h1 {
    text-align: center;
    margin-bottom: 20px;
}
  input[type="text"],
  input[type="password"] {
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ffffff;
  }

</style>
