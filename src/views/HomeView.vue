<template>
  <div class="home">
    <Navbarhome/>
    <Carrousel/>
    <Catalogue/>
  </div>
</template>

<script>
import Navbarhome from "../components/Navbarhome";
import Catalogue from "../components/Catalogue";
import Carrousel from "../components/Carrousel";

export default {
  name: 'HomeView',
  components: {
    Navbarhome,
    Carrousel,
    Catalogue,
  }
}
</script>

<style> 
  .home {
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
