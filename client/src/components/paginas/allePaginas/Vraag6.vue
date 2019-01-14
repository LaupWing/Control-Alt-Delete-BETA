<template>
    <div class="vraag6 flexCenter">
        <div class="tekst">
            <h2>Hoeveel agenten werken er in jouw regio?</h2>
        </div>
        <img src="http://www.shopotticatre.it/pimages/Work-in-progress-big-527-814.png" alt="">
        <button @click="nextInput">>></button>
    </div>
</template>
<script>
export default { 
    name: 'vraag6',
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

