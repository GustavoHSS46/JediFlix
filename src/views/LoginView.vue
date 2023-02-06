<template>
    <div>
        <div class="login">
            <div class="image">
                <img src="https://icon-library.com/images/star-wars-icon-png/star-wars-icon-png-9.jpg" alt="">
            </div>
            <div class="welcome">
                <h1>Soldado, Corra O Esquadrão JediFlix Precisa De Você</h1>
            </div>
            <form class="form">
                <input type="text" placeholder="Entre Com Seu Email" required>
                <input type="password" placeholder="Entre Com Sua Senha" required>
                <button class="confirmBTN">Se Juntar Ao Esquadrão</button>
            </form>
            <div class="register">
                <h1>Ainda Não Faz Parte Do Esquadrão? Não Perca Mais Tempo Se Increva já</h1>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue'

export default {
    name: "Login",
    components: {
        Card
    }
}
</script>

<style scoped>
    div {
        width: 100vw;
        height: 100vh;
        padding: 0 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .login {
        width: 1400px;
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
    }

    .register {
        padding: 0;
        margin: 0;
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
        font-size: 14px;
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

    .confirmBTN {
        margin-top: 2%;
        width: 100%;
        height: 25%;
        background: rgb(167, 0, 0);
        display: flex;;
        align-items: center;
        justify-content: center;;
        padding: 0;
        color: white;
        border: 2px solid rgb(255, 0, 0);
        color: white;
        font-size: 20px;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        cursor: pointer;
    }
</style>