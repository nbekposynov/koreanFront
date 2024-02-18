<script setup>
import {onMounted} from "vue";

const props = defineProps({
  coords: {
    type: Array,
    required: true
  }
})

onMounted(() => {
  initMap();
})
async function initMap() {
  // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
  await ymaps3.ready;

  const {YMap, YMapDefaultSchemeLayer} = ymaps3;

  // Иницилиазируем карту
  const map = new YMap(
      // Передаём ссылку на HTMLElement контейнера
      document.getElementById('map'),

      // Передаём параметры инициализации карты
      {
        location: {
          // Координаты центра карты
          // center: [37.588144, 55.733842],
          center: [props.coords[1], props.coords[0]],

          // Уровень масштабирования
          zoom: 13
        }
      }
  );

  // Добавляем слой для отображения схематической карты
  map.addChild(new YMapDefaultSchemeLayer());
}
</script>

<template>
  <div v-if="coords" id="map" style="width: 600px; height: 400px"></div>
</template>

<style scoped>

</style>