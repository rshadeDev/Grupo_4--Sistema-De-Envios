<template>
  <section class="inicio-sesion-section">
    <div class="login-container">
      <RouterLink to="/">
        <img src="../assets/img/Logo.png" alt="logo">
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
        <router-link to="/registro">Crear Cuenta</router-link>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      rut: '',
      contraseña: ''
    };
  },
  methods: {
    submitForm() {
      this.login();
    },
    login() {
      this.$root.isAuthenticated = true;

      localStorage.setItem('isLoggedIn', 'true');

      this.$router.push('/');
    }
  }
};
</script>
  
<style scoped>
.inicio-sesion-section {
  background-color: #FFEAD4;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 650px;
  height: 100vh;
  max-height: 100vh;
}

.login-container {
  background-color: #2E3452;
  border-radius: 15px;
  padding: 10px 20px;
  width: 500px;
  text-align: center;
  margin: 20vh auto;
}

img {
  height: auto;
  width: 60%;
  border-radius: 20px;
}

h2 {
  color: #ffffff;
}

label {
  display: block;
  text-align: left;
  color: #ffffff;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 5px;
}

input {
  display: block;
  width: calc(100% - 22px);
  margin-bottom: 15px;
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
  width: calc(100% - 22px);
  font-size: 16px;
}

button[type="submit"] {
  width: 100%;
}

.register-link {
  margin-top: 20px;
  color: #ffffff;
}

.register-link .link {
  color: #FF6D24;
  text-decoration: none;
}

p {
  color: white;
}

p a {
  color: #FF6D24;
  text-decoration: none;
  font-weight: 700;
}
</style>