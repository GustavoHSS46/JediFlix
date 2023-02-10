<template>
    <div class="trailerMain">
        <div class="trailer">
            <h1>{{ trailer }}</h1>
            <video width="320" height="240" controls>
                <source :src="this.ytUrl.replace('/watch?v=', '/embed/')" type="video/mp4">
            </video>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        trailer: String
    }, 
    data() {
        return {
            ytUrl:''
        }
    },
    created() {
        this.ytUrl = "https://www.youtube.com/watch?v=p9lmqoZTQOM"
    }
}

</script>

<style scoped>
    .trailerMain {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        user-select: none;
    }

    .trailer {
        width: 80%;
        height: 70%;
        border-radius: 12px;
        overflow: hidden;
    }

    .trailer video{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border: none;
        outline: none;

    }

</style>