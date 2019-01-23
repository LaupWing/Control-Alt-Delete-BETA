<template>
<div>    
    <div class="content-30vh">
        <p>Hoe vaak maak de politie gebruik van deze geweldsmiddelen?</p>
    </div>
        <i @click="next" class="arrow fas fa-caret-down"></i>
</div>
</template>
<script>

export default {
    name: 'Intro4',
    components:{
        
    },
    data(){
        return{
        }
    },
    methods:{
        next(){
            this.$router.push({ path: '/tool'})
        }
    },
}
</script>
<style scoped>
p{
    text-align: left;
    margin: 10px auto;
    max-width: 600px;
}
</style>

