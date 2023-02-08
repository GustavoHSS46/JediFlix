<template>
  <div :class="{overflow : isLoading}" class="home">
    <Navbarhome/>
    <Carrousel/> 
    <Category/>   
    <Catalogue/>
    <Transition name="fade">
      <div v-if="isLoading" class="loading">
        <Loading url="../assets/loading.mp4"/>
      </div>
  </Transition>
  </div>
</template>

<script>
import Loading from "../components/Loading";
import Navbarhome from "../components/Navbarhome";
import Catalogue from "../components/Catalogue";
import Carrousel from "../components/Carrousel";
import Category from "../components/Category";

export default {
  name: 'HomeView',
  components: {
    Loading,
    Navbarhome,
    Carrousel,
    Category,
    Catalogue,
  },
  data() {
    return {
      isLoading: true,
    }
  },
  methods: {
        timed () {
            setInterval(() => {
              this.isLoading = false;
            }, 2000);
        },
        
    },
    created() {
        this.timed()
    },
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
  .loading {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }

  .overflow {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }


</style>
