<script setup>
import ymap from 'vue-yandex-maps'

const props = defineProps({
  coords: {
    type: Array,
    required: true
  }
})
const settings = {
  apiKey: '3a9af56b-204b-4813-8d21-bf839ccffaf5',
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1'
}
</script>

<template>
  <yandex-map v-if="coords" :coords="coords">
    <ymap-marker
        marker-id="123"
        :coords="coords"
    />
  </yandex-map>
</template>

<style scoped>

</style>