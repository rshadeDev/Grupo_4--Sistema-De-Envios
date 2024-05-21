<template>
  <section class="section-busqueda">
    <h2>Busque su sucursal más cercana</h2>
    <h3>Ingresa la dirección o ciudad en la que busques una sucursal</h3>
    <div class="contenedor-divs">
      <div class="div-ciudad-origen">
        <label for="origen">Origen</label>
        <select id="origen" v-model="ciudadOrigen">
          <option value="" disabled>Selecciona una ciudad de origen</option>
          <option v-for="ciudad in ciudades" :key="ciudad" :value="ciudad">{{ ciudad }}</option>
        </select>
      </div>
      <div class="div-ciudad-destino">
        <label for="destino">Destino</label>
        <select id="destino" v-model="ciudadDestino">
          <option value="" disabled>Selecciona una ciudad de destino</option>
          <option v-for="ciudad in ciudades" :key="ciudad" :value="ciudad">{{ ciudad }}</option>
        </select>
      </div>
      <RouterLink to="/Cotizacion2-tipo" id="siguiente">
        <button class="boton-siguiente">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
               width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m9 5 7 7-7 7"/>
          </svg>
        </button>
      </RouterLink>
    </div>
  </section>
</template>
  
<script>
import ciudadesData from './Json/ciudades.json';
export default {
  data() {
    return {
      ciudadOrigen: '',
      ciudadDestino: '',
      ciudades: [],
    };
  },
  created() {
    this.cargarCiudades();
  },
  methods: {
    cargarCiudades() {
      this.ciudades = ciudadesData.ciudades.map(ciudad => ciudad.nombre);
    },
    buscarSucursal(tipo) {
      if (tipo === 'origen' && this.ciudadOrigen) {
        console.log(`Buscando sucursal en la ciudad de origen: ${this.ciudadOrigen}`);
      } else if (tipo === 'destino' && this.ciudadDestino) {
        console.log(`Buscando sucursal en la ciudad de destino: ${this.ciudadDestino}`);
      }
    },
  },
};
</script>
  
<style scoped>
.section-busqueda {
  background-color: #FFEAD4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 6em;
  width: 100%;
  height: 25em;
  box-sizing: border-box;
}

.section-busqueda h2 {
  margin-top: 2rem;
  color: #FF6D24;
  font-weight: bold;
}

.section-busqueda h3 {
  margin-top: 1rem;
}

.contenedor-divs {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.div-ciudad-origen,
.div-ciudad-destino {
  margin: 1rem;
  width: 100%;
  max-width: 400px;
}

label {
  font-size: 1.4rem;
  margin-bottom: 30px;
  margin-right: 10px;
}

select {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 1rem;
  margin-top: 10px;
}

button {
  background-color: #FF6D24;
  padding: 10px 15px;
  border: none;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
}

.boton-siguiente {
  background-color: #FF6D24;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 70px;
  margin-left: 30px;
}
</style>
  