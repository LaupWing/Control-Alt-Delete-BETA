<template>
<div>
    <div class="content-20vh flexCenter">
        <div v-if="message ===1" class="message1 flexCenter">
                <p class="titel"><span class="red">Cijfers dodelijke slachtoffers zijn niet compleet</span></p>
                <p class="subtitel"><span class="white">geen publieke cijfers zijn over dodelijke slachtoffers van fysiek geweld door de politie</span></p>
        </div>
        <div v-if="message === 2" class="message1 flexCenter">
                <p class="titel"><span class="red">Man van 41 neergeschoten door poltie</span></p>
                <p class="subtitel"><span class="white">Politie agenten dachten dat hij een mes of een scherpe voorwerp had, maar bleek achteraf niet zo te zijn </span></p>
        </div>    
    </div>
    <div class="keuzes">
        <nav>
                <li
                    v-for="(d,index) in aantalDoden"
                    v-bind:key = "index"
                    :class="{activeLink: active === d}"
                    @click="handleClick(d)"
                >
                    {{d.jaartal}}
                </li>
            </nav>
            <div class="svgContainer">
                <svg v-for="(a,index) in active.schietincidenten" v-bind:key="'A'+index" class="stickfigure1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232.8 626"><title>politie-agent2</title>
                    <g>
                        <path d="M108,1043a10.6,10.6,0,0,0-2.1-1.1c-10.2-2.8-14.9-10.1-16-20a83.6,83.6,0,0,1-.4-10V611.2H76.9V762.9c0,6.3-.9,12.2-5.7,16.5s-13.4,7.1-21.4,3.6-11.9-8.7-11.9-17.3V597.8c.1-15.5,4.6-29.1,17.9-38.2a68.6,68.6,0,0,1,35.1-11.9c9.3-.6,18.6-.8,27.9-.7,33.5.1,67-.2,100.5.9,16.6.6,31.4,7.1,42.1,20.8,7.5,9.6,9.2,20.9,9.2,32.5q.1,76.9,0,154c0,7.1-.8,14-6.6,19.2s-11.5,7.4-18.7,4.7-11.9-9.3-13.1-17.4a59.9,59.9,0,0,1-.5-9.5V618.3c0-2.3-.2-4.6-.3-6.6-.6-.4-.7-.5-.9-.5-11.4-1.5-11.4-1.5-11.4,9.7v392.4c.7,14.5-3.7,25.6-19.1,29.7H186c-4.3-2.6-9.2-4.6-12.8-8-5.5-5.4-5.4-13-5.4-20.2V778.6H147.7c-6.7,0-6.7,0-6.7,6.7v223.4c0,3.9,0,7.7-.2,11.5-.8,12-5.6,18.1-17.1,21.8a15.1,15.1,0,0,0-1.7,1Z" transform="translate(-37.9 -417)"/>
                        <path d="M159,417c11.4,2.4,21.8,6.5,30.5,14.8,14.8,14.1,19.7,31.4,15.2,50.9-7.2,31.3-39,49.3-70.5,37.7-19.3-7-31.1-21.9-34.1-42.6-4.2-29.7,16.9-55.3,44.1-60a7.1,7.1,0,0,0,1.8-.8Z" transform="translate(-37.9 -417)"/>
                    </g>
                </svg>
            </div>
            <div class="legenda">
                <svg class="stickfigure2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232.8 626"><title>politie-agent2</title>
                        <g>
                            <path class="white" d="M108,1043a10.6,10.6,0,0,0-2.1-1.1c-10.2-2.8-14.9-10.1-16-20a83.6,83.6,0,0,1-.4-10V611.2H76.9V762.9c0,6.3-.9,12.2-5.7,16.5s-13.4,7.1-21.4,3.6-11.9-8.7-11.9-17.3V597.8c.1-15.5,4.6-29.1,17.9-38.2a68.6,68.6,0,0,1,35.1-11.9c9.3-.6,18.6-.8,27.9-.7,33.5.1,67-.2,100.5.9,16.6.6,31.4,7.1,42.1,20.8,7.5,9.6,9.2,20.9,9.2,32.5q.1,76.9,0,154c0,7.1-.8,14-6.6,19.2s-11.5,7.4-18.7,4.7-11.9-9.3-13.1-17.4a59.9,59.9,0,0,1-.5-9.5V618.3c0-2.3-.2-4.6-.3-6.6-.6-.4-.7-.5-.9-.5-11.4-1.5-11.4-1.5-11.4,9.7v392.4c.7,14.5-3.7,25.6-19.1,29.7H186c-4.3-2.6-9.2-4.6-12.8-8-5.5-5.4-5.4-13-5.4-20.2V778.6H147.7c-6.7,0-6.7,0-6.7,6.7v223.4c0,3.9,0,7.7-.2,11.5-.8,12-5.6,18.1-17.1,21.8a15.1,15.1,0,0,0-1.7,1Z" transform="translate(-37.9 -417)"/>
                            <path class="white" d="M159,417c11.4,2.4,21.8,6.5,30.5,14.8,14.8,14.1,19.7,31.4,15.2,50.9-7.2,31.3-39,49.3-70.5,37.7-19.3-7-31.1-21.9-34.1-42.6-4.2-29.7,16.9-55.3,44.1-60a7.1,7.1,0,0,0,1.8-.8Z" transform="translate(-37.9 -417)"/>
                        </g>
                </svg>
                <p class="info"><span>Totaal aantal schietincidenten: </span><span class="red">{{active.schietincidenten}}</span></p>
            </div>
            <div class="legenda">
                <svg class="stickfigure2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232.8 626"><title>politie-agent2</title>
                        <g>
                            <path class="orange" d="M108,1043a10.6,10.6,0,0,0-2.1-1.1c-10.2-2.8-14.9-10.1-16-20a83.6,83.6,0,0,1-.4-10V611.2H76.9V762.9c0,6.3-.9,12.2-5.7,16.5s-13.4,7.1-21.4,3.6-11.9-8.7-11.9-17.3V597.8c.1-15.5,4.6-29.1,17.9-38.2a68.6,68.6,0,0,1,35.1-11.9c9.3-.6,18.6-.8,27.9-.7,33.5.1,67-.2,100.5.9,16.6.6,31.4,7.1,42.1,20.8,7.5,9.6,9.2,20.9,9.2,32.5q.1,76.9,0,154c0,7.1-.8,14-6.6,19.2s-11.5,7.4-18.7,4.7-11.9-9.3-13.1-17.4a59.9,59.9,0,0,1-.5-9.5V618.3c0-2.3-.2-4.6-.3-6.6-.6-.4-.7-.5-.9-.5-11.4-1.5-11.4-1.5-11.4,9.7v392.4c.7,14.5-3.7,25.6-19.1,29.7H186c-4.3-2.6-9.2-4.6-12.8-8-5.5-5.4-5.4-13-5.4-20.2V778.6H147.7c-6.7,0-6.7,0-6.7,6.7v223.4c0,3.9,0,7.7-.2,11.5-.8,12-5.6,18.1-17.1,21.8a15.1,15.1,0,0,0-1.7,1Z" transform="translate(-37.9 -417)"/>
                            <path class="orange" d="M159,417c11.4,2.4,21.8,6.5,30.5,14.8,14.8,14.1,19.7,31.4,15.2,50.9-7.2,31.3-39,49.3-70.5,37.7-19.3-7-31.1-21.9-34.1-42.6-4.2-29.7,16.9-55.3,44.1-60a7.1,7.1,0,0,0,1.8-.8Z" transform="translate(-37.9 -417)"/>
                        </g>
                </svg>
                <p class="info"><span>Totaal aantal gewonden: </span><span class="red">{{active.gewonden}}</span></p>
            </div>
            <div class="legenda">
                <svg class="stickfigure2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232.8 626"><title>politie-agent2</title>
                        <g>
                            <path class="red" d="M108,1043a10.6,10.6,0,0,0-2.1-1.1c-10.2-2.8-14.9-10.1-16-20a83.6,83.6,0,0,1-.4-10V611.2H76.9V762.9c0,6.3-.9,12.2-5.7,16.5s-13.4,7.1-21.4,3.6-11.9-8.7-11.9-17.3V597.8c.1-15.5,4.6-29.1,17.9-38.2a68.6,68.6,0,0,1,35.1-11.9c9.3-.6,18.6-.8,27.9-.7,33.5.1,67-.2,100.5.9,16.6.6,31.4,7.1,42.1,20.8,7.5,9.6,9.2,20.9,9.2,32.5q.1,76.9,0,154c0,7.1-.8,14-6.6,19.2s-11.5,7.4-18.7,4.7-11.9-9.3-13.1-17.4a59.9,59.9,0,0,1-.5-9.5V618.3c0-2.3-.2-4.6-.3-6.6-.6-.4-.7-.5-.9-.5-11.4-1.5-11.4-1.5-11.4,9.7v392.4c.7,14.5-3.7,25.6-19.1,29.7H186c-4.3-2.6-9.2-4.6-12.8-8-5.5-5.4-5.4-13-5.4-20.2V778.6H147.7c-6.7,0-6.7,0-6.7,6.7v223.4c0,3.9,0,7.7-.2,11.5-.8,12-5.6,18.1-17.1,21.8a15.1,15.1,0,0,0-1.7,1Z" transform="translate(-37.9 -417)"/>
                            <path class="red" d="M159,417c11.4,2.4,21.8,6.5,30.5,14.8,14.8,14.1,19.7,31.4,15.2,50.9-7.2,31.3-39,49.3-70.5,37.7-19.3-7-31.1-21.9-34.1-42.6-4.2-29.7,16.9-55.3,44.1-60a7.1,7.1,0,0,0,1.8-.8Z" transform="translate(-37.9 -417)"/>
                        </g>
                </svg>
                <p class="info"><span>Totaal aantal dodelijke: </span><span class="red">{{active.dodelijke}}</span></p>
            </div>
    </div>
</div>
</template>
<script>
export default { 
    name: 'PolitieDoden',
    components:{
    },
    data(){
        return{
            active: '',
            aantalDoden:[
                {
                    jaartal: 2013,
                    schietincidenten: 33,
                    gewonden: 31,
                    dodelijke: 2
                },
                {
                    jaartal: 2014,
                    schietincidenten: 33,
                    gewonden: 31,
                    dodelijke: 2
                },
                {
                    jaartal: 2015,
                    schietincidenten: 30,
                    gewonden: 29,
                    dodelijke: 0
                },
                {
                    jaartal: 2016,
                    schietincidenten: 37,
                    gewonden: 33,
                    dodelijke: 4
                },
                {
                    jaartal:2017,
                    schietincidenten: 23,
                    gewonden: 20,
                    dodelijke: 3
                }
            ],
            message: 1
        }
    },
    methods:{
        handleClick(d){
            this.$emit("pop")
            this.active = d
            this.$nextTick(()=>{
                this.coloring()
            })
        },
        coloring(){
            this.$el.querySelectorAll('.stickfigure1').forEach((i, index)=>{
                if(index<this.active.gewonden){
                    i.querySelectorAll("path").forEach((x)=>{
                        x.style.fill = "orange"
                    })
                }else if(index>=this.active.gewonden && index<(this.active.dodelijke + this.active.gewonden)){
                    i.querySelectorAll("path").forEach((x)=>{
                        x.style.fill = "red"
                    })
                }else{
                    i.querySelectorAll("path").forEach((x)=>{
                        x.style.fill = "white"
                    })
                }
            })
        },
        messagesLoop(){
            const loop = setInterval(()=>{
                                        if(this.message<2){
                                            this.message+=1
                                        }else{
                                            this.message = 1 
                                        }
            },10000)
        },
    },
    created(){
        this.active = this.aantalDoden[0]
    },
    mounted(){
        this.coloring()
        this.messagesLoop()
    }
    
}
</script>
<style scoped>
p{
    margin:2px 0;
     -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
.subtitel{
    font-size: 12px;
}
.keuzes{
    background: #202020;
    width: 100%;
    /* height: 60vh; */
    padding-bottom: 30px;
    position: relative;
}
nav{
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-around;
    font-size: 12px;
}
.activeLink{
    border-bottom: 2px solid;
}
svg{
    width: 20px;
    height: 40px;
    margin: 2px;
}
.svgContainer{
    padding: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.legenda{
    display: flex;
    width: 80%;
    margin: auto;
    align-items: center;
}
.info{
    text-align: left;
}
.orange{
    fill: orange;
}
.white{
    fill: white;
}
.red{
    fill: red;
}
</style>