<script setup>
import HomeTagsList from '@/widgets/Home/TagsList.vue';
import HomeNewsList from '@/widgets/Home/NewsList.vue';
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination, Autoplay} from 'swiper/modules';
import {onMounted, ref } from "vue";
import {useHttp} from "@/composables/useHttp.js";
const { getAlbum, getHomeAlbum } = useHttp()

const pagination = {
  el: '.swiper-pagination',
  clickable: true
};
const modules = [Pagination, Autoplay];

const album = ref([])
const homeAlbum = ref([])

onMounted(async () => {
  album.value = await getAlbum()
  const res = await getHomeAlbum()
  homeAlbum.value = res.album.photos
  console.log(res)
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

    <div id="about" class="about-us">
      <div class="md:grid grid-cols-[300px_1fr] gap-10 py-5 container">
        <div class="flex h-[250px] w-[250px] mx-auto items-center justify-center overflow-hidden">
          <img class="w-[200%] max-w-none" src="@/assets/img/logo.png" alt="">
        </div>
        <div>
          <p class="font-[Comfortaa] text-4xl font-medium">О Нас</p>
          <p class="font-[Comfortaa] text-lg font-medium mt-5">17 марта 1990 года в городе Алма-Ата состоялся учредительный съезд корейцев Казахстана, на котором была создана Республиканская Ассоциация корейских культурных центров (РАККЦ).Первым президентом Ассоциации корейских культурных центров был избран профессор, академик Хан Гурий Борисович. В это время начали организовываться корейские культурные центры во всех крупных городах Казахстана. Ассоциация объединила ведущих учёных, государственных и общественных деятелей.РАККЦК начала проводить активную работу по изучению и сохранению корейского языка, истории, культуры, обычаев и традиций, развитии литературы и искусства. Руководителями и активистами движения становились люди самого разного статуса: и интеллигенция, и учёные, и промышленники, и крестьяне. Чувствовалось, что казахстанские корейцы пробуждались в едином порыве.</p>
        </div>
      </div>
    </div>

    <home-tags-list class="xl:mt-16 lg:mt-8 mt-5 justify-center"/>

    <home-news-list class="xl:my-20 lg:my-10 my-8 px-calc overflow-hidden"/>

    <div class="ilbo">
      <div class="container py-28 text-secondary text-2xl flex flex-col gap-12">
        <h3 class="text-5xl font-medium">Коре Ильбо</h3>

        <p>«Коре ильбо» является старейшим корейским печатным изданием за пределами Корейского полуострова. Газета основана на Дальнем Востоке СССР в 1923 году. Первоначально называлась «Сенбон» (Авангард). После депортации корейцев с Дальнего Востока издание газеты было возобновлено в Кызыл-Орде с 15 мая 1938 года под названием «Ленин кичи» (Ленинское знамя). </p>

        <a href="https://koreilbo.com/" target="_blank" class="text-[#5E7EEF] underline">Перейти на сайт</a>
      </div>
    </div>

    <div v-if="homeAlbum.length" class="container lg:grid grid-cols-[50%_40%] flex flex-col max-lg:container md:gap-14 gap-10 overflow-hidden px-10 py-9">
      <div>
        <div class="flex md:gap-16 gap-5 w-fit">
          <div v-if="homeAlbum[0].image_path" class="rounded-full w-[160px] overflow-hidden shadow-custom flex justify-center">
            <img class="md:h-[16vw] h-[40vw] max-w-none" :src="homeAlbum[0].image_path" alt="">
          </div>
          <div v-if="homeAlbum[1].image_path" class="rounded-full w-fit overflow-hidden shadow-custom flex justify-center">
            <img class="md:h-[16vw] h-[40vw] max-w-none" :src="homeAlbum[1].image_path" alt="">
          </div>
        </div>
        <div v-if="homeAlbum[2].image_path" class="lg:mt-24 md:mt-16 mt-12 sm:rounded-[90px] rounded-[50px] lg:w-[40vw]">
          <div class="sm:rounded-[50px] rounded-[24px] overflow-hidden">
            <img :src="homeAlbum[2].image_path" alt="">
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
          <router-link to="/gallery" class="bg-primary text-center text-secondary py-3.5 px-9 text-2xl rounded-full">Посмотреть всю галлерею</router-link>
        </div>

        <div class="flex md:gap-16 gap-5 w-fit lg:mt-40 mg:mt-20 mt-10">
          <div v-if="homeAlbum[3].image_path" class="rounded-full w-fit overflow-hidden shadow-custom flex justify-center">
            <img class="md:h-[16vw] h-[40vw] max-w-none" :src="homeAlbum[3].image_path" alt="">
          </div>
          <div v-if="homeAlbum[4].image_path" class="rounded-full overflow-hidden shadow-custom w-[160px] flex justify-center">
            <img class="md:h-[16vw] h-[40vw] max-w-none" :src="homeAlbum[4].image_path" alt="">
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
.about-us {
  background-image: url("@/assets/img/about-bg.png");
}
.ilbo {
  background: linear-gradient(rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.54)), url("@/assets/img/kore-ilbo-bg.png");
}
</style>