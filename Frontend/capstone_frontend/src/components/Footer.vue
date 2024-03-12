<template>
    
    <div class="container-fluid bg-warning feet">
        <div class="row">
            <p class="lead"> www.AvatarG.co.za
                &copy;
                <span>{{ currYear }}</span>
            </p>
        </div>

    </div>
</template>

<script>
    export default {
name:'footerComp',
        data(){
            return{

                currYear:new Date().getFullYear()
            }
        }
        
    }
</script>

<style scoped>

</style>