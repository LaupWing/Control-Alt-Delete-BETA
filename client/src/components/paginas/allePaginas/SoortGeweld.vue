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
    <div class="legenda">
        <div class="eenheid">
            <div class="jouwEenheid"></div>
            <p class="jouwEenheid">{{jouwEenheid}}</p>            
        </div>
        <div class="eenheid">
            <div class="andereEenheid"></div>
            <p class="andereEenheid">{{eenheidVergelijking}}</p>
        </div>
    </div>
    <router-link to='/wapenintro'>
        <button>Volgende</button>
    </router-link>
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
            // jouwEenheid: 'Noord-Holland',
            alleCijfers:[],
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
           this.opacityText()
           this.dataset.forEach(i => {
               if(i.eenheid === this.eenheidVergelijking || i.eenheid === this.jouwEenheid){
                    this.makeJson(i, i.jaar2015, '2015')
                    this.makeJson(i, i.jaar2016, '2016')
                    this.makeJson(i, i.jaar2017, '2017')
               }
           });
           setTimeout(()=>{
               this.correctTextpos()
           },50)
       },
       opacityText(){
           this.$el.querySelectorAll("text").forEach((t)=>{  
                t.classList.add("opacityAnim")
                setTimeout(()=>{t.classList.remove("opacityAnim")},1000)       
           })
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
       correctTextpos(){
           this.$el.querySelectorAll("text").forEach((t)=>{
               console.log(t.y.animVal[0].value)
               if(t.y.animVal[0].value>=267){
                   t.setAttribute('y', 266)
               }
               
           })
       },
       test(){
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
        this.barWidth = this.$el.querySelector('svg').clientWidth * 0.135
        this.svgHeight = this.$el.querySelector('svg').clientHeight
        this.soortGeweld = this.$el.querySelector('.soort-geweld').value
        this.eenheidVergelijking = this.$el.querySelector('.eenheid').value
        this.setResult()
        this.pushingAllData()
    }
}
</script>
<style scoped>
button{
    margin-top: 20px;
}
.jaartallen{
    display: flex;
    justify-content: space-between;
    width: 75%;
    margin: auto;
    max-width: 500px;
}
.jaartallen p{
    margin:0;
    width: auto;
}
.legenda{
    display: flex;
    justify-content: space-around;
    max-width: 500px;
    margin: auto;
}
.eenheid{
    display: flex;
    align-items: center;
}
.eenheid > div{
    width: 15px;
    height: 15px;
}
.jouwEenheid{
    background: #BF1F29;
    color: #BF1F29;
}
.andereEenheid{
    background: #3E66AE;
    color: #3E66AE;
}
.eenheid > p{
    background: none;
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
    max-width: 500px;
    max-height: 500px;
    /* border-top: #BF1F29 1px dotted; */
}
rect{
    transition: 1s;
}
rect.eigenResults{
    fill: #BF1F29;
}
rect.vergelijkResults{
    fill: #3E66AE;
}
text{
    fill: white;
    transition: 2s;
}
.opacityAnim{
    animation: animOpacity 3s forwards;
}
@keyframes animOpacity {
    from{opacity: 0}
    to{opacity: 1;}
}
</style>