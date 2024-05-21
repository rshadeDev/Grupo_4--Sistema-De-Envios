<template>
  <section class="register-section">
    <div class="register-container">
      <RouterLink to="/">
        <img src="../assets/img/Logo.png" alt="logo">
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
  export default {
    data() {
      return {
        rut: '',
        nombre: '',
        apellido: '',
        email: '',
        direccion: '',
        comuna: '',
        telefonoMovil: '',
        contraseña: ''
      };
    },
    methods: {
      submitForm() {
        const userData = {
          rut: this.rut,
          nombre: this.nombre,
          apellido: this.apellido,
          email: this.email,
          direccion: this.direccion,
          comuna: this.comuna,
          telefonoMovil: this.telefonoMovil,
          contraseña: this.contraseña
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        this.$router.push('/InicioSesion');
      },
    }
  };
  </script>
  
<style scoped>
.register-section {
  background-color: #FFEAD4;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 650px;
}

.register-container {
  background-color: #2E3452;
  border-radius: 15px;
  padding: 10px 20px;
  width: 500px;
  text-align: center;
  margin: 5vh auto;
}

.botones-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.botones-container a {
  text-decoration: none;
  color: white;
}

input {
  display: block;
  width: calc(100% - 22px);
  margin: 5px 0;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button {
  padding: 15px;
  border-radius: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  border: none;
  color: white;
  cursor: pointer;
  background-color: #FF6D24;
  font-size: 16px;
}

button[type="submit"] {
  width: 100%;
}

label {
  display: block;
  text-align: center;
  color: white;
  font-weight: bold;
}

p {
  color: white;
}

img {
  width: 80%;
}

</style>