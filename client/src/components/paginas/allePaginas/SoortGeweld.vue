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
</div>
</template>
<script>
export default {
    name:'SoortGeweld',
    props:['dataset'],
    data(){
        return{
            alleEenheden:[],
            array:[],
            results:[],
            soortGeweld:'',
            eenheidVergelijking: '',
        }
    },
    methods:{
       filterEenheid(i){
           return !i.eenheid
       },
       handleChange(x){
           if(x==='geweld'){
               this.soortGeweld = event.target.value
               console.log(this.soortGeweld)
           }else{
               this.eenheidVergelijking = event.target.value
               this.filterValue()
           }
       },
       filterValue(){
           this.dataset.forEach(i => {
            //    console.log(i)
               if(i.eenheid === this.eenheidVergelijking){
                   this.results = []
                   i.jaar2017.forEach((x)=>{if(x.soort === this.soortGeweld){this.results.push(x)}})
                   console.log(this.results)
               }
           });
       },
       splitPorperties(){
           
       }
    },
    created(){
        this.dataset.forEach((i)=>{           
            this.alleEenheden.push(i.eenheid)
        })
        console.log(this.zeventien)

        setTimeout(()=>{
            this.soortGeweld = this.$el.querySelector('.soort-geweld').value
            console.log(this.soortGeweld)
            // this.zeventien.map((i)=>{
            //     if(i.eenheid===this.$el.querySelector('.eenheid').value){
            //         return this.array = i
            //     }
            //  })
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

</style>

