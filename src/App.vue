<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <div class="flex flex-col">
    <app-header v-if="!$route.path.includes('/gallery/')"/>

    <main :class="{ 'main' : !$route.path.includes('/gallery/')}" class="flex-auto">
      <router-view/>
    </main>

    <app-footer v-if="!$route.path.includes('/gallery/')"/>
  </div>
</template>

<style scoped>
.flex.flex-col {
  min-height: 100vh; /* установим высоту контейнера, чтобы он занимал всю высоту окна браузера */
  position: relative; /* установим относительное позиционирование, чтобы абсолютно спозиционированный футер был относительно этого контейнера */
}

.app-footer {
  position: absolute; /* абсолютное позиционирование футера */
  bottom: 0; /* прикрепляем его к нижней части контейнера */
  width: 100%; /* футер будет занимать всю ширину контейнера */
}

</style>