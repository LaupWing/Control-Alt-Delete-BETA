<template>
    <div>
        <div id="fb-root"></div>
        <h2>Deel de data!</h2>
        <p>Om data te delen moet je eerst op een data te klikken</p>
        <div class="data-container">
            <div class="flexCenter labels red">
                <p>Geweldsoort:</p>
                <p>Aantal:</p>   
                <p v-if="sharing.perMaand">Maand:</p> 
                <p v-if="!sharing.perMaand">Jaartal:</p>    
            </div>  
            <div class="flexCenter waarde">
                <p>{{sharing.soort}}</p>
                <p>{{sharing.aantal}}</p> 
                <p>{{sharing.datum}}</p>    
            </div>    
        </div>
        <div class="content-30vh flexCenter">
            <div class="fb-share-button" 
                data-href="http://ctrl-alt-delete.herokuapp.com/" 
                data-layout="button">
            </div>
        </div>
    </div>
</template>
<script>
// Facebook SDK
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));


export default {
    name: 'Delen',
    props:['sharing'],
    data(){
        return{

        }
    },
    methods:{

    },
    created(){
        console.log(this.sharing)
    }
}
</script>
<style scoped>
.data-container{
    width: 90vw;
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
p{
    margin: 10px 5px;
    width: 95%;
}
.content-30vh{
    margin-top: 3vh;
}
</style>


