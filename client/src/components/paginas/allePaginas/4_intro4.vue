<template>
    <div class="content-30vh">
        <p>Hoe vaak maak de politie gebruik van deze geweldsmiddelen?</p>
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
    },
    mounted(){
        setTimeout(() => this.$router.push({ path: '/tool'}), 7000);
    }
}
</script>
<style scoped>
p{
    text-align: left;
}
</style>

