<template>
    <div>
        <div class="login">
            <div class="image">
                <img src="https://icon-library.com/images/star-wars-icon-png/star-wars-icon-png-9.jpg" alt="">
            </div>
            <div class="welcome">
                <h1>Soldado, Fale Um Pouco Sobre Você</h1>
            </div>
            <form class="form">
                <input type="text" placeholder="Entre Com Seu Nome" required>
                <input type="text" placeholder="Entre Com Seu Email" required>
                <input type="password" placeholder="Entre Com Sua Senha" required>
                <input type="password" placeholder="Confirme Sua Senha" required>
                <div @mouseenter="hover = true" @mouseleave="hover = false" class="divBtn">
                    <div v-if="hover" class="hovering">
                        <Transition name="fade" appear>
                            <img src="../assets/1608229455-star-wars.gif" alt="">
                        </Transition>
                        
                    </div>
                    <RouterLink to="/">
                        <button class="confirmBTN">
                            <h1 :class="[ hover ? true : 'oppacity1', 'oppacity0']">Entrar No Esquadrão</h1>
                        </button> 
                    </RouterLink>
                </div>
            </form>
            <div class="loginH1">
                <RouterLink to="/login">
                    <h1>Já Faz Parte Do Esquadrão? Não Perca Mais Tempo</h1>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            hover: false,
        };
    },
}
</script>

<style scoped>
    div {
        min-width: none;
        width: 100vw;
        max-width: 768px;
        height: 100vh;
        padding: 0 5%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }
    .login {
        width: 1400px;
        height: 90%;
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
        width: 115%;
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
        to { width: 90% }
    }
    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: red }
    }

    .loginH1 {
        position: relative;
        padding: 0;
        margin: 0;
        height: fit-content;
        width: fit-content;
        display: flex;
        justify-content: left;
        user-select: none;
        cursor: pointer;
    }
    .loginH1 h1{
        font-family: 'Montserrat', sans-serif;
        color: white;
        font-size: 26px;
        font-weight: 100;
    }
    .form {
        margin-top: 3%;
        padding: 0;
        width: 100%;
        height: 50%;
        gap: 2%;
        display: flex;;
        flex-direction: column;
        transition: 450ms;
    }
    .form input{
        border: 2px solid red;
        padding: 10px;
        width: 100%;
        height: 15%;
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
        height: 15%;
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
</style>