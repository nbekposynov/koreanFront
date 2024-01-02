<script setup>
import HomeTagsList from '@/widgets/Home/TagsList.vue';
import HomeNewsList from '@/widgets/Home/NewsList.vue';
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination, Autoplay} from 'swiper/modules';
import {onMounted, ref } from "vue";
import {useHttp} from "@/composables/useHttp.js";
const { getAlbum } = useHttp()

const pagination = {
  el: '.swiper-pagination',
  clickable: true
};
const modules = [Pagination, Autoplay];

const album = ref([])

onMounted(async () => {
  album.value = await getAlbum()
})
</script>

<template>
  <section class="lg:mb-40 md:mb-24 mb-12">
    <swiper v-if="album[0]"
        :pagination="pagination" :modules="modules" :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        class="max-h-[610px]"
    >
      <swiper-slide v-for="img in album[0]?.photos">
        <img class="min-h-full min-w-full" :src="img?.image_path" alt="">
      </swiper-slide>
      <div class="swiper-pagination"></div>
    </swiper>

    <home-tags-list class="xl:mt-16 lg:mt-8 mt-5"/>

    <home-news-list class="xl:my-20 lg:my-10 my-8"/>

    <div class="lg:grid grid-cols-[60%_30%] flex flex-col max-lg:container md:gap-14 gap-10 overflow-hidden">
      <div>
        <div class="grid grid-cols-2 md:gap-16 gap-5 w-fit lg:ml-[-4vw]">
          <div class="rounded-full w-fit overflow-hidden shadow-custom">
            <img class="lg:h-[16vw]" src="@/assets/img/mock/home-gallery.png" alt="">
          </div>
          <div class="rounded-full w-fit overflow-hidden shadow-custom">
            <img class="lg:h-[16vw]" src="@/assets/img/mock/home-gallery.png" alt="">
          </div>
        </div>
        <div class="lg:mt-24 md:mt-16 mt-12 sm:rounded-[90px] rounded-[50px] lg:w-[50.066vw] lg:ml-calc sm:p-9 p-6 shadow-customInner">
          <div class="sm:rounded-[50px] rounded-[24px] overflow-hidden">
            <img src="@/assets/img/mock/home-gallery2.png" alt="">
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-col gap-6">
          <p class="text-4xl">Lorem ipsum</p>
          <p class="text-2xl">Lorem ipsum dolor sit amet consectetur. In senectus non eget nunc suscipit morbi turpis. Ultricies placerat
            sit arcu venenatis viverra enim sed cursus nam. Et mauris amet in id. Dolor adipiscing quis non proin in.
            Adipiscing in elementum morbi sed nibh felis. Orci mi duis ut proin enim proin. Consequat maecenas quis sit
            convallis aenean mattis.</p>
          <button class="bg-primary text-secondary py-3.5 px-9 text-2xl rounded-full">Посмотреть всю галлерею</button>
        </div>

        <div class="grid grid-cols-2 md:gap-16 gap-5 w-fit lg:mt-40 mg:mt-20 mt-10 mr-[-24vw]">
          <div class="rounded-full w-fit overflow-hidden shadow-custom">
            <img class="lg:h-[16vw]" src="@/assets/img/mock/home-gallery.png" alt="">
          </div>
          <div class="rounded-full w-fit overflow-hidden shadow-custom">
            <img class="lg:h-[16vw]" src="@/assets/img/mock/home-gallery.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.swiper-slide {
  position: relative;
  min-height: 300px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.swiper-slide img {
  min-width: 100%;
  min-height: 300px;
  object-fit: cover;
}
</style>