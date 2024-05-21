<template>
    <Header />
    <SectionExactUbication :pedido="pedidoRecibido"/>
</template>
<script setup>
import Header from '../components/Header.vue';
import SectionExactUbication from '../components/SectionExactUbication.vue';

const props = defineProps({
  pedidoRecibido: {
    type: String,
    required: true
  }
})
</script>
<style scoped>
</style>