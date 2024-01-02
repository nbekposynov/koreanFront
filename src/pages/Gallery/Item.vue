<script setup>
import IconPlay from '@/components/icon/play.vue';
import IconPause from '@/components/icon/pause.vue';
import IconFullscreen from '@/components/icon/fullscreen.vue';
import IconClose from '@/components/icon/close.vue';

import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination, Autoplay} from 'swiper/modules';
import {onMounted, ref} from "vue";

const pagination = {
  el: '.swiper-pagination-gallery',
  clickable: true
};
const modules = [Pagination, Autoplay];
const swiperGallery = ref(null)
const fullscreen = ref(null)
const isFullscreen = ref(false)
const delay = ref(3000)

const album = JSON.parse(localStorage.getItem('album'))
function openFullscreen() {
  if (fullscreen.value.requestFullscreen) {
    fullscreen.value.requestFullscreen();
  } else if (fullscreen.value.webkitRequestFullscreen) { /* Safari */
    fullscreen.value.webkitRequestFullscreen();
  } else if (fullscreen.value.msRequestFullscreen) { /* IE11 */
    fullscreen.value.msRequestFullscreen();
  }
  isFullscreen.value = true
}
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
  isFullscreen.value = false
}

function handleFullscreen() {
  isFullscreen.value ? closeFullscreen() : openFullscreen()
}
</script>

<template>
  <section style="background: rgba(0, 0, 0, 0.74);" ref="fullscreen" class="h-[100vh] pt-10 pb-20 overflow-hidden">
  <div class="container">
    <div :key="delay" class="flex items-center gap-7 justify-end text-secondary">
      <icon-play v-if="delay === 3000000" @click="delay = 3000"/>
      <icon-pause v-else @click="delay = 3000000"/>
      <icon-fullscreen @click="handleFullscreen"/>
      <icon-close @click="$router.go(-1)"/>
    </div>
    <swiper
        ref="swiperGallery"
        :key="delay"
        :pagination="pagination"
        :slides-per-view="1"
        :centered-slides="true"
        :autoplay="{
                  delay: delay,
                  disableOnInteraction: false,
                }"
        :modules="modules"
        class="mt-10 md:max-w-[57.474vw] max-w-full"
        style="overflow: visible"
    >
      <swiper-slide v-for="item in album.photos" class="rounded-xl self-center w-fit overflow-hidden ">
        <div class="transition-all duration-300 ease-in relative my-auto md:max-w-[57.474vw] max-w-full md:max-h-[45.437vw] max-h-full flex justify-center items-center">
          <img v-if="item.image_path" class="min-h-full min-w-full" :src="item.image_path" alt="">
          <img v-else class="min-h-full min-w-full" src="@/assets/img/mock/gallery-slide.png" alt="">
        </div>
      </swiper-slide>
    </swiper>

    <div class="swiper-pagination-gallery mt-12 text-center"></div>
  </div>
</section>
</template>

<style scoped>
.swiper-slide-prev > div, .swiper-slide-next > div {
  //max-height: 35.979vw !important;
  transform: scale(0.85) !important;
}
</style>