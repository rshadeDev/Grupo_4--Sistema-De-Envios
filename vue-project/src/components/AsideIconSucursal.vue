<template>
    <aside>
        <div>
            <RouterLink to="/cotizacion">
                <img src="../assets/img/icono-cotizacion.png" id="cotizacion" alt="Icono cotización" class="img-normal">
            </RouterLink>

            <RouterLink to="/" id="sucursal">
                <img src="../assets/img/icono-sucursal.png" alt="Icono sucursal" class="img-normal">
            </RouterLink>

            <RouterLink to="/seguimiento" id="seguimiento">
                <img src="../assets/img/icono-seguimiento.png" alt="Icono seguimiento" class="img-normal">
            </RouterLink>
        </div>
    </aside>
</template>

<style scoped>
aside {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 88vh;
    padding: 15px;
    background-color: #FFEAD4;
}

aside div>* {
    margin-bottom: 15px;
}

img {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 6em;
    margin-left: 6.5em;
    background-color: white;

    border: 5px solid #FF6D24;
    border-radius: 40%;
    margin-bottom: 3em;
    transition: all 0.5s ease;
}

img:hover {
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transform: scale(1.03);
}

#cotizacion {
    margin-top: 10em;
}

.img-normal {
    width: 120px;
    height: 120px;
}
</style>