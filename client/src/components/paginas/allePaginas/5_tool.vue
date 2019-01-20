<template>
    <section>
        <h2>Politiegeweld</h2>
        <nav>
            <div class="flexCenter">
                <router-link to="/tool">
                    <li 
                        @click="setRoute"
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
                        @click="setRoute"
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
                        @click="setRoute"
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
        <router-view
            v-bind:dataset='dataset'
        ></router-view>
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
            currentRoute: ''
        }
    },
    methods:{
        setRoute(){
            setTimeout(()=>{
                this.currentRoute = this.$route.path
                },100)
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
    width: 100vw;
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
</style>

