<template>
    <div :class="{ 'div-hover': hover }" @mouseenter="hover = true" @mouseleave="hover = false" :style="{'width': widthProps+ measurements, 'height': heightProps+ measurements, 'fontSize': fontSize+'px'}">
        <h1>{{ title }}</h1>
        <div v-if="hover" class="divhovering">
            <Transition name="fade" appear>
                <img src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSmHDYol-bYFxjTBuM9j5g85-PsXzRC6497yclLp85cQmJWSSRYqzOhQ2bxdKfQY2l70qWsRqkShcuZcgA">
            </Transition>
        </div>
        
    </div>
</template>

<script >
export default {
    props: {
        title: String,
        widthProps: Number,
        heightProps: Number,
        measurements: String,
        fontSize: Number,
    },
    data() {
        return {
            hover: false,
        };
    },
}
</script>

<style scoped>
    div{
        border: 1px solid rgb(255, 0, 0);
        border-radius: 10px;
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: center;;
        align-items: center;
        cursor: pointer;
        color: white;
        user-select: none;
        overflow: hidden;
        transition: 550ms;
    }
    div h1 {
        position: absolute;
        opacity: 100%;
    }
    div img {
        position: relative;
        z-index: -99;
        height: 100%;
        width: 100%;
        object-fit: cover;
        
    }
    .div-hover h1{
        opacity: 60%;
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