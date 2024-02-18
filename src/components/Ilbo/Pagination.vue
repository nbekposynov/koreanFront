<script setup>
import {computed} from "vue";

const props = defineProps({
  total: Number,
  currentPage: Number,
})
const emit = defineEmits(['page'])

const maxPageDisplay = 5; // Adjust this value as needed

// Computed property to calculate pages to show
const pagesToShow = computed(() => {
  let pages = [];
  const total = props.total;
  const currentPage = props.currentPage;
  const halfMaxDisplay = Math.floor(maxPageDisplay / 2);

  if (total <= maxPageDisplay) {
    // Display all pages
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    // Always show the first page
    pages.push(1);
    let start = Math.max(2, currentPage - halfMaxDisplay);
    let end = Math.min(total - 1, currentPage + halfMaxDisplay);

    // Adjust the start and end if near the beginning or end
    if (currentPage - 1 <= halfMaxDisplay) {
      end = start + halfMaxDisplay * 2;
    }
    if (total - currentPage <= halfMaxDisplay) {
      start = total - halfMaxDisplay * 2;
    }

    // Determine if ellipses are needed
    const hasLeftEllipsis = start > 2;
    const hasRightEllipsis = end < total - 1;

    if (hasLeftEllipsis) {
      pages.push('...');
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    if (hasRightEllipsis) {
      pages.push('...');
    }
    // Always show the last page
    pages.push(total);
  }

  return pages;
});

function handleClick(page) {
  if (page !== '...') {
    emit('page', page)
  }
}
</script>

<template>
<div class="flex">
  <template v-for="(page, index) in pagesToShow">
    <div @click="page !== '...' ? handleClick(page) : null" class="w-[30px] h-[30px] flex items-center justify-center text-xl" :class="{ 'bg-[#3043ca] text-secondary' : index + 1 === currentPage, 'bg-secondary' : index + 1 !== currentPage }" >{{ page }}</div>
  </template>
</div>
</template>

<style scoped>

</style>