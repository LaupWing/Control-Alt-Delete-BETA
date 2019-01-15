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
    props:['dataset', 'userInfo'],
    data(){
        return{
            alleEenheden:[],
            array:[],
            eigenResults:[],
            results:[],
            soortGeweld:'',
            eenheidVergelijking: '',
            jouwEenheid: this.userInfo.Eenheid
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
           }
       },
       setResult(){
           this.results = []
           this.dataset.forEach(i => {
               if(i.eenheid === this.eenheidVergelijking || i.eenheid === this.jouwEenheid){
                   i.jaar2017.forEach((x)=>{
                       if(x.soort === this.soortGeweld){
                           if(i.eenheid === this.eenheidVergelijking){
                               x['Eenheid'] = this.eenheidVergelijking
                           }else{
                               x['Eenheid'] = this.jouwEenheid
                           }
                           this.results.push(x)
                           }                    
                       })
               }
           });
       }
    },
    created(){
        this.dataset.forEach((i)=>{           
            this.alleEenheden.push(i.eenheid)
        })

        setTimeout(()=>{
            this.soortGeweld = this.$el.querySelector('.soort-geweld').value
            this.eenheidVergelijking = this.$el.querySelector('.eenheid').value
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

