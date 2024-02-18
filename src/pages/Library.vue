<script setup>
import {useHttp} from "@/composables/useHttp.js";
import {onMounted, ref} from "vue";

const { getBooks } = useHttp()

const books = ref([])

onMounted(async () => {
  books.value = await getBooks()
})


async function handleDownloadMagazine(id) {
  try {
    const blob = await downloadMagazine(id); // Получаем Blob

    if (blob.size === 0) {
      throw new Error("Получен пустой Blob");
    }

    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a'); // Создаем новую ссылку
    link.href = blobUrl;
    link.download = 'коре ильбо.pdf';
    document.body.appendChild(link); // Добавляем ссылку в DOM
    link.click(); // Нажимаем на ссылку

    // Очистка
    URL.revokeObjectURL(blobUrl);
    document.body.removeChild(link);
  } catch (error) {
    console.error("Ошибка при скачивании журнала: ", error);
  }
}
</script>

<template>
  <section class="container md:pt-24 pt-8">
    <h1 class="title bg">Библиотека</h1>
    <div class="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-10">
      <div v-for="item in books" class="p-6 rounded-2xl border border-light flex flex-col gap-6">
        <div class="flex justify-center items-center overflow-hidden">
          <img v-if="item?.cover[0]?.download_link" class="min-w-full min-h-full" :src="item.cover[0].download_link" alt="">
          <img v-else class="min-w-full min-h-full" src="@/assets/img/mock/book.png" alt="">
        </div>
        <p class="lg:text-4xl md:text-2xl text-xl font-bold">{{ item.name }}</p>
<!--        <p class="text-xl flex gap-6">-->
<!--          <span>By </span>-->
<!--          <span class="text-light">Автор</span>-->
<!--        </p>-->
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>