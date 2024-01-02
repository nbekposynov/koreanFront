<script setup>
const props = defineProps({
  active: Boolean
})
</script>

<template>
  <p v-if="active" class="active cursor-pointer relative rounded-full border border-primary md:py-4 md:px-8 py-2 px-3 w-fit lg:text-2xl sm:text-xl text-base sm:whitespace-normal whitespace-nowrap">
    <slot></slot>
    <span class="absolute rounded-full top-0 left-0 h-full w-full "></span>
  </p>
  <p v-else class="cursor-pointer md:py-4 md:px-8 py-2 px-3 w-fit lg:text-2xl sm:text-xl text-base sm:whitespace-normal whitespace-nowrap">
    <slot></slot>
  </p>
</template>
<style scoped>
.active {
  box-shadow: 0px 0px 8px 0px #001D3E;
  background: rgba(0, 47, 91, 0.18);
}
.active span {
  box-shadow: 0px 0px 5px 0px #001D3E inset;
}
</style>