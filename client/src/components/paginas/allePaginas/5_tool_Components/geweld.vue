<template>
    <div>
        <div class="content-20vh flexCenter">
            <div class="totaal flexCenter">
                <p>Totaal gemeld</p>
                <p class="aantal">1000</p>
            </div>
        </div>
        <div class="keuzes">
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
                <option value="richten">Richten</option>
                <option value="terHandNemen">Ter Hand Nemen</option>
                <option value="waarschuwingsSchot">Waarschuwingsschot</option>
            </select>
            <p class="jaartal">{{active.jaartal}}</p>
            <!-- <div class="maanden">
                <li
                    v-for="(m, index) in geweldSoortArray"
                    v-bind:key="'A'+index"
                    class="maand"
                >
                    {{m.maand}}
                </li>
            </div> -->
        </div>
        <div class="resultaten">
            <div class="maandGeweld"
                v-for="(m, index) in geweldSoortArray"
                v-bind:key="'B'+index"
            >
            <!-- V-for in de m hier en dan m.aantal -->
                <li class="maand">{{m.maand}}</li>
                <div class="aantal">
                    <div
                        class="vakje"
                        v-for="(i, index) in m.aantal"
                        v-bind:key="'c'+index"
                    ></div>
                </div>
            </div>
        </div>
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
            geweldSoortArray:[]  
        }
    },
    methods:{
        setBorder(d){
            this.active = d
            this.setValues()
            this.checkSpacing()
        },
        handleChange(event){
            this.geweldSoort = event.target.value
            this.geweldSoortArray = this.active[this.geweldSoort]
            this.checkSpacing()
        },
        setValues(){
            
            this.geweldSoortArray = this.active[this.geweldSoort]
        },
        checkSpacing(){
            setTimeout(() => {
                const x = this.$el.querySelector('.maandGeweld')
                const space = window.innerHeight - (x.offsetTop + x.offsetHeight)
                console.log(space)
                if(space <=0){
                    this.$el.querySelectorAll(".vakje").forEach((i)=>{
                        i.style.height = "1px"
                    })
                }else{
                    this.$el.querySelectorAll(".vakje").forEach((i)=>{
                        i.style.removeProperty('height');
                    })
                }
            }, 50);
            
        }
    },
    mounted(){
        this.geweldSoort=this.$el.querySelector("option").value
        this.setValues()
    }
    
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
</style>

