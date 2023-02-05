<template>
    <div>
        <div class="search">
            <Transition name="slide-fade">
                <input v-if="isActiveSearch === true" class="input" type="text" placeholder="Pesquise Aqui">
            </Transition>
            <span :class="{ activeSeacrh : isActiveSearch }" @click="isActiveSearch = !isActiveSearch" class="searchSpan material-symbols-outlined">
                search
            </span>
        </div>
        <div class="logo" :class="[isActiveSettings ? activeSettings : '', 'blur']">
            <div class="image">
                <img src="../assets/logo.png" alt="">
            </div>
            <h1>JediFlix</h1>
        </div>
        <div class="settings">
            <span :class="{ activeSettings : isActiveSettings }" @click="isActiveSettings = !isActiveSettings" class="settingsSpan material-symbols-outlined">
                settings
            </span>
            <Transition :duration="950" name="slide-fade-settings">
                <div v-if="isActiveSettings === true" class="settingsSide">
                    <h3>Settings</h3>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script >
export default {
    data() {
        return {
            isActiveSearch: false,
            isActiveSettings: false
        }
    }
}

</script>

<style scoped>
    div {
        display: flex;
        align-items: center;
        height: 4rem;
        color: white;
    }
    .logo {
        width: 33.33%;
        height: 100%;
        display: flex;
        user-select: none;
        justify-content: center;
    }
    .logo img {
        width: 100%;
        height: 120%;
        filter: invert(100%);
        object-position: center;
    }
    .image {
        margin-top: 5px;
        height: 35px;
        width: 35px;
        margin-right: 10px;
        border-radius: 50%;
        overflow: hidden;
    }
    .settings {
        width: 33.33%;
        height: 100%;
        display: flex;
        justify-content: right;
    }
    .search {
        width: 33.33%;
        height: 100%;
    }

    span{
        font-size: 40px;
        cursor: pointer;
        user-select: none;
        position: relative;
        z-index: 9999;
    }

    .settingsSpan{
        transition: 1450ms;
        rotate: -65deg;
    }

    .activeSettings {
        transition: 1450ms;
        rotate: 65deg;
        margin-right: 82%;
        color:black;
    }

    .searchSpan{
        transition: 1.2s;
        margin-left: 0%;
        opacity: 1;
    }

    .activeSeacrh {
        transition: 1.2s;
        margin-left: 50%;
        opacity: 40%;
        font-size: 24px;
    }

    .input {
        position: absolute;
        outline: none;
        border: none;
        width: 15%;
        font-family: 'Montserrat', sans-serif;
        padding-left: 5px;
        border-bottom: 2px solid white;
        background: none;
        color: white;
    }

    .slide-fade-enter-active {
        transition: all 0.9s ease-out;
    }

    .slide-fade-leave-active {
        transition: all 0.9s ease-out;
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateX(-20px);
        opacity: 0;
        width: 0%;
    }

    .slide-fade-settings-enter-active {
        transition: all 0.8s ease-out;
    }

    .slide-fade-settings-leave-active {
        transition: all 0.8s ease-out;
    }

    .slide-fade-settings-enter-from,
    .slide-fade-settings-leave-to {
        transform: translateX(120px);
        opacity: 0;
        width: 0%;
        height: 0%;
    }

    .settingsSide {
        box-sizing: border-box;
        position: absolute;
        z-index: 999;
        width: 33%;
        top: 0;
        right: 0%;
        height: 100%;
        overflow: hidden;
        display: flex;
        justify-content: right;
        align-items: flex-start;
        padding: 18px 20px;
        background: rgb(225, 225, 225);
        color:black;
    }
</style>