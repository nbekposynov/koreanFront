<script setup>
const props = defineProps({
  item: Object,
});

function formatDate(inputDate) {
  // Преобразование строки в объект Date
  const date = new Date(inputDate);

  // Массивы с названиями дней и месяцев
  const daysOfWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  const months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  // Получение данных о дне недели, месяце и времени
  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()];
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  // Формирование строки с датой и временем
  const formattedDate = `${dayOfWeek}, ${day} ${month} · ${formatTime(
    hours,
    minutes
  )} - ${formatTime(hours + 5, minutes)}`;

  return formattedDate;
}
function formatTime(hours, minutes) {
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}`;
}
</script>

<template>
  <router-link
    :to="`/news/${item.id}`"
    class="news-card bg-[#f0efefdb] backdrop-blur"
  >
    <div class="news-card__container">
      <div class="news-card__img-wrapper">
        <img
          v-if="item.image"
          :src="item.image"
          alt=""
          class="news-card__img"
        />
        <img
          v-else
          src="@/assets/img/mock/new.png"
          alt=""
          class="news-card__img"
        />
      </div>
      <div class="news-card__info">
        <p class="news-card__title text-[#232323] ">{{ item.title }}</p>
        <p class="news-card__date text-[#232323] mt-4">
          {{ formatDate(item.created_at) }}
        </p>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
/* Основные стили карточки */
.news-card {
  display: flex;
  align-items: center;
  text-decoration: none;
  min-height: 250px;
  margin-top: 20px;
  border-radius: 10px;
}

.news-card:hover {
  border: 1px solid #001d3e;
  box-shadow: 0 0 8px #001d3e;
}

/* Основные стили для контейнера, изображений и текста */
.news-card__container {
  display: flex;
  align-items: center;
  width: 100%;
}
.news-card__title {
    margin: 0; /* Убирает стандартные отступы */
    color: #232323; /* Цвет текста */
    font-weight: 500; /* Нормальная жирность текста */
    /* или используйте font-weight: 400; для того же результата */
}

.news-card__img-wrapper {
  flex: 1;
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.news-card__img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  padding: 30px;
}

.news-card__info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 2;
  padding: 10px;
  min-height: 250px;
}

.news-card__title,
.news-card__date {
  margin: 0;
  color: #232323;
}

/* Стили для больших экранов */
@media (min-width: 768px) {
  .news-card {
    min-height: 150px;
  }

  .news-card__img-wrapper,
  .news-card__img {
    min-height: 150px;
  }
}

/* Стили для мобильных устройств */
@media (max-width: 768px) {
  .news-card__img-wrapper,
  .news-card__img {
    border-radius: 0; /* Убирает скругления у изображения */
  }
  .news-card {
    flex-direction: column;
    align-items: stretch;
    min-height: auto;
  }

  .news-card__container {
    flex-direction: column;
  }

  .news-card__img-wrapper {
    width: 100%;
    min-width: auto;
    min-height: auto;
  }

  .news-card__img {
    padding: 0;
    object-fit: cover; /* Позволяет изображению заполнить контейнер */
  }

  .news-card__info {
    padding: 10px;
    min-height: auto;
  }
}
</style>
