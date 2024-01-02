<script setup>
import NewsCard from "@/components/News/Card.vue";
const props = defineProps({
  news: Array
})
</script>

<template>
  <div class="grid md:grid-cols-2 lg:gap-6 gap-3 lg:mt-9 lg:mt-6 mt-3 p-2">
    <news-card v-for="item in news" :item="item"/>
  </div>
</template>

<style scoped>

</style>