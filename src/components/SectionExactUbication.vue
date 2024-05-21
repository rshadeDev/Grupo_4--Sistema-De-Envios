<template>
    <section>
        <div class="button">
            <button @click="volverAInfo">Volver</button>
        </div>
        <div class="content">
            <div class="info">
                <div class="nombre">Datos Del Pedido</div>
                <div class="detalle">
                    <li>Nro. pedido: {{ pedidoD.id }}</li>
                    <li>Origen: {{ pedidoD.origen.nombre }}</li>
                    <li>Destino: {{ pedidoD.destino.nombre }}</li>
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
            <div class="mapa" id="verMapa"></div>
        </div>
    </section>
</template>
<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from 'axios';

export default {
    props:["pedido"],
    data() {
        return {
            pedidoD: JSON.parse(this.pedido),
            ultimasCoordenadas: []
        };
    },
    methods: {
        volverAInfo() {
            this.$router.push({name:"info-pedido", params:{pedidoRecibido: this.pedido}});
        },
        setupLeafletMap() {
            const mapDiv = L.map("verMapa").setView([this.pedidoD.origen.latitud, this.pedidoD.origen.longitud], 8);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(mapDiv);
            
            L.marker([this.pedidoD.origen.latitud, this.pedidoD.origen.longitud]).addTo(mapDiv);
            L.marker([this.pedidoD.destino.latitud, this.pedidoD.destino.longitud]).addTo(mapDiv);
            
            axios.get(`http://router.project-osrm.org/route/v1/driving/${this.pedidoD.origen.longitud},${this.pedidoD.origen.latitud};${this.pedidoD.destino.longitud},${this.pedidoD.destino.latitud}?overview=full&geometries=geojson&annotations=true&steps=true`)
            .then(response => { 
                const route = response.data.routes[0].geometry;
                const geojsonLayer = L.geoJSON(route).addTo(mapDiv);
                mapDiv.fitBounds(geojsonLayer.getBounds());

                const tiempoTotal = response.data.routes[0].duration;                    
                const tiempoPartida = new Date(this.pedidoD["fecha-salida"]);
                const tiempoActual = new Date();

                let tiempoPasado=(tiempoActual-tiempoPartida)/1000;
                let tiempoAcumulado = 0;
                let pasoActual = 0;
                let llegoAlDestino = false;
                let contadorDeCoordenadas = 0;
                if (tiempoPasado < 0){
                    tiempoPasado = -tiempoPasado;
                }

                const pasos = response.data.routes[0].legs[0].steps;


                for (let i = 0; i < pasos.length; i++) {
                    tiempoAcumulado += pasos[i].duration;
                    contadorDeCoordenadas += pasos[i].geometry.coordinates.length;
                    if(tiempoAcumulado >= tiempoPasado){
                        contadorDeCoordenadas -= pasos[i].geometry.coordinates.length;
                        pasoActual = i;
                        break;
                    }else if(i == pasos.length-1){
                        pasoActual = i;
                        llegoAlDestino = true;
                    }
                }
                const posiciones = pasos.map(paso => paso.geometry.coordinates).flat();

                if(!llegoAlDestino){
                    const tiempoRestante = tiempoTotal - tiempoPasado;
                    const tiempoRestantePasoActual = tiempoAcumulado - tiempoPasado;
                    const tiempoTranscurridoEnElPaso = pasos[pasoActual].duration - tiempoRestantePasoActual;

                    const progresoPasoActual = tiempoTranscurridoEnElPaso / pasos[pasoActual].duration;
                    
                    //Este puntoInicial esta dando un error, pues no da la ubicacion que deberia
                    const puntoInicial = this.interpolate(posiciones[contadorDeCoordenadas], posiciones[contadorDeCoordenadas + 1], progresoPasoActual);

                    const marker = L.marker([puntoInicial[1], puntoInicial[0]]).addTo(mapDiv);

                    console.log(puntoInicial);
                    console.log(pasos[pasoActual]);
                    console.log(posiciones[contadorDeCoordenadas]);
                    /*
                    console.log("PASO ACTUAL:");
                    console.log("TIEMPO TRANSCURRIDO = "+tiempoTranscurridoEnElPaso);
                    console.log("TIEMPO RESTANTE = "+tiempoRestantePasoActual);
                    console.log("TIEMPO TOTAL = "+pasos[pasoActual].duration +" O " + (tiempoTranscurridoEnElPaso+tiempoRestantePasoActual));

                    console.log("PROGRESO = "+progresoPasoActual);
                    */
                    //for (let i = contadorDeCoordenadas; i < pasos[pasoActual].geometry.coordinates.length; i++) {}

                    this.animateMarker(marker, posiciones.slice(contadorDeCoordenadas), tiempoRestante * 1000);             
                }
            })
            .catch(error => console.error('Error fetching OSRM route:', error));
        },
        animateMarker(marker, route, duration) {
            let startTime = null;

            const interpolate = (point1, point2, factor) => {
                const lat = point1[1] + (point2[1] - point1[1]) * factor;
                const lng = point1[0] + (point2[0] - point1[0]) * factor;
                return [lat, lng];
            };

            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                const factor = Math.min(progress / duration, 1);

                const currentIndex = Math.floor(factor * (route.length - 1));
                const nextIndex = Math.min(currentIndex + 1, route.length - 1);
                const localFactor = (factor * (route.length - 1)) % 1;

                const [lat, lng] = interpolate(route[currentIndex], route[nextIndex], localFactor);
                marker.setLatLng([lat, lng]);

                if (progress < duration) {
                    requestAnimationFrame(step);
                }
            };
            requestAnimationFrame(step);
        },
        interpolate(point1, point2, factor){
            const lat = point1[1] + (point2[1] - point1[1]) * factor;
            const lng = point1[0] + (point2[0] - point1[0]) * factor;
            return [lat, lng];
        }
    },
    mounted() {
        this.setupLeafletMap();
    },
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