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
        <RouterLink to="/Cotizacion2" id="siguiente">
          <button class="boton-siguiente">></button>
        </RouterLink>
      </div>
    </section>
</template>
  
<script>

</script>
  
<style scoped>
  .section-busqueda {
    background-color: #FFEAD4;
    padding: 20px;
    text-align: center;
    margin-top: 30px
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
  
.div-ciudad {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 70px;
    margin-right: 30px;
    width: 50%;
}
  
select {
    width: 45%;
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
  