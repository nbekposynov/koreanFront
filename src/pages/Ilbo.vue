<script setup>
import FiltersList from "@/widgets/FiltersList.vue";
import Categories from "@/components/Categories.vue";
import IconDownload from "@/components/icon/download.vue";
import {useHttp} from "@/composables/useHttp.js";
import {onMounted, ref} from "vue";

const {getMagazines, downloadMagazine} = useHttp()
const magazines = ref([])
const years = ref([
  {title: "2023", value: "2023"},
  {title: "2022", value: "2022"},
  {title: "2021", value: "2021"},
  {title: "2020", value: "2020"},
  {title: "2019", value: "2019"},
  {title: "2018", value: "2018"},
  {title: "2017", value: "2017"}
]);
const months = ref([
  {title: "Все", value: 0},
  {title: "Январь", value: 1},
  {title: "Февраль", value: 2},
  {title: "Март", value: 3},
  {title: "Апрель", value: 4},
  {title: "Май", value: 5},
  {title: "Июнь", value: 6},
  {title: "Июль", value: 7},
  {title: "Август", value: 8},
  {title: "Сентябрь", value: 9},
  {title: "Октябрь", value: 10},
  {title: "Ноябрь", value: 11},
  {title: "Декабрь", value: 12}
])
const selectedYear = ref('2023')
const blobUrl = ref('')
//тег а для скачивания журнала
const downloadLink = ref(null)

async function handleGetMagazines(year, month = '') {
  console.log(year, month)
  if (year) {
    year ? selectedYear.value = year : selectedYear.value = '2023'
    magazines.value = await getMagazines(selectedYear.value)
  } else if (month) {
    magazines.value = await getMagazines(selectedYear.value, month)
  } else {
    magazines.value = await getMagazines(selectedYear.value)
  }
}
//функция для скачивания журнала
async function handleDownloadMagazine(id) {
  const res = await downloadMagazine(id)
  blobUrl.value = URL.createObjectURL(new Blob([res]))
  downloadLink.value.download = 'коре ильбо.pdf'
  //нажатие на ссылку
  downloadLink.value.click()
}
onMounted(async () => {
  magazines.value = await getMagazines(selectedYear.value)
})
</script>

<template>
  <section class="lg:pt-24 md:pt-16 pt-8 flex flex-col lg:gap-10 md:gap-8 gap-6">
    <h1 class="title container">Коре Ильбо</h1>
    <filters-list v-if="years.length" :filters="years" class="px-calc" @filter="handleGetMagazines($event.value)"/>
    <categories :categories="months" @category="handleGetMagazines('', $event.value)" class="px-calc" style="margin: 0"/>

    <div class="container grid md:grid-cols-3 xs:grid-cols-2 gap-6">
      <div v-for="item in magazines" class="rounded-xl relative overflow-hidden flex justify-center items-center hover:active">
        <img v-if="item.cover" :src="item.cover" alt="" class="min-h-full min-w-full">
        <img v-else src="@/assets/img/mock/ilbo-book.png" alt="" class="min-h-full min-w-full">
        <div class="bg opacity-0 hover:opacity-100 transition-all duration-150 ease-in flex justify-between absolute top-0 left-0 w-full h-full items-end p-6 text-2xl text-secondary">
          <p>(№22) 2 июня 2023 года</p>
          <icon-download @click="handleDownloadMagazine(item.id)"/>
        </div>
      </div>
    </div>

    <a :href="blobUrl" style="display: none" ref="downloadLink"></a>
  </section>
</template>

<style scoped>
.active > div {

}
.bg {
  background: linear-gradient(180deg, rgba(226, 102, 172, 0.00) 20%, #0038A6 100%);
}
</style>