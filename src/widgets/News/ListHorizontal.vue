<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/free-mode';

import NewsCard from "@/components/News/Card.vue";

const props = defineProps({
  news: Array
})
</script>

<template>
  <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :freeMode="true"
      :modules="[FreeMode]"
      :breakpoints="{
        425: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        500: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 60
        }
      }"
      style="overflow: visible;"
      class="flex lg:gap-6 gap-3 lg:mt-9 lg:mt-6 mt-3 overflow-x-scroll no-scrollbar p-2">
    <swiper-slide v-for="item in news" :key="item.id">
      <news-card class="" :item="item"/>
    </swiper-slide>
  </swiper>
</template>

<style scoped>

</style>