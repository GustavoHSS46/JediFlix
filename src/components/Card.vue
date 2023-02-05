<template>
    <div :style="{'width': widthProps+ measurements, 'height': heightProps+ measurements, 'fontSize': fontSize+'px'}">
        <h1>{{ title }}</h1>
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
    }
}
</script>

<style scoped>
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        border: 1px solid red;
        border-radius: 10px;
    }
</style>