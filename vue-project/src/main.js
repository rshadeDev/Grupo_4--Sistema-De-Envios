import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'

// Componentes a cargar
import Sucursal from './components/Vistas/Sucursal.vue'
import ListaSucursal from './components/Vistas/ListaSucursal.vue'

// definir rutas
const routes = [
    { path: '/', component: Sucursal },
    { path: '/lista-sucursal', component: ListaSucursal }
]

// Crear el router
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App).use(router).mount('#app')