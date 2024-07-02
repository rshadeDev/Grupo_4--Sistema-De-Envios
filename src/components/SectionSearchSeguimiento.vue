<template>
    <section class="search-section">
        <h2>Busque su pedido</h2>
        <h3>Ingrese el codigo de envio entregado al finalizar la cotizacion</h3>

        <div class="search-bar">
            <form v-on:submit.prevent="buscarPedido">
                <input type="text" placeholder="Ingrese el codigo que le fue entregado para ver los detalles del pedido"
                    v-model="id">
                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 20" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M15 16l4 -4" />
                        <path d="M15 8l4 4" />
                    </svg>
                </button>
            </form>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            id: null,
            pedidoBuscado: null,
        };
    },
    methods: {
        buscarPedido() {
            const regex = /^[1-9]\d*$/;
            if (!regex.test(this.id)) {
                alert('El código debe ser un número entero positivo.');
                return;
            }
            axios.get(`http://localhost:8080/pedidos/${this.id}`)
                .then(response => {
                    this.pedidoBuscado = response.data;
                    this.pedidoBuscado.fechaSalida = new Date(this.pedidoBuscado.fechaSalida).toISOString();
                
                    const nuevoP = Object.assign({}, this.pedidoBuscado);
                    nuevoP.destino = Object.assign({}, nuevoP.destino);
                    nuevoP.origen = Object.assign({}, nuevoP.origen);
                    nuevoP.ultimaSucursal = Object.assign({}, nuevoP.ultimaSucursal);

                    this.$router.push({name: "info-pedido", params: { pedidoRecibido: JSON.stringify(nuevoP) }});
                })
                .catch(error => {
                    console.error('Error searching pedidos:', error);
                });
        }
    }
};
</script>

<style scoped>
.search-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 6em;
    width: 100%;
    height: 25em;
    background-color: #FFEAD4;
}

h2 {
    font-size: 2rem;
    color: #FF6D24;
}

h3 {
    font-size: 1.4rem;
    margin-bottom: 30px;
}

input {
    width: 40em;
    padding: 10px;
    padding-right: 35px;
    border-radius: 5px;
    border: none;
    outline: none;
    font-size: 1rem;
    background-color: white;
    color: black;
    margin-left: 8em;
}

button {
    background-color: #FF6D24;
    width: 40px;
    height: 37px;
    margin-top: 10px;
    border: none;
    color: #ffffff;
    border-radius: 50%;
    cursor: pointer;
    margin-left: 7em;
}
</style>