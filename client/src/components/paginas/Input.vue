<template>
    <div>
        <!-- User input vragen -->
        <!-- Dit kan modulair gemaakt worden -->
        <man-of-vrouw 
            v-if="geslachtShow" 
            v-on:nextInput="nextInput" 
            v-on:inputUser="inputUser"
        />
        <leeftijd-afkomst 
            v-bind:userInfo="userInfo" 
            v-on:nextInput="nextInput"
            v-on:inputUser="inputUser" 
            v-if="leeftijdAfkomstShow"
        />
        <adres 
            v-if="woonplaatsShow"
            v-on:nextInput="nextInput"
            v-on:inputUser="inputUser" 
        />
        <veilig
            v-if="veiligheidShow"
            v-bind:userInfo="userInfo"
            v-on:nextInput="nextInput"
            v-on:inputUser="inputUser"        
        />

        <!-- Quiz vragen -->
        <!-- Dit kan modulair gemaakt worden -->
        <vraag1
            v-if="vraag1Show"
            v-on:nextInput="nextInput"
        />
        <vraag2
            v-if="vraag2Show"
            v-on:nextInput="nextInput"
        />
        <vraag3
            v-if="vraag3Show"
            v-on:nextInput="nextInput"
        />
        <vraag4
            v-if="vraag4Show"
            v-on:nextInput="nextInput"
        />
        <vraag5
            v-if="vraag5Show"
            v-on:nextInput="nextInput"
        />
        <vraag6
            v-if="vraag6Show"
            v-on:nextInput="nextInput"
        />
        <vraag7
            v-if="vraag7Show"
            v-on:nextInput="nextInput"
        />

    </div>
</template>
<script>
import ManOfVrouw from './InputPaginas/ManOfVrouw.vue'
import LeeftijdAfkomst from './InputPaginas/leeftijdAfkomst.vue'
import Adres from './InputPaginas/Adres.vue'
import Veilig from './InputPaginas/Veiligheid.vue'
import Vraag1 from './InputPaginas/Vraag1.vue'
import Vraag2 from './InputPaginas/Vraag2.vue'
import Vraag3 from './InputPaginas/Vraag3.vue'
import Vraag4 from './InputPaginas/Vraag4.vue'
import Vraag5 from './InputPaginas/Vraag5.vue'
import Vraag6 from './InputPaginas/Vraag6.vue'
import Vraag7 from './InputPaginas/Vraag7.vue'


import PostService from '../../PostService.js'





export default {
    name: 'Input',
    components:{
        ManOfVrouw,
        LeeftijdAfkomst,
        Adres,
        Veilig,
        Vraag1,
        Vraag2,
        Vraag3,
        Vraag4,
        Vraag5,
        Vraag6,
        Vraag7
    },
    data(){
        return{
            vragenBeantwoord: 0,
            geslachtShow: true,
            leeftijdAfkomstShow: false,
            woonplaatsShow: false,
            veiligheidShow: false,
            vraag1Show: false,
            vraag2Show: false,
            vraag3Show: false,
            vraag4Show: false,
            vraag5Show: false,
            vraag6Show: false,
            vraag7Show: false,
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
    methods:{
        nextInput(){
            this.vragenBeantwoord++         
            setTimeout(()=>{
                switch(this.vragenBeantwoord){
                    case 1: this.leeftijdAfkomstShow = true
                            this.geslachtShow = false
                            break;
                    case 2: this.vraag1Show = true
                            this.leeftijdAfkomstShow = false
                            break;
                    case 3: this.vraag1Show = false
                            this.vraag2Show = true
                            break;
                    case 4: this.vraag2Show = false
                            this.woonplaatsShow = true
                            break;
                    case 5: this.woonplaatsShow = false
                            this.vraag3Show = true
                            break;
                    case 6: this.vraag3Show = false
                            this.vraag4Show = true
                            break;
                    case 7: this.vraag4Show = false
                            this.vraag5Show = true
                            break;
                    case 8: this.vraag5Show = false
                            this.vraag6Show = true
                            break;
                    case 9: this.vraag6Show = false
                            this.veiligheidShow = true
                            break;
                }
                // if(this.vragenBeantwoord == 4){
                //     // this.createPost()
                //     setTimeout(()=>{
                //         location.reload()
                //     },1000)
                // }
            }, 2000)
        },
        inputUser(prop, value){
            switch(prop){
                case 'geslacht': this.userInfo.geslacht = value
                                 break;
                case 'woonplaats': this.userInfo.woonplaats = value
                                 break;
                case 'veiligheidsGevoel': this.userInfo.veiligheidsGevoel = value
                                 break;
                case 'leeftijd': this.userInfo.leeftijd = value
                                 break;
                case 'afkomst': this.userInfo.afkomst = value
                                 break;
                case 'avatarPath': this.userInfo.avatarPath = value
                                 break;
            }
        },
        async createPost(){
            await PostService.insertPost(this.userInfo.woonplaats, this.userInfo.veiligheidsGevoel, this.userInfo.afkomst, this.userInfo.leeftijd, this.userInfo.geslacht)
        }
    },
}
</script>
<style>
.tekst{
    margin: 10px;
    color: white;
    background: rgba(0,0,0,.4);
    padding: 20px;
    display: inline-block;
    margin: auto;
    border-radius: 0 0 20px 20px;
    /* animation: slideInTekst 2s forwards; */
    max-width: 800px;
}
.buttons{
    margin-top: 30px;
    /* animation: slideIn 4s forwards; */
}
.wrapper{
    padding: 80px 50px;
    border: #bf975a solid 4px;
    border-radius: 30px;
    display: inline-block;
    /* animation: slideIn 3s forwards; */
    margin-top: 30px;
}
button{
    width: 100px;
}
</style>


