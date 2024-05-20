<template>
  <section class="register-section">
    <div class="register-container">
      <RouterLink to="/">
        <img src="../../assets/img/Logo.png" alt="logo">
      </RouterLink>
  
      <form @submit.prevent="submitForm">
        <label for="rut">Ingrese su RUT:</label>
        <input type="text" id="rut" name="rut" required>
  
        <label for="nombre">Ingrese su nombre:</label>
        <input type="text" id="nombre" name="nombre" required>
  
        <label for="apellido">Ingrese su apellido:</label>
        <input type="text" id="apellido" name="apellido" required>
  
        <label for="e-mail">Ingrese su e-mail:</label>
        <input type="text" id="e-mail" name="e-mail" required>
  
        <label for="direccion">Ingrese su dirección:</label>
        <input type="text" id="direccion" name="direccion" required>
  
        <label for="comuna">Ingrese su comuna:</label>
        <input type="text" id="comuna" name="comuna" required>
  
        <label for="telefono-movil">Ingrese su número móvil:</label>
        <input type="text" id="telefono-movil" name="telefono-movil" required>
  
        <label for="contraseña">Ingrese su contraseña:</label>
        <input type="password" id="contraseña" name="contraseña" required>
  
        <div class="button-Registrarse">
          <button type="submit">Registrarse</button>
        </div>
        <p class="login-link">Ya tienes una cuenta?
          <router-link to="/inicio-sesion" class="link">Iniciar sesion</router-link>
        </p>
      </form>
    </div>
  </section>
    
</template>
  
<script>  
</script>
  
<style scoped>
img {
  width: 80%;
}

</style>