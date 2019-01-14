<template>
    <div class="buttons">
        <button 
            v-for="(value, index) in values"
            v-bind:key="index"
            @click="eventFunction"
            v-bind:class="btnCls"
        >
        {{value}}
        </button>
        <button v-if='!keuzeGemaakt' class="disabled">>></button>
        <router-link v-else :to="next">
            <button
            v-bind:class="btnCls"
            @click="sendInfo"
            >
            >>
            </button>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'buttons',
    props:['pageChoices','keuzeGemaakt'],
    data(){
        return{
            values: this.pageChoices.values,
            next: this.pageChoices.next,
            eventFunction: this.pageChoices.eventFunction,
            btnCls: this.pageChoices.btnCls
        }
    },
    methods:{
        sendInfo(){
            this.$emit('sendInfo')
        }
    },
    created(){
        if(this.values.length>2){
            console.log(this.values)
        }
        console.log(this.keuzeGemaakt)
    }
}
</script>
<style scoped>
button{
    width: 100px;
}
.button1:hover{
    background: #bf975a;
    color: #023274;
}

.buttons{
    width: 350px;
    display: flex;
    justify-content: space-between;
}

/* Button states */
.clicked{
	background: #bf975a;
   color: #023274;
}
.disabled{
	cursor: default;
	background: rgba(0, 0, 0, .3);
	opacity: .5;
}
button.disabled:hover{
	cursor: default;
	background: rgba(0, 0, 0, .3);
	opacity: .5;
	color: #bf975a;
}
.button2:hover{
    background: #bf975a;
    color: #023274;
} 
</style>


