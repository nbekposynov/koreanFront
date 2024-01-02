<script setup>
const props = defineProps({
  categories: Array
})
const emit = defineEmits(['category'])

function selectCategory(category) {
  emit('category', category)
}
</script>
<template>
  <div class="overflow-x-scroll no-scrollbar lg:text-2xl sm:text-xl text-base text-semilight xl:mt-8 mt-4">
<!--    <label class="px-2">Все</label>-->
<!--    <label class="px-2">Рус</label>-->
<!--    <label class="px-2">Korean</label>-->

<!--    <label class="px-2">Все</label>-->
<!--    <label class="px-2">Январь</label>-->
<!--    <label class="px-2">Февраль</label>-->
<!--    <label class="px-2">Март</label>-->
<!--    <label class="px-2">Апрель</label>-->
<!--    <label class="px-2">Май</label>-->
<!--    <label class="px-2">Июнь</label>-->
<!--    <label class="px-2">Июль</label>-->
<!--    <label class="px-2">Август</label>-->
<!--    <label class="px-2">Сентябрь</label>-->
<!--    <label class="px-2">Октябрь</label>-->
<!--    <label class="px-2">Ноябрь</label>-->
<!--    <label class="px-2">Декабрь</label>-->

    <label v-for="item in categories" @click="selectCategory(item)" class="px-2 cursor-pointer">{{ item.title }}</label>

  </div>
</template>
<style scoped>
label:not(:first-child) {
  border-left: solid 3px currentColor;
}
@media (max-width: 1024px) {
  label:not(:first-child) {
    border-left: solid 2px currentColor;
  }
}
@media (max-width: 768px) {
  label:not(:first-child) {
    border-left: solid 1px currentColor;
  }
}
</style>