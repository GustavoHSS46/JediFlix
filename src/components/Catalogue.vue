<template>
    <div class="mainCatalogue">
        <div class="gridMovies" v-if="movies.length">
            <div class="title">
                <p>Nosso Catálogo</p>
            </div>
            <div v-on:mouseover="hover = !hover" class="movieCover" v-for="movie in movies" :key="movie.id"> 
                <router-link :to="{name: 'Movie', params: {id: movie.id}}">
                    <img :src="movie.frontCover" >
                </router-link>
            </div>
        </div>
        <div class="errorDb" v-else>
            <h1>Wait A Second While We Choose The Best Movies For You</h1>
            <span class="material-symbols-outlined">
                mood
            </span>
        </div>
    </div>
</template>

<script >
export default {
    data(){
        return {
            movies: [],
            hover: false,
        }
    },
    mounted(){
        fetch('http://localhost:3000/movies').then(res => res.json()).then(data => this.movies = data).catch(err => console.log(err))
    }
}
</script>

<style scoped>
    .mainCatalogue {
        position: relative;
        z-index: 7;
        height: fit-content;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    }
    .gridMovies {
        margin-top: 37rem;
        position: relative;
        gap: 1.5rem;
        z-index: 8;
        width: 100%;
        height: 90%;
        
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .movieCover {
        width: 18%;
        height: 40%;
        border-radius: 6px;
        box-sizing: border-box;
        box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.2);
        cursor: pointer;
        overflow: hidden; 
    }

    .movieCover img {
        cursor: pointer;
        height: 100%;
        width: 100%;
        object-fit: cover; 
    }

    .title {
        position: relative;
        color: white;
        font-size: 24px;
        display: flex;
        align-items: flex-end;
        text-align: left;
        width: 99%;
        height: 5%;
        top: 35px;
        user-select: none;
    }

    .errorDb {
        color: white;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 55vh;
    }
    .errorDb span {
        margin-left: 15px;
        font-size: 40px;
    }
</style>