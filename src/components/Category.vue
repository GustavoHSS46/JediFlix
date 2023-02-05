<template>
    <div>
        <div class="categoryMain">
            <Card title="Terror" widthProps="20" heightProps="100" measurements="%" fontSize="20"/>
            <Card title="Ação" widthProps="20" heightProps="100" measurements="%" fontSize="20"/>
            <Card title="Suspence" widthProps="20" heightProps="100" measurements="%" fontSize="20"/>
            <Card title="3D" widthProps="20" heightProps="100" measurements="%" fontSize="20"/>
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
    
    .categoryMain {
        width: 100%;
        height: 130px;
        margin-top: 42rem;
        color: white;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>