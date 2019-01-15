<template>
  <div id="app">
    <transition 
        name="router-anim"
    >
        <router-view 
            class="view"
            v-bind:zeventien='zeventien'
        >
        </router-view>
     </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
	  return{
        zeventien:[
            {
                eenheid: 'Noord-Nederland',
                pepperspray:'81',
                langStok: '1',
                korteStok: '11',
                elektrischeWapenstok: '0',
                hond: '14'
            },
            {
                eenheid: 'Midden-Nederland',
                pepperspray:'66',
                langStok: '23',
                korteStok: '10',
                elektrischeWapenstok: '1',
                hond: '16'
            },
            {
                eenheid: 'Oost-Nederland',
                pepperspray:'53',
                langStok: '3',
                korteStok: '12',
                elektrischeWapenstok: '0',
                hond: '17'
            },
            {
                eenheid: 'Den-Haag',
                pepperspray:'141',
                langStok: '12',
                korteStok: '24',
                elektrischeWapenstok: '0',
                hond:'27'
            },
            {
                eenheid: 'Rotterdam',
                pepperspray:'173',
                langStok: '44',
                korteStok: '10',
                elektrischeWapenstok: '19',
                hond: '50'
            },
            {
                eenheid: 'Zeeland-West-Brabant',
                pepperspray:'80',
                langStok: '22',
                korteStok: '13',
                elektrischeWapenstok: '0',
                hond: '16'
            },
            {
                eenheid: 'Oost-Brabant',
                pepperspray:'44',
                langStok: '7',
                korteStok: '8',
                elektrischeWapenstok: '0',
                hond: '10'
            },
            {
                eenheid: 'Limburg',
                pepperspray:'63',
                langStok: '3',
                korteStok: '12',
                elektrischeWapenstok: '0',
                hond: '9'
            },
        ],
        userInfo:{
                geslacht:'',
                woonplaats: '',
                avatarPath: '',
                leeftijd:'',
                afkomst:'',
                veiligheidsGevoel: '',
            }
	  }
  },
  components: {
  },
  methods:{

  },
}
</script>

<style>
/* Global elements styling 
################################*/
body{
    overflow: hidden;
    height: 100vh;
    margin: 0;
    background: url('./assets/logoCAD.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
.view{
    width: 100vw;
    height: 100vh;
    background: black;
    color: white;
    position: fixed;
}
#app {
  font-family: 'Roboto Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


.content-15vh{
    height: 15vh;
}
.content-20vh{
    height: 20vh;
}
.content-30vh{
    height: 30vh;
}
.content-40vh{
    height: 40vh;
}
.content-50vh{
    height: 40vh;
}
h1{
    margin: 10px;
    font-size: 40px;
}
h2{
    margin: 0;
}


.content{
    height: 50vh;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}
p{
    margin: 10px;
}
li{
	list-style: none;
}



/* Globale input styling 
################################*/
label{
	color: #bf975a;
	font-size: 25px;
}
select{
	padding: 5px;
	width: 250px;
	outline: none;
    text-align: center;
}
svg > path{
  transition: .25s;
}



/* Position styling classes 
################################*/
.flexCenter{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.offsetTop{
	margin-top: 30px;
}



/* Styling States 
################################*/
.invisible{
  opacity: 0;
}



/* Default button styling de rest staan in de buttons component
################################*/
button{
    background: transparent;
    border: white solid 2px;
    outline: none;
    color: white;
    padding: 10px 20px;
    width: 100px;
    font-weight: 600;
    transition: .25s;
    cursor: pointer;
}
button:hover{
    background: white;
    color: black;
}
.buttons{
    display: flex;
    width: 80%;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
    max-width: 400px;
}




/* Pages styling
################################*/
.results-container{
    margin-top: 50px;
}
.results{
    display: flex;
    width: 80%;
    justify-content: space-around;
}
.results-ja > p, .results-nee > p {
    margin: 10px;
}
.result-anim-enter-active{
    animation: slideInResult 4s forwards;
}
@keyframes slideInResult {
    from{transform: translate(0,50px);opacity: 0;}
    to{transform: translate(0,0);opacity: 1;}
}
.percentage-ja,.percentage-nee{
    font-family: 'Special Elite', cursive;
    font-size: 36px;
    color: red;
}


/* Scrollbar 
################################*/

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

/* Globale keyframes 
################################*/


@keyframes slideIn {
  from {transform: translate(0, 100vh);}
  to {transform: translate(0, 0)}
}

/* Default keyframe for tekst div */
@keyframes slideInTekst{
  from {transform: translate(0, -50px);}
  to {transform: translate(0, 0)}
}

/* Dissapear elements through the bottom */


/* Dissapear elements through the top */
.router-anim-leave-active{
    animation: slideOutTop 2s forwards;
}
.router-anim-enter-active{
    animation: slideOutBottom 2s forwards;
}

@keyframes slideOutTop{
  from {transform: translate(0, 0);}
  to {transform: translate(0, -100vh)}
}

@keyframes slideOutBottom{
  from {transform: translate(0, 100vh);}
  to {transform: translate(0, 0)}
}

@keyframes opacityAnim{
  from {opacity: 0;}
  to {opacity: 1;}
}

</style>
