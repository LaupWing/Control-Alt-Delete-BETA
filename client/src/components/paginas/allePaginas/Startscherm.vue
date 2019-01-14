<template>
   <div>
       <div class="content-30vh flexCenter">
            <h1>Politiegeweld</h1>
            <h2>Wat weet jij ervan?</h2>
       </div>
        <div class="content">
            <p>Hoeveel geweldsmiddelen heeft de politie?</p>
            <p>In 2017 is er in totaal ... een vuurwapen gebruikt door de politie. Terecht maar ook onterecht</p>
            <p>Hoe vaak is dat bij jou in de buurt gebeurt?</p>
        </div>
        <router-link to='/woonplaats'>
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

</style>
