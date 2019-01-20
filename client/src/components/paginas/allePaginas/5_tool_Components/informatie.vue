<template>
    <div class="flexCenter">
        <div class="content-50vh flexAround">
            <div class="content-15vh flexAround">
                <h2>Wapen gebruik</h2>
                <p>Hoe vaak denk je dat de politie een vuurwapen heeft gebruikt bij jou in de buurt</p>
            </div>
            <div class="userInput">
                <p class="percentage-1">{{aantal}}</p>
                <input type="range" min='0' max='200' v-model="aantal">
            </div>
        </div>
        <div class="content-20vh flexCenter">
            <button>Volgende</button>
        </div>
    </div>
</template>
<script>
export default { 
    name: 'WapenGebruik',
    components:{
        
    },
    data(){
        return{
            aantal: 0
        }
    },
    methods:{
        
    },
    created(){
        
    }
    
}
</script>
<style scoped>
.userInput{
    width: 100%;
}
p{
    margin: auto;
}
</style>

