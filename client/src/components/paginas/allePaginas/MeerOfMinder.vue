<template>
<div class="flexCenter">
    <div>
        <p>Denk je dat het politiegeweld is toegenomen of is verminderd?</p>
        <div class="buttons">
            <button @click='handleClick'>Meer</button><button @click='handleClick'>Minder</button>
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
                        Meer
                    </p>
                </div>
                <div class="results-nee flexCenter">
                    <p class="percentage-2">
                        1%
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
            setTimeout( () => this.$router.push({ path: '/soortgeweld'}), 7000);
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
</style>

