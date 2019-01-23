<template>
   <div>
       <div class="intro">
        <img src="../../../assets/logoCAD.png" alt="">
        <div class="content-30vh">
            <h2>Politiegeweld</h2>
            <p><i>'Kloppen de cijfers??'</i></p>
        </div>
       </div>
        <i @click="next" class="arrow fas fa-caret-down"></i>
   </div>
</template>
<script>
export default {
	name: 'Intro',
	components:{
	},
	data(){
		return{
            
		}
    },
    methods:{
        next(){
            this.$router.push({ path: '/intro2'})
        }        
    },
    mounted(){
    }
}
</script>
<style scoped>
img{
    width: 10vh;
    position: fixed;
    margin: auto;
    top: 10px;
    left:0;
    right:0;
}
.intro{
    height: 100vh;
}
.content-30vh{
    opacity: 0;
    animation: opacityAnim 3s forwards;
    animation-delay: 2s;
}
p {
    margin: 10px auto;
}

</style>
