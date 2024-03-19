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
  <router-link :to="`/news/${item.id}`" class="news-card bg-[#D9D9D9DB] backdrop-blur rounded-sm" >
    <span class="absolute top-0 left-0 w-full h-full rounded-sm"></span>
    <div class="news-card__img" style="border-radius: 0;">
      <img v-if="item.image" :src="item.image" alt="" class="min-w-full min-h-full">
      <img v-else src="@/assets/img/mock/new.png" alt="" class="min-w-full min-h-full">
    </div>
    <div class="p-3">
      <p class="news-card__title text-[#232323]">{{ item.title }}</p>
      <p class="news-card__date text-[#232323] mt-4">{{ formatDate(item.created_at) }}</p>
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

.news-card__title {
  display: -webkit-box; /* Используется для поддержки свойства -webkit-line-clamp */
  -webkit-line-clamp: 2; /* Количество строк, после которых текст будет обрезан */
  -webkit-box-orient: vertical;  
  overflow: hidden; /* Скрывает текст, выходящий за пределы элемента */
  text-overflow: ellipsis; /* Добавляет многоточие в конце обрезанного текста */
  white-space: normal; /* Убедитесь, что white-space не установлен в nowrap */
  line-height: 1.2em; /* Высота строки */
  max-height: 2.4em; /* Максимальная высота, рассчитываемая как line-height * количество строк */
}


@media (min-width: 768px) {
  .news-card {
    min-height: 400px; /* Фиксированная минимальная высота для больших экранов */
    max-height: 400px;
    min-width: 500px; /* Фиксированная минимальная высота для больших экранов */
    max-width: 500px;
    overflow: hidden; /* Фиксированная максимальная высота для больших экранов */
  }

  .news-card__img img {
    height: 350px;
    min-height: 350px;
    max-height: 350px;
    object-fit: cover; /* Фиксированная высота для изображений на больших экранах */
  }
}



</style>