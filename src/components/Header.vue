<template>
    <header>
        <RouterLink to="/">
            <img src="../assets/img/Logo.png" alt="logo">
        </RouterLink>

        <div>
            <span>Rastrear Pedido</span>
            <input type="text" placeholder="Ingresa tu N° de orden">

            <button @click="handleButtonClick">{{ isAuthenticated ? 'cuenta' : 'registrarse' }}</button>
        </div>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            isAuthenticated: false
        };
    },
    mounted() {
        this.isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
    },
    methods: {
        handleButtonClick() {
            if (this.isAuthenticated) {
                localStorage.setItem('isLoggedIn', 'false');
                this.isAuthenticated = false;
            } else {
                this.$router.push('/login');
            }
        }
    },
    components: { RouterLink }
};
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.1rem 2rem;
    background-color: rgb(238, 100, 50);
}

img {
    width: 22%;
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
}
</style>