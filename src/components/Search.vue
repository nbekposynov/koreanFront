<template>
  <div>
    <label v-show="showInput" for="" class="absolute z-50 top-[110%] left-1/3 max-w-[200px] lg:max-w-[250px] xl:max-w-[400px] w-full flex gap-3.5 rounded-[35px] bg-secondary lg:px-4 lg:py-3 px-2 py-1.5">
      <input type="text" ref="input" placeholder="Поиск" class="w-full text-primary" @focus="$router.push('/search')" v-model="search" @input="handleSearch">
    </label>
    <icon-search @click="setFocus"/>
    <div v-if="showInput" class="z-10 fixed top-0 left-0 w-[100vw] h-[100vh]" @click="showInput = false"></div>
  </div>
</template>
<script setup>
import IconSearch from "@/components/icon/search.vue";
import {ref} from "vue";
const search = ref('')
const showInput = ref(false)
const input = ref(null)

function handleSearch() {
  localStorage.setItem('search', search.value)
  window.dispatchEvent(new CustomEvent('search-localstorage-changed', {
    detail: {
      storage: localStorage.getItem('search')
    }
  }));
}

function setFocus() {
  input.value.focus()
  showInput.value = true;
}
</script>