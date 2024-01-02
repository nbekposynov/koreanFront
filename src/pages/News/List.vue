<script setup>
import FiltersList from "@/widgets/FiltersList.vue";
import Categories from "@/components/Categories.vue";
import NewsListGrid from "@/widgets/News/ListGrid.vue";

import {useHttp} from "@/composables/useHttp.js";
import {onMounted, ref} from "vue";
const { getNews } = useHttp()

const news = ref([])
const latest = ref(null)

onMounted(async () => {
  news.value = await getNews()
  latest.value = news.value[0]
})
</script>

<template>
  <section>
    <div class="flex flex-col md:flex-row items-start justify-between md:gap-10 gap-6 lg:mt-24 md:mt-16 mt-10 container">
      <div class="md:w-[55%] rounded-3xl overflow-hidden flex items-center justify-center">
        <img v-if="latest?.image" class="min-w-full min-h-full object-cover" :src="latest?.image" alt="">
        <img v-else class="min-w-full min-h-full object-cover" src="@/assets/img/mock/new.png" alt="">
      </div>
      <div class="md:w-[45%] flex flex-col gap-6">
        <h3 class="lg:text-4xl text-3xl">{{ latest?.title }}</h3>
        <p class="lg:text-2xl text-xl">{{ latest?.excerpt }}</p>
        <button @click="$router.push(`/news/${latest?.id}`)" class="md:text-2xl text-xl rounded-full md:py-4 md:px-9 py-3 px-5 bg-primary w-fit text-secondary">Посмотреть всю новость</button>
      </div>
    </div>
    <div class="lg:mt-20 md:mt-14 mt-10">
      <h3 class="title">Новости</h3>
<!--      <filters-list class="md:mt-10 mt-5 px-calc"/>-->
<!--      <categories/>-->
      <news-list-grid :news="news"/>
    </div>
  </section>
</template>

<style scoped>

</style>