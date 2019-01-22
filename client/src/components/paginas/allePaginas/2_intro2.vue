<template>
<div class="">
    <div class="content-30vh">
        <p>In 2016 is er in totaal <span>2642</span> geweld geregistreerd door de politie</p>
        <p>Terecht maar ook onterechte geweldsgebruik</p>
    </div>
    
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
        
    },
    mounted(){
        // setTimeout(() => this.$router.push({ path: '/intro3'}), 6000);
    }
}
</script>
<style scoped>
p{
    text-align: left;
    margin: 10px auto;
}
span{
    color:red;
}
</style>


