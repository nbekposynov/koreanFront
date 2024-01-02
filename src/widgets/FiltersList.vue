<script setup>
import FilterRound from "@/components/FilterRound.vue";
import {onMounted, ref} from "vue";
const props = defineProps({
  filters: Array
})
const emit = defineEmits(['filter'])

const selectedFilter = ref(null)
onMounted(() => {
  selectedFilter.value = props.filters[0]
})

const selectFilter = (filter) => {
  selectedFilter.value = filter
  emit('filter', filter)
}
</script>

<template>
    <div class="flex lg:gap-6 gap-3 p-2 overflow-x-scroll no-scrollbar">
<!--      <filter-round :active="true">Любая дата</filter-round>-->
<!--      <filter-round>На выходных</filter-round>-->
<!--      <filter-round>На этой неделе</filter-round>-->
<!--      <filter-round>В этом месяце</filter-round>-->
      <template v-for="item in filters">
        <filter-round @click="selectFilter(item)" :active="selectedFilter?.title === item?.title">{{ item?.title }}</filter-round>
      </template>
    </div>
</template>