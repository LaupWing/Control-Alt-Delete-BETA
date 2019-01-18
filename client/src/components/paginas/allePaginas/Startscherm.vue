<template>
   <div>
       <div class="content-30vh flexCenter intro1">
            <h1>Politiegeweld</h1>
            <h2>Wat weet jij ervan?</h2>
       </div>
        <div class="content">
            <p class="intro2">Hoeveel geweldsmiddelen heeft de politie?</p>
            <p class="intro3">In 2017 is er in totaal ... een vuurwapen gebruikt door de politie. Terecht maar ook onterecht</p>
            <p class="intro4">Hoe vaak is dat bij jou in de buurt gebeurt?</p>
        </div>
        <router-link class="intro5" to='/welkom'>
            <button>START</button>
        </router-link>
   </div>
</template>
<script>
export default {
	name: 'StartScherm',
	components:{
	},
	data(){
		return{

		}
  },
  methods:{
   
  }
}
</script>
<style scoped>
.intro1{
    animation: intro 2s forwards;
}
@keyframes intro{
    from{transform: translate(0,20vh)}
    to{transform: translate(0,0)}
}
.intro2{
    opacity: 0;
    animation: intro2tm4 2s forwards;
    animation-delay: 2s;
}
.intro3{
    opacity: 0;
    animation: intro2tm4 2s forwards;
    animation-delay: 4s;
}
.intro4{
    opacity: 0;
    animation: intro2tm4 2s forwards;
    animation-delay: 6s;
}
.intro5{
    opacity: 0;
    animation: intro5 2s forwards;
    animation-delay: 8s;
}
@keyframes intro2tm4{
    from{transform: translate(0,5vh);opacity: 0;}
    to{transform: translate(0,0);opacity: 1;}
}
@keyframes intro5{
    from{opacity: 0;}
    to{opacity: 1;}
}
</style>
