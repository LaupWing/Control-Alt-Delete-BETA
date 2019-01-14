<template>
<div class="flexCenter">
    <p>Heb je wel eens te maken gehad met politie geweld?</p>
    <div class="buttons">
        <button @click='handleClick'>Ja</button><button @click='handleClick'>Nee</button>
    </div>
    <transition
        name="result-anim"
    >
        <div v-if="antwoord !== ''" class="results-container flexCenter">
            <p>Andere mensen hebben dit om deze vragen beantwoord</p>
            <div class="results">
                <div class="results-ja flexCenter">
                    <p class="percentage">
                        55%
                    </p>
                    <p>
                        Ja
                    </p>
                </div>
                <div class="results-nee flexCenter">
                    <p class="percentage">
                        45%
                    </p>
                    <p>
                        Nee
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
        }
    }
}
</script>
<style scoped>
.results-container{
    margin-top: 50px;
}
.results{
    display: flex;
    width: 80%;
    justify-content: space-around;
}
.results-ja > p, .results-nee > p {
    margin: 20px;
}
.result-anim-enter-active{
    animation: slideInResult 4s forwards;
}
@keyframes slideInResult {
    from{transform: translate(0,50px);opacity: 0;}
    to{transform: translate(0,0);opacity: 1;}
}
</style>

