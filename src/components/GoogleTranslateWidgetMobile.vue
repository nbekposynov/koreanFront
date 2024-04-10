<template>
  <div id="language-buttons">
    <!-- Кнопки для смены языка -->
    <button @click="setLanguage('en')">Английский</button>
    <button @click="setLanguage('ru')">Русский</button>
    <button @click="setLanguage('ko')">Корейский</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLanguage: '', // Хранит выбранный язык
    };
  },
  methods: {
    setLanguage(language) {
      this.selectedLanguage = language; // Обновляет выбранный язык
      this.triggerTranslate(); // Вызывает метод перевода
    },
    triggerTranslate() {
      // Эмулирует изменение в виджете Google Translate
      const translateWidget = document.querySelector(".goog-te-combo");
      if (translateWidget) {
        translateWidget.value = this.selectedLanguage; // Устанавливает выбранный язык
        translateWidget.dispatchEvent(new Event('change')); // Инициирует событие 'change'
      }
    }
  }
}
</script>

<style>
#language-buttons button {
  margin: 0 5px; /* Добавляет небольшой отступ между кнопками */
  padding: 10px 20px; /* Увеличивает размер кнопок для удобства использования */
  cursor: pointer; /* Показывает, что элемент интерактивный */
}

/* Дополнительные стили можно добавить по желанию */
</style>