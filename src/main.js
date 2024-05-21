import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'

// Componentes a cargar
import Sucursal from './Vistas/Sucursal.vue'
import ListaSucursal from './Vistas/ListaSucursal.vue'

import Registro from './Vistas/Registro.vue'
import InicioSesion from './Vistas/InicioSesion.vue'

import Cotizacion from './Vistas/Cotizacion.vue'
import Cotizacion2Tipo from './Vistas/Cotizacion2Tipo.vue'
import Cotizacion3Document from './Vistas/Cotizacion3Document.vue'
import Cotizacion4Paquete from './Vistas/Cotizacion4Paquete.vue'

import Seguimiento from './Vistas/Seguimiento.vue'
import InfoSeguimiento from './Vistas/InfoSeguimiento.vue'
import MapaSeguimiento from './Vistas/MapaSeguimiento.vue'

// definir rutas
const routes = [
    { path: '/sucursal', component: Sucursal },
    { path: '/lista-sucursal', component: ListaSucursal },
    { path: '/registro', component: Registro },
    { path: '/inicio-sesion', component: InicioSesion },
    { path: '/', component: Cotizacion },
    { path: '/cotizacion2-tipo', component: Cotizacion2Tipo },
    { path: '/cotizacion3-document', component: Cotizacion3Document },
    { path: '/cotizacion4-paquete', component: Cotizacion4Paquete },
    { path: '/seguimiento', component: Seguimiento},
    { path: '/info-seguimiento/:pedidoRecibido',name:"info-pedido", component: InfoSeguimiento, props: true},
    { path: '/info-seguimiento/mapa-seguimiento/:pedidoRecibido',name:"mapa-pedido", component: MapaSeguimiento, props:true}
]

// Crear el router
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App).use(router).mount('#app')