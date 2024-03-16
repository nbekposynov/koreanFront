<script setup>
import Search from "@/components/Search.vue";
import { onMounted, ref } from "vue";
import useBreakpoint from "@/composables/useBreakpoint";
import SearchMobile from "@/components/SearchMobile.vue";
import IconWhatsapp from "@/components/icon/whatsapp.vue";
import IconWhatsapph from "@/components/icon/whatsapph.vue";

import IconInstagram from "@/components/icon/instagram.vue";

const openMenu = ref(false);
const showMenu = useBreakpoint(1200);
</script>

<template>
  <header>
    <div
      class="container relative flex lg:justify-between items-center gap-3 lg:p-2.5 md:p-5 p-2.5 text-secondary"
    >
      <router-link
        to="/"
        class="flex justify-center items-center md:min-w-[70px] min-w-[30px] md:w-[80px] md:h-[70px] w-[40px] h-[40px] overflow-hidden"
      >
        <img
          class="max-w-none w-[181%]"
          src="@/assets/img/logoHeader.png"
          alt=""
        />
      </router-link>

      <nav v-if="!showMenu" class="flex justify-between gap-6">
        <a href="/#associations" class="whitespace-pre text-2xl"
          >Ассоциация корейцев Казахстана</a
        >
        <div class="h-7 w-[2px] bg-secondary mr-auto mr-10"></div>
        <a href="/#about" class="text-xl">О Нас</a>
        <router-link to="/news" class="text-xl">Новости</router-link>
        <router-link to="/ilbo" class="whitespace-nowrap text-xl"
          >“Коре Ильбо” 100 лет</router-link
        >
        <router-link to="/library" class="text-xl">Библиотека</router-link>
        <router-link to="/gallery" class="text-xl">Галерея</router-link>
        <a
          href="https://www.instagram.com/koreans_in_kazakhstan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon-instagram style="width: 25px; height: 25px" />
          <!-- Измените размеры здесь -->
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=77014781825&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon-whatsapph style="width: 25px; height: 25px" />
          <!-- Измените размеры здесь -->
        </a>
      </nav>

      <search v-if="!showMenu" />

      <search-mobile v-else class="md:ml-4 mr-auto" />

      <template v-if="showMenu">
        <div
          class="burger-menu__btn"
          :class="{ active: openMenu }"
          @click="openMenu = !openMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav
          class="w-[100vw] flex flex-col justify-center gap-10 bg-primary text-secondary xs:px-20 sm:px-10 px-5 text-3xl fixed top-0 right-0 transition-all duration-300 ease-in h-0 overflow-hidden shadow-primary shadow-lg"
          :class="{ 'h-[100vh] lg:py-10 md:py-5 py-20': openMenu }"
        >
          <a
            class="transition-all duration-800 ease-in"
            :class="{ 'opacity-1': openMenu, 'opacity-0': !openMenu }"
            href="/#associations"
            @click="openMenu = false"
            >Ассоциация корейцев Казахстана</a
          >
          <router-link
            class="transition-all duration-800 ease-in"
            :class="{ 'opacity-1': openMenu, 'opacity-0': !openMenu }"
            to="/news"
            @click.native="openMenu = false"
            >Новости</router-link
          >
          <router-link
            class="whitespace-nowrap transition-all duration-800 ease-in"
            :class="{ 'opacity-1': openMenu, 'opacity-0': !openMenu }"
            to="/ilbo"
            @click.native="openMenu = false"
            >Коре ильбо</router-link
          >
          <router-link
            class="transition-all duration-800 ease-in"
            :class="{ 'opacity-1': openMenu, 'opacity-0': !openMenu }"
            to="/library"
            @click.native="openMenu = false"
            >Библиотека</router-link
          >
          <router-link
            class="transition-all duration-800 ease-in"
            :class="{ 'opacity-1': openMenu, 'opacity-0': !openMenu }"
            to="/gallery"
            @click.native="openMenu = false"
            >Галерея</router-link
          >
        </nav>
      </template>
    </div>
  </header>
</template>

<style scoped>
header {
  background: url("@/assets/img/Rectangle 1.png");
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  background-position: 50% 50%;
  background-repeat: repeat-x;
  background-size: cover;
  background-color: #0147ce;
  position: sticky; /* Изменено с absolute на sticky */
  top: 0; /* Добавлено для "прилипания" к верху */
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
    transition: all 0.3s ease;
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
