<template>
    <header>
        <img src="../../public/img/Logo.png" alt="logo">

        <div>
            <span>Rastrear Pedido</span>
            <input type="text" placeholder="Ingresa tu N° de orden">

            <button>Ingresar</button>
            <!-- Agregar los botones si es que esta ingresada una cuenta, o si es que no hay.
                
            <button v-if="isAuthenticated">Cuenta</button>
            <button v-else>Registrarse</button>
            -->
        </div>
    </header>
</template>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem 2rem;
    background-color: rgb(238, 100, 50);
}

img {
    width: 11%;
}

div {
    display: flex;
    align-items: center;
    margin-right: 10px;
}

span {
    margin-right: 10px;
    color: white;
    font-weight: 800;
    width: 37%;
}

input {
    padding: 0.5rem;
    border: none;
    width: 50%;
    border-radius: 7px;
}

button {
    width: 80px;
    margin-left: 10px;
    padding: 0.5rem;
    border: none;
    border-radius: 7px;
    background-color: #FFEAD4;
    color: orangered;
    cursor: pointer;
}</style>