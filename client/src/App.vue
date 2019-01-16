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
                // jaar2017:[
                //     {
                //         soort: 'pepperspray',
                //         aantal: 70
                //     },
                //     {
                //         soort: 'lange stok',
                //         aantal: 15
                //     },
                //     {
                //         soort: 'korte stok',
                //         aantal: 17
                //     },
                //     {
                //         soort: 'elektrische wapenstok',
                //         aantal: 0
                //     },
                //     {
                //         soort: 'inzet hond',
                //         aantal: 14
                //     },
                // ],
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
                ]
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
                ]
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
                ]
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
                ]
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
                ]
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
