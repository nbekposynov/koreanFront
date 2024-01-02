<script setup>
import FiltersList from "@/widgets/FiltersList.vue";
import NewsListHorizontal from "@/widgets/News/ListHorizontal.vue";
import Categories from "@/components/Categories.vue";
import {useHttp} from "@/composables/useHttp.js";
import {onMounted, ref} from "vue";
const { getNews } = useHttp()

const news = ref([])
onMounted(async () => {
  news.value = await getNews()
})
</script>

<template>
  <div>
    <div>
      <h3 class="container lg:text-4xl text-2xl font-bold flex gap-5">
        <label class="text-primary">Лучшие</label>
        <label class="text-light">Новости</label>
      </h3>
      <filters-list class="mt-8 pl-auto px-calc"/>
      <categories class="px-calc"/>
    </div>
    <news-list-horizontal class="px-calc" :news="news"/>
  </div>
</template>