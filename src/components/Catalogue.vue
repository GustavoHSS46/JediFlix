<template>
  <div class="mainCatalogue">
    <div class="gridMovies" v-if="movies.length">
      <div class="title">
        <p>Nosso Catálogo</p>
      </div>
      <div class="movieCover" v-for="movie in movies" :key="movie.id">
        <router-link :to="{ name: 'Movie', params: { id: movie.id } }">
          <img :src="movie.frontCover" />
        </router-link>
      </div>
    </div>
    <div class="errorDb" v-else>
      <h1>Wait A Second While We Choose The Best Movies For You</h1>
      <span class="material-symbols-outlined"> mood </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    axios
      .get("https://jediflix-back-production.up.railway.app/films")
      .then((res) => (this.movies = res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.mainCatalogue {
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.gridMovies {
  width: 100%;
  height: fit-content;
  padding: 0 20px;
  flex-wrap: wrap;
  display: flex;
  justify-content: left;
  align-items: center;
}

.movieCover {
  width: 275px;
  height: 355px;
  border-radius: 12px;
  box-sizing: border-box;
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.2);
  cursor: pointer;
  overflow: hidden;
  transition: 450ms;
  margin-bottom: 50px;
  margin-right: 50px;
  margin-top: 25px;
  margin-left: 0px;
}

.movieCover:hover {
  transform: scale(1.1);
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 1);
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

.title {
  color: white;
  font-size: 32px;
  display: flex;
  align-items: flex-end;
  text-align: left;
  width: 99%;
  height: fit-content;
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
  user-select: none;
  cursor: default;
}
.errorDb span {
  margin-left: 15px;
  font-size: 40px;
}
</style>
