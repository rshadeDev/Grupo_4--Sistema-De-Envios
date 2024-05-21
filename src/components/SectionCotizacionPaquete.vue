<template>
    <section class="section-busqueda">
      <h2>COTIZA CON NOSOTROS</h2>
      <h3>Cotiza tu envío y obtén tu valor estimado.</h3>
      <div class="container">
        <RouterLink to="/Cotizacion" id="retroceder">
        <button class="boton-naranjo"><</button>
        </RouterLink>
        <div class="aside">
          <select class="opcion-tipo-entrega" v-model="tipoEntrega">
            <option value="" disabled selected>Tipo de entrega:</option>
            <option value="Sucursal">Sucursal</option>
            <option value="Domicilio">Domicilio</option>
          </select>
        </div>
        <div class="campos-peso-dimensiones">
          <div class="campo">
            <label for="peso">Peso (Kg)</label>
            <input type="number" id="peso" name="peso" v-model="peso">
          </div>
          <div class="campo">
            <label for="altura">Altura (M)</label>
            <input type="number" id="altura" name="altura" v-model="altura">
          </div>
          <div class="campo">
            <label for="largo">Largo (M)</label>
            <input type="number" id="largo" name="largo" v-model="largo">
          </div>
          <div class="campo">
            <label for="ancho">Ancho (M)</label>
            <input type="number" id="ancho" name="ancho" v-model="ancho">
          </div>
        </div>
      </div>
      <div v-if="errorMensaje" class="error">{{ errorMensaje }}</div>
      <div class="valor-cotizacion">VALOR DE COTIZACIÓN: <span>${{ valorCotizacion }}</span></div>
      <div class="cotizar-denuevo-botones">
        <button @click="calcularCotizacion">Cotizar</button>
        <button @click="nuevaCotizacion">Nueva Cotización</button>
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
    margin-top: 30px;
}
  
.section-busqueda h2 {
    margin-top: 2rem;
    color: #FF6D24;
    font-weight: bold;
}
  
.container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
  
.aside {
    width: 30%;
}
  
.campos-peso-dimensiones {
    width: 60%;
}
  
.campo {
    margin-bottom: 10px; 
}
  
.campo input {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #cccccc;
}
  
.opcion-tipo-entrega {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #cccccc;
}
  
.valor-cotizacion {
    font-weight: bold;
    margin-top: 2rem;
}
  
.cotizar-denuevo-botones {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
}
  
.cotizar-denuevo-botones button {
    background-color: #FF6D24;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 10px;
}
.boton-naranjo{
    background-color: #FF6D24;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>
  