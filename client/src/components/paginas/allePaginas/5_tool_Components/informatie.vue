<template>
    <div>
        <div class="content-10vh flexCenter">
            <p class="beschrijving">Hieronder vind je een beschrijving over de verschillende soorten politiegeweld zoals vermeld op de webstie van de politie</p>
        </div>
        <div class="container">
            <InformatieItem
                v-for="(g, index) in geweldUitleg"
                v-bind:key="index"
                v-bind:data="g"
            ></InformatieItem>
        </div>
    </div>
</template>
<script>
import InformatieItem from './informatieItem.vue'
export default { 
    name: 'Informatie',
    components:{
        InformatieItem
    },
    data(){
        return{
            geweldUitleg:[
                {
                    soort: 'Het gesprek',
                    uitleg: 'Het belangrijkste wapen van een agent is zijn mond. Door in gesprek te gaan is het vaak niet nodig om geweld in te zetten om de situatie onder controle te krijgen. '
                },
                {
                    soort: 'Fysiek geweld',
                    uitleg: 'Een agent word getraind om fysiek geweld in te zetten om een verdachte aan te houden '
                },
                {
                    soort: 'Wapenstok',
                    uitleg: 'Iedere agent draagt een wapenstok die is opgebouwd uit pvc met verharde rubber, wanneer een wapenstok wordt gebruikt zijn agenten getraind om zich te richten op de armen en benen'
                },
                {
                    soort: 'Pepperspray',
                    uitleg: 'Pepperspray veroorzaakt eena cute ontsteking aan de ogen, zodat mensen hun ogen moeten sluiten. In deze tijd kan de politie aanhouding verrichten'
                },
                {
                    soort: 'Diensthond',
                    uitleg: 'De diensthond kan worden ingezet als de wapenstok en de pepperspray niet meer afdoende zijn'
                },
                {
                    soort: 'Dienstwapen',
                    uitleg: 'Een agent gebruikt alleen zijn dienstwapen bij aanhouding van vuurwapen gevraaglijke verdachten of in noodweer'
                }
            ]
        }
    },
    methods:{
        test(){
            console.log(event.target)
        }
    },
    created(){
        
    }
    
}
</script>
<style scoped>
/* h3{
    text-transform: uppercase;
    height: 45px;
    background: #A03029;
    display: flex;
    padding: 0 20px;
    align-items: center;
    justify-content: space-between;
    margin: 5px;
}
.geweldSoort{
    width: 100%;
} */
i{
    font-size: 26px;
}
.container{
    overflow: auto;
    height: 67vh;
}
.beschrijving{
    font-size: 12px;
    text-align: left;
}
</style>

