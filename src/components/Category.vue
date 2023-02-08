<template>
    <div class="mainCategory">
        <div class="categoryMain">
            <Card class="cards" title="Horror" widthProps="20" heightProps="100" measurements="%" fontSize="18" gifBackground="https://media0.giphy.com/media/HFbtg3SmlDx8f9g4dJ/giphy.gif"/>
            <Card class="cards" title="Ação" widthProps="20" heightProps="100" measurements="%" fontSize="18" gifBackground="https://media.tenor.com/xy5a0VMxJqwAAAAC/flying-a-jet-maverick.gif"/>
            <Card class="cards" title="Suspence" widthProps="20" heightProps="100" measurements="%" fontSize="16" gifBackground="https://68.media.tumblr.com/39230c1255614e5a1abb8b5d2b8325a1/tumblr_ogfws9DHgM1rp0vkjo1_500.gif"/>
            <Card class="cards" title="3D" widthProps="20" heightProps="100" measurements="%" fontSize="18" gifBackground="https://64.media.tumblr.com/e047833929e082a4e8cf03981f3bdd20/8df43e3ad469af52-20/s540x810/a098f5012630848ee568e32bb652e65e09bc325d.gif"/>            
            
        </div>
    </div>
</template>

<script >
import Card from './Card.vue'

export default {
    name: "category",
    components: {
        Card
    }
}
</script>

<style scoped>

    .mainCategory {
        width: 100%;
        min-height: 130px;
    }
    
    .categoryMain {
        width: 100%;
        height: 100%;
        color: white;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .cards {
        border: 1px solid white;
    }
</style>