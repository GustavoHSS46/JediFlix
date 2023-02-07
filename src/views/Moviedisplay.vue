<template>
    <div class="moviedisplayMain">
        <div class="bg">
            <div class="bgimg">
                <img :src="this.header" >
            </div>
            <div class="bgimgCover">
            </div>
        </div>
        <div class="moviedisplayInfo">
            <div class="moviePoster">
                <div class="poster">
                    <div  @mouseenter="hover = true" @mouseleave="hover = false" class="cover">
                        <img :class="[ hover ? true : 'light', '']" class="dark" :src="this.cover" >
                        <div :class="[ hover ? true : 'oppacity0', 'oppacity1']" class="iconplayer">
                            <img src="../assets/play_arrow.svg" alt="">
                        </div>
                        
                    </div>
                    <p>Preço Do Ingresso:</p>
                    <h1>R${{this.price}},00</h1>
                </div>
                <router-link to="/">
                    Cancelar
                </router-link>
                
            </div>
            <div class="details">
                <div class="name">
                    <h1>{{this.name}}</h1>
                </div>
                <div class="more">
                    <div class="category">
                        <p>categoria: {{this.category}}</p>
                    </div>
                    <div class="info">
                        <p>data de lançamento: {{this.productedAt}}</p>
                        <p>duração do filme: {{this.duration}}</p>
                        <p>classificação: {{this.ageClassification}}</p>
                    </div>
                </div>
                <div class="sinopse">
                    <h2>sinopse:</h2>
                    <p>{{this.overview}}</p>
                </div>
                
            </div>
        </div>  
    </div>
    
</template>

<script>
export default {
    name: 'Movie',
    props: ['id'],
    data() {
        return {
            hover: false,
            name: '',
            category: '',
            cover: '',
            price: '',
            header:'',
            productedAt: '',
            duration: '',
            ageClassification: '',
            overview: '',
            uri: 'https://jediflix-back-production.up.railway.app/film/' + this.id
        }
    },
    mounted() {
        fetch(this.uri).then(res => res.json()).then(data => {
            this.name = data.name
            this.header = data.headerImage
            this.price = data.price
            this.cover = data.frontCover
            this.category = data.category
            this.productedAt = data.productedAt
            this.duration = data.duration
            this.ageClassification = data.ageClassification
            this.overview = data.overview
        })
    }
}
</script>

<style scoped>


    .moviedisplayMain {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5% 5%;
    }

    .moviedisplayInfo {
        color: white;
        padding: 0;
        display: flex;
        flex-direction: row;
        min-height: none;
        height: 100%;
        max-height: 882px;
        min-width: none;
        width: 100%;
        max-width: 1440px;
        text-transform: uppercase;
        overflow: hidden;
    } 
    .bg {
        position: absolute;
        left: 0;
        top: 0;
        z-index: -10;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    .bg img{
        object-position: center;
        object-fit: cover;
        height: 100%;
        width: 100%;
        background-repeat: no-repeat;
        object-position: 50% 10%;
    }
    .bgimg {
        width: 100%;
        height: 50%;
    }
    .bgimgCover {
        position: absolute;
        z-index: 2;
        min-width: 100vw;
        min-height: 150vh;
        background:linear-gradient(0deg, rgba(20, 20, 20, 1) 75%, rgba(0, 0, 0, 0) 100%);
    }
    .details {
        height: 100%;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        gap: 7%;
        padding: 20px 40px;
    }
    .name {
        width: 100%;
        height: fit-content;
    }
    .category {
        width: 100%;
        height: fit-content;
    }
    .info {
        width: 100%;
        margin-top: 10px;
        gap: 2%;
        height: fit-content;
        display: flex;
        flex-direction: row;
    }
    .info p{
        font-weight: 400;
        font-size: 14px;
        opacity: 70%;
    }
    .more {
        width: 100%;
        display: flex;
        flex-direction: column;
        height: fit-content;
    }
    .sinopse {
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: left;
        max-height: 50%;
        overflow-y: scroll;
        padding: 0 15px;
        transition: 1450ms;
    }
    .sinopse::-webkit-scrollbar {
        margin-left: 15px;
        width: 5px;
    }
    .sinopse::-webkit-scrollbar-track {
        background: white;
        box-shadow: inset 0 0 5px grey;
        border-radius: 6px;
    }
    .sinopse::-webkit-scrollbar-thumb {
        background: red;
        border-radius: 6px;
        
    }
    .sinopse::-webkit-scrollbar-thumb:hover {
        background: rgb(164, 0, 0);
    }
    .sinopse h2 {
        font-size: 24px;
        color: white;
        font-weight: 100;
    }
    .sinopse p {
        margin-top: 10px;
        font-size: 20px;
        color: white;
    }

    .moviePoster{
        min-width: 35%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .details{
        width: 70%;
        height: 100%;
    }

    .cover {
        width: 80%;
        height: 100%;
        border-radius: 16px;
        overflow: hidden;
        margin-bottom: 15px;
        cursor: pointer;
        transition: 650ms;
        background: black;;
    }
    .cover img {
        object-position: center;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    .moviePoster p {
        color: red;
        font-size: 18px;
    }
    .moviePoster h1 {
        color: red;
        font-size: 24px;
    }

    .poster {
        position: relative;;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 70%;
    }

    a {
        cursor: default;
        text-decoration: none;
        width: 100%;
        height: fit-content;


        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;;
        width: 45%;
        height: 50px;
        font-size: 24px;
        border-radius: 6px;
        border: 1px solid red;
        background: none;
        color: red;
        text-transform: uppercase;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .oppacity1 {
        color: white;
        opacity: 100%;
    }
    .oppacity0 {
        color: white;
        opacity: 0%;
        
    }

    .iconplayer {
        position: absolute;
        top: 0;
        width: 80%;
        height: 90%;
        border-radius: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 950ms;
    }
    .iconplayer img{
        width: 50%;
        height: 50%;
        filter: invert(90%);
    }


    .dark{
        opacity: 50%;
        transition: 550ms;
    }
    .light{
        opacity: 100%;
        transition: 950ms;
    }
</style>