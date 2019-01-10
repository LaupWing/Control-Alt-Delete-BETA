<template>
    <div class="vraag3 flexCenter">
        <div class="tekst">
            <h2>Heb je weleens te maken gehad met politiegeweld?</h2>
        </div>
        <div class="background">
            <div class="wolken">
                <img class="wolk-1" src="../../../assets/VragenScenes/vraag3/wolk.png" alt="">
                <img class="wolk-2" src="../../../assets/VragenScenes/vraag3/wolk.png" alt="">
                <img class="wolk-3" src="../../../assets/VragenScenes/vraag3/wolk.png" alt="">
                <img class="wolk-4" src="../../../assets/VragenScenes/vraag3/wolk.png" alt="">
                <img class="wolk-5" src="../../../assets/VragenScenes/vraag3/wolk.png" alt="">
            </div>
            <div class="gebouwen">
                <!-- <img class="gebouwenImg" src="../../../assets/VragenScenes/vraag3/buildings.png" alt=""> -->
            </div>
            <div class="bomen">
                <img class="boom-1" src="../../../assets/VragenScenes/vraag3/bomen.png" alt="">
                <img class="boom-2" src="../../../assets/VragenScenes/vraag3/bomen.png" alt="">
                <img class="boom-3" src="../../../assets/VragenScenes/vraag3/bomen.png" alt="">
            </div>
            <div class="gras"></div>
            <div class="agent">
                <transition name="agentAnim"> 
                    <img v-if="agent1" src="../../../assets/VragenScenes/vraag3/politie-agent1.png" alt="">
                    <img class="agent2" v-else src="../../../assets/VragenScenes/vraag3/politie-agent2.png" alt="">
                </transition>
            </div>
            <div class="grond"></div>            
        </div>
        <!-- <img src="http://www.shopotticatre.it/pimages/Work-in-progress-big-527-814.png" alt=""> -->
        <div class="buttons">
            <button @click="keuze">Nee</button>
            <button @click="keuze">Ja</button>
            <button @click="nextInput">>></button>
        </div>
    </div>
</template>
<script>
export default { 
    name: 'vraag3',
    components:{

    },
    data(){
        return{
            agent1: false,
            agent2: false,
        }
    },
    methods:{
        nextInput(){
            this.$el.querySelector('.tekst').classList.add("slidingOutTop")
            this.$el.querySelector('img').classList.add("slidingOutTop")
            this.$el.querySelector('button').classList.add("slidingOutTop")
            this.$emit('nextInput')
        },
        keuze(){
            this.removeClasses('button', 'clicked')
            event.target.classList.add('clicked')

            if(event.target.textContent === 'Ja'){
                this.agent1 = false
                this.agent2 = true
            }else{
                this.agent1= true
                this.agent2 = false            
            }
        },
        removeClasses(element, classes){
            document.querySelectorAll(`${element}`).forEach((el)=>{
                el.classList.remove(`${classes}`)
            })
        }
    },
    created(){
        document.querySelector("body").style.background = '#38a3d1'
    }
    
}
</script>
<style scoped>
.buttons{
    position: fixed;
    bottom: 5vh;
    width: 350px;
    display: flex;
    justify-content: space-between;
}
.background{
    width: 100%;
    position: fixed;
    bottom: 0;
}
.gebouwen{
    width: 100%;
    height: 50vh;
    background: url("../../../assets/VragenScenes/vraag3/buildings.png");
    background-size:contain;
    background-repeat: repeat-x;
    animation: slideIn 3s forwards;
}
.gras{
    width: 100%;
    height: 5vh;
    background: url("../../../assets/VragenScenes/vraag3/gras.png");
    background-size:contain;
    background-repeat: repeat-x;
    position: fixed;
    transform: translate(0,-2vh);
    animation: slideInGras 2s forwards;
    z-index: 2;
}
.wolken > img{
    width: 150px;
    position: fixed;
}
.wolk-1{
    top: 5vh;
    animation: wolkTransitie 40s infinite;
}
.wolk-2{
    top: 15vh;
    animation: wolkTransitie 30s infinite;
}
.wolk-3{
    top: 6vh;
    animation: wolkTransitie 20s infinite;
}
.wolk-4{
    top: 2vh;
    animation: wolkTransitie 40s infinite;
}
.wolk-5{
    top: 13vh;
    animation: wolkTransitie 25s infinite;
}
.bomen{
    position: fixed;
    width: 100%;
    z-index: 5;
}
.bomen > img{
    bottom: 25vh;
    width: 80px;
    transform: scale(0);
    transform-origin: bottom;
    /* animation: scaleTransition 2s forwards; */
    animation-name: scaleTransition;
    animation-duration:2s;
    animation-delay: 2s;
    animation-fill-mode: forwards; 
    position: fixed;
}
.boom-1{
    left: 20vw;
}
.boom-2{
    left: 30vw;
}
.boom-3{
    left: 70vw;
}
.agent > img{
    position: fixed;
    z-index: 5;
    width: 150px;
    bottom: 15vh;
    left: 45vw;
    animation: scaleTransition 2s forwards;
    transform-origin: bottom;
}
.agent .agent2{
    width: 250px;
    left: 40vw;
}
.grond{
    width: 100%;
    height: 25vh;
    background: #BBBCBD;
    animation: slideIn 2s forwards;
}
.gebouwenImg{
    object-position: left;
    object-fit: cover;
    width: 100%;
    height: 100%;
}
img{
    /* animation: slideIn 3s forwards; */
    object-fit: fill;
}
button{
    animation: slideIn 4s forwards;
}

.agentAnim-enter-active{
    animation: scaleTransition 2s;
}

.agentAnim-leave-active{
    animation: scaleTransition 2s reverse;
}



@keyframes heightTransition {
    from{height: 0;}
    to{height: 50vh;}    
}

@keyframes heightTransitionGras {
    from{height: 0;}
    to{height: 5vh;}    
}
@keyframes scaleTransition {
    from{transform: scale(0);}
    to{transform: scale(1);}    
}

@keyframes slideInGras{
from {transform: translate(0, 100vh);}
  to {transform: translate(0, -2vh)}
}

@keyframes wolkTransitie{
from {transform: translate(-60vw,0)}
  to {transform: translate(60vw,0)}
}

</style>

