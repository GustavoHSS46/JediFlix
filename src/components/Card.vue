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
        color: red;
        border: 1px solid red;
        border-radius: 10px;
        display: flex;
        justify-content: center;;
        align-items: center;
    }
    div h1{
        color: white;
        justify-content: center;;
        align-items: center;
        border-radius: 10px;
    }
</style>