<template>
    <div class="flexCenter">
        <div class="content">
            <div class="content-25vh flexAround">
                <h2>De Politie</h2>
                <p>De overheid meet jaarlijks de tevredenheid over de politie</p>
                <p>Hoeveel procent ben jij tevreden van het optreden van de politie bij jou in de buurt</p>
            </div>
            <div>
                <input class="slider" type="range">
            </div>
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

