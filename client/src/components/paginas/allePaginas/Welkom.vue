<template>
    <div class="flexCenter">
        <h1>Welkom</h1>
        <p>Wij verzamelen geen persoonlijke data. De vragen die jij beantwoord worden anoniem opgeslagen en helpt ons vergelijkingen te maken met anere gebruikers</p>
        <router-link to='/woonplaats'>
            <button>START</button>
        </router-link>
    </div>
</template>
<script>
export default { 
    name: 'Welkom',
    components:{

    },
    data(){
        return{

        }
    },
    methods:{
        
    },
    created(){
        
    }
    
}
</script>
<style scoped>
h1{
    text-align: left;
    width: 80%;
}
p{
    text-align: left;
    width: 80%;
    font-size: 20px;
    margin-bottom: 40px;
}
button{
    animation: opacityAnim 2s forwards;
    animation-delay: 4s;
    opacity: 0;
}
@keyframes opacityAnim {
    from{opacity: 0;}
    to{opacity: 1;}
}
</style>

