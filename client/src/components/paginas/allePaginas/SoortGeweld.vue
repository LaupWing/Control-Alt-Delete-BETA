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
    <div class="content-20vh flexCenter" @click='test2'>
        <p>Jouw eenheid: {{jouwEenheid}} {{eigenResults[0]}} in 2017</p>
        <p>Vergelijking: {{eenheidVergelijking}} {{results[0]}} in 2017</p>
    </div>
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
    <!-- <svg @click="test2">
        <text>2016</text>
        <g class="g1">
            <rect class="placeholder1"></rect>
        </g>
        <g class="g2">
            <rect class="placeholder2"></rect>
        </g>
    </svg> -->
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
            height: 0,
            y: '',
            json1:[],
            json2:[]
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
           this.dataset.forEach(i => {
               if(i.eenheid === this.eenheidVergelijking || i.eenheid === this.jouwEenheid){
                   i.jaar2017.forEach((x)=>{
                       if(x.soort === this.soortGeweld){
                           if(i.eenheid === this.eenheidVergelijking){
                               x['Eenheid'] = this.eenheidVergelijking
                               this.json1.push({jaar: 2017, aantal: x.aantal})
                               this.results.push(x.aantal)
                               console.log(this.results)
                           }else{
                               x['Eenheid'] = this.jouwEenheid
                               this.json2.push({jaar: 2017, aantal: x.aantal})
                               this.eigenResults.push(x.aantal)
                               console.log(this.results)
                           }
                           }                    
                       })
               }
           });
       },
       pushingAllData(){
           this.dataset.forEach(i=>{
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
        console.log(this.dataset)
        console.log(this.alleCijfers)
            // console.log(this.json1, this.json2)
       },
        barHeight(x){    
            // return this.$el.querySelector('svg').clientHeight / this.dataMax * x;
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
        setTimeout(()=>{
            this.soortGeweld = this.$el.querySelector('.soort-geweld').value
            this.eenheidVergelijking = this.$el.querySelector('.eenheid').value
            this.setResult()
            this.pushingAllData()
            // this.height = this.barHeight(this.results[0])
            // this.y = this.$el.querySelector('svg').clientHeight -this.height
        },10)
    }
}
</script>
<style scoped>
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
    background: orange;
    width: 32%;
    height: 100%;
}
rect{
    width: 40%;
    height: 30px;
    fill: red;
}
.placeholder1{
    fill: red;
    height: 120px;
}
</style>

