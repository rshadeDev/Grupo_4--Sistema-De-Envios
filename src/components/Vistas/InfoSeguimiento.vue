<template>
    <div class="container">
        <Header />
        <div class="content-container">
            <SectionBasicTrackInfo :pedido="pedidoRecibido"/>
            <SectionMoreTrackInfo />
        </div> 
    </div>
</template>

<script setup>
import Header from '../Header.vue';
import SectionBasicTrackInfo from '../SectionBasicTrackInfo.vue';
import SectionMoreTrackInfo from '../SectionMoreTrackInfo.vue';

const props = defineProps({
  pedidoRecibido: {
    type: String,
    required: true
  }
})

</script>
<style scoped>
.content-container{
    display: flex;
    height: 100%;
    margin: 0px 0px 0px 10px;
}
.container{
    height: 100%;
}
</style>,