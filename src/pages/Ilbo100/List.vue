<script setup>
import {useHttp} from "@/composables/useHttp.js";
import {onMounted, ref} from "vue";
import Pagination from "@/components/Ilbo/Pagination.vue";

const { getKoreIlbo } = useHttp()
const koreIlbo = ref([])
const koreIlbofirst = ref(null)

onMounted(async () => {
  await getData()
})

async function getData(page = 1) {
  try {
    koreIlbo.value = await getKoreIlbo(page)
    koreIlbofirst.value = koreIlbo.value.data.shift()
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
<section class="container md:pt-24 pt-8 font-sans w-fit ml-0">
  <h1 class="text-5xl font-extralight">100 лет Коре Ильбо</h1>

  <div class="mt-[45px]">
    <div class="flex gap-6 justify-between lg:flex-row flex-col">
      <div class="w-[220px] h-[300px] overflow-hidden flex justify-center items-center">
        <img :src="koreIlbofirst?.image" :alt="koreIlbofirst?.name">
      </div>
      <router-link :to="`/ilbo/${koreIlbofirst?.id}`">
        <h3 class="text-3xl mb-2.5">{{ koreIlbofirst?.name }}</h3>
        <p class="text-xl">{{ koreIlbofirst?.desc }}</p>
      </router-link>
    </div>
  </div>
  <div class="grid justify-center lg:grid-cols-3 sm:grid-cols-2 mt-12 gap-6 gap-y-10 mb-20">
    <router-link :to="`/ilbo/${item.id}`" v-for="item in koreIlbo.data" class="w-fit">
      <div class="w-[280px] h-[205px] flex items-center justify-center overflow-hidden">
        <img :src="item?.image" :alt="item?.name">
      </div>
      <h3 class="text-base font-bold mt-2.5">{{ item?.name }}</h3>
    </router-link>
  </div>
  <pagination class="mt-5" :total="koreIlbo.last_page" :current-page="koreIlbo.current_page" @page="getData($event)"/>
</section>
</template>

<style scoped>

</style>