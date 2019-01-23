<template>
<div class="">
    <div class="content-30vh">
        <p>Tussen 2013 en 2017 zijn er 11 dodelijke slachtoffers door een politiewapen. Maar er is niks bekend over slachtoffers door een andere vorm van geweld. </p>
        <p>Hoe kan dit? </p>
    </div>
    <i @click="next" class="arrow fas fa-caret-down"></i>
</div>
</template>
<script>

export default {
    name: 'Intro2',
    components:{
    },
    data(){
        return{
        }
    },
    methods:{
        next(){
            this.$router.push({ path: '/intro3'})
        }  
    },
}
</script>
<style scoped>
p{
    font-weight: 600;
    text-align: left;
    margin: 10px auto;
}
span{
    color:red;
}
</style>


