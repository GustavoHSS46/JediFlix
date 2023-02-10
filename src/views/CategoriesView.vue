<template>
    <div class="categorieViewMain">
        <div class="catologue">
            <div class="header">
                <h1>Você Esta Na Seção De {{ type }}</h1>
                <router-link to="/"><button>Go To Home</button></router-link>
            </div>
            <div class="gridMovies">
                <div class="movieCover" v-for="movie in movies" :key="movie.id"> 
                    <router-link :to="{name: 'Movie', params: {id: movie.id}}">
                        <img :src="movie.frontCover" >
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CategoriesView',
    props: ['type'],
    data() {
        return {
            movies: [],
            newmovies: [], 
        }
    },
    mounted(){
        fetch('https://jediflix-back-production.up.railway.app/films/category', {
            category: this.type,
        }).then(res => res.json()).then(data => this.movies = data).catch(err => console.log(err))
    },
}
</script>

<style>
    .categorieViewMain {
        color: white;
        width: 100vw;
        height: 100vh;
        padding: 2%;
        display: flex;
        justify-content: center;
    }
    .catologue{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .header {
        width: 100%;
        height: 10%;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        text-align: center;
    }

    .header button {
        border: none;
        outline: none;
        background-color: red;
        height: 100%;
        width: 100%;
        color: white;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 24px;
        font-weight: 700;
        cursor: pointer;
    }

    a {
        height: 70%;
        width: 15%;
    }

    .movieCover {
        margin: 3%  1.5% 0 ;
        width: 275px;
        height: 355px;
        border-radius: 12px;
        box-sizing: border-box;
        box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.2);
        cursor: pointer;
        overflow: hidden; 
        transition: 450ms;
    }

    .gridMovies {
        width: 100%;
        height: 90%;
        padding: 0 20px;
        flex-wrap: wrap;
        display: flex;
        justify-content: left;
        align-items: center;
    }

    .movieCover img {
        cursor: pointer;
        height: 100%;
        width: 100%;
        object-fit: cover; 
        object-position: center;
        background-repeat: no-repeat;
        object-position: 50% 10%;
    }

    .movieCover:hover {
        transform: scale(1.1);
        box-shadow: 0px 0px 15px rgba(255, 255, 255, 1);
    }
</style>