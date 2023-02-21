<template>
  <div :class="{ overflow: isLoading }" class="home">
    <Navbarhome />
    <Carrousel />
    <Category />
    <Catalogue />
  </div>
</template>

<script>
import Navbarhome from "../components/Navbarhome";
import Catalogue from "../components/Catalogue";
import Carrousel from "../components/Carrousel";
import Category from "../components/Category";

export default {
  name: "HomeView",
  components: {
    Navbarhome,
    Carrousel,
    Category,
    Catalogue,
  },
};
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
