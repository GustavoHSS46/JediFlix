<template>
  <div class="bg"></div>
  <div class="astronaut">
    <div class="cards">
      <lottie-player
        src="https://assets10.lottiefiles.com/packages/lf20_e1pmabgl.json"
        background="transparent"
        speed="1.5"
        style="width: 40%; height: 40%"
        loop
        autoplay
      ></lottie-player>
      <h1>{{ errorText }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {errorText: String},
  data() {
    return {
      error: true,
    };
  },
};
</script>

<style scoped>
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
}

.bg {
  position: absolute;
  z-index: 998;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .8);
  filter: blur(20px);
}

.cards {
  width: 75%;
  height: 55%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: aliceblue;
  flex-direction: column;
  border-radius: 26px;
  background-color: whitesmoke;;
  color: black;;
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
