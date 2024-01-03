<template>
  <label for="" class="max-w-[200px] lg:max-w-[250px] xl:max-w-[400px] w-full flex gap-3.5 rounded-[35px] bg-secondary lg:px-4 lg:py-3 px-2 py-1.5">
    <icon-search/>
    <input type="text" placeholder="Поиск" class="w-full text-primary" @focus="$router.push('/search')" v-model="search" @input="handleSearch">
  </label>
</template>
<script setup>
import IconSearch from "@/components/icon/search.vue";
import {ref} from "vue";
const search = ref('')

function handleSearch() {
  localStorage.setItem('search', search.value)
  window.dispatchEvent(new CustomEvent('search-localstorage-changed', {
    detail: {
      storage: localStorage.getItem('search')
    }
  }));
}
</script>