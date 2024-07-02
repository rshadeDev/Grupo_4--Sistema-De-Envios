<template>
    <section>
        <div class="contentId">
            <h4>Nro. pedido: {{ pedidoD.id}}</h4>
        </div>
        <div class="content">
            <div class="info"><p>Entrega en: {{ pedidoD.ultimaSucursal.nombre }}</p></div>
            <div class="info"><p>Destinatario: {{ pedidoD.destinatario }}</p></div>
            <div class="info"><p>Origen: {{ pedidoD.origen.nombre }}</p></div>
            <div class="info"><p>Destino: {{ pedidoD.destino.nombre }}</p></div>
            <div class="button"><button @click="verMapa">Ver en el mapa</button></div>
        </div>
    </section>
</template>
<script>
export default {
    props: {
        pedido: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            pedidoD: JSON.parse(this.pedido)
        };
    },
    watch: {
        pedido: {
            handler(pedidoN) {
                this.pedidoD = JSON.parse(pedidoN);
            },
            immediate: true
        }
    },
    methods: {
        verMapa() {
            this.$router.push({name:"mapa-pedido",params:{pedidoRecibido:JSON.stringify(this.pedidoD)}});
        }
    }
};
</script>
<style scoped>
section{
    height: 82.5vh;
    display: flex;
    flex-direction: column;
    width: 25%;
    margin: 15px 10px 0px 10px;
}
section > div{
    background-color: rgba(255, 234, 212, 1);
    border-radius: 10px;
    width: 100%;
}
.content{
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 15% 15% 15% 15% 40%;
    height: 90%;
}
.contentId{
    display: flex;
    height: 10%;
    margin-bottom: 20%;
    overflow: hidden;
}
.contentId h4{
    margin: 0% 5% 0% 5%;
    align-self: center;
}

.content > .info{
    display: flex;
    align-items: center;
    border-style: none none solid none;
    border-left: 5%;
    border-right: 5%;
    margin: 0% 5% 0% 5%;
    overflow: hidden;
}
.button{
    display: flex;
}
button{
    width: 100%;
    height: 20%;
    align-self: flex-end;
    overflow: hidden;
    background-color: rgba(255, 109, 36, 1);
    border-style: none;
    color: white;
    margin: 0% 5% 5% 5%;
    cursor: pointer;
}
</style>