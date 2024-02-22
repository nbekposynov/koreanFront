<script setup>
import FiltersList from "@/widgets/FiltersList.vue";
import IconLocation from "@/components/icon/location.vue";
import IconPhone from "@/components/icon/phone.vue";
import IconEmail from "@/components/icon/email.vue";
import Map from "@/components/Map.vue";
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
    <div v-for="item in contacts" :key="item.id" class="container flex flex-col items-center gap-9">
      <Map :coords="[item.latitude, item.longitude]" :address="item.address" :name="item.name" :phone="item.phone_number" class="w-full"/>
      <div class="flex flex-col items-center gap-3.5 lg:text-2xl md:text-xl text-base">
        <p class="font-bold">{{ item.name }}</p>
        <div class="flex gap-3.5 items-center">
          <icon-location/>
          <p>{{ item.address }}</p>
        </div>
        <div v-for="phone in item.phone_number.match(/\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/g)" :key="phone" class="flex gap-3.5 items-center">
          <icon-phone class="pointer-events-none"/>
          <p class="pointer-events-none">{{ phone }}</p>
        </div>
        <a :href="`mailto:${item.email}`" class="flex gap-3.5 items-center">
          <icon-email class="pointer-events-none"/>
          <p class="pointer-events-none">{{ item.email }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
