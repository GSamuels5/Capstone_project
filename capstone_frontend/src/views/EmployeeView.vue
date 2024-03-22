<template>
    <div>
<h1>Employee</h1>
<div v-if="loggedInUser">
    <p>Welcome {{loggedInUser.firstName}} {{loggedInUser.surname}}</p>
    <div><img :src="loggedInUser.empImg" ></div>

</div>
<div v-else>
    <p>No user logged in</p>

</div>
    </div>
</template>

<script>
import {useCookies} from "vue3-cookies"

const {cookies} = useCookies();

export default {
computed:{
    loggedInUser(){
        const userData = cookies.get('Worker')?.result
        return userData 
    }
}
}
</script>

<style  scoped>

</style>