<template>
  <div class="mainRegister">
    <div v-if="wrongPassword">
      <div class="astronaut">
        <div class="cards">
          <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_gy6w24sr.json"
            background="transparent"
            speed="0.5"
            style="width: 70%; height: 70%"
            loop
            autoplay
          ></lottie-player>
          <h1>Something Is Wrong</h1>
          <button @click="wrongPassword = !wrongPassword" class="errorLoading">Try Again</button>
        </div>
      </div>
    </div>
    <div class="login">
      <div class="image">
        <img
          src="https://icon-library.com/images/star-wars-icon-png/star-wars-icon-png-9.jpg"
          alt=""
        />
      </div>
      <div class="welcome">
        <h1>Soldado, Fale Um Pouco Sobre Você</h1>
      </div>
      <form class="form" @submit.prevent>
        <input
          type="text"
          placeholder="Entre Com Seu Nome"
          minlength="6"
          id="name"
          required
        />

        <input 
          id="email"
          type="email" 
          placeholder="Entre Com Seu Email" 
          required 
        />

        <input
          type="password"
          id="password"
          placeholder="Entre Com Sua Senha"
          minlength="6"
          required
        />

        <input
          type="password"
          id="Confirmpassword"
          placeholder="Confirme Sua Senha"
          minlength="6"
          required
        />

        <input
          @click="Submit()"
          type="submit"
          class="confirmBTN"
          value="Entrar No Esquadrão"
        />
        <div class="loginH1">
          <RouterLink to="/login">
            <h1>Já Faz Parte Do Esquadrão? Não Perca Mais Tempo</h1>
          </RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      hover: false,
      wrongPassword: false,
      animation: "",
      uri: "https://jediflix-back-production.up.railway.app/register" 
    };
  },
  methods: {
    checkPass() {
      let pass = document.getElementById("password").value;
      let rpass = document.getElementById("Confirmpassword").value;
      if (pass != rpass) {
        console.log("Good");
        this.wrongPassword = true;
      }
    },
    Submit() {
      this.checkPass()
      const promise = axios.post(this.uri, {
        email: document.getElementById("email").value,
        name: document.getElementById("name").value,
        password: document.getElementById("password").value,
      })
      promise.then((response) => {console.log(response.data)}).catch((error) => {alert(error)})  
    },
    function(event) {
      event.preventDefault();
    }
  },
};
</script>

<style scoped>
.mainRegister {
  min-width: none;
  width: 100vw;
  max-width: 768px;
  height: 100vh;
  padding: 0 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.astronaut {
  position: absolute;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: red;
}
.login {
  width: 1400px;
  height: 90%;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.image {
  height: 155px;
  width: 144px;
  margin-bottom: 3%;
  padding: 0;
  overflow: hidden;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.welcome {
  padding: 0;
  margin: 0;
  height: fit-content;
  width: fit-content;
  white-space: nowrap;
  color: white;
  font-size: 12px;
  user-select: none;
  cursor: default;
}
.welcome h1 {
  color: white;
  font-size: 26px;
  overflow: hidden;
  border-right: 0.15em solid red;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;
}
@keyframes typing {
  from {
    width: 0%;
  }
  to {
    width: 90%;
  }
}
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: red;
  }
}

.form {
  margin-top: 3%;
  padding: 0;
  width: 100%;
  height: 50%;
  gap: 2%;
  display: flex;
  flex-direction: column;
  transition: 450ms;
}
.form input {
  border: 2px solid red;
  padding: 10px;
  width: 100%;
  height: 15%;
  background: none;
  display: flex;
  flex-direction: column;
  color: red;
  font-size: 32px;
}
.form input::placeholder {
  color: red;
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  height: 100%;
  width: 100%;
  text-decoration: none;
}

.confirmBTN {
  height: 100%;
  width: 100%;
  background: rgb(167, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 2px solid rgb(255, 0, 0);
  transition: 450ms;
  border-radius: 12px;
}
input[type="submit"] {
  background: rgb(167, 0, 0);
  color: white;
  font-size: 24px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: pointer;
}

.confirmBTN:hover {
  background-image: url(../assets/1608229455-star-wars.gif);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.hovering {
  position: absolute;
  border-radius: 12px;
  height: 100%;
  width: 100%;
  border: 2px solid red;
  z-index: 1;
  overflow: hidden;
  padding: 0;
}
.hovering img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.form h1 {
  position: relative;
  z-index: 2;
  color: white;
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  transition: 0.8s ease;
  opacity: 0;
}

.oppacity0 {
  opacity: 60%;
  color: red;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.loginH1 {
  margin-top: 1%;
  position: relative;
  padding: 0;
  height: fit-content;
  width: fit-content;
  display: flex;
  justify-content: left;
  user-select: none;
  cursor: pointer;
}
.loginH1 h1 {
  white-space: nowrap;
  font-family: "Montserrat", sans-serif;
  color: white;
  font-size: 26px;
  font-weight: 100;
}

.cards {
  width: 75%;
  height: 85%;
  background-color: rgb(167, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  color: aliceblue;
  flex-direction: column;
  border-radius: 26px;
  background-image: url(../assets/1608229455-star-wars.gif);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: rgba(0,0,0,0.6);
  background-blend-mode: darken;
}
.errorLoading {
  margin-top: 50px;
  width: 25%;
  height: 8%;
  background-color: rgb(26, 26, 26);
  display: flex;
  justify-content: center;
  align-items: center;
  color: aliceblue;
  border-radius: 12px;
  border: none;
  outline: none;
  font-size: 26px;
  cursor: pointer;
}
</style>
