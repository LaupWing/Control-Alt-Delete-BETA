<template>
    <div class="vraag3 flexCenter">
        <div class="tekst">
            <h2>Heb je weleens te maken gehad met politiegeweld?</h2>
        </div>
        <img src="http://www.shopotticatre.it/pimages/Work-in-progress-big-527-814.png" alt="">
        <button @click="nextInput">>></button>
    </div>
</template>
<script>
export default { 
    name: 'vraag3',
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
        document.querySelector("body").style.background = '#38a3d1'
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

