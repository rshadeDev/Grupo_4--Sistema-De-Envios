<template>
    <section>
        <div class="button">
            <button @click="volverAInfo">Volver</button>
        </div>
        <div class="content">
            <div class="info">
                <div class="nombre">Datos Del Pedido</div>
                <div class="detalle">
                    <li>Nro. pedido: 12839283849392944</li>
                    <li>Origen: Direccion de origen</li>
                    <li>Destino: Direccion de destino</li>
                </div>
            </div>
            <div class="info">
                <div class="nombre">Datos Del Conductor</div>
                <div class="detalle">
                    <li>Nombre: PrimerNombre SegundoNombre PrimerApellido SegundoApellido</li>
                    <li>Patente del vehiculo: Patente</li>
                    <li>Celular: +56 9 1111 1111</li>
                </div>
            </div>
            <div class="mapa"><img src="../assets/img/Mapa.jpg" alt="Aqui ira el mapa"></div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            city: ''
        };
    },
    methods: {
        volverAInfo() {
            this.$router.push({ path: '/info-seguimiento'});
        }
    }
};
</script>
<style scoped>
section{
    height: 82.5vh;
    display: flex;
    width: 100%;
    margin: 2% 0% 0% 0%;
}
.button{
    display: flex;
    width: 10%;
    justify-content: center;
}
button{
    height: 7.5%;
    width: 75%;
    background-color: rgba(255, 109, 36, 1);
    color: white;
    border-style: none;
    border-radius: 10px;
    cursor: pointer;
}
.content{
    height: fit-content;
    width: 90%;
    background-color: rgba(255, 234, 212, 1);
    padding: 2% 3% 2% 3%;
}
.info{
    border-style: solid;
    border-width: 2px;
    margin-bottom: 2%;
    background-color: white;
}
.info .nombre{
    background-color: rgba(255, 109, 36, 1);
    color: white;
    padding: 0.5%;
    border-bottom-style: solid;
    border-bottom-color: black;
    border-bottom-width: 2px;
}
.info .detalle{
    list-style: none;
    padding: 0.5%;
}
.mapa{
    background-color: red;
    width: 75%;
    height: 1000px;
    margin: 0 auto 0 auto;
}
img{
    width: 100%;
    height: 100%;
}
</style>