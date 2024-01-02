<script setup>
import {ref} from "vue";

const tags = ref(['Структура АКК', 'Президиум АКК', 'Попечительный совет',
'План развития АКК до 2027 года', 'Проект концепции развития ОЮЛ «Ассоциация корейцев Казахстана» до 2030 года', 'История АКК'])
import HomeTag from "@/components/Home/Tag.vue";
</script>

<template>
  <div class="flex overflow-x-scroll no-scrollbar flex-nowrap sm:flex-wrap xl:gap-6 lg:gap-3 gap-2 container">
    <home-tag v-for="item in tags" :text="item"/>
  </div>
</template>

<style scoped>

</style>