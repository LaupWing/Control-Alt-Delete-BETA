<template>
    <div>
        <header class="content-30vh flexCenter">
            <h2>Gebruik geweldsmiddelen Politie</h2>
            <p><i>'Het is gesprek is ons sterkste wapen'</i></p>
        </header>
        <div class="content-40vh flexAround">
            <p class="intro1">De politie heeft 6 geweldsmiddelen. Het gesprek, fysiekgeweld, wapenstok, pepperspray, diensthond en een dienstwapen</p>
            <p class="intro2">Maar hoe vaak word het dienstwapen eigenlijk gebruikt?</p>
        </div>
        <div class="content-30vh flexCenter">
            <router-link to='/wapengebruik'>
                <button>Volgende</button>
            </router-link>
        </div>
    </div>
</template>
<script>
export default { 
    name: 'wapenIntro',
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
header{
    animation: intro 2s forwards;
    animation-delay: 4s;
    transform: translate(0,120%);
}
.intro1{
    opacity: 0;
    animation: intro2tm4 2s forwards;
    animation-delay: 6s;
}
.intro2{
    opacity: 0;
    animation: intro2tm4 2s forwards;
    animation-delay: 8s;
}
button{
    opacity: 0;
    animation: opacityAnim 2s forwards;
    animation-delay: 10s;
}
@keyframes intro {
    from{transform: translate(0,120%)}
    to{transform: translate(0,0)}
}
</style>

