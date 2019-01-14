<template>
  <div id="app">
    <transition 
        name="router-anim"
    >
        <router-view 
            class="view" 
            v-on:userInput='userInput'
            v-bind:userInfo='userInfo'
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
        input: false,
        dataBase: false,
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
	  startQuiz(){
		  setTimeout(()=>{
			  this.startQuiz = true
			  document.querySelector("body").style.background = '#023274'
			  this.input = true
		  },2000)
    },
    showDatabase(){
      setTimeout(()=>{
			  this.startDone = true
			  document.querySelector("body").style.background = '#023274'
			  this.dataBase = true
		  },2000)
    },
    userInput(property, info){
        this.userInfo[property] = info
    }
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
	padding: 10px;
	width: 200px;
	border-radius: 10px;
	outline: none;
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




/* Page components global elements 
################################*/
.tekst{
  
}
.wrapper{

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
