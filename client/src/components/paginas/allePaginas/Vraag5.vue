<template>
    <div class="vraag5 flexCenter">
        <div class="tekst">
            <h2>Hoe vaak denk je dat de politie bij jou in de buurt een vuurwapen gebruikt in 2017 (slider)</h2>
        </div>
        <img src="http://www.shopotticatre.it/pimages/Work-in-progress-big-527-814.png" alt="">
        <button @click="nextInput">>></button>
    </div>
</template>
<script>
export default { 
    name: 'vraag5',
    components:{

    },
    data(){
        return{

        }
    },
    methods:{
        nextInput(){
            this.$el.querySelector('.tekst').classList.add("slidingOutTop")
            this.$el.querySelector('img').classList.add("slidingOutTop")
            this.$el.querySelector('button').classList.add("slidingOutTop")
            this.$emit('nextInput')
        }
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

