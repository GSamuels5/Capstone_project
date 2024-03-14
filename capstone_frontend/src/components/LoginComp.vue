<template>
    <div class="login rounded-5 mb-5">
        <div class="col">
            <h1>Login-Form</h1>
            <form>
        
             <label id="email">
                Enter email:
            </label>
            <input type="text" for="email" placeholder="enter your email" required><br>
             <label id="password">
                Enter password:
            </label>
            <input type="number" for="staffNo" placeholder="enter your password" required><br>
            <button type="submit">Log-in</button>

            </form>
        </div>

    </div>
</template>

<script>
    export default {
        name: "LoginComp"
        
    }
</script>

<style scoped>

</style>