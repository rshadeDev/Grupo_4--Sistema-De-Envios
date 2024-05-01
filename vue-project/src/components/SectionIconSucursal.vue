<template>
    <section>
        <div>
            <a href="#"><img src="../../public/img/icono-cotizacion.png" alt="Icono cotizacion" class="img-normalizada"></a>
            <a href="#"><img src="../../public/img/icono-sucursal.png" alt="Icono sucursal" class="img-normalizada"></a>
            <a href="#"><img src="../../public/img/icono-seguimiento.png" alt="Icono seguimiento"
                    class="img-normalizada"></a>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6em;
}

a {
    text-decoration: none;
}

div {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

img {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 6em;
    margin-left: 6.5em;

    border: 5px solid #FF6D24;
    border-radius: 40%;
}

.img-normalizada {
    width: 120px;
    height: 120px;
}</style>