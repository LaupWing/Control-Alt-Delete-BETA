<template>
    <div>
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
        <div class="content-30vh flexAround">
            <a href="http://www.facebook.com/sharer.php?u=http://ctrl-alt-delete.herokuapp.com" target="_blank">
                <i class="fab fa-facebook-square"></i>
            </a>
            
            <!-- Google+ -->
            <a href="https://plus.google.com/share?url=http://ctrl-alt-delete.herokuapp.com" target="_blank">
                <i class="fab fa-google-plus-square"></i>
            </a>
            
            <!-- LinkedIn -->
            <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=http://ctrl-alt-delete.herokuapp.com" target="_blank">
                <i class="fab fa-linkedin"></i>
            </a>
            
            <!-- Twitter -->
            <a href="https://twitter.com/share?url=http://ctrl-alt-delete.herokuapp.com&amp;text=Simple%20Share%20Buttons&amp;hashtags=simplesharebuttons" target="_blank">
                <i class="fab fa-twitter-square"></i>
            </a>
        </div>
    </div>
</template>
<script>


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
a{
    color: #A03029;
    font-size: 2em;
}
</style>


