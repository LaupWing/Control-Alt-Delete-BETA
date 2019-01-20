<template>
    <div class="content-30vh">
        <section>
            <h2>De politie heeft 6 geweldsmiddelen</h2>
            <p class="one">Het gesprek</p>
            <p class="two">Fysiek Geweld</p>
            <p class="three">Wapenstok</p>
            <p class="four">Pepperspray</p>
            <p class="five">Diensthond</p>
            <p class="six">Dienstwapen</p>
        </section>
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
        
    },
    mounted(){
        setTimeout(() => this.$router.push({ path: '/intro4'}), 15500);
    }
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
}
section p{
    text-align: left;
    opacity: 0;
    margin: 10px auto;
}
.one{
    animation: slideIn 2s forwards;
    animation-delay: 3s;
}
.two{
    animation: slideIn 2s forwards;
    animation-delay: 5s;
}
.three{
    animation: slideIn 2s forwards;
    animation-delay: 7s;
}
.four{
    animation: slideIn 2s forwards;
    animation-delay: 9s;
}
.five{
    animation: slideIn 2s forwards;
    animation-delay: 11s;
}
.six{
    animation: slideIn 2s forwards;
    animation-delay: 13s;    
}
.titel{
    margin-bottom: 20px;
}
@keyframes slideIn {
    from{transform: translate(-15%,0); opacity: 0;}
    to{transform: translate(0,0); opacity: 1;}
}


</style>

