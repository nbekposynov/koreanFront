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
          delay: 4000,
          disableOnInteraction: false,
        }"
        class="max-h-[450px]"
    >
    <!-- Слайд с первым изображением -->
    <swiper-slide>
        <img class="min-h-full min-w-full" src="../assets/img/mock/image3new.png" alt="">
    </swiper-slide>
    <!-- Слайд со вторым изображением -->
    <swiper-slide>
        <img class="min-h-full min-w-full" src="../assets/img/mock/imag4new.png" alt="">
    </swiper-slide>
    <!-- Слайд с третьим изображением -->
    <swiper-slide>
        <img class="min-h-full min-w-full" src="../assets/img/mock/main-slider.png" alt="">
    </swiper-slide>
    <div class="swiper-pagination"></div>
</swiper>

    <div id="about" class="about-us">
      <div class="md:grid grid-cols-[300px_1fr] gap-10 py-5 container">
        <div class="flex h-[250px] w-[250px] mx-auto items-center justify-center overflow-hidden">
          <img class="w-[200%] max-w-none" src="@/assets/img/logo.png" alt="">
        </div>
        <div>
          <p class="text-3xl font-medium">О Нас</p>
          
          <p class="text-lg font-medium mt-2">17 марта 1990 года в городе Алма-Ата состоялся учредительный съезд корейцев Казахстана, на котором была создана Республиканская Ассоциация корейских культурных центров (РАККЦ).Первым президентом Ассоциации корейских культурных центров был избран профессор, академик Хан Гурий Борисович. В это время начали организовываться корейские культурные центры во всех крупных городах Казахстана. Ассоциация объединила ведущих учёных, государственных и общественных деятелей.РАККЦК начала проводить активную работу по изучению и сохранению корейского языка, истории, культуры, обычаев и традиций, развитии литературы и искусства. Руководителями и активистами движения становились люди самого разного статуса: и интеллигенция, и учёные, и промышленники, и крестьяне. Чувствовалось, что казахстанские корейцы пробуждались в едином порыве.</p>
        </div>
      </div>
    </div>

  <div id="associations" class="associations">
    <home-tags-list class="xl:mt-16 lg:mt-8 mt-5 justify-center"/>

    <home-news-list class="xl:my-20 lg:my-10 my-8 px-calc overflow-hidden"/>
</div>
    <div class="ilbo">
      <div class="container py-28 text-secondary text-2xl flex flex-col gap-12">
        <h3 class="text-5xl font-medium">Коре Ильбо</h3>

        <p>«Коре ильбо» является старейшим корейским печатным изданием за пределами Корейского полуострова. Газета основана на Дальнем Востоке СССР в 1923 году. Первоначально называлась «Сенбон» (Авангард). После депортации корейцев с Дальнего Востока издание газеты было возобновлено в Кызыл-Орде с 15 мая 1938 года под названием «Ленин кичи» (Ленинское знамя). </p>

        <a href="https://koreilbo.com/" target="_blank" class="text-[#5E7EEF] underline">Перейти на сайт</a>
      </div>
    </div>


<div v-if="homeAlbum.length" class=" mx-auto max-w-8xl" >

  <div class="bg-custom p-8 w-[100%] rounded-lg mt-32 mx-auto "> <!-- Измененные классы здесь -->
<div class="font-bold text-4xl mb-4 text-center md:text-left md:pl-[4rem]">Галерея</div>
        <div class="flex flex-wrap justify-center gap-8"> <!-- Используйте flex и justify-center -->
            <div v-if="homeAlbum[0].image_path" class="w-[320px] h-[320px] overflow-hidden shadow-custom flex justify-center  rounded-lg"> <!-- Изменено на w-full -->
              <img :src="homeAlbum[0].image_path" alt="Описание изображения 1" class="w-full h-full object-cover">
            </div>        
        
            <div v-if="homeAlbum[1].image_path" class="w-[320px] h-[320px] overflow-hidden shadow-custom flex justify-center hide-on-mobile rounded-lg"> <!-- Изменено на w-full -->
              <img :src="homeAlbum[1].image_path" alt="Описание изображения 2" class="w-full h-full object-cover">
            </div>  
            <div v-if="homeAlbum[2].image_path" class="w-[320px] h-[320px] overflow-hidden shadow-custom flex justify-center hide-on-mobile rounded-lg"> <!-- Изменено на w-full -->
              <img :src="homeAlbum[2].image_path" alt="Описание изображения 3" class="w-full h-full object-cover">
            </div>            
            <div v-if="homeAlbum[3].image_path" class="w-[320px] h-[320px] overflow-hidden shadow-custom flex justify-center hide-on-mobile  rounded-lg"> <!-- Изменено на w-full -->
              <img :src="homeAlbum[3].image_path" alt="Описание изображения 4" class="w-full h-full object-cover">
            </div>
        </div>
         
          <div class="flex justify-center mt-10">
            <router-link to="/gallery" class="bg-primary text-center text-secondary py-3.5 px-9 text-2xl rounded-full w-62">Посмотреть всю галерею</router-link>
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

#about, #associations {
  position: relative;
}

#about::before, #associations::before {
  content: "";
  display: block;
  height: 100px; /* Высота отступа, может быть адаптирована под вашу шапку */
  margin: -100px 0 0; /* Отрицательный маржин для компенсации высоты */
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
  background-size: cover;
}

@media (max-width: 1024px) {
  .hide-on-mobile {
    display: none;
  }
}




</style>