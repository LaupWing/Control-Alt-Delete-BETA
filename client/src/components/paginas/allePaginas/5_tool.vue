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
                        Geweldsmiddelen
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
            <div class="flexCenter">
                <router-link to="/tool/delen">
                    <li 
                        @click="setRoute(), handleClick()"
                    >
                        Delen
                    </li>
                </router-link>
                <transition name='border_anim'>
                    <div 
                        v-if="currentRoute === '/tool/delen'" 
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
                v-bind:sharing='sharing'
                ref="childComponent"
                v-on:pop="pop"
                v-on:shareData="shareData"
                class="subView"
            ></router-view>
        </transition>
        <transition name="pop-anim">
            <div v-if="popUp === true" class="pop-up flexCenter">
                <h3>Dark Numbers</h3>
                <p>Is het je opgevallen dat de cijfers van Politiegeweld wel heel laag zijn</p>
                <p>Dat klopt</p>
                <p>De politie en het Openbaar Ministerie publiceren geen cijfers over hoe vaak burgers aangifte doen van politiegeweld.</p>
                <p>Dat zijn alleen de meldingen van de politie.</p>
                <button @click="pop">Ik begrijp het</button>
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
            popUp: false,
            sharing: ''
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
            if(this.previousTransition === "Geweldsmiddelen" && this.currentTransition === "Politiedoden"){
                this.transitionName = "Geweld"
            }else{
                this.transitionName = this.currentTransition
            }
        },
        pop(){
            this.popUp = !this.popUp
        },
        shareData(data){
            this.sharing = data
        }

    },
    mounted(){
        this.setRoute()
    }
    
}
</script>
<style scoped>
section{
    margin-top: 2vh;
    max-width: 800px;
}
.subView{
    margin-top: 20px;
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

.Geweldsmiddelen-enter-active{
    animation: slideIn forwards 0.5s;
}
.Geweldsmiddelen-leave-active{
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

