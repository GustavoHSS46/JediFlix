<template>
    <div class="carrousel">
        <div class="carrouselContainer" :style="randomColor" v-if="movies.length">
            <div :style="x" class="movieContainer" v-for="movie in movies" :key="movie.id = 2">
                <router-link :to="{name: 'Movie', params: {id: this.id}}">
                    <p>Destaques Da Semana: {{ movie.name }}</p>
                    <img :src="movie.headerImage" >
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            movies: [],
            xValue: 0,
            r: 255,
            g: 0,
            b: 0,
            id: 1,
        }
    },
    mounted(){
        fetch('http://localhost:3000/movies').then(res => res.json()).then(data => this.movies = data).catch(err => console.log(err))
    },
    methods: {
        timed () {
            setInterval(() => {
                if (this.xValue > 800) {
                    this.xValue = 0;
                    this.id = 1;
                } else {
                    this.id++;
                    this.xValue += 100
                    this.r = Math.floor(256 / 2 * Math.random() + 100);
                    this.g = Math.floor(256 / 2 * Math.random() + 100);
                    this.b = Math.floor(256 / 2 * Math.random() + 100);
                }
            }, 5800);
        },
        
    },
    created() {
        this.timed()
    },
    computed: {
        x () {
            return `transform: translateX(-${ this.xValue}%)`
        },
        randomColor() {
            return `box-shadow: 0px 0px 35px rgb(${this.r}, ${this.g}, ${this.b})`
        }
    },
}
</script>

<style scoped>
    .carrousel {
        position: absolute;
        z-index: 909;
        color: white;;
        top: 10vh;
        left: 0;
        height: 36rem;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .carrouselContainer {
        width: 94%;
        height: 100%;
        border-radius: 16px 16px;
        overflow: hidden;
        display: flex;
        transition: 450ms;
    }

    .movieContainer {
        min-width: 100%;
        min-height: 100%;
        transition: 850ms;
    }
    .movieContainer img{
        width: 100%;
        height: 100%;  
        object-fit: cover; 
    }

    p{
        text-decoration: none;
        font-size: 24px;
        font-weight: 100;
        padding: 10px 0px;
    }
    a{
        text-decoration: none;
        font-size: 24px;
        font-weight: 100;
        color: white;
    }
    a img{
        object-fit: cover;
    }
</style>