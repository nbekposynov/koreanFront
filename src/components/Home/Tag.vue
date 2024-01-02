<script setup>
const props = defineProps({
  text: String
})
</script>
<template>
  <p class="bg-primary xl:py-4 xl:px-8 py-2.5 px-4 text-secondary xl:text-xl text-base w-fit xl:rounded-[18px] rounded-xl sm:whitespace-normal whitespace-nowrap">
    {{ text }}</p>
</template>