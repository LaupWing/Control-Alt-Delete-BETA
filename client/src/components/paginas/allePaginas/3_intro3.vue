<template>
    <div>
    <div class="content-30vh">
        <section>
            <h2>De politie heeft 6 geweldsmiddelen</h2>
            <p class="one">Het gesprek</p>
            <p class="two">Fysiek Geweld</p>
            <p class="three">Wapenstok</p>
            <p class="four">Pepperspray</p>
            <p class="five">Diensthond</p>
            <p class="six">Dienstwapen</p>
            <p class="seven">De definitie op papier vs realiteit wijken van elkaar af</p>
        </section>
    <i @click="next" class="arrow fas fa-caret-down"></i>
    </div>
    </div>
</template>
<script>

export default {
    name: 'Intro3',
    components:{
        
    },
    data(){
        return{
            antwoord: '',
        }
    },
    methods:{
        next(){
            this.$router.push({ path: '/intro4'})
        } 
    },
}
</script>
<style scoped>
section{
    width: 45vw;
    font-weight: 600;
}
h2{
    width: 80%;
    margin: 20px auto;
    font-size: 20px;
    text-align: left;
}
section p{
    text-align: left;
    opacity: 0;
    margin: 10px auto;
}
.one{
    animation: slideIn 1.5s forwards;
    animation-delay: 2s;
}
.two{
    animation: slideIn 1.5s forwards;
    animation-delay: 3.5s;
}
.three{
    animation: slideIn 1.5s forwards;
    animation-delay: 5s;
}
.four{
    animation: slideIn 1.5s forwards;
    animation-delay: 6.5s;
}
.five{
    animation: slideIn 1.5s forwards;
    animation-delay: 8s;
}
.six{
    animation: slideIn 1.5s forwards;
    animation-delay: 9.5s;    
}
.seven{
    margin-top: 10px;
    width: 100vw;
    text-align: center;
    animation: opacityAnim 1.5s forwards;
    animation-delay: 11s;    
}
.titel{
    margin-bottom: 20px;
}
@keyframes slideIn {
    from{transform: translate(-15%,0); opacity: 0;}
    to{transform: translate(0,0); opacity: 1;}
}
@media only screen and (min-width: 500px) {
  section {
    margin: auto;
  }
}
</style>

