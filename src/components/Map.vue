<template>
  <YandexMap :settings="settings" class="map">
    <YandexMapDefaultSchemeLayer />
    <YandexMapDefaultFeaturesLayer />
    <YandexMapControls :settings="{ position: 'right' }" />
    <!-- Итерация по всем контактам для создания маркеров -->
    <YandexMapMarker
      v-for="(contact, index) in contacts"
      :key="contact.id"
      :settings="{ coordinates: [contact.longitude, contact.latitude] }"
      @click="toggleModal(index)"
    >
      <div class="map-popup">
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
        <div v-if="activeMarkerId === index" class="map-popup__content">
          <p>{{ contact.name }}</p>
          <p>{{ contact.address }}</p>
          <p>{{ contact.phone_number }}</p>
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
} from "vue-yandex-maps";
import { watchEffect, ref, defineProps } from "vue";

const props = defineProps({
  contacts: Array,
});

const settings = ref({
  location: {
    center: props.contacts.length
      ? [props.contacts[0].longitude, props.contacts[0].latitude]
      : [55.751244, 37.618423], // Москва, если контакты пусты
    zoom: 12,
  },
});

// Наблюдение за изменениями в contacts и обновление настроек карты
watchEffect(() => {
  if (props.contacts.length) {
    settings.value.location.center = [
      props.contacts[0].longitude,
      props.contacts[0].latitude,
    ];
  }
});
const activeMarkerId = ref(null);

const toggleModal = (index) => {
  if (activeMarkerId.value === index) {
    activeMarkerId.value = null;
  } else {
    activeMarkerId.value = index;
  }
};
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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-size: 14px;
  justify-content: center;
}
.map-popup {
  position: relative;
  cursor: pointer;
}
</style>
