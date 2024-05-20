<template>
    <Header />
    <SectionExactUbication :pedido="pedidoRecibido"/>
</template>
<script setup>
import Header from '../Header.vue';
import SectionExactUbication from '../SectionExactUbication.vue';

const props = defineProps({
  pedidoRecibido: {
    type: String,
    required: true
  }
})
</script>
<style scoped>
</style>