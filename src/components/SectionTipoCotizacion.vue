<template>
    <section class="section-busqueda">
      <h2>COTIZA CON NOSOTROS</h2>
      <h3>Cotiza tu envío y obtén tu valor estimado.</h3>
      <div class="cotizar-envio">
        <RouterLink to="/Cotizacion" id="retroceder">
        <button class="boton-naranjo"><</button>
        </RouterLink>
        <RouterLink to="/Cotizacion3">
            <img src="../assets/img/mail.png" id="e-mail" alt="Icono e-mail" class="img-normal">
        </RouterLink>
        <RouterLink to="/Cotizacion4">
            <img src="../assets/img/icono-cotizacion.png" id="paquete" alt="Icono paquete" class="img-normal">
        </RouterLink>
        <RouterLink to="/Cotizacion3" id="siguiente">
        <button class="boton-naranjo">></button>
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
  margin-top: 30px;
}

.section-busqueda h2 {
  margin-top: 2rem;
  color: #FF6D24;
  font-weight: bold;
}

.section-busqueda h3 {
  margin-top: 1rem;
}

.ciudades-seleccionadas {
  margin: 1rem 0;
}

.cotizar-envio {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cotizar-envio a {
  margin: 0 20px;
}

.cotizar-envio img {
  background-color: #ffffff;
  width: 80%;
  height: 8rem;
  margin: 20px 35px 30px 0;
  border: 5px solid #FF6D24;
  padding: 5px;
  border-radius: 40%;
}

.boton-naranjo {
  background-color: #FF6D24;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
