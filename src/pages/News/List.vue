<!-- <script setup>
import FiltersList from "@/widgets/FiltersList.vue";
import Categories from "@/components/Categories.vue";
import NewsListGrid from "@/widgets/News/ListGrid.vue";

import {useHttp} from "@/composables/useHttp.js";
import {onMounted, ref, watch} from "vue";
const { getNews, filterNews } = useHttp()

const news = ref([])
const latest = ref(null)

const getNewsBy = ref({
  filter: '',
  category: '',
})

const notFound = ref(false)
onMounted(async () => {
  news.value = await getNews()
  latest.value = news.value[0]
})

async function handleFilterNews() {
  let filter = [getNewsBy.value.filter, getNewsBy.value.category]
  console.log(filter)
  try {
    const response = await filterNews(filter)
    console.log(response)
    if (response.length) {
      news.value = response
      notFound.value = false
    } else {
      notFound.value = true
    }
  } catch (e) {
    console.log(e)
  }
}
watch(getNewsBy, () =>{
  handleFilterNews()
}, {deep: true})
</script>

<template>
  <section class="news-list-grid md:pt-16 pt-8">
    <div class="flex flex-col md:flex-row items-start justify-between md:gap-10 gap-6 lg:mt-24 md:mt-16 mt-10 container">
      <div class="md:w-[55%] rounded-3xl overflow-hidden flex items-center justify-center">
        <img v-if="latest?.image" class="min-w-full min-h-full object-cover" :src="latest?.image" alt="">
        <img v-else class="min-w-full min-h-full object-cover" src="@/assets/img/no-img.png" alt="">
      </div>
      <div class="md:w-[45%] flex flex-col gap-6">
        <h3 class="lg:text-4xl text-3xl">{{ latest?.title }}</h3>
        <p class="lg:text-2xl text-xl">{{ latest?.excerpt }}</p>
        <button @click="$router.push(`/news/${latest?.id}`)" class="md:text-2xl text-xl rounded-full md:py-4 md:px-9 py-3 px-5 bg-primary w-fit text-secondary">Посмотреть всю новость</button>
      </div>
    </div>
    <div class="lg:mt-20 md:mt-14 mt-10">
      <h3 class="title container">Новости 🔥</h3>
      <div v-if="notFound" class="text-3xl font-bold w-full h-[25vw] flex items-center justify-center">К сожалению ничего не найдено</div>
      <news-list-grid v-else :news="news"/>
    </div>
  </section>
</template>

<style scoped>
.news-list-grid {
  background-image: url('@/assets/img//news-bg1.png');
  background-size: 50%;
  background-position: right 55%;
  background-repeat: no-repeat;
}

@media (max-width: 768px) {
  .news-list-grid {
    background-position: right 35%;
    background-image: none; /* Скрывает фоновое изображение на устройствах с шириной экрана до 768px */
  }
}
</style> -->

<script setup>
import NewsListGrid from "@/widgets/News/ListGrid.vue";
import { useHttp } from "@/composables/useHttp.js";
import { onMounted, ref, watch } from "vue";

// Теперь включаем getNewsPaginate в импортируемые функции
const { getNewsPaginate, filterNews } = useHttp();
const news = ref([]);
const latest = ref(null);
const currentPage = ref(1);
const totalPages = ref(0);
const pages = ref([]);

const getNewsBy = ref({
  filter: '',
  category: '',
});

const notFound = ref(false);

const fetchNews = async (page = 1) => {
  const response = await getNewsPaginate({ page });
  if (response.data && response.data.length) {
    news.value = response.data;
    totalPages.value = response.last_page;
    currentPage.value = response.current_page;
    updatePages();
    notFound.value = false;
    latest.value = news.value[0];
  } else {
    notFound.value = true;
  }
};

onMounted(() => {
  fetchNews();
});

const changePage = (page) => {
  currentPage.value = page;
  fetchNews(page);
};

const updatePages = () => {
  pages.value = Array.from({ length: totalPages.value }, (_, i) => i + 1);
};
</script>

<template>
<section class="news-list-grid md:pt-16 pt-8">
    <div class="flex flex-col md:flex-row items-start justify-between md:gap-10 gap-6 lg:mt-24 md:mt-16 mt-10 container">
        <div class="md:w-[55%] rounded-2xl overflow-hidden flex items-center justify-center">
            <img v-if="latest?.image" class="min-w-full min-h-full object-cover" :src="latest?.image" alt="Latest News Image">
            <img v-else class="min-w-full min-h-full object-cover" src="@/assets/img/no-img.png" alt="No Image Available">
        </div>
        <div class="md:w-[45%] flex flex-col gap-6">
            <h3 class="lg:text-4xl text-3xl">{{ latest?.title }}</h3>
            <p class="lg:text-2xl text-xl">{{ latest?.excerpt }}</p>
            <button @click="$router.push(`/news/${latest?.id}`)" class="md:text-2xl text-xl rounded-full md:py-4 md:px-9 py-3 px-5 bg-primary w-fit text-secondary">Посмотреть всю новость</button>
        </div>
    </div>
    <div class="lg:mt-20 md:mt-14 mt-10">
        <h3 class="title container">Новости</h3>
        <div v-if="notFound" class="text-3xl font-bold w-full h-[25vw] flex items-center justify-center">К сожалению, новости не найдены</div>
        <div v-if="!notFound" class="container">
            <news-list-grid :news="news" />
            <div class="pagination">
                <button v-for="pageNum in pages" :key="pageNum" @click="changePage(pageNum)" :class="{ 'active': pageNum === currentPage }">
                    {{ pageNum }}
                </button>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: flex-start; /* Выравнивает элементы пагинации по левому краю */
  margin-top: 60px;
  padding-left: 60px;
  margin-bottom: 100px;

   /* Добавляет отступ слева */

}
.title {
    margin-bottom: 20px; /* Или любое другое значение, которое вам нужно */
}

.pagination button {
  padding: 5px 10px;
  border: 1px solid #cccccc; /* Добавляем границу для кнопок */
  background-color: #FFFFFF; /* Белый фон для неактивных кнопок */
  transition: background-color 0.3s; /* Плавное изменение фона */
}

/* Стили для активной кнопки */
.pagination button.active {
  font-weight: bold;
  background-color: #3043CA; /* Темно-синий фон для активной кнопки */
  border-color: #3043CA;
  color: #FFFFFF; /* Граница такого же цвета, как фон */
}

/* Стили для кнопок при наведении */
.pagination button:hover {
  background-color: #e9e9e9; /* Светло-серый фон при наведении для неактивных кнопок */
  cursor: pointer;
}

/* Стили для активной кнопки при наведении */
.pagination button.active:hover {
  background-color: #5065E5; /* Более светлый синий для активной кнопки при наведении */
}
</style>