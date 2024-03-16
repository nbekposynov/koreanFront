<script setup>
import NewsCard from "@/components/News/CardNew.vue";
const props = defineProps({
  news: Array
})
</script>

<template>
  <div class="container flex flex-col gap-6">
    <NewsCard v-for="item in news" :key="item.id" :item="item" />
  </div>
</template>

<style scoped>

</style>