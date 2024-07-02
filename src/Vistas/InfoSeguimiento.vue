<template>
    <div class="container">
        <Header />
        <div class="content-container">
            <SectionBasicTrackInfo :pedido="this.pedidoRecibido"/>
            <SectionMoreTrackInfo :pedido="this.pedidoRecibido"/>
        </div> 
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import SectionBasicTrackInfo from '../components/SectionBasicTrackInfo.vue';
import SectionMoreTrackInfo from '../components/SectionMoreTrackInfo.vue';

export default {
  props: ['pedidoRecibido'],
  components: {
    Header,
    SectionBasicTrackInfo,
    SectionMoreTrackInfo
  }
}
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
</style>