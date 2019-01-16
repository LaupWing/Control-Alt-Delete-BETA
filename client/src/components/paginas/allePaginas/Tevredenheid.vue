<template>
    <div class="flexCenter">
        <div class="content">
            <div class="content-25vh flexAround">
                <h2>De Politie</h2>
                <p>De overheid meet jaarlijks de tevredenheid over de politie</p>
                <p>Hoeveel procent ben jij tevreden van het optreden van de politie bij jou in de buurt</p>
            </div>
            <div>
                <p class="percentage-1">{{tevredenheid}}</p>
                <input class="slider" type="range" min='0' max='100' v-model="tevredenheid">
            </div>
            <button>Volgende</button>
        </div>
    </div>    
</template>
<script>
export default { 
    name: 'Tevredenheid',
    components:{

    },
    data(){
        return{
            tevredenheid: 1
        }
    },
    methods:{
        
    },
    created(){
        
    }
    
}
</script>
<style scoped>
img{
    animation: slideIn 3s forwards;
}
button{
    animation: slideIn 4s forwards;
}
</style>

