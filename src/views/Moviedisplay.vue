<template>
  <div class="moviedisplayMain">
    <div :class="{ blur: click }" class="bg">
      <div class="bgimg">
        <img :src="this.header" />
      </div>
      <div class="bgimgCover"></div>
    </div>
    <div :class="{ blur: click }" class="moviedisplayInfo">
      <div class="moviePoster">
        <div class="poster">
          <div
            @click="click = !click"
            @mouseenter="hover = true"
            @mouseleave="hover = false"
            class="cover"
          >
            <img
              :class="{ dark: hover, blur: click }"
              class="light"
              :src="this.cover"
            />
            <div
              :class="[hover ? true : 'oppacity0', 'oppacity1']"
              class="iconplayer"
            >
              <img src="../assets/play_arrow.svg" alt="" />
            </div>
          </div>
          <p>Preço Do Ingresso:</p>
          <h1>R${{ this.price }},00</h1>
        </div>
        <router-link to="/"> Cancelar </router-link>
      </div>
      <div class="details">
        <div class="name">
          <h1>{{ this.name }}</h1>
        </div>
        <div class="more">
          <div class="category">
            <p>categoria: {{ this.category }}</p>
          </div>
          <div class="info">
            <p>data de lançamento: {{ this.productedAt }}</p>
            <p>duração do filme: {{ this.duration }}</p>
            <p>classificação: {{ this.ageClassification }}</p>
          </div>
        </div>
        <div class="buttonSeats">
          <button
            :class="[seats ? true : 'notActive', 'Active']"
            @click="seats = !seats"
          >
            Mostrar Lugares
          </button>
          <button
            :class="[seats ? true : 'notActiveCancel', 'ActiveCancel']"
            @click="seats = !seats"
            class="ActiveCancel"
          >
            Cancelar Lugares
          </button>
        </div>
        <div class="container">
          <div v-if="seats" class="seats">
            <Transition name="slide-fade-overview1" appear>
              <div class="poltronasSelect">
                <h1>Suas Poltronas:</h1>
                <h1>{{ this.selects }}</h1>
              </div>
            </Transition>
            <Transition name="slide-fade-overview" appear>
              <div class="seatsContainer">
                <div
                  @click="nigga(seat.name)"
                  class="seat"
                  v-for="seat in dataSeats"
                  :key="seat.id"
                >
                  <h1>{{ seat.name }}</h1>
                </div>
              </div>
            </Transition>
          </div>
          <div v-else class="sinopse">
            <Transition name="slide-fade-overview" appear>
              <h2>sinopse:</h2>
            </Transition>
            <Transition name="slide-fade-overview1" appear>
              <p>{{ overview }}</p>
            </Transition>
          </div>
        </div>
      </div>
    </div>
    <Transition name="slide-fade" appear>
      <div v-if="click" class="trailerMovie">
        <div class="title">
          <h1>Trailer De {{ name }}</h1>
          <span @click="click = !click" class="material-symbols-outlined">
            close
          </span>
        </div>
        <Trailer :trailer="this.trailer" />
      </div>
    </Transition>
  </div>
  <Transition name="fade">
    <Loading v-if="isLoading" url="../assets/loading.mp4" />
  </Transition>
</template>

<script>
import Loading from "../components/Loading";
import Trailer from "../components/Trailer";
import axios from "axios";
export default {
  name: "Movie",
  props: ["id"],
  components: {
    Trailer,
    Loading,
  },
  data() {
    return {
      isLoading: true,
      active: false,
      selectSeats: [],
      dataSeats: [],
      dataFilm: [],
      seats: false,
      hover: false,
      click: false,
      nameSeats: "",
      name: "",
      category: "",
      cover: "",
      price: "",
      header: "",
      productedAt: "",
      duration: "",
      isAvailable: "",
      ageClassification: "",
      overview: "",
      uri: "https://jediflix-back-production.up.railway.app/film/" + this.id,
      selects: "",
    };
  },
  mounted() {
    axios
      .get(this.uri)
      .then((res) => {
        this.dataFilm = res.data.film;
        const {
          name,
          overview,
          ageClassification,
          category,
          duration,
          frontCover,
          headerImage,
          priceTicket,
          productedAt,
          trailerUrl,
        } = this.dataFilm;
        this.name = name;
        this.category = category;
        this.cover = frontCover;
        this.price = priceTicket;
        this.header = headerImage;
        this.productedAt = productedAt;
        this.duration = duration;
        this.ageClassification = ageClassification;
        this.overview = overview;
        this.trailer = trailerUrl;

        this.dataSeats = res.data.seats;
      })
      .then((res) => {this.isLoading = false})
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    nigga: function (seatId) {
      console.log(seatId);
      this.selectSeats.push(Number(seatId));
      for (let i = 0; i < seatId; i++) {
        console.log("numero não incluido" + seatId);
      }
      console.log("selecionado " + this.selectSeats.sort());
      this.selects = this.selectSeats.sort();
    },
  },
};
</script>

<style scoped>
.buttonSeats {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  width: 100%;
  transition: 450ms;
}
.Active {
  white-space: nowrap;
  position: absolute;
  border: none;
  background-color: crimson;
  outline: none;
  color: white;
  font-size: calc(18px + 1vw / 1.8);
  z-index: -1;
  left: 0%;
  height: 100%;
  width: 35%;
  border-radius: 12px;
  cursor: pointer;
  opacity: 0;
  transition: 420ms;
}

.ActiveCancel {
  white-space: nowrap;
  position: absolute;
  border: none;
  z-index: 5;
  background-color: crimson;
  outline: none;
  color: white;
  font-size: calc(18px + 1vw / 1.8);
  left: 0%;
  height: 100%;
  width: 36%;
  border-radius: 12px;
  cursor: pointer;
  transition: 420ms;
}

.notActiveCancel {
  position: absolute;
  z-index: -1;
  border: none;
  background-color: greenyellow;
  outline: none;
  color: black;
  font-size: calc(18px + 1vw / 1.8);
  height: 100%;
  left: 28%;
  width: 50%;
  border-radius: 12px;
  cursor: pointer;
  transition: 420ms;
}

.notActive {
  opacity: 1;
  position: absolute;
  z-index: 5;
  border: none;
  background-color: greenyellow;
  outline: none;
  color: black;
  font-size: calc(18px + 1vw / 1.8);
  height: 100%;
  left: 28%;
  width: 50%;
  border-radius: 12px;
  cursor: pointer;
  transition: 420ms;
}
.moviedisplayMain {
  position: absolute;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5% 5%;
  overflow: hidden;
  user-select: none;
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
.bg img {
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
  background: linear-gradient(
    0deg,
    rgba(20, 20, 20, 1) 75%,
    rgba(0, 0, 0, 0) 100%
  );
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
  gap: 22px;
  height: fit-content;
  display: flex;
  flex-direction: row;
}
.info p {
  font-weight: 400;
  font-size: 20px;
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
  padding: 0 15px;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: white;
  box-shadow: inset 0 0 5px grey;
  border-radius: 6px;
}
::-webkit-scrollbar-thumb {
  background: red;
  border-radius: 6px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgb(164, 0, 0);
}
.sinopse h2 {
  font-size: 32px;
  color: white;
  font-weight: 100;
}
.sinopse p {
  margin-top: 10px;
  font-size: 24px;
  letter-spacing: 0.5px;
  color: white;
}

.moviePoster {
  min-width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.details {
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
  background: black;
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
  position: relative;
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

  cursor: pointer;
  width: 45%;
  height: 50px;
  font-size: 24px;
  border-radius: 6px;
  border: 1px solid red;
  background: none;
  color: red;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a:hover {
  background-image: url(../assets/1608229455-star-wars.gif);
  opacity: 60%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
.iconplayer img {
  width: 50%;
  height: 50%;
  filter: invert(90%);
}

.light {
  opacity: 100%;
  transition: 950ms;
}
.dark {
  opacity: 50%;
  transition: 550ms;
}
.title {
  position: absolute;
  left: 10%;
  top: 3%;
  z-index: 2;
  width: 80%;
  height: 10%;
  font-size: 24px;
  white-space: nowrap;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}
.title span {
  font-size: 72px;
  cursor: pointer;
}
.trailerMovie {
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  color: white;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.slide-fade-enter-active {
  transition: all 1.5s;
}

.slide-fade-leave-active {
  transition: all 1.5s;
}

.slide-fade-enter-from {
  transform: translateY(-220px);
  filter: blur(15px);
  opacity: 0;
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(220px);
  filter: blur(15px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.blur {
  filter: blur(15px);
}
.slide-fade-overview-enter-from {
  transform: translateY(-220px);
  opacity: 0;
}

.slide-fade-overview-enter-active {
  transition: all 0.5s;
}

.slide-fade-overview-leave-active {
  transition: all 0.5s;
}

.slide-fade-overview-enter-from {
  transform: translateY(-220px);
  opacity: 0;
}

.slide-fade-overview1-enter-from {
  transform: translateX(-220px);
  opacity: 0;
}

.slide-fade-overview1-enter-active {
  transition: all 1.2s;
}

.slide-fade-overview1-leave-active {
  transition: all 0.5s;
}

.slide-fade-overview1-enter-from {
  transform: translateX(-220px);
  opacity: 0;
}

.seats {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: fit-content;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
.seatsContainer {
  width: 100%;
  display: flex;
  flex-direction: row;
  height: fit-content;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.seat {
  width: 70px;
  height: 70px;
  border: 2px solid red;
  color: black;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 15px;
  margin-right: 15px;
  cursor: pointer;
}
.container {
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: left;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
.poltronasSelect {
  height: fit-content;
  width: 100%;
  text-align: center;
}
</style>
