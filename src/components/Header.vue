<template>
    <header>
        <RouterLink to="/">
            <img src="../assets/img/Logo.png" alt="logo">
        </RouterLink>

        <div class="search-container">
            <span>Rastrear Pedido</span>
            <input type="search" placeholder="Ingresa tu N° de orden" class="search-input" v-model="id">
            <button class="search-button" @click="buscarPedido">
                <svg class="w-[16px] h-[16px] text-gray-800 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                        d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                </svg>
            </button>

            <button @click="handleButtonClick">{{ isAuthenticated ? 'cuenta' : 'registrarse' }}</button>
        </div>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router';
import jsonData from '../components/PedidosJson.json';

export default {
    data() {
        return {
            isAuthenticated: false,
        };
    },
    mounted() {
        this.isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
    },
    methods: {
        handleButtonClick() {
            if (this.isAuthenticated) {
            } else {
                this.$router.push('/registro');
            }
        },
        buscarPedido() {
            this.pedidoBuscado = JSON.stringify(jsonData.find(pedidos => pedidos.id == this.id));
            if (this.pedidoBuscado != null) {
                this.$router.push({ name: "info-pedido", params: { pedidoRecibido: this.pedidoBuscado } });
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

.search-container {
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 30px;
}

span {
    color: white;
    font-weight: 800;
    width: 20%;
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

.search-input {
    padding: 0.5rem 2.5rem 0.5rem 0.5rem;
    border: none;
    width: 400px;
    box-sizing: border-box;
    border-radius: 7px;
}

.search-button {
    position: absolute;
    right: 70px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    color: black;
}
</style>