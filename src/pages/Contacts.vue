<script setup>
import FiltersList from "@/widgets/FiltersList.vue";
import IconLocation from "@/components/icon/location.vue";
import IconPhone from "@/components/icon/phone.vue";
import IconEmail from "@/components/icon/email.vue";
import {onMounted, ref, watch} from "vue";
import { useHttp } from "@/composables/useHttp.js";
const { getCities, getBranch } = useHttp()

const cities = ref([])
const selectedCityId = ref('')
const contacts = ref([])

onMounted(async () => {
  cities.value = await getCities()
  selectedCityId.value = cities.value[0].id
})

watch(selectedCityId, async (val) => {
  contacts.value = await getBranch(val)
})
</script>

<template>
  <section class="lg:pt-24 md:pt-16 pt-8 flex flex-col lg:gap-20 md:gap-14 gap-8">
   <h1 class="title container">Контакты и Региональные подразделения АКК</h1>
    <filters-list v-if="cities.length" :filters="cities" :field="'name'" @filter="selectedCityId = $event.id" class="px-calc"/>
    <div class="container grid md:grid-cols-2 gap-9 lg:text-2xl md:text-xl text-base">
      <div v-for="item in contacts" class="flex flex-col gap-3.5">
        <p class="font-bold">{{ item.name }}</p>
        <div class="flex gap-3.5">
          <icon-location/>
          <p>{{ item.address }}</p>
        </div>
        <a :href="`tel:+${phone.replace(/\D/g, '')}`" v-for="phone in item.phone_number.match(/\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/g)" class="flex gap-3.5">
          <icon-phone class="pointer-events-none"/>
          <p class="pointer-events-none">{{ phone }}</p>
        </a>
        <a :href="`mailto:${item.email}`" class="flex gap-3.5">
          <icon-email class="pointer-events-none"/>
          <p class="pointer-events-none">{{ item.email }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>