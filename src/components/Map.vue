<template>
  <YandexMap :settings="settings" @click="openMarker = 0" class="map">
    <YandexMapDefaultSchemeLayer />
    <YandexMapDefaultFeaturesLayer />
    <YandexMapControls :settings="{ position: 'right' }" />
    <YandexMapMarker :settings="{ coordinates:  [props.coords[1], props.coords[0]] }">
      <div class="map-popup" @click="modal = !modal">
        <img
          src="https://www.komatsu.ru/distributors/marker1.png"
          :style="{
            minWidth: '32px',
            position: 'relative',
            boxSizing: 'border-box',
            transform: 'translate(-50%, calc(-50% - 24px))',
            cursor: 'pointer',
          }"
        />
        <div v-if="modal" class="map-popup__content">
          <p>{{props.name}} </p>
          <p>{{ props.address }}</p>
          <p>{{props.phone}}</p>    
          </div>   
      </div>
    </YandexMapMarker>
  </YandexMap>
</template>

<script setup>
import {
  YandexMap,
  YandexMapControls,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapMarker,
} from 'vue-yandex-maps';
import { ref, defineProps } from 'vue';

const props = defineProps({
  coords: {
    type: Array,
    required: true
  },
  address: String ,
  name: String,
  phone: String
});
const settings = ref({
  location: {
    center: [props.coords[1], props.coords[0]],
    zoom: 17,
  },
});
const modal = ref(false);
</script>

<style>
.map {
  height: 500px !important;
}
.map-popup__content {
  position: absolute;
  bottom: 100px; /* Adjust this value to move the text up or down */
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  background-color: white; /* Background color for the text */
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  font-size: 14px;
  justify-content: center;
}
.map-popup {
  position: relative;
  cursor: pointer;
}
</style>
