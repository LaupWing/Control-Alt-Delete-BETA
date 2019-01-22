<template>
    <div>
        <h2>Deel de data!</h2>
        <head>
            <meta property="og:url"           content="https://controlealtdelete.nl/" />
            <meta property="og:type"          content="website" />
            <meta property="og:title"         content="Your Website Title" />
            <meta property="og:description"   content="Your description" />
            <meta property="og:image"         content="https://www.your-domain.com/path/image.jpg" />
        </head>

            <div id="fb-root"></div>
            <div class="fb-share-button" 
                data-href="https://controlealtdelete.nl/" 
                data-layout="button">
            </div>
    </div>
</template>
<script>
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
    methods:{

    },
    created(){
        console.log(this.sharing)
    }
}
</script>
<style>

</style>


