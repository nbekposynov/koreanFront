<script setup>
import IconBack from "@/components/icon/back.vue";
import {useHttp} from "@/composables/useHttp.js";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
const { getNewsById } = useHttp()
const route = useRoute()

const newsItem = ref(null)

onMounted(async () => {
  newsItem.value = await getNewsById(route.params.id)
})
</script>

<template>
  <section v-if="newsItem">
    <div class="container flex gap-4 lg:mt-24 md:mt-16 mt-8 items-center">
      <div @click="$router.go(-1)">
        <icon-back class="lg:w-[42px] md:w-[30px] w-[24px] lg:h-[42px] md:h-[30px] h-[24px]"/>
      </div>
      <p class="lg:text-3xl md:text-2xl text-xl">{{ newsItem.title }}</p>
    </div>
    <div class="flex flex-col md:flex-row items-center justify-between md:gap-10 gap-6 lg:mt-24 md:mt-16 mt-10 container">
      <div class="md:w-[55%] rounded-3xl overflow-hidden flex items-center justify-center">
        <img v-if="newsItem.image" class="min-w-full min-h-full object-cover" :src="newsItem.image" alt="">
        <img v-else class="min-w-full min-h-full object-cover" src="@/assets/img/mock/new.png" alt="">
      </div>
      <div class="md:w-[45%] flex flex-col gap-6 mb-auto">
        <h3 class="lg:text-4xl text-3xl">{{ newsItem.meta_description }}</h3>
        <p class="lg:text-2xl text-xl">{{ newsItem.excerpt }}</p>
        <!-- <div class="rounded-full px-9 py-4 border border-light text-2xl">
          <input type="email" placeholder="E-mail">
        </div>
       <button class="md:text-2xl text-xl rounded-full md:py-4 md:px-9 py-3 px-5 bg-primary text-secondary">Подписаться на рассылку</button> -->
      </div>
    </div>
    <div v-html="newsItem.body" class="container lg:mt-20 md:mt-14 mt-10 flex flex-col md:gap-10 gap-5 lg:text-2xl md:text-xl text-base">
    </div>
  </section>
</template>

<style scoped>

</style>