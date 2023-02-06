<template>
  <div class="home">
    <Navbarhome/>
    <Carrousel/> 
    <Category/>   
    <Catalogue/>
  </div>
</template>

<script>
import Navbarhome from "../components/Navbarhome";
import Catalogue from "../components/Catalogue";
import Carrousel from "../components/Carrousel";
import Category from "../components/Category";

export default {
  name: 'HomeView',
  components: {
    Navbarhome,
    Carrousel,
    Category,
    Catalogue,
  }
}
</script>

<style> 
  .home {
    width: 90%;
    height: 100%;
    gap: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
