<template>
    <div :class="{ 'div-hover': hover }" @mouseenter="hover = true" @mouseleave="hover = false" :style="{'width': widthProps+ measurements, 'height': heightProps+ measurements, 'fontSize': fontSize+'px'}">
        <h1>{{ title }}</h1>
        <div v-if="hover" class="divhovering">
            <Transition name="fade" appear>
                <div :style="{backgroundImage: `url('${gifBackground}')` }" class="bgCards"></div>
                
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
        gifBackground: String,
    },
    data() {
        return {
            hover: false,
        };
    },
}
</script>

<style scoped>
    .div-hover {
        transform: scale(1.34);
    }
    div{
        border: 1px solid white;
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
        transition: 1550ms;
    }
    div h1 {
        position: absolute;
        opacity: 100%;
    }
    .bgCards {
        position: relative;
        z-index: -99;
        background-size: cover;
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
        transition: opacity 0.8s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        transition: 0.8s ease;
        opacity: 0;
    }
</style>