<template>
    <div class="veiligheid flexCenter">
        <div class="tekst">
            <h2>Hoe onveilig voel jij je rondom poltie-agenten?</h2>
        </div>
        <div class="paspoort">
            <div class="paspoort-logo flexCenter">Paspoort</div>
            <p class="cad">Control Alt Delete</p>
            <!-- <img src="../../../assets/Avatar/man/jong.png" alt=""> -->
            <div class="img-container">
                <img class="avatar" v-bind:src="imgUrl()" alt="">
                <img v-if="gevoelImg === 1" class="gevoel zeer-veilig slideInImg" src="../../../assets/Avatar/gevoel/zeer-veilig.png" alt="">
                <img v-if="gevoelImg === 2" class="gevoel tevreden slideInImg" src="../../../assets/Avatar/gevoel/tevreden.png" alt="">
                <img v-if="gevoelImg === 3" class="gevoel neutraal slideInImg" src="../../../assets/Avatar/gevoel/neutraal.png" alt="">
                <img v-if="gevoelImg === 4" class="gevoel nerveus slideInImg" src="../../../assets/Avatar/gevoel/nerveus.png" alt="">
                <img v-if="gevoelImg === 5" class="gevoel angstig slideInImg" src="../../../assets/Avatar/gevoel/angstig.png" alt="">
                <img v-if="gevoelImg === 6" class="gevoel zeer-angstig slideInImg" src="../../../assets/Avatar/gevoel/zeer-angstig.png" alt="">
                <p class="veiligheid">Onveiligheidsgevoel: {{veiligheidsGevoel}}</p>
            </div>
            <div class="info">
                <p class="label">Afkomst</p>
                {{afkomst}}
                <p class="label">Woonplaats</p>
                {{woonplaats}}
                <p class="label">Gemaakt op D/M/Y</p>
                {{gemaakt.getDate()}}/{{gemaakt.getMonth()+1}}/{{gemaakt.getFullYear()}}
                <p class="label">Leeftijd</p>
                {{leeftijd}}
                <p class="label">Geslacht</p>
                {{geslacht}}
            </div>
        </div>
        <p class="onveiligheid">Onveiligheidsgevoel = {{veiligheidsGevoel}}/10</p>
        <div class="sliderBorder">
         <input @change="handleChange" class="slider" type="range" min="1" max="10" v-model="veiligheidsGevoel">
        </div>
         <button 
             :class="['next button2', (flag === false) ? 'disabled' : '']"
             @click="inputCompleted"
             >
              >>
        </button>
    </div>
</template>
<script>
export default {
    name:'veiligheid',
    props:['userInfo'],
    data(){
        return{
            avatarPath: this.userInfo.avatarPath,
            leeftijd: this.userInfo.leeftijd,
            woonplaats: this.userInfo.woonplaats,
            geslacht: this.userInfo.geslacht,
            afkomst: this.userInfo.afkomst,
            veiligheidsGevoel: 1,
            gevoelImg: 1,
            flag: false,
            gemaakt: new Date(),
            kleur:[
                {
                    onveilig:1,
                    color: 'one'
                },
                {
                    onveilig:2,
                    color: 'two'
                },
                {
                    onveilig:3,
                    color: 'three'
                },
                {
                    onveilig:4,
                    color: 'four'
                },
                {
                    onveilig:5,
                    color: 'five'
                },
                {
                    onveilig:6,
                    color: 'six'
                },
                {
                    onveilig:7,
                    color: 'seven'
                },
                {
                    onveilig:8,
                    color: 'eight'
                },
                {
                    onveilig:9,
                    color: 'nine'
                },
                {
                    onveilig:10,
                    color: 'ten'
                },
            ],
            colorCode: 'rgba(9, 123, 0,.6)'
        }
    },
    methods:{
        imgUrl(){
            return require(`../../../assets/Avatar/${this.avatarPath}`)
        },
        handleChange(){
            this.flag = true
            this.imgTransition()
            this.kleur.forEach((i)=>{
                if(i.onveilig == this.veiligheidsGevoel){
                    this.$el.querySelector('.img-container').classList.forEach((c)=>{
                        if(c!=='img-container'){
                            this.$el.querySelector('.img-container').classList.remove(c)
                        }
                    })
                    this.$el.querySelector('.img-container').classList.add(i.color)
                }
            })
        },
        imgTransition(){
            if(this.$el.querySelector('.gevoel').classList.contains('fadeAwayImg')){
                this.changeGevoel()
                this.$el.querySelector('.gevoel').classList.add('slideInImg')
                this.removeTransition()
            }else{
                this.$el.querySelector('.gevoel').classList.add('fadeAwayImg')
                this.restartTransition()
            }
        },
        removeTransition(){
            setTimeout(()=>{
                this.$el.querySelector('.gevoel').classList.remove('fadeAwayImg')
                this.$el.querySelector('.gevoel').classList.remove('slideInImg')
            },1000)
        },
        restartTransition(){
            setTimeout(()=>{
                this.imgTransition()
            },1000)
        },
        changeGevoel(){
            const n = this.veiligheidsGevoel;
            if(n < 2){
                this.gevoelImg = 1
            }else if(n >= 2 && n < 3){
                this.gevoelImg = 2
            }
            else if(n >= 3 && n < 5){
                this.gevoelImg = 3
            }
            else if(n >= 5 && n < 7){
                this.gevoelImg = 4
            }
            else if(n >= 7 && n <= 8){
                this.gevoelImg = 5
            }
            else{
                this.gevoelImg = 6
            }
        },
        inputCompleted(){
            this.$el.querySelector('.tekst').classList.add('slidingOutTop')
            this.$el.querySelector('button').classList.add('slidingOutTop')
            this.$el.querySelector('.sliderBorder').classList.add('slidingOutTop')
            this.$el.querySelector('.onveiligheid').classList.add('slidingOutTop')
            this.$el.querySelector('.paspoort').classList.add('slidingOutTop')
            this.$emit('nextInput')
            this.$emit('inputUser', 'veiligheidsGevoel', this.veiligheidsGevoel)
        }
    },
    created(){
        document.querySelector("body").style.background = '#023274'

    }
}
</script>
<style scoped>
.paspoort{
    width: 600px;
    height: 350px;
    background: radial-gradient(circle farthest-side, #ddf2d1,#D0D8E0);
    /* background: radial-gradient(circle farthest-side, #ddf2d1,rgba(9, 123, 0,.6)); */
    border-radius: 10px;
    position: relative;
    box-shadow: 15px 14px 5px 1px rgba(0,0,0,0.3);
    animation: slideIn 2s;
}
.paspoort-logo{
    width: 20%;
    background: blue;
    top: 10px;
    left: 10px;
    color: white;
    padding: 10px 15px;
    text-transform: uppercase;
    letter-spacing: 5px;
}
.paspoort > * {
    position: absolute;
}
.tekst{
    margin-bottom: 50px;
}
.next{
    position: absolute;
    bottom: 30px;
    animation: slideIn 4s;
}
img.avatar{
    width: 180px;
    height: 250px;
}
.img-container{
    left: 20px;
    top: 60px;
    padding: 5px;
    transition: .7s;
}
.cad{
    top: 17px;
    text-transform: uppercase;
    color: blue;
    left: 230px;
    letter-spacing: 8px;
    font-size: 20px;
}
.info{
    left: 220px;
    top: 60px;
    text-align: left;
}
.label{
    background: lightblue;
    width: 300px;
    /* margin: 5px; */
    margin-top: 10px;
    padding: 3px;
    font-size: 12px;
}

.onveiligheid{
    font-size: 25px;
    color: white;
    margin-top: 40px;
    animation: slideIn 3s;
}
/* Gevoel img properties */
img.nerveus{
    position: absolute;
    width: 50px;
    left: 56px;
    top: 54px;
}
img.angstig{
    position: absolute;
    width: 70px;
    left: 60px;
    top: 49px;
}

img.zeer-angstig{
    position: absolute;
    width: 90px;
    left: 56px;
    top: 50px;
}

img.tevreden{
    position: absolute;
    width: 25px;
    left: 82px;
    top: 122px
}
img.zeer-veilig{
    position: absolute;
    width: 25px;
    left: 82px;
    top: 122px
}
img.neutraal{
    position: absolute;
    width: 25px;
    left: 82px;
    top: 122px
}

/* ColorStates */
.one{
    background: rgba(9, 123, 0,.6);
}

.two{
    background: rgba(41, 107, 0,.6);
}

.three{
    background: rgba(74, 90, 0,.6)
}

.four{
    background: rgba(105, 75, 0,.6);
}

.five{
    background: rgba(125, 65, 0,.6);
}

.six{
    background: rgba(152, 51, 0,.6);
}

.seven{
    background: rgba(176, 40, 0,.6);
}

.eight{
    background: rgba(200, 28, 0,.6);
}

.nine{
    background: rgba(223, 15, 0,.6);
}

.ten{
    background: rgba(247, 3, 0,.6);
}

.sliderBorder{
  bottom: 110px;
  padding: 5px;
  border: solid white 5px;
  border-radius: 40px;
  margin-top: 100px;
  position: fixed;
  animation: slideIn 3s;
}
/* Custom Slider */
.slider {
  -webkit-appearance: none;
  width: 500px;
  height: 50px;
  /* background: #d3d3d3; */
  background-color: transparent;
  background-image: linear-gradient(to right, green , red);
  outline: none;
  opacity: 0.7;
  margin: 3px 3px 0 3px;
  -webkit-transition: .2s;
  transition: opacity .2s;
  border-radius: 30px;
  padding-bottom: 1px;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #bf975a;
  cursor: pointer;
}

/* Imgfading */
.fadeAwayImg{
    animation: fadingAway 1s forwards;
}
@keyframes fadingAway{
  from {transform: translate(0, 0);}
  to {transform: translate(50px, 0); opacity: 0;}
}

.slideInImg{
    animation: slideInImg 1s forwards;
}
@keyframes slideInImg{
  from {transform: translate(-50px, 0); opacity: 0;}
  to {transform: translate(0, 0); opacity: 1;}
}


</style>

