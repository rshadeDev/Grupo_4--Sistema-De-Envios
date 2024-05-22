<template>
    <section>
        <div class="content">
            <div class="firstItem">
                <div class="dot" :class="{active: estado >= 1}"><img src="../assets/img/icono-sucursal.png" alt=""></div>
                <div class="line"></div>
            </div>
            <div class="info-25-75">
                <div class="content-info"><span>{{ infoSucursal }}</span></div>
                <div class="content-fill"></div>
            </div>
            <div class="secondItem">
                <div class="line"></div>
                <div class="dot" :class="{active: estado >= 2}"><img src="../assets/img/icono-seguimiento.png" alt=""></div>
                <div class="line"></div>
            </div>
            <div class="info-center">
                <div class="content-fill"></div>
                <div class="content-info"><span>{{ infoSeguimiento }}</span></div>
                <div class="content-fill"></div>
            </div>
            <div class="thirdItem">
                <div class="line"></div>
                <div class="dot"  :class="{active: estado == 3}"><img src="../assets/img/Pin-mapa.png" alt=""></div>
            </div>
            <div class="info-25-75">
                <div class="content-fill"></div>
                <div class="content-info"><span>{{ infoEntrega }}</span></div>
            </div>
        </div>    
    </section>
</template>
<script>
import axios from 'axios';

export default{
    props:["pedido"],
    data(){
        return{
            pedidoD : JSON.parse(this.pedido),
            estado : 0,
            infoSucursal : "",
            infoSeguimiento : "",
            infoEntrega : ""
        }
    },
    methods:{
        averiguarEstado(){
            const diferencia = (new Date()-new Date(this.pedidoD["fecha-salida"]))/1000;
            axios.get(`http://router.project-osrm.org/route/v1/driving/${this.pedidoD.origen.longitud},${this.pedidoD.origen.latitud};${this.pedidoD.destino.longitud},${this.pedidoD.destino.latitud}?overview=full&geometries=geojson&annotations=true&steps=true`)
            .then(response => {
                if(response.data.routes[0].duration <= diferencia){
                    this.estado = 3;
                }else if(diferencia >= 0){
                    this.estado = 2;
                }else{
                    this.estado = 1
                }
                this.ajustarInfo(this.estado);
            }).catch(error => console.error('Error fetching OSRM route: ', error));
        },
        ajustarInfo(estado){
            if(estado == 1){
                this.infoSucursal = "El pedido se encuentra en la sucursal: "+this.pedidoD["ultima-sucursal"] +", esperando a la hora de partida para empezar el viaje";
            }else if(estado == 2){
                this.infoSucursal = "El pedido partio desde la sucursal: "+this.pedidoD["ultima-sucursal"];
                this.infoSeguimiento = "El pedido se encuentra en camino a la direccion de destino";
            }else if(estado == 3){
                this.infoSucursal = "El pedido partio desde la sucursal: "+this.pedidoD["ultima-sucursal"];
                this.infoSeguimiento = "El pedido ya termino el viaje.";
                this.infoEntrega = "El pedido ha sido entregado en la direccion de destino: "+this.pedidoD.destino.nombre;
            }
        }
    },
    watch: {
        pedido: {
            handler(pedidoN) {
                this.pedidoD = JSON.parse(pedidoN);
                this.averiguarEstado();
            },
            immediate: true
        }
    },
    mounted(){
        this.averiguarEstado();
    }
}
</script>
<style scoped>
section{
    width: 75%;
    background-color: rgba(255, 234, 212, 1);
    margin: 15px 10px 0px 10px;
    padding: 20px 15px 20px 15px;
    height: 80vh;
    border-radius: 10px;
}
.dot{
    background-color: white;
    border-color: black;
    border-radius: 50%;
    border-style: solid;
    text-align: center;
    overflow: hidden;
    border-width: 6px;
}
.line{
    background-color: black;
}

.content{
    display: grid;
    grid-template-columns: 25% 75%;
    grid-template-rows: 33% 34% 33%;
    height: 100%;
    width: 100%;
}
.content > *{
    overflow: hidden;
}

.firstItem, .secondItem, .thirdItem{
    display: flex;
    flex-direction: column;
    height: 100%;
}
.firstItem .dot, .thirdItem .dot{
    align-self: center;
    aspect-ratio: 79.2/72.44676296859467;
    height: 75%;
}
.firstItem .line, .thirdItem .line{
    align-self: center;
    height: 25%;
    width: 2.5%;
}
.firstItem .dot img, .secondItem .dot img, .thirdItem .dot img{
    width: 80%;
    padding-top: 5%;
}

.secondItem .dot{
    align-self: center;
    aspect-ratio: 79.2/72.44676296859467;
    height: 72.76%;
}
.secondItem .line{
    align-self: center;
    height: 13.62%;
    width: 2.5%;
}

.info{
    align-self: center;
    white-space: normal;
    height: 100%;
    overflow-y: scroll;
}
.info-25-75 .content-info{
    display: flex;
    height: 75%;
    align-items: center;
}
.info-25-75 .content-fill{
    height: 25%;
}
.info-center .content-info{
    display: flex;
    height: 72.76%;
    align-items: center;
}
.info-center .content-fill{
    height: 13.62%;
}

.active{
    background-color: rgb(255, 165, 120);
}
</style>