<template>
    <div class="moviedisplayMain">
        
        <div class="moviedisplayInfo">
            <div class="moviePoster">
                <div class="poster">
                    <div class="cover">
                        <img :src="this.cover" >
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
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .moviedisplayInfo {
        color: white;
        padding: 0;
        display: flex;
        flex-direction: row;
        height: 90%;
        min-width: none;
        width: 100%;
        max-width: 1024px;
        text-transform: uppercase;
    }
    .bg {
        position: absolute;
        left: 0;
        top: 0;
        z-index: -10;
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
    }
    .bg img{
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
    .bgimg {
        width: 100%;
        height: 50%;
        margin-top: -1.8rem;
    }
    .bgimgCover {
        width: 100%;
        height: 150%;
        margin-top: -38rem;
        background:linear-gradient(0deg, rgba(0, 0, 0, 1) 55%, rgba(0, 0, 0, 0) 100%);
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
        height: fit-content;
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
    }
    .cover img {
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
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 60%;
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

</style>