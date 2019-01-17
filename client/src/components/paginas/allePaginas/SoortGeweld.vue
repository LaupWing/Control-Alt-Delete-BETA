<template>
<div>
    <div class="content-20vh flexCenter">
        <h2>Soort politie geweld</h2>
        <p>Kies een andere politie geweld en vergelijk met een andere eenheid</p>
    </div>
    <div class="content-15vh spaceAround">
        <select class="soort-geweld" @change="handleChange('geweld')">
            <option value="pepperspray">Gebruik van pepperspray</option>
            <option value="lange stok">Gebruik van lange stok</option>
            <option value="korte stok">Gebruik van korte stok</option>
            <option value="elektrische wapenstok">Gebruik van elektrische wapenstok</option>
            <option value="inzet hond">Inzet van hond</option>
        </select>
        <select @change="handleChange" class="eenheid">
            <option 
                v-for="(eenheid, index) in alleEenheden" 
                v-bind:key="index"
                :value= eenheid
            >
            {{eenheid}}      
            </option>
        </select>
    </div>
    <!-- <div class="content-20vh flexCenter" @click='test2'>
        <p>Jouw eenheid: {{jouwEenheid}} {{eigenResults[0]}} in 2017</p>
        <p>Vergelijking: {{eenheidVergelijking}} {{results[0]}} in 2017</p>
    </div> -->
    <!-- <div class="dataVis" @click="test2">
        <svg class="jaar2015">
            <rect class="x1"></rect>
            <rect class="y1"></rect>
        </svg>
        <svg class="jaar2016">
            <rect class="x2"></rect>
            <rect class="y2"></rect>
        </svg>
        <svg class="jaar2017">
            <rect class="x3"></rect>
            <rect class="y3"></rect>
        </svg>
    </div> -->
    <svg @click="test2">
        <g 
            v-for="(x, i) in eigenResults"
            v-bind:key="i"
            :transform="`translate(${(i*2.5) * (barWidth+3.5)}, 0)`"
        >
            <rect
                :width="barWidth"
                :height="barHeight(x)"
                :y="svgHeight-barHeight(x)"
                class="eigenResults"
            ></rect>
            <text
                :y="svgHeight-barHeight(x)+15"
                :x="barWidth/3.5"    
            >
                {{x}}
            </text>
        </g>
        <g 
            v-for="(y, p) in results"
            v-bind:key="'A'+p"
            :transform="`translate(${((p*2.5) * (barWidth+3.5))+barWidth}, 0)`"
        >
            <rect
                :width="barWidth"
                :height="barHeight(y)"
                :y="svgHeight-barHeight(y)"
                class="vergelijkResults"
            ></rect>
            <text
                :y="svgHeight-barHeight(y)+15"
                :x="barWidth/3.5"    
            >
                {{y}}
            </text>
        </g>
    </svg>
    <div class="jaartallen">
        <p>2015</p>
        <p>2016</p>
        <p>2017</p>
    </div>
</div>
</template>
<script>
export default {
    name:'SoortGeweld',
    props:['dataset', 'userInfo'],
    data(){
        return{
            alleEenheden:[],
            eigenResults:[],
            results:[],
            soortGeweld:'',
            eenheidVergelijking: '',
            // jouwEenheid: this.userInfo.Eenheid,
            jouwEenheid: 'Noord-Holland',
            alleCijfers:[],
            y: '',
            json1:[],
            json2:[],
            barWidth: '',
            svgHeight: '',
        }
    },
    methods:{
       filterEenheid(i){
           return !i.eenheid
       },
       handleChange(x){
           if(x==='geweld'){
               this.soortGeweld = event.target.value
               this.setResult()
           }else{
               this.eenheidVergelijking = event.target.value
               this.setResult()
               this.height = this.barHeight(this.results[0])
           }
       },
       setResult(){
           this.results = []
           this.eigenResults = []
           this.json1=[]
           this.json2=[]
           this.alleCijfers = []
           this.pushingAllData()
           this.dataset.forEach(i => {
               if(i.eenheid === this.eenheidVergelijking || i.eenheid === this.jouwEenheid){
                   this.makeJson(i, i.jaar2015, '2015')
                this.makeJson(i, i.jaar2016, '2016')
                this.makeJson(i, i.jaar2017, '2017')
               }
           });
           this.correctTextpos()
       },
       makeJson(obj, i, j){
           i.forEach((x)=>{
                if(x.soort === this.soortGeweld){
                    if(obj.eenheid === this.eenheidVergelijking){
                        x['Eenheid'] = this.eenheidVergelijking
                        this.json1.push({jaar: j, aantal: x.aantal})
                        this.results.push(x.aantal)
                    }else{
                        x['Eenheid'] = this.jouwEenheid
                        this.json2.push({jaar: j, aantal: x.aantal})
                        this.eigenResults.push(x.aantal)
                    }
                    }                    
            })
       },
       pushingAllData(){
           this.dataset.forEach(i=>{
               i.jaar2015.forEach(i=>{
                   if(i.soort === this.soortGeweld){
                       this.alleCijfers.push(i.aantal)
                   }
               })
                  i.jaar2016.forEach(i=>{
                   if(i.soort === this.soortGeweld){
                       this.alleCijfers.push(i.aantal)
                   }
               })
                  i.jaar2017.forEach(i=>{
                   if(i.soort === this.soortGeweld){
                       this.alleCijfers.push(i.aantal)
                   }
               })

           })
       },
       makeChart(){
           d3.select('svg')
       },
       correctTextpos(){
           this.$el.querySelectorAll("text").forEach((t)=>{
               console.log(t.y.animVal[0].value)
               if(t.y.animVal[0].value>=267){
                   t.style.y = 266
               }
               
           })
       },
       test(){
           return 10
        //    console.log(d3.select('svg'), 'test')
           //    console.log(this.eigenResults, this.results)
        //    console.log(this.$el.querySelector('svg').clientHeight)
            // console.log(this.dataMax)
            // console.log(this.results)
            // console.log(this.$el.querySelector('svg').clientHeight)
            // console.log(this.barHeight(), this.height)
       },
       test2(){
        //    console.log(this.barHeight(this.results[0]))
        //    console.log(this.height)
            // console.log('results',this.results)
            // console.log('eigenResults',this.eigenResults)
            // console.log('json1 en 2',this.json1, this.json2)
            console.log(this.alleCijfers)
       },
        barHeight(x){    
            return this.$el.querySelector('svg').clientHeight / this.dataMax * x;
            // return 300 / this.dataMax * x;
        },
    },
    computed:{
        dataMax() {
            return Math.max(...this.alleCijfers);
        },
    },
    created(){
        this.dataset.forEach((i)=>{
            if(i.eenheid !== this.jouwEenheid){
                this.alleEenheden.push(i.eenheid)
            }           
        })
    },
    mounted(){
        this.barWidth = this.$el.querySelector('svg').clientHeight * 0.175
        this.svgHeight = this.$el.querySelector('svg').clientHeight
        this.soortGeweld = this.$el.querySelector('.soort-geweld').value
        this.eenheidVergelijking = this.$el.querySelector('.eenheid').value
        this.setResult()
        this.pushingAllData()
    }
}
</script>
<style scoped>
.jaartallen{
    display: flex;
    justify-content: space-between;
    width: 75%;
    margin: auto;
}
.jaartallen p{
    margin:0;
    width: auto;
}
.spaceAround{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
}
.dataVis{
    height: 40vh;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
}
svg{
    width: 90%;
    height: 40vh;
}
rect{
    transition: 1s;
}
rect.eigenResults{
    fill: red;
}
rect.vergelijkResults{
    fill: blue;
}
text{
    fill: white;
}
</style>

