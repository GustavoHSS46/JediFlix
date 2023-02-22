<template>
  <router-view/>
</template>

<script>

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
  background-color: rgb(26, 29, 41);
  display: flex;
  justify-content: center;
}

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #101935;
  width: clamp(none, 100%, 1440px);
  height: 100vh; 
  display: flex;
  justify-content: center;
}

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: none;
  border: none;
  outline: none;
}
::-webkit-scrollbar-thumb {
  background: red;
  border-radius: 6px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgb(164, 0, 0);
}

</style>
