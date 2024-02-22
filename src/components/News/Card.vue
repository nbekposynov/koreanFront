<script setup>
const props = defineProps({
  item: Object
})

function formatDate(inputDate) {
  // Преобразование строки в объект Date
  const date = new Date(inputDate);

  // Массивы с названиями дней и месяцев
  const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const months = [
    'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня',
    'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
  ];

  // Получение данных о дне недели, месяце и времени
  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()];
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  // Формирование строки с датой и временем
  const formattedDate = `${dayOfWeek}, ${day} ${month} · ${formatTime(hours, minutes)} - ${formatTime(hours + 5, minutes)}`;

  return formattedDate;
}
function formatTime(hours, minutes) {
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}
</script>

<template>
  <router-link :to="`/news/${item.id}`" class="news-card bg-[#D9D9D9DB] backdrop-blur">
    <span class="absolute top-0 left-0 w-full h-full rounded-[20px]"></span>
    <div class="news-card__img">
      <img v-if="item.image" :src="item.image" alt="" class="min-w-full min-h-full">
      <img v-else src="@/assets/img/mock/new.png" alt="" class="min-w-full min-h-full">
    </div>
    <div class="p-3">
      <p class="news-card__title text-[#232323]">{{ item.title }}</p>
      <p class="news-card__date text-[#232323] mt-4 font-bold">{{ formatDate(item.created_at) }}</p>
    </div>
  </router-link>
</template>

<style scoped>
.news-card:hover {
  border: 1px solid #001D3E;
  box-shadow: 0px 0px 8px 0px #001D3E;
}
.news-card:hover > span{
  box-shadow: 0px 0px 8px 0px #001D3E inset;
}



</style>