<template>
<div class="flexCenter">
    <div class="intro">
        <p>Heb je wel eens te maken gehad met politie geweld?</p>
        <div class="buttons">
            <button @click='handleClick'>Ja</button><button @click='handleClick'>Nee</button>
        </div>
    </div>
    <transition
        name="result-anim"
    >
        <div v-if="antwoord !== ''" class="results-container flexCenter">
            <p>Andere mensen hebben dit op deze vraag beantwoord</p>
            <div class="results">
                <div class="results-ja flexCenter">
                    <p class="percentage-1">
                        1%
                    </p>
                    <p>
                        Ja
                    </p>
                </div>
                <div class="results-nee flexCenter">
                    <p class="percentage-2">
                        1%
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
            antwoord: '',
        }
    },
    methods:{
        handleClick(){
            this.antwoord = event.target.textContent;
            this.$el.querySelector('.intro').classList.add('anim')
            setTimeout(() => this.$router.push({ path: '/meerofminder'}), 7000);
            setTimeout(()=>{this.animateValue('.percentage-1', 1, 25, 2000);},2000)
            setTimeout(()=>{this.animateValue('.percentage-2', 1, 75, 2000);},2000)
        },
        animateValue(el, start, end, duration) {
            var range = end - start;
            var current = start;
            var increment = end > start? 1 : -1;
            var stepTime = Math.abs(Math.floor(duration / range));
            var obj = this.$el.querySelector(el);
            var timer = setInterval(()=> {
                current += increment;
                obj.innerHTML = current+'%';
                if (current == end) {
                    clearInterval(timer);
                }
             }, stepTime);
        },
    }
}
</script>
<style scoped>
.anim{
    opacity: 0;
    animation: fading 1s forwards;
}
@keyframes fading {
    from{opacity: 0;}
    to{opacity: 1;}
}
</style>

