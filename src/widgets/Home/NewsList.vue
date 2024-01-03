<script setup>
import FiltersList from "@/widgets/FiltersList.vue";
import NewsListHorizontal from "@/widgets/News/ListHorizontal.vue";
import Categories from "@/components/Categories.vue";
import {useHttp} from "@/composables/useHttp.js";
import {onMounted, ref, watch} from "vue";
const { getNews, filterNews } = useHttp()

const news = ref([])
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
  <div>
    <div>
      <h3 class="container lg:text-4xl text-2xl font-bold flex gap-5">
        <label class="text-primary">Лучшие</label>
        <label class="text-light">Новости</label>
      </h3>
      <filters-list :filters="filters" @filter="getNewsBy.filter = $event.value" class="mt-8 pl-auto px-calc"/>
      <categories :categories="categories" @category="getNewsBy.category = $event.value" class="px-calc"/>
    </div>
    <div v-if="notFound" class="text-3xl font-bold w-full h-[25vw] flex items-center justify-center">К сожалению ничего не найдено</div>
    <news-list-horizontal v-else class="px-calc" :news="news"/>
  </div>
</template>