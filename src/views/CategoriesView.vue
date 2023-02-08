<template>
    <div class="categorieViewMain">
        <div class="catologue">
            <h1>Você Esta Na Seção De {{ type }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CategoriesView',
    props: ['type'],
}
</script>

<style>
    .categorieViewMain {
        color: white;
        width: 100vw;
        height: 100vh;
        padding: 2%;
        border: 2px solid white;
        display: flex;
        justify-content: center;
    }
    .catologue{
        width: 100%;
        height: 100%;
        border: 2px solid red;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
</style>