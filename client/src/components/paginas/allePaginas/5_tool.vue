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
            ></router-view>
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
            currentTransition: ''
        }
    },
    methods:{
        setRoute(){
            this.$nextTick(()=>{
                this.currentRoute = this.$route.path
            })
            // setTimeout(()=>{
                // this.currentRoute = this.$route.path
                // },100)
        },
        handleClick(){
            this.previousTransition = this.transitionName;
            this.currentTransition = event.target.textContent.trim()
            if(this.previousTransition === "Informatie" && this.currentTransition === "Politiedoden"){
                console.log("transition geweld")
                this.transitionName = "Geweld"
            }else{
                this.transitionName = this.currentTransition
                // console.log(this.previousTransition, this.transitionName)
            }
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
</style>

