<template>
    <div class="trailerMain">
        <div class="trailer">
            <video width="320" height="240" autoplay loop>
                <source src="https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676115-marvel.mp4" type="video/mp4">
                    
                Your browser does not support the video tag.
            </video>
                
        </div>
    </div>
</template>

<script>
export default {
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
    }

</style>