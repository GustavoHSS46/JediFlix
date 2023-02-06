<template>
    <div class="carrousel">
        <div class="carrouselMain">
            <div class="carrouselContainer" :style="randomColor" v-if="movies.length">
                <div :style="x" class="movieContainer" v-for="movie in movies" :key="movie.id = 2">
                    <router-link :to="{name: 'Movie', params: {id: this.id}}">
                        <p>Destaques Da Semana: {{ movie.name }}</p>
                        <img :src="movie.headerImage" >
                    </router-link>
                </div>
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
            r: 254,
            g: 0,
            b: 0,
            id: 1,
        }
    },
    mounted(){
        fetch('https://jediflix-back-production.up.railway.app/films').then(res => res.json()).then(data => this.movies = data).catch(err => console.log(err))
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
        color: white;;
        height: 40%;
        min-width: none;
        width: 100%;
        max-width:  1440px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .carrouselMain {
        width: 95%;
        height: 100%;
    }

    .carrouselContainer {
        width: 100%;
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