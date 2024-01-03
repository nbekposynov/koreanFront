<script setup>
import NewsListGrid from "@/widgets/News/ListGrid.vue";
import {onMounted, ref, watch} from "vue";
import {useHttp} from "@/composables/useHttp.js";
const { searchNews } = useHttp()
const search = ref('')
const news = ref([])
watch(search, () => {
  handleSearch()
}, {immediate: true})

onMounted(() => {
  window.addEventListener('search-localstorage-changed', (event) => {
    search.value = event.detail.storage;
  });
})
async function handleSearch() {
  news.value = await searchNews(search.value)
}
</script>

<template>
  <section class="container">
    <news-list-grid :news="news"/>
  </section>
</template>

<style scoped>

</style>