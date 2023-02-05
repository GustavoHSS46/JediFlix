<template>
    <div class="categoryDiv">
        <Card title="Suspence" widthProps="20" heightProps="100" measurements="%" fontSize="16"/>
        <Card title="Terror" widthProps="20" heightProps="100" measurements="%" fontSize="16"/>
        <Card title="Comédia" widthProps="20" heightProps="100" measurements="%" fontSize="16"/>
        <Card title="3D" widthProps="25" heightProps="100" measurements="%" fontSize="20"/>
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
    .categoryDiv {
        width: 100%;
        height: 120px;
        margin-top: 42rem;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>