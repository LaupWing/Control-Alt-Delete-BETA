<template>
  <div id="app">
    <transition 
        name="router-anim"
    >
        <router-view 
            class="view"
            v-bind:dataset='dataset'
            v-bind:userInfo='userInfo'
            v-on:userInput='userInput'          
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
        userInfo:{},
        dataset:[
            {
                eenheid: 'Noord-Holland',
                jaar2017:[
                    {
                        soort: 'pepperspray',
                        aantal: 70
                    },
                    {
                        soort: 'lange stok',
                        aantal: 15
                    },
                    {
                        soort: 'korte stok',
                        aantal: 17
                    },
                    {
                        soort: 'elektrische wapenstok',
                        aantal: 0
                    },
                    {
                        soort: 'inzet hond',
                        aantal: 14
                    },
                ],
                jaar2016:[
                    {
                        soort: 'pepperspray',
                        aantal: 102
                    },
                    {
                        soort: 'lange stok',
                        aantal: 3
                    },
                    {
                        soort: 'korte stok',
                        aantal: 28
                    },
                    {
                        soort: 'elektrische wapenstok',
                        aantal: 0
                    },
                    {
                        soort: 'inzet hond',
                        aantal: 8
                    },
                ],
                jaar2015:[
                    {
                        soort: 'pepperspray',
                        aantal: 109
                    },
                    {
                        soort: 'lange stok',
                        aantal: 4
                    },
                    {
                        soort: 'korte stok',
                        aantal: 50
                    },
                    {
                        soort: 'elektrische wapenstok',
                        aantal: 0
                    },
                    {
                        soort: 'inzet hond',
                        aantal: 18
                    },
                ],
            },
            {
                eenheid: 'Noord-Nederland',
                jaar2017:[
                    {
                        soort: 'pepperspray',
                        aantal: 81
                    },
                    {
                        soort: 'lange stok',
                        aantal: 1
                    },
                    {
                        soort: 'korte stok',
                        aantal: 11
                    },
                    {
                        soort: 'elektrische wapenstok',
                        aantal: 0
                    },
                    {
                        soort: 'inzet hond',
                        aantal: 14
                    },
                ],
                jaar2016:[
                    {
                        soort: 'pepperspray',
                        aantal: 69
                    },
                    {
                        soort: 'lange stok',
                        aantal: 0
                    },
                    {
                        soort: 'korte stok',
                        aantal: 1
                    },
                    {
                        soort: 'elektrische wapenstok',
                        aantal: 0
                    },
                    {
                        soort: 'inzet hond',
                        aantal: 14
                    },
                ],
                jaar2015:[
                    {
                        soort: 'pepperspray',
                        aantal: 102
                    },
                    {
                        soort: 'lange stok',
                        aantal: 5
                    },
                    {
                        soort: 'korte stok',
                        aantal: 15
                    },
                    {
                        soort: 'elektrische wapenstok',
                        aantal: 0
                    },
                    {
                        soort: 'inzet hond',
                        aantal: 9
                    },
                ],
            },
            {
                eenheid: 'Midden-Nederland',
                jaar2017:[
                    {
                        soort: 'pepperspray',
                        aantal: 66
                    },
                    {
                        soort: 'lange stok',
                        aantal: 23
                    },
                    {
                        soort: 'korte stok',
                        aantal: 10
                    },
                    {
                        soort: 'elektrische wapenstok',
                        aantal: 1
                    },
                    {
                        soort: 'inzet hond',
                        aantal: 16
                    },
                ],
                jaar2016:[
                    {
                        soort: 'pepperspray',
                        aantal: 80
                    },
                    {
                        soort: 'lange stok',
                        aantal: 2
                    },
                    {
                        soort: 'korte stok',
                        aantal: 20
                    },
                    {
                        soort: 'elektrische wapenstok',
                        aantal: 1
                    },
                    {
                        soort: 'inzet hond',
                        aantal: 17
                    },
                ],
                jaar2015:[
                    {
                        soort: 'pepperspray',
                        aantal: 72
                    },
                    {
                        soort: 'lange stok',
                        aantal: 20
                    },
                    {
                        soort: 'korte stok',
                        aantal: 21
                    },
                    {
                        soort: 'elektrische wapenstok',
                        aantal: 1
                    },
                    {
                        soort: 'inzet hond',
                        aantal: 15
                    },
                ],
            },
            {
                eenheid: 'Oost-Nederland',
                jaar2017:[
                    {
                        soort: 'pepperspray',
                        aantal: 53
                    },
                    {
                        soort: 'lange stok',
                        aantal: 3
                    },
                    {
                        soort: 'korte stok',
                        aantal: 12
                    },
                    {
                        soort: 'elektrische wapenstok',
                        aantal: 0
                    },
                    {
                        soort: 'inzet hond',
                        aantal: 17
                    },
                ],
                jaar2016:[
                    {
                        soort: 'pepperspray',
                        aantal: 104
                    },
                    {
                        soort: 'lange stok',
                        aantal: 2
                    },
                    {
                        soort: 'korte stok',
                        aantal: 2
                    },
                    {
                        soort: 'elektrische wapenstok',
                        aantal: 0
                    },
                    {
                        soort: 'inzet hond',
                        aantal: 24
                    },
                ],
                jaar2015:[
                    {
                        soort: 'pepperspray',
                        aantal: 126
                    },
                    {
                        soort: 'lange stok',
                        aantal: 20
                    },
                    {
                        soort: 'korte stok',
                        aantal: 21
                    },
                    {
                        soort: 'elektrische wapenstok',
                        aantal: 0
                    },
                    {
                        soort: 'inzet hond',
                        aantal: 15
                    },
                ],
            },
            {
                eenheid: 'Den-Haag',
                jaar2017:[
                    {
                        soort: 'pepperspray',
                        aantal: 141
                    },
                    {
                        soort: 'lange stok',
                        aantal: 12
                    },
                    {
                        soort: 'korte stok',
                        aantal: 24
                    },
                    {
                        soort: 'elektrische wapenstok',
                        aantal: 0
                    },
                    {
                        soort: 'inzet hond',
                        aantal: 27
                    },
                ],
                jaar2016:[
                    {
                        soort: 'pepperspray',
                        aantal: 174
                    },
                    {
                        soort: 'lange stok',
                        aantal: 35
                    },
                    {
                        soort: 'korte stok',
                        aantal: 35
                    },
                    {
                        soort: 'elektrische wapenstok',
                        aantal: 0
                    },
                    {
                        soort: 'inzet hond',
                        aantal: 33
                    },
                ],
                jaar2015:[
                    {
                        soort: 'pepperspray',
                        aantal: 233
                    },
                    {
                        soort: 'lange stok',
                        aantal: 25
                    },
                    {
                        soort: 'korte stok',
                        aantal: 29
                    },
                    {
                        soort: 'elektrische wapenstok',
                        aantal: 0
                    },
                    {
                        soort: 'inzet hond',
                        aantal: 51
                    },
                ]
            },
            {
                eenheid: 'Rotterdam',
                jaar2017:[
                    {
                        soort: 'pepperspray',
                        aantal: 173
                    },
                    {
                        soort: 'lange stok',
                        aantal: 44
                    },
                    {
                        soort: 'korte stok',
                        aantal: 10
                    },
                    {
                        soort: 'elektrische wapenstok',
                        aantal: 19
                    },
                    {
                        soort: 'inzet hond',
                        aantal: 50
                    },
                ],
                jaar2016:[
                    {
                        soort: 'pepperspray',
                        aantal: 180
                    },
                    {
                        soort: 'lange stok',
                        aantal: 58
                    },
                    {
                        soort: 'korte stok',
                        aantal: 29
                    },
                    {
                        soort: 'elektrische wapenstok',
                        aantal: 0
                    },
                    {
                        soort: 'inzet hond',
                        aantal: 45
                    },
                ],
                jaar2015:[
                    {
                        soort: 'pepperspray',
                        aantal: 222
                    },
                    {
                        soort: 'lange stok',
                        aantal: 47
                    },
                    {
                        soort: 'korte stok',
                        aantal: 9
                    },
                    {
                        soort: 'elektrische wapenstok',
                        aantal: 1
                    },
                    {
                        soort: 'inzet hond',
                        aantal: 47
                    },
                ]
            },
            {
                eenheid: 'Zeeland-West-Brabant',
                jaar2017:[
                    {
                        soort: 'pepperspray',
                        aantal: 80
                    },
                    {
                        soort: 'lange stok',
                        aantal: 22
                    },
                    {
                        soort: 'korte stok',
                        aantal: 13
                    },
                    {
                        soort: 'elektrische wapenstok',
                        aantal: 0
                    },
                    {
                        soort: 'inzet hond',
                        aantal: 16
                    },
                ],
                jaar2016:[
                    {
                        soort: 'pepperspray',
                        aantal: 92
                    },
                    {
                        soort: 'lange stok',
                        aantal: 7
                    },
                    {
                        soort: 'korte stok',
                        aantal: 16
                    },
                    {
                        soort: 'elektrische wapenstok',
                        aantal: 0
                    },
                    {
                        soort: 'inzet hond',
                        aantal: 23
                    },
                ],
                jaar2015:[
                    {
                        soort: 'pepperspray',
                        aantal: 88
                    },
                    {
                        soort: 'lange stok',
                        aantal: 6
                    },
                    {
                        soort: 'korte stok',
                        aantal: 8
                    },
                    {
                        soort: 'elektrische wapenstok',
                        aantal: 0
                    },
                    {
                        soort: 'inzet hond',
                        aantal: 29
                    },
                ],
            },
            {
                eenheid: 'Oost-Brabant',
                jaar2017:[
                    {
                        soort: 'pepperspray',
                        aantal: 44
                    },
                    {
                        soort: 'lange stok',
                        aantal: 7
                    },
                    {
                        soort: 'korte stok',
                        aantal: 8
                    },
                    {
                        soort: 'elektrische wapenstok',
                        aantal: 0
                    },
                    {
                        soort: 'inzet hond',
                        aantal: 10
                    },
                ],
                jaar2016:[
                    {
                        soort: 'pepperspray',
                        aantal: 56
                    },
                    {
                        soort: 'lange stok',
                        aantal: 8
                    },
                    {
                        soort: 'korte stok',
                        aantal: 14
                    },
                    {
                        soort: 'elektrische wapenstok',
                        aantal: 0
                    },
                    {
                        soort: 'inzet hond',
                        aantal: 14
                    },
                ],
                jaar2015:[
                    {
                        soort: 'pepperspray',
                        aantal: 61
                    },
                    {
                        soort: 'lange stok',
                        aantal: 6
                    },
                    {
                        soort: 'korte stok',
                        aantal: 12
                    },
                    {
                        soort: 'elektrische wapenstok',
                        aantal: 0
                    },
                    {
                        soort: 'inzet hond',
                        aantal: 19
                    },
                ],
            },
            {
                eenheid: 'Limburg',
                jaar2017:[
                    {
                        soort: 'pepperspray',
                        aantal: 63
                    },
                    {
                        soort: 'lange stok',
                        aantal: 3
                    },
                    {
                        soort: 'korte stok',
                        aantal: 12
                    },
                    {
                        soort: 'elektrische wapenstok',
                        aantal: 0
                    },
                    {
                        soort: 'inzet hond',
                        aantal: 9
                    },
                ],
                jaar2016:[
                    {
                        soort: 'pepperspray',
                        aantal: 57
                    },
                    {
                        soort: 'lange stok',
                        aantal: 12
                    },
                    {
                        soort: 'korte stok',
                        aantal: 4
                    },
                    {
                        soort: 'elektrische wapenstok',
                        aantal: 0
                    },
                    {
                        soort: 'inzet hond',
                        aantal: 10
                    },
                ],
                jaar2015:[
                    {
                        soort: 'pepperspray',
                        aantal: 53
                    },
                    {
                        soort: 'lange stok',
                        aantal: 12
                    },
                    {
                        soort: 'korte stok',
                        aantal: 1
                    },
                    {
                        soort: 'elektrische wapenstok',
                        aantal: 0
                    },
                    {
                        soort: 'inzet hond',
                        aantal: 8
                    },
                ]
            },
        ],
	  }
  },
  components: {
  },
  methods:{
      userInput(prop, value){
          this.userInfo[prop] = value
          console.log(this.userInfo)
      }
  },
}
</script>

<style>
/* Global elements styling 
################################*/
body{
    overflow: hidden;
    background: black;
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

h1{
    margin: 10px;
    font-size: 40px;
}
h2{
    margin: 0;
}
p{
    margin: 10px;
    width: 90%;
}
li{
	list-style: none;
}

/* Verschillende viewheights voor de content */
.content-15vh{
    height: 15vh;
}
.content-20vh{
    height: 20vh;
}
.content-25vh{
    height: 25vh;
}
.content-30vh{
    height: 30vh;
}
.content-40vh{
    height: 40vh;
}
.content-50vh{
    height: 50vh;
}


.content{
    height: 50vh;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}

/* Element styling */
.label{
    background: white;
    color: black;
    max-width: 180px;
    width: 50vw;
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
.flexAround{
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
}
.flexBetween{
	display: flex;
	justify-content: space-between;
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
    margin: auto; 
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
.percentage-1,.percentage-2{
    font-family: 'Special Elite', cursive;
    font-size: 36px;
    color: red;
}



/* Range Slider 
################################*/
input[type="range"] { 
    margin: auto;
    -webkit-appearance: none;
    position: relative;
    overflow: hidden;
    height: 30px;
    width: 80%;
    cursor: pointer;
    border-radius: 0; /* iOS */
}

::-webkit-slider-runnable-track {
    background: #ddd;
}

/*
 * 1. Set to 0 width and remove border for a slider without a thumb
 */
::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 30px; /* 1 */
    height: 30px;
    background: #fff;
    box-shadow: -100vw 0 0 100vw red;
    border: 2px solid #999; 
    /* border-radius: 50%; */
}

::-moz-range-track {
    height: 40px;
    background: red;
}

::-moz-range-thumb {
    background: #fff;
    height: 40px;
    width: 20px;
    border: 3px solid #999;
    border-radius: 0 !important;
    box-shadow: -100vw 0 0 100vw red;
    box-sizing: border-box;
}

::-ms-fill-lower { 
    background: red;
}

::-ms-thumb { 
    background: #fff;
    border: 2px solid #999;
    height: 40px;
    width: 20px;
    box-sizing: border-box;
}

::-ms-ticks-after { 
    display: none; 
}

::-ms-ticks-before { 
    display: none; 
}

::-ms-track { 
    background: #ddd;
    color: transparent;
    height: 40px;
    border: none;
}

::-ms-tooltip { 
    display: none;
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
