<template>
<div class="">
    <div class="content-20vh flexCenter">
        <h2>Politiegeweld</h2>
        <p>Waar kom jij vandaan?</p>
    </div>
    <Nederland 
        class="map"
        v-on:woonplaats="eenheidValue"
    ></Nederland>
    <transition
        name='content-anim'
    >
        <div v-if="eenheid != ''" class="content-20vh flexCenter">
            <p>De politie is verdeeld in eenheden. Jij woont in eenheid {{eenheid}}</p>
            <div class="label">
                <p>{{eenheid}}</p>
            </div>
        </div>
    </transition>
</div>
</template>
<script>
import Nederland from '../paginaComponents/Nederland.vue'
export default {
    name: 'Woonplaats',
    components:{
        Nederland
    },
    data(){
        return{
            eenheid: '',
        }
    },
    methods:{
        eenheidValue(value){
            this.eenheid = value
            this.$emit('userInput', 'Eenheid', this.eenheid)
            setTimeout( () => this.$router.push({ path: '/politiegeweldvraag'}), 5000);
        }
    },
    mounted(){

    }
}
</script>
<style scoped>
.map{
    max-width: 350px;
    width: 90%;
}
.content-anim-enter-active{
    animation: opacityAnim 2s forwards;
}
</style>


