<template>
    <div>
        <div class="keuzes" @click="removeInfo">
            <nav>
                <li
                    v-for="(d,index) in dataset"
                    v-bind:key = "index"
                    @click="setBorder(d)"
                    :class="{activeLink: active === d}"
                >
                    {{d.jaartal}}
                </li>
            </nav>
            <select @change="handleChange">
                <option value="hond">Inzet van Hond</option>
                <option value="korteWapenstok">Korte Wapenstok</option>
                <option value="langeWapenstok">Lange Wapenstok</option>
                <option value="pepperspray">Pepperspray</option>
                <option value="richten">Richten van Vuurwapen</option>
                <option value="terHandNemen">Ter Hand Nemen van Vuurwapen</option>
                <option value="waarschuwingsSchot">Waarschuwingsschot</option>
            </select>
            <p @click="shareData(active.jaartal, active.totaal)" class="jaartal">In {{active.jaartal}} totaal <span class="red">{{active.totaal}}</span> geweldsmeldingen <i @click="popup" class="popup fas fa-question-circle"></i></p>
        </div>
        <div class="resultaten">
            <div class="maandGeweld"
                v-for="(m, index) in geweldSoortArray"
                v-bind:key="'B'+index"
            >
            <!-- V-for in de m hier en dan m.aantal -->
                <li class="maand">{{m.maand}}</li>
                <div class="aantal"
                    @click="details(m), shareData(m)"
                >
                    <!-- <transition-group name="fade"> -->
                        <div
                            v-for="(i, index) in m.aantal"
                            v-bind:key="'c'+index"
                        >
                            <div
                                v-if="m.aantal === '?'|| m.aantal ===''"
                            >
                            <p class="onbekend">?</p>
                            </div>
                            <div
                                v-else
                                class="vakje"
                            >  
                            </div>
                        </div>
                    <!-- </transition-group> -->
                </div>
            </div>
            <transition name="info-anim">
                <div v-if="showInfo" class="info">
                    {{geweldDetails}}
                </div>
            </transition>
        </div>
        <div class="content-20vh flexCenter" @click="removeInfo">
            <!-- <div class="totaal flexCenter">
                <p>Totaal gemeld</p>
                <p class="aantal">{{active.totaal}}</p>
            </div> -->
            <transition
                name="message-anim"
                mode="out-in"
            >
                <div 
                    class="message1 flexCenter"
                >
                    <p class="titel"><span class="red">{{titel}}</span></p>
                    <p class="subtitel"><span class="white">{{subtitel}}</span></p>
                </div>
            </transition>

        </div>
    </div>
</template>
<script>
export default { 
    name: 'Geweld',
    components:{
    },
    props:['dataset','currentRoute'],
    data(){
        return{
            active: this.dataset[0],
            options: {},
            geweldSoort: '',
            geweldSoortArray:[],
            showInfo: false,
            geweldDetails: '',
            titel: '',
            subtitel: '',
            maanden:[
                "Januari",
                "Februari", 
                "Maart", 
                "April", 
                "Mei", 
                "Juni",
                "Juli",
                "Augustus",
                "September",
                "Oktober",
                "November",
                "December"
            ],
            messages:[
                {
                    titel: 'Inzet politiehond niet gereguleerd',
                    subtitel: 'De politiehond is een geweldsmiddel dat vaak leidt tot ernstig letsel'
                },
                {
                    titel: 'Vuurwapengebruik in strijd met richtlijnen',
                    subtitel: 'De regels voor het vuurwapengebruik zijn niet in overeenstemming met internationale richtlijnen.'
                },
                {
                    titel: 'Invoering taser in basispolitiezorg ondanks kritiek',
                    subtitel: 'De politie wil de taser invoeren in de basispolitiezorg.'
                },
            ]  
        }
    },
    methods:{
        setBorder(d){
            this.active = d
            this.geweldSoortArray = this.active[this.geweldSoort]
            this.setValues()
        },
        handleChange(event){
            this.geweldSoort = event.target.value
            this.geweldSoortArray = this.active[this.geweldSoort]
            this.removeSpacingClass()
            this.$nextTick(()=>{
                this.checkSpacing()
            })
            this.changeMessage()
        },
        setValues(){
            this.geweldSoortArray = this.active[this.geweldSoort]
            this.removeSpacingClass()
            this.$nextTick(()=>{
                this.checkSpacing()
            })
        },
        checkSpacing(){
                const all = this.$el.querySelectorAll('.aantal')
                let numbers =[]
                all.forEach((a)=>{
                    numbers.push(a.clientHeight)
                })
                var largest = Math.max.apply(Math, numbers);
                var height = this.$el.querySelector('.resultaten').clientHeight
                
                const space = height - largest
                console.log(space)
                
                if(space <=10){
                    this.$el.querySelectorAll(".vakje").forEach((i)=>{
                        i.classList.add("fitted")
                    })
                }else{
                    this.removeSpacingClass()
                }
        },
        removeSpacingClass(){
            this.$el.querySelectorAll(".vakje").forEach((i)=>{
                                    i.classList.remove("fitted")
            })
        },
        details(d){

            console.log('showdetail')
            const monthNames = ["Januari", "Februari", "Maart", "April", "Mei", "Juni",
            "Juli", "Augustus", "September", "Oktober", "November", "December"
            ];
            this.geweldDetails = `Maand: ${monthNames[d.maand-1]} Aantal:${d.aantal}`
            if(event.target.parentElement.parentElement.className === "aantal"){
                this.$el.querySelectorAll(".aantal").forEach((i)=>{
                    i.classList.remove("details")
                })
                this.showInfo = true
                event.target.parentElement.parentElement.classList.add("details")
            }else{
                return
            }
            
        },
        removeInfo(){
            if(this.showInfo === true){
                this.$el.querySelectorAll(".aantal").forEach((i)=>{
                i.classList.remove("details")
                })
                this.showInfo = false
            }
        },
        messageLoop(){
            const loop = setInterval(()=>{
                                        if(this.message<3){
                                            this.message+=1
                                        }else{
                                            this.message = 1 
                                        }
            },10000)
        },
        changeMessage(){
            if(this.geweldSoort === 'hond'){
                this.titel = this.messages[0].titel
                this.subtitel = this.messages[0].subtitel
            }else if(this.geweldSoort === 'langeWapenstok' || this.geweldSoort === 'korteWapenstok'|| this.geweldSoort === 'pepperspray'){
                this.titel = this.messages[2].titel
                this.subtitel = this.messages[2].subtitel
            }else{
                this.titel = this.messages[1].titel
                this.subtitel = this.messages[1].subtitel
            }

        },
        shareData(x,y){
            const data = {
                tab: 'geweldsoort',
                soort : '',
                aantal : '',
                datum : '',
                perMaand: ''
            }
            console.log(x,y)
            if(y === undefined){
                data.aantal = x.aantal
                data.datum = `${this.maanden[x.maand-1]}, ${this.active.jaartal}`
                data.perMaand = true
                data.soort = this.$el.querySelector('select').value
            }else{
                data.datum = x
                data.aantal = y
                data.soort = 'Alle Geweldsmiddelen'
                data.perMaand = false
            }
            this.$emit('shareData', data)
        },
        popup(){
            this.$emit("pop")
        }
    },
    mounted(){
        this.geweldSoort=this.$el.querySelector("option").value
        this.setValues()
        this.changeMessage()
        this.geweldSoortArray.forEach((i)=>{
            if(i.aantal === "?" || i.aantal === ""){
                console.log(i.aantal)
            }else{
                console.log("klopt niet")
            }
        })
        console.log(this.$el.querySelector('select').value)
    },

    
}
</script>
<style scoped>
.totaal{
    background: #A03029;
    width: 30%;
    /* height: 60%; */
    padding: 5px 15px;
}
p{
    margin: 2px 0;
}
span{
    color: #A03029;
}
.subtitel span{
    color: white;
    font-size: 12px;
}
.aantal{
    font-size: 1.6em;
}
.keuzes{
    margin-top: 10px;
    background: #202020;
    width: 100%;
    height: 23vh;
    position: relative;
}
nav{
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-around;
    font-size: 12px;
}
.jaartal{
    margin: auto;
    margin-top: 20px;
}
.maanden{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 15px;
    display: flex;
    justify-content: space-around;
}
.maand{
    font-size: 11px;
    text-shadow: 0px 3px 2px rgba(255, 255, 255, 0.65);
    /* transform: translate(0,-120%); */
    position: absolute;
    top: -20px;
    margin: auto;
    left: 0;
    right:0;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
.activeLink{
    border-bottom: 2px solid;
}
.resultaten{
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: relative;
    height: 40vh;
}
.maandGeweld{
    width: 4%;
    position: relative;
    transition: 2s;
}
.aantal{
    width: 100%;
}
.vakje{
    width: 100%;
    height: 5px;
    background: #A03029;
    margin-bottom: 2px;
}
.details{
    box-shadow: 0px 3px 19px 5px rgba(255,255,255,1);
    background: white;
}

/* .info-anim-leave-active{
    animation: showInfo 2s forwards;
} */
.info-anim-enter-active{
    animation: showInfo 2s forwards;
}
.info{
    opacity: 1;
    position: absolute;
    bottom: 0;
    margin: auto;
    left: 0;
    right: 0;
}
.info p{
    margin: auto;
}
.fitted{
    height: 1.5px;
    margin-bottom: 1px;
}
@keyframes showInfo{
  from {transform: translate(0, 50%); opacity: 0}
  to {transform: translate(0, 0); opacity: 1;}
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.popup{
    color: yellow;
}
.message-anim-leave-active{
    animation: messageAnim 2s forwards;
}
.message-enter-leave-active{
    animation: messageAnim 2s forwards reverse;
}
@keyframes messageAnim {
    from{transform: translate(0,0);opacity: 1;}
    to{transform: translate(50vw,0); opacity: 0;}
}
</style>

