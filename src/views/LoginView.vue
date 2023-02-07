<template>
    <div class="LoginBehind">
        <div class="obj1">
            <img src="../assets/obj1.png" alt="">
        </div>
        <div class="obj2">
            <img src="../assets/obj2.png" alt="">
        </div>
    </div>
    <div class="LoginFront">
        <Transition name="slide-fade" appear>
            <div class="login">
                <div :style="up" class="image">
                    <img src="https://icon-library.com/images/star-wars-icon-png/star-wars-icon-png-9.jpg" alt="">
                </div>
                <div class="welcome">
                    <Transition name="fade">
                        <h1>Soldado, Corra O Esquadrão JediFlix Precisa De Você</h1>
                    </Transition>
                </div>
                <form class="form">
                    <input type="text" placeholder="Entre Com Seu Email" required>
                    <input type="password" placeholder="Entre Com Sua Senha" required>
                    <div @mouseenter="hover = true" @mouseleave="hover = false" class="divBtn">
                        <div v-if="hover" class="hovering">
                            <Transition name="fade" appear>
                                <img src="../assets/1608229455-star-wars.gif" alt="">
                            </Transition>
                            
                        </div>
                        <RouterLink to="/">
                            <button class="confirmBTN">
                                <h1 :class="[ hover ? true : 'oppacity1', 'oppacity0']">Se Juntar Ao Esquadrão</h1>
                            </button> 
                        </RouterLink>
                    </div>
                </form>
                <div class="register">
                    <RouterLink to="/register">
                        <h1>Ainda Não Faz Parte Do Esquadrão? Não Perca Mais Tempo Se Increva já</h1>
                    </RouterLink>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            hover: false,
            mousePosX: 0,
            mousePosY: 0,
        };
    },
    mounted() {
        document.addEventListener("mousemove", (event) => {
            this.mousePosX = event.clientX / 40;
            this.mousePosY = event.clientY / 40;
            const obj1 = document.querySelector(".obj1");
            obj1.style.left = `calc(60% + ${this.mousePosX}px)`;
            obj1.style.top = `calc(20% + ${this.mousePosY}px)`;
            const obj2 = document.querySelector(".obj2");
            obj2.style.left = `calc(10% + ${this.mousePosX * -1}px)`;
            obj2.style.top = `calc(60% + ${this.mousePosY * -1}px)`;
        });

        
    }
}
</script>


<style scoped>

    .LoginBehind {
        color: white;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .obj1 {
        position: absolute;
        top: 20%;
        left: 60%;
        height: 150px;
        width: 150px;
    }
    .obj2 {
        position: absolute;
        top: 60%;
        left: 10%;
        height: 150px;
        width: 150px;
    }
    .LoginBehind img{
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
    .LoginFront {
        min-width: none;
        width: 100vw;
        max-width: 768px;
        padding: 0 5%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }
    .login {
        width: 768px;
        height: 60%;
        padding: 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    }
    .image {
        height: 155px;
        width: 144px;
        margin-bottom: 3%;
        padding: 0;
        overflow: hidden;
        transition: 950ms;
    }

    .image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .welcome {
        padding: 0;
        margin: 0;
        height: fit-content;
        color: white;
        font-size: 12px;
        user-select: none;
        cursor: default;
    }
    .welcome h1{
        color: white;
        font-size: 26px;
        overflow: hidden;
        border-right: .15em solid red;
        white-space: nowrap;
        margin: 0 auto;
        letter-spacing: .15em;
        animation: 
            typing 3.5s steps(30, end),
            blink-caret .5s step-end infinite;
    }
    @keyframes typing {
        from { width: 0% }
        to { width: 100% }
    }
    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: red }
    }

    .register {
        padding: 0;
        margin: 0;
        margin-top: 2%;
        height: fit-content;
        width: 100%;
        display: flex;
        justify-content: left;
        user-select: none;
        cursor: pointer;
    }
    .register h1{
        font-family: 'Montserrat', sans-serif;
        color: white;
        font-size: 20px;
        font-weight: 100;
    }
    .form {
        margin-top: 3%;
        padding: 0;
        width: 100%;
        height: 50%;
        gap: 4%;
        display: flex;;
        flex-direction: column;
        transition: 450ms;
    }
    .form input{
        border: 2px solid red;
        padding: 10px;
        width: 100%;
        height: 30%;
        background: none;
        display: flex;;
        flex-direction: column;
        color: red;
        font-size: 20px;
    }
    .form input::placeholder {
        color: red;
        font-size: 20px;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a{
        height: 100%;
        width: 100%;
        text-decoration: none;
    }
    
    .confirmBTN {
        height: 100%;
        width: 100%;
        background: rgb(167, 0, 0);
        display: flex;;
        align-items: center;
        justify-content: center;;
        padding: 0;
        border: 2px solid rgb(255, 0, 0);
        transition: 450ms;
        border-radius: 12px;
    }
    .divBtn {
        margin-top: 2%;
        position: relative;
        width: 100%;
        height: 25%;
        padding: 0;
    }

    .hovering {
        position: absolute;
        border-radius: 12px;
        height: 100%;
        width: 100%;
        border: 2px solid red;
        z-index: 1;
        overflow: hidden;
        padding: 0;
    }
    .hovering img{
        object-fit: cover;
        height: 100%;
        width: 100%;
    }

    .form h1 {
        position: relative;
        z-index: 2;
        color: white;
        font-size: 20px;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        cursor: pointer;
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

    .oppacity0 {
        opacity: 60%;
        color: red;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .oppacity1 {
        height: 100%;
        width: 100%;
        opacity: 100%;
        color: red;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .slide-fade-enter-active {
        opacity: 1;
        transition: all 1s ease-out;
    }

    .slide-fade-leave-active {
        transition: all 0.8s;
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateX(220px);
        opacity: 0;
    }
</style>
