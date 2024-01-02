<script setup>
import Search from "@/components/Search.vue";
import {onMounted, ref} from "vue";
import useBreakpoint from "@/composables/useBreakpoint";
const openMenu = ref(false)
const showMenu = useBreakpoint(900)
</script>

<template>
<header>
  <div class="container relative flex justify-between items-center gap-2.5 lg:p-10 md:p-5 p-2.5 text-secondary">
    <router-link to="/">Логотип</router-link>

    <search/>

    <template v-if="showMenu">
      <div class="burger-menu__btn" :class="{ active : openMenu }" @click="openMenu = !openMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav
          class="w-[100vw] flex flex-col justify-center gap-10 bg-primary text-secondary xs:px-20 sm:px-10 px-5 text-3xl fixed top-0 right-0 transition-all duration-300 ease-in h-0 overflow-hidden shadow-primary shadow-lg"
          :class="{ 'h-[100vh] lg:py-10 md:py-5 py-20' : openMenu }"
      >
        <router-link class="transition-all duration-800 ease-in" :class="{ 'opacity-1' : openMenu, 'opacity-0' : !openMenu }" to="/associations">Ассоциация корейцев Казахстана</router-link>
        <router-link class="transition-all duration-800 ease-in" :class="{ 'opacity-1' : openMenu, 'opacity-0' : !openMenu }" to="/news">Новости</router-link>
        <router-link class="whitespace-nowrap transition-all duration-800 ease-in" :class="{ 'opacity-1' : openMenu, 'opacity-0' : !openMenu }" to="/ilbo">Коре ильбо</router-link>
        <router-link class="transition-all duration-800 ease-in" :class="{ 'opacity-1' : openMenu, 'opacity-0' : !openMenu }" to="/library">Библиотека</router-link>
        <router-link class="transition-all duration-800 ease-in" :class="{ 'opacity-1' : openMenu, 'opacity-0' : !openMenu }" to="">Галерея</router-link>
      </nav>

<!--      <nav-->
<!--          v-else-->
<!--          class="flex flex-col justify-between gap-6 bg-secondary text-primary lg:px-10 md:px-5 px-2.5 rounded-xl text-xl absolute top-[100%] right-5 transition-all duration-300 ease-in h-0 overflow-hidden shadow-primary shadow-lg"-->
<!--          :class="{ 'h-[300px] lg:py-10 md:py-5 py-2.5' : openMenu }"-->
<!--      >-->
<!--        <router-link to="/associations" class="whitespace-pre">Ассоциация корейцев Казахстана</router-link>-->
<!--        <router-link to="/news">Новости</router-link>-->
<!--        <router-link to="/ilbo" class="whitespace-nowrap">Коре ильбо</router-link>-->
<!--        <router-link to="/library">Библиотека</router-link>-->
<!--        <router-link to="">Галерея</router-link>-->
<!--      </nav>-->
    </template>

    <nav v-else class="flex justify-between gap-6">
      <router-link to="/associations" class="whitespace-pre">Ассоциация корейцев Казахстана</router-link>
      <router-link to="/news">Новости</router-link>
      <router-link to="/ilbo" class="whitespace-nowrap">Коре ильбо</router-link>
      <router-link to="/library">Библиотека</router-link>
      <router-link to="/gallery">Галерея</router-link>
    </nav>
  </div>
</header>
</template>

<style scoped>
header {
  background: url('@/assets/img/ornament.svg');
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  background-position: 50% 50%;
  background-repeat: repeat-x;
  background-size: cover;
  background-color: #001D3E;
  position: fixed;
  width: 100%;
  z-index: 100;
}
.burger-menu__btn {
  position: relative;
  width: 30px;
  height: 30px;
  z-index: 10;
  span {
    display: block;
    width: 100%;
    height: 2px;
    background: #fff;
    margin-bottom: 7px;
    transition: all .3s ease;
  }
}
.burger-menu__btn.active {
  span {
    &:nth-child(1) {
      transform: rotate(45deg) translate(5px, 6px);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: rotate(-45deg) translate(6px, -8px);
    }
  }
}
</style>