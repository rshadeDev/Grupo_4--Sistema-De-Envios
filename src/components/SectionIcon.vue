<template>
    <section>
        <div>
            <RouterLink to="/">
                <img src="../assets/img/icono-cotizacion.png" id="cotizacion" alt="Icono cotización" class="img-normal">
            </RouterLink>

            <RouterLink to="/sucursal" id="sucursal">
                <img src="../assets/img/icono-sucursal.png" alt="Icono sucursal" class="img-normal">
            </RouterLink>

            <RouterLink to="/seguimiento" id="seguimiento">
                <img src="../assets/img/icono-seguimiento.png" alt="Icono seguimiento" class="img-normal">
            </RouterLink>
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 9em;
}

div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
}

img {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: 5px solid #FF6D24;
    border-radius: 40%;
    transition: all 0.5s ease;
}

img:hover {
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transform: scale(1.03);
}

.img-normal {
    width: 120px;
    height: 120px;
}
</style>