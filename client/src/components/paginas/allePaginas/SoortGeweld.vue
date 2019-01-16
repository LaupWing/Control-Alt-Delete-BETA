<template>
<div>
    <div class="content-15vh flexCenter">
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
    <svg @click="test2">
        <!-- <g>
            <rect  :y="y" :height="height"></rect>
        </g> -->
    </svg>
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
            jouwEenheid: this.userInfo.Eenheid,
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
                           }else{
                               x['Eenheid'] = this.jouwEenheid
                               this.json2.push({jaar: 2017, aantal: x.aantal})
                               this.eigenResults.push(x.aantal)
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
            console.log(this.json1, this.json2)
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
        setTimeout(()=>{
            this.soortGeweld = this.$el.querySelector('.soort-geweld').value
            this.eenheidVergelijking = this.$el.querySelector('.eenheid').value
            this.setResult()
            this.pushingAllData()
            this.height = this.barHeight(this.results[0])
            this.y = this.$el.querySelector('svg').clientHeight -this.height
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
svg{
    background: orange;
    width: 90vw;
    height: 45vh;
}
rect{
    width: 50px;
    fill: red;
}
</style>

