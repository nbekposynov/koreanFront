<script setup>
import FiltersList from "@/widgets/FiltersList.vue";
import IconArrowRight from "@/components/icon/arrow-right.vue";
import {useHttp} from "@/composables/useHttp.js";
import {onMounted, ref, watch} from "vue";
import {useRouter} from "vue-router";

const { getAlbum } = useHttp();
const router = useRouter();

const albums = ref([]);
const years = ref([]);
// const years = ref([
//   {title: "2023", value: "2023"},
//   {title: "2022", value: "2022"},
//   {title: "2021", value: "2021"},
//   {title: "2020", value: "2020"},
//   {title: "2019", value: "2019"},
//   {title: "2018", value: "2018"},
//   {title: "2017", value: "2017"}
// ]);
const selectedYear = ref('2023');
const filteredAlbums = ref([]);
onMounted(async () => {
  albums.value = await getAlbum();
  filteredAlbums.value = albums.value;
  years.value = [...new Set(albums.value.map(item => {
    return {
      title: item.publication_year,
      value: item.publication_year
    }
  }))];
});

watch(selectedYear, (value) => {
  filteredAlbums.value = albums.value.filter(item => item.publication_year === value)
})

function handleGoToGallery(id) {
  localStorage.setItem('album', JSON.stringify(filteredAlbums.value.find(item => item.id === id)))
  router.push(`/gallery/${id}`)
}
</script>

<template>
  <section class="md:pt-24 pt-8">
    <h1 class="title container bg">Галерея</h1>

    <filters-list class="lg:mt-10 md:mt-8 mt-6 px-calc" :filters="years" :key="years" @filter="selectedYear = $event.value"/>

    <div :key="selectedYear" class="container grid md:grid-cols-3 xs:grid-cols-2 md:gap-6 gap-3 lg:mt-10 md:mt-8 mt-6">
      <div @click="handleGoToGallery(gallery.id)" v-for="gallery in filteredAlbums" class="px-3 py-4 rounded-xl border border-light">
        <div class="grid grid-cols-4 grid-rows-4 gap-3">
          <div class="rounded-[12px] overflow-hidden w-full h-full" v-for="(item, index) in '1234567890123456'">
            <img v-if="gallery.photos[index]?.image_path" :src="gallery.photos[index]?.image_path" alt="">
            <div v-else class="bg-light w-full h-full"></div>
          </div>
        </div>
        <div class="grid grid-cols-[1fr_42px] lg:mt-14 md:mt-8 mt-4">
          <p class="md:text-xl text-base text-primary">{{ gallery.title }}</p>
          <icon-arrow-right class="w-[42px] h-[42px] self-end"/>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>