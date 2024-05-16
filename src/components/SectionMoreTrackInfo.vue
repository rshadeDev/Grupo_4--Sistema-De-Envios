<template>
    <section>
        <div class="content">
            <div class="firstItem">
                <div class="dot"><img src="../assets/img/icono-sucursal.png" alt=""></div>
                <div class="line"></div>
            </div>
            <div class="info-25-75">
                <div class="content-info"><span>Aqui hay info</span></div>
                <div class="content-fill"></div>
            </div>
            <div class="secondItem">
                <div class="line"></div>
                <div class="dot"><img src="../assets/img/Pin-mapa.png" alt=""></div>
                <div class="line"></div>
            </div>
            <div class="info-center">
                <div class="content-fill"></div>
                <div class="content-info"><span>Aqui hay info</span></div>
                <div class="content-fill"></div>
            </div>
            <div class="thirdItem">
                <div class="line"></div>
                <div class="dot"><img src="../assets/img/icono-seguimiento.png" alt=""></div>
            </div>
            <div class="info-25-75">
                <div class="content-fill"></div>
                <div class="content-info"><span>Aqui hay info</span></div>
            </div>
        </div>    
    </section>
</template>
<script>
</script>
<style scoped>
section{
    width: 75%;
    background-color: rgba(255, 234, 212, 1);
    margin: 15px 10px 0px 10px;
    padding: 20px 15px 20px 15px;
    height: 80vh;
    border-radius: 10px;
}
.dot{
    background-color: white;
    border-color: black;
    border-radius: 50%;
    border-style: solid;
    text-align: center;
    overflow: hidden;
    border-width: 6px;
}
.line{
    background-color: black;
}

.content{
    display: grid;
    grid-template-columns: 25% 75%;
    grid-template-rows: 33% 34% 33%;
    height: 100%;
    width: 100%;
}
.content > *{
    overflow: hidden;
}

.firstItem, .secondItem, .thirdItem{
    display: flex;
    flex-direction: column;
    height: 100%;
}
.firstItem .dot, .thirdItem .dot{
    align-self: center;
    aspect-ratio: 79.2/72.44676296859467;
    height: 75%;
}
.firstItem .line, .thirdItem .line{
    align-self: center;
    height: 25%;
    width: 2.5%;
}
.firstItem .dot img, .secondItem .dot img, .thirdItem .dot img{
    width: 80%;
    padding-top: 5%;
}

.secondItem .dot{
    align-self: center;
    aspect-ratio: 79.2/72.44676296859467;
    height: 72.76%;
}
.secondItem .line{
    align-self: center;
    height: 13.62%;
    width: 2.5%;
}

.info{
    align-self: center;
    white-space: normal;
    height: 100%;
    overflow-y: scroll;
}
.info-25-75 .content-info{
    display: flex;
    height: 75%;
    align-items: center;
}
.info-25-75 .content-fill{
    height: 25%;
}
.info-center .content-info{
    display: flex;
    height: 72.76%;
    align-items: center;
}
.info-center .content-fill{
    height: 13.62%;
}
</style>