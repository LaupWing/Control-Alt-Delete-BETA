<template>
    <div class="geweldSoort">
        <h3>
            {{data.soort}}
            <i @click="showMore" class="fas fa-caret-down"></i>
        </h3>
        <div v-bind:class="['moreInfo', !show ? 'noHeight' : '']">
            <p>{{data.uitleg}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'geweldsoort',
    props:['data'],
    data(){
        return{
            show: false
        }
    },
    methods:{
        showMore(){
            this.show = !this.show
        }
    }
}
</script>
<style scoped>
p{
    width: 90%;
    margin: auto;
    padding: 5px;
    text-align: left;
}
h3{
    text-transform: uppercase;
    height: 45px;
    background: #A03029;
    display: flex;
    padding: 0 20px;
    align-items: center;
    justify-content: space-between;
    margin: 0;
}
.geweldSoort{
    margin: 5px;
}
.moreInfo{
    width: 100%;
    background: #202020;
    overflow: hidden;
    transition: height .5s;
    height: 90px;
}
.noHeight{
    height: 0;
}
h3 i{
    font-size: 26px;
}
</style>
