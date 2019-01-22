<template>
    <section>
        <h2>Politiegeweld</h2>
        <nav>
            <div class="flexCenter">
                <router-link to="/tool">
                    <li 
                        @click="setRoute(), handleClick()"
                    >
                        Geweld
                    </li>
                </router-link>
                <transition 
                    name='border_anim'
                >
                    <div 
                        v-if="currentRoute === '/tool'" 
                        class="border"
                    >
                    </div>
                </transition>
            </div>
            <div class="flexCenter">
                <router-link  to="/tool/politiedoden">
                    <li 
                        @click="setRoute(), handleClick()"
                    >
                        Politiedoden
                    </li>
                </router-link>
                <transition name='border_anim'>    
                    <div 
                        v-if="currentRoute === '/tool/politiedoden'" 
                        class="border"
                    >
                    </div>
                </transition>
            </div>
            <div class="flexCenter">
                <router-link to="/tool/informatie">
                    <li 
                        @click="setRoute(), handleClick()"
                    >
                        Informatie
                    </li>
                </router-link>
                <transition name='border_anim'>
                    <div 
                        v-if="currentRoute === '/tool/informatie'" 
                        class="border"
                    >
                    </div>
                </transition>
            </div>
        </nav>
        <transition :name="transitionName" mode="out-in">
            <router-view
                v-bind:dataset='dataset'
                v-bind:currentRoute='currentRoute'
                ref="childComponent"
                v-on:pop="popUpCounter"
            ></router-view>
        </transition>
        <transition name="pop-anim">
            <div v-if="popUp === 10" class="pop-up flexCenter">
                <h3>Dark Numbers</h3>
                <p>Is het je opgevallen dat de cijfers van Politiegeweld in 2014 wel heel zijn, vergelijken met de bevolking van 16,83 miljoen Nederlanders.</p>
                <p>Dat klopt</p>
                <p>De politie en het Openbaar Ministerie publiceren geen cijfers over hoe vaak burgers aangifte doen van politiegeweld.</p>
                <p>Dat zijn alleen de meldingen van de politie.</p>
                <button @click="popUpCounter">Ik begrijp het</button>
            </div>
        </transition>
    </section>
</template>
<script>
export default { 
    name: 'tool',
    components:{

    },
    props:['dataset'],
    data(){
        return{
            currentRoute: '',
            transitionName: '',
            previousTransition: '',
            currentTransition: '',
            popUp: 0
        }
    },
    methods:{
        setRoute(){
            this.$nextTick(()=>{
                this.currentRoute = this.$route.path
            })
        },
        handleClick(){
            this.previousTransition = this.transitionName;
            this.currentTransition = event.target.textContent.trim()
            if(this.previousTransition === "Informatie" && this.currentTransition === "Politiedoden"){
                this.transitionName = "Geweld"
            }else{
                this.transitionName = this.currentTransition
            }
        },
        popUpCounter(){
            this.popUp++
        }

    },
    mounted(){
        this.setRoute()
    }
    
}
</script>
<style scoped>
section{
    margin-top: 5vh;
    max-width: 800px;
}
nav{
    width: 100%;
    padding-top: 20px;
    display: flex;
    justify-content: space-around;
}
a{
    color: white;
    text-decoration: none;
}
.border{
    height:3px;
    background: #A03029;
    width: 35px;
}

.border_anim-enter-active{
    animation: opacityAnim 1s forwards;
}
.pop-up{
    position: fixed;
    width: 70vw;
    height: 70vh;
    background: white;
    margin: auto;
    z-index: 10;
    left: 0;
    right: 0;
    bottom: 15vh;
    border-radius: 5px;
    color: black;
    transform-origin: center;
}

.Politiedoden-enter-active{
    animation: slideIn forwards 0.5s;
}
.Politiedoden-leave-active{
    animation: slideOut forwards 0.5s;
}

.Geweld-enter-active{
    animation: slideIn2 forwards 0.5s;
}
.Geweld-leave-active{
    animation: slideOut2 forwards 0.5s;
}

.Informatie-enter-active{
    animation: slideIn forwards 0.5s;
}
.Informatie-leave-active{
    animation: slideOut forwards 0.5s;
}

.pop-anim-enter-active{
    animation: popping forwards 0.5s;
}
.pop-anim-leave-active{
    animation: popping forwards 0.5s reverse;
}


@keyframes slideOut{
  from {transform: translate(0, 0);opacity: 1;}
  to {transform: translate(-10vw, 0);opacity: 0;}
}

@keyframes slideIn{
  from {transform: translate(10vw,0); opacity: 0;}
  to {transform: translate(0, 0); opacity: 1;}
}

@keyframes slideOut2{
  from {transform: translate(0, 0);opacity: 1;}
  to {transform: translate(10vw, 0);opacity: 0;}
}

@keyframes slideIn2{
  from {transform: translate(-10vw,0); opacity: 0;}
  to {transform: translate(0, 0); opacity: 1;}
}

@keyframes popping{
  from {transform: scale(0); opacity: 0;}
  to {transform: scale(1); opacity: 1;}
}
</style>

