<template>
    <div class="vraag4 flexCenter">
        <div class="tekst">
            <h2>Denk je dat het politiegeweld tussen 2016 en 2018 is toegenomen of is verminderd?</h2>
        </div>
        <img src="http://www.shopotticatre.it/pimages/Work-in-progress-big-527-814.png" alt="">
        <button @click="nextInput">>></button>
    </div>
</template>
<script>
export default { 
    name: 'vraag4',
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

