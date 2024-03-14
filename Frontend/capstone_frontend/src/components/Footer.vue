<template>
    
    <div class="container-fluid bg-dark-subtle feet">
        <div class="row">
            <u>
                <p class="lead"> www.AvatarG.co.za
                &copy;
                <span>{{ currYear }}</span>
            </p>
                </u>
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