<template>
<div class="flexCenter">
    <p>Denk je dat het politiegeweld is toegenomen of is verminderd?</p>
    <div class="buttons">
        <button @click='handleClick'>Meer</button><button @click='handleClick'>Minder</button>
    </div>
    <transition
        name="result-anim"
    >
        <div v-if="antwoord !== ''" class="results-container flexCenter">
            <p>Andere mensen hebben dit op deze vraag beantwoord</p>
            <div class="results">
                <div class="results-ja flexCenter">
                    <p class="percentage">
                        55%
                    </p>
                    <p>
                        Meer
                    </p>
                </div>
                <div class="results-nee flexCenter">
                    <p class="percentage">
                        45%
                    </p>
                    <p>
                        Minder
                    </p>
                </div>
            </div>
        </div>
    </transition>
</div>
</template>
<script>

export default {
    name: 'PolitiegeweldVraag',
    components:{
        
    },
    data(){
        return{
            antwoord: ''
        }
    },
    methods:{
        handleClick(){
            this.antwoord = event.target.textContent
            setTimeout( () => this.$router.push({ path: '/soortgeweld'}), 5000);
        }
    }
}
</script>
<style scoped>
</style>

