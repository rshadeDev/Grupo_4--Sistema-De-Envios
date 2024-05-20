<template>
  <section class="inicio-sesion-section">
    <div class="login-container">
      <RouterLink to="/">
        <img src="../../assets/img/Logo.png" alt="logo">
      </RouterLink>
    <h2>Ingresa tus datos</h2>
    <form @submit.prevent="submitForm">
      <label for="rut">Rut Usuario:</label>
      <input type="text" id="rut" v-model="rut" required>
  
      <label for="contraseña">Contraseña:</label>
      <input type="password" id="contraseña" v-model="contraseña" required>

      <div class="button-ingresar">
        <button type="submit">Ingresar</button>
      </div>
    </form>
    <p>No estás registrado?
    <router-link to="/registro">Crear Cuenta</router-link></p>
  </div>
  </section>
</template>


  
<style scoped>
img {
  height: auto;
  width: 60%;
  border-radius: 20px;
}
</style>