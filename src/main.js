import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'

// Componentes a cargar
import Sucursal from './components/Vistas/Sucursal.vue'
import ListaSucursal from './components/Vistas/ListaSucursal.vue'

import Seguimiento from './components/Vistas/Seguimiento.vue'
import InfoSeguimiento from './components/Vistas/InfoSeguimiento.vue'
import MapaSeguimiento from './components/Vistas/MapaSeguimiento.vue'

// definir rutas
const routes = [
    { path: '/sucursal', component: Sucursal },
    { path: '/lista-sucursal', component: ListaSucursal },
    { path: '/seguimiento', component: Seguimiento},
    { path: '/info-seguimiento/:pedidoRecibido',name:"info-pedido", component: InfoSeguimiento, props: true},
    { path: '/info-seguimiento/mapa-seguimiento', component: MapaSeguimiento}
]

// Crear el router
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App).use(router).mount('#app')