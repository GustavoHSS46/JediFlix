<template>
  <div class="trailerMain">
    <div class="trailer">
      <lottie-player
        src="https://assets5.lottiefiles.com/packages/lf20_lS88YC8r3Y.json"
        background="transparent"
        speed="1"
        mode="bounce"
        style="width: 600px; height: 600px"
        loop
        autoplay
        class="lottie-player"
      ></lottie-player>
      <div class="logo">
        <div class="image">
          <img
            src="https://icon-library.com/images/star-wars-icon-png/star-wars-icon-png-9.jpg"
            alt=""
          />
        </div>
        <h1>JediFlix</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.trailerMain {
  position: fixed;
  z-index: 9999;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  color: white;
  background-color: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.trailer {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 15%;
  height: fit-content;
  user-select: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 32px;
}
.logo img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}
</style>
