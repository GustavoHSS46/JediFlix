<template>
    <div class="trailerMain">
        <div class="trailer">
            <img src="../assets/1608229455-star-wars.gif" alt="">
        </div>
    </div>
</template>

<script>
export default {
}

</script>

<style scoped>
    .trailerMain {
        position: fixed;
        z-index: 9999;
        height: 100vh;
        width: 100vw;
        color: white;
        background-color: rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
    .trailer {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .trailer img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

</style>