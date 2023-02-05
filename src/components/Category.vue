<template>
    <div>
        <Card title="Terror" widthProps="20" heightProps="100" measurements="%"/>
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
    div {
        width: 100%;
        height: 120px;
        margin-top: 42rem;
        border: 1px solid white;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>