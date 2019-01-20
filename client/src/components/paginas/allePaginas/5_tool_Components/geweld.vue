<template>
    <div>
        <div class="content-20vh flexCenter" @click="removeInfo">
            <div class="totaal flexCenter">
                <p>Totaal gemeld</p>
                <p class="aantal">{{active.totaal}}</p>
            </div>
        </div>
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
                <option value="hond">Hond</option>
                <option value="korteWapenstok">Korte Wapenstok</option>
                <option value="langeWapenstok">Lange Wapenstok</option>
                <option value="pepperspray">Pepperspray</option>
                <option value="richten">Richten van Vuurwapen</option>
                <option value="terHandNemen">Ter Hand Nemen van Vuurwapen</option>
                <option value="waarschuwingsSchot">Waarschuwingsschot</option>
            </select>
            <p class="jaartal">{{active.jaartal}}</p>
        </div>
        <div class="resultaten">
            <div class="maandGeweld"
                v-for="(m, index) in geweldSoortArray"
                v-bind:key="'B'+index"
            >
            <!-- V-for in de m hier en dan m.aantal -->
                <li class="maand">{{m.maand}}</li>
                <div class="aantal"
                    @click="details(m)"
                >
                    <!-- <transition-group name="fade"> -->
                        <div
                            class="vakje"
                            v-for="(i, index) in m.aantal"
                            v-bind:key="'c'+index"
                        ></div>
                    <!-- </transition-group> -->
                </div>
            </div>
        </div>
        <transition name="info-anim">
            <div v-if="showInfo" class="info">
                {{geweldDetails}}
            </div>
        </transition>
    </div>
</template>
<script>
export default { 
    name: 'Geweld',
    components:{

    },
    props:['dataset'],
    data(){
        return{
            active: this.dataset[0],
            options: {},
            geweldSoort: '',
            geweldSoortArray:[],
            showInfo: false,
            geweldDetails: ''  
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
            this.$nextTick(() => {
                this.checkSpacing()
            })
        },
        setValues(){
            this.geweldSoortArray = this.active[this.geweldSoort]
            this.removeSpacingClass()
            this.$nextTick(() => {
                this.checkSpacing()
            })
        },
        checkSpacing(){
            // setTimeout(() => {
                const x = this.$el.querySelector('.maandGeweld')
                const space = window.innerHeight - (x.offsetTop + x.offsetHeight)
                if(space <=0){
                    this.$el.querySelectorAll(".vakje").forEach((i)=>{
                        i.classList.add("fitted")
                    })
                }else{
                    this.removeSpacingClass()
                }
            // }, 50);
        },
        removeSpacingClass(){
            this.$el.querySelectorAll(".vakje").forEach((i)=>{
                                    i.classList.remove("fitted")
                            })
        },
        details(d){
            const monthNames = ["Januari", "Februari", "Maart", "April", "Mei", "Juni",
            "Juli", "Augustus", "September", "Oktober", "November", "December"
            ];
            this.geweldDetails = `Maand: ${monthNames[d.maand-1]} Aantal:${d.aantal}`
            if(event.target.parentElement.className === "aantal"){
                this.$el.querySelectorAll(".aantal").forEach((i)=>{
                    i.classList.remove("details")
                })
                this.showInfo = true
                event.target.parentElement.classList.add("details")
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
            
        }
    },
    mounted(){
        this.geweldSoort=this.$el.querySelector("option").value
        this.setValues()
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
.aantal{
    font-size: 1.6em;
}
.keuzes{
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
    border-bottom: 2px solid 
}
.resultaten{
    width: 100%;
    display: flex;
    justify-content: space-around;
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
    position: fixed;
    bottom: 10px;
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
</style>

