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
/* .main {
  padding-top: 8.063rem;
} */
/* @media (max-width: 1024px) {
  .main {
    padding-top: 70px;
  }
} */
@media (max-width: 768px) {
  .main {
    padding-bottom: 53px;
  }
}
</style>