<template>
    <div>
        <h2>Deel de data!</h2>
        <div class="data-container">
            <div class="flexCenter labels red">
                <p>Geweldsoort:</p>
                <p>Aantal:</p>   
                <p>Maand:</p>    
            </div>  
            <div class="flexCenter waarde">
                <p>{{sharing.soort}}</p>
                <p>{{sharing.aantal}}</p> 
                <p>{{sharing.datum}}</p>    
            </div>    
        </div>
    </div>
</template>
<script>

export default {
    name: 'Delen',
    props:['sharing'],
    methods:{

    },
    created(){
        console.log(this.sharing)
    }
}
</script>
<style scoped>
.data-container{
    width: 70vw;
    height: 100px;
    margin: auto;
    margin-top:40px;
    display: flex;
    flex-wrap: wrap;
}
.flexCenter.labels{
    width: 50%;
    text-align: right;
}
.flexCenter.waarde{
    width: 50%;
    text-align: left;
}
</style>


