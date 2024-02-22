<script setup>
import {useHttp} from "@/composables/useHttp.js";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

const { getOneKoreIlbo } = useHttp()
const koreData = ref({})
const route = useRoute()

onMounted(async () => {
  koreData.value = await getOneKoreIlbo(route.params.id)
  console.log(koreData.value)
})
</script>

<template>
<section class="container md:pt-24 pt-8 font-sans w-fit ml-0">
  <h1 class="text-5xl font-extralight mb-11">{{ koreData?.name }}</h1>

<article>
  <div class="float-left mr-6 mb-2.5">
    <img :src="koreData?.image" :alt="koreData?.name">
  </div>
  <!-- Замените <p> на <div> и используйте v-html для отображения HTML в description -->
  <div class="text-xl" v-html="koreData?.description">
  </div>
</article>
</section>
</template>

<style scoped>

</style>