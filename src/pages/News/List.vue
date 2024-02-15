<script setup>
import FiltersList from "@/widgets/FiltersList.vue";
import Categories from "@/components/Categories.vue";
import NewsListGrid from "@/widgets/News/ListGrid.vue";

import {useHttp} from "@/composables/useHttp.js";
import {onMounted, ref, watch} from "vue";
const { getNews, filterNews } = useHttp()

const news = ref([])
const latest = ref(null)
const filters = ref([
  {
    title: 'Любая дата',
    value: ''
  },
  {
    title: 'На выходных',
    value: 'weekends=true'
  },
  {
    title: 'На этой неделе',
    value: 'this_week=true'
  },
  {
    title: 'В этом месяце',
    value: 'this_month=true'
  }
])
const categories = ref([
  {
    title: 'Все',
    value: ''
  },
  {
    title: 'Русс',
    value: 'korean=0'
  },
  {
    title: 'Korean',
    value: 'korean=1'
  },
])
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
  <section>
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
      <h3 class="title container">Новости</h3>
<!--      <filters-list :filters="filters" @filter="getNewsBy.filter = $event.value" class="md:mt-10 mt-5 px-calc"/>-->
<!--      <categories :categories="categories" @category="getNewsBy.category = $event.value" class="px-calc"/>-->
      <div v-if="notFound" class="text-3xl font-bold w-full h-[25vw] flex items-center justify-center">К сожалению ничего не найдено</div>
      <news-list-grid v-else :news="news"/>
    </div>
  </section>
</template>

<style scoped>

</style>