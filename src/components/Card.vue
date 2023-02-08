<template>
    <div class="class" :class="{ 'div-hover': hover }" @mouseenter="hover = true" @mouseleave="hover = false"  :style="{'width': widthProps+ measurements, 'height': heightProps+ measurements, 'fontSize': fontSize+'px'}">
        <RouterLink :to="{ name: 'CategoriesView', params: { type: this.title } }">
            <div class="card">
                <h1>{{ title }}</h1>
                <div v-if="hover" class="divhovering">
                    <Transition name="fade" appear>
                        <div :style="{backgroundImage: `url('${gifBackground}')` }" class="bgCards"></div>
                    </Transition>
                </div>
            </div>
        </RouterLink>
    </div>
</template>

<script >
export default {
    props: {
        title: String,
        widthProps: String,
        heightProps: String,
        measurements: String,
        fontSize: String,
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
        transform: scale(1.2);
    }
    .class{
        position: relative;
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
        gap: 5%;
    }
    a h1 {
        text-decoration: none;
        color:white;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .class h1 {
        opacity: 100%;
    }
    
    
    .bgCards {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -99;
        height: 100%;
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    .bgCards img {
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