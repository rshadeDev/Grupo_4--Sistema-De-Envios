<template>
    <div class="container">
        <Header />
        <div class="content">
            <AsideIcon />

            <div class="right-content">
                <div class="input">
                    <input type="search" placeholder="Ingresa el nombre de la ciudad" v-model="searchInput">
                    <button @click="buscarSucursales">Buscar</button>
                </div>

                <div class="lista-sucursales">
                    <ul v-if="filteredSucursales.length > 0">
                        <li v-for="sucursal in filteredSucursales" :key="sucursal.nombre">
                            <strong>{{ sucursal.nombre }}</strong>
                            <p>{{ sucursal.direccion }}</p>
                            <p>{{ sucursal.ciudad }}</p>
                            <p>{{ sucursal.empresa }}</p>
                        </li>
                    </ul>
                    <p v-else>No se encontraron sucursales</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import Header from '../Header.vue';
import AsideIcon from '../AsideIconSucursal.vue';

import sucursalesJSON from '../SucursaleJSON.json';

import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';

const searchInput = ref('');
const filteredSucursales = ref([]);

const router = useRouter();

const buscarSucursales = () => {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filteredSucursales.value = sucursalesJSON.filter(sucursal =>
            sucursal.ciudad.toLowerCase().includes(searchTerm) ||
            sucursal.nombre.toLowerCase().includes(searchTerm)
        );
    } else if (router.currentRoute.value.query.city) {
        filteredSucursales.value = sucursalesJSON.filter(sucursal =>
            sucursal.ciudad.toLowerCase().includes(router.currentRoute.value.query.city.toLowerCase())
        );
    } else {
        filteredSucursales.value = sucursalesJSON;
    }
};
/*
// Función para iniciar la búsqueda inicial y actualizarla cuando cambie la ciudad en los parámetros de la URL
const iniciarBusqueda = () => {
    buscarSucursales();
};

watch(searchInput, buscarSucursales);

onMounted(iniciarBusqueda);
*/
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
}

.content {
    display: flex;
}

.right-content {
    display: flex;
    flex-direction: column;
    margin-top: 2em;
    margin-left: 6em;
    padding: 15px 10px;
    width: 100%;
}

.input {
    background-color: #FFEAD4;
    padding: 25px;
    width: 90%;
    border-radius: 10px;
}

input {
    width: 85%;
    padding: 10px;
    border-radius: 5px;
    border: none;
    outline: none;
    font-size: 1rem;
    background-color: white;
    color: black;
    margin-left: 14px;
}

button {
    background-color: #FF6D24;
    border: none;
    color: white;
    padding: 11px 30px;
    border-radius: 5px;
    margin-left: 30px;
    cursor: pointer;
}

.lista-sucursales {
    margin: 0;
    max-width: 71em;
    max-height: 46em;
    overflow-y: auto;
    overflow-x: hidden;
}

.lista-sucursales ul {
    list-style-type: none;
    padding: 0;
    width: 99%;
    margin-left: 10px;
}

.lista-sucursales li {
    background-color: #f7f7f7;
    border: 1px solid #ddd;
    border-radius: 7px;
    padding: 10px;
    margin: 10px 0;
    transition: all 0.5s ease;
    box-sizing: border-box;
}

.lista-sucursales li:hover {
    padding: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transform: scale(1.004);
    box-sizing: border-box;
}

.lista-sucursales li strong {
    display: block;
    font-size: 1.2em;
    color: #333;
}

.lista-sucursales li p {
    margin: 0.5em 0;
    color: #202020;
}
</style>