<template>
    <header>
        <img src="../../public/img/Logo.png" alt="logo">

        <div>
            <span>Rastrear Pedido</span>
            <input type="text" placeholder="Ingresa tu N° de orden">

            <button v-if="!isAuthenticated" @click="login">Ingresar</button>
            <button v-else>Registrarse</button>
        </div>
    </header>
</template>

<script>
// Logica de lo que deberia hacer el boton a la hora de verificar si el usuario esta autenticado o no.
export default {
    data() {
        return {
            isAuthenticated: false
        };
    },
    methods: {
        login() {
            console.log("Iniciando sesion....");
        }
    }
};
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem 2rem;
    background-color: rgb(238, 100, 50);
}

img {
    width: 11%;
}

div {
    display: flex;
    align-items: center;
    margin-right: 30px;
}

span {
    margin-right: 10px;
    color: white;
    font-weight: 800;
    width: 50%;
}

input {
    padding: 0.5rem;
    border: none;
    width: 60%;
    box-sizing: content-box;
    border-radius: 7px;
}

button {
    width: 85px;
    margin-left: 10px;
    padding: 0.5rem;
    border: none;
    border-radius: 7px;
    background-color: #FFEAD4;
    color: orangered;
    cursor: pointer;
}</style>