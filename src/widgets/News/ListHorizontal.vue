<script setup>
import NewsCard from "@/components/News/Card.vue";

const props = defineProps({
  news: Array
})
</script>

<template>
  <div class="flex lg:gap-6 gap-3 lg:mt-9 lg:mt-6 mt-3 overflow-x-scroll no-scrollbar p-2">
    <news-card class="max-h-[34.010vw] max-w-[36.889vw]" v-for="item in news" :item="item"/>
  </div>
</template>

<style scoped>

</style>