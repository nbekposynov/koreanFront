<template>
  <div class="tags-container">
    <a v-for="tag in tags" :key="tag.text" :href="tag.url" class="tag-link">
      <HomeTag :text="getDisplayText(tag)" />
    </a>
  </div>
</template>

<script setup>
import { ref } from "vue";
import HomeTag from "@/components/Home/Tag.vue";

const tags = ref([
  { text: "Структура АКК", url: "/association/1" },
  { text: "Президиум АКК", url: "/association/2" },
  { text: "Попечительный совет", url: "/association/3" },
  { text: "План развития АКК до 2027 года", url: "/association/4" },
  {
    text: "Проект концепции развития ОЮЛ «Ассоциация корейцев Казахстана» до 2030 года",
    altText: "Проект концепции развития ОЮЛ",
    url: "/association/5",
  },
  { text: "История АКК", url: "/association/6" },
]);

const getDisplayText = (tag) => {
  // В этом месте можно добавить проверку на размер экрана или другую логику для определения, какой текст отображать
  return window.innerWidth <= 768 ? tag.altText || tag.text : tag.text;
};
</script>

<style scoped>
.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0 0px; /* Добавляем небольшой отступ с обеих сторон */
}

.tag-link {
  text-decoration: none;
  color: inherit;
  overflow-wrap: break-word; /* Позволяет длинным словам переноситься и предотвращает их выход за границы */
}

/* Additional styling for the HomeTag component might be needed depending on its structure */
</style>
