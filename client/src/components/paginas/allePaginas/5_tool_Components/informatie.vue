<template>
    <div>
        <div class="content-10vh flexCenter">
            <p></p>
        </div>
        <div class="container">
            <div class="geweldSoort">
                <h3>
                    Het gesprek
                    <i class="fas fa-caret-down"></i>
                </h3>
            </div>
            <div class="geweldSoort">
                <h3>
                    Fysiek Geweld
                    <i class="fas fa-caret-down"></i>
                </h3>
            </div>
            <div class="geweldSoort">
                <h3>
                    Wapenstok
                    <i class="fas fa-caret-down"></i>
                </h3>
            </div>
            <div class="geweldSoort">
                <h3>
                    Pepperspray
                    <i class="fas fa-caret-down"></i>
                </h3>
            </div>
            <div class="geweldSoort">
                <h3>
                    Diensthond
                    <i class="fas fa-caret-down"></i>
                </h3>
            </div>
            <div class="geweldSoort">
                <h3>
                    Dienstwapen
                    <i class="fas fa-caret-down"></i>
                </h3>
            </div>
        </div>
    </div>
</template>
<script>
export default { 
    name: 'Informatie',
    components:{
        
    },
    data(){
        return{
            
        }
    },
    methods:{
        
    },
    created(){
        
    }
    
}
</script>
<style scoped>
h3{
    text-transform: uppercase;
    height: 45px;
    background: #A03029;
    display: flex;
    padding: 0 20px;
    align-items: center;
    justify-content: space-between;
    margin: 5px;
}
.geweldSoort{
    width: 100%;
}
i{
    font-size: 26px;
}
.container{
    height: 67vh;
}
</style>

