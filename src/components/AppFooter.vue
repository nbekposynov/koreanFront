<script setup>
import IconTelegram from '@/components/icon/telegram.vue'
import IconWhatsapp from '@/components/icon/whatsapp.vue'
import { useHttp } from "@/composables/useHttp.js";
import {ref} from "vue";
const { sendPhone } = useHttp()

const phone = ref('+7')

async function handleSendPhone() {
  let data = {
    phone_number: '+' + phone.value.replace(/\D/g, '')
  }
  await sendPhone(data)
  phone.value = '+7'
}
</script>

<template>
  <footer class="lg:px-14 md:px-10 px-8 lg:mt-20 md:mt-16 mt-10 pb-12 bg-primary text-secondary">
    <div class="text-center md:py-16 py-10">
      <p class="lg:text-3xl md:text-2xl text-xl">У вас есть вопросы?</p>
      <p class="text-base mt-2">Вы можете написать нам</p>
      <form @submit.prevent="handleSendPhone" class="rounded-2xl border border-light max-w-[690px] mx-auto flex overflow-hidden p-1 mt-8">
        <input type="text" v-mask="'+7 (###) ### ## ##'" v-model="phone" class="py-3 px-5 w-full bg-transparent outline-none">
        <button class="px-5 py-3 uppercase text-primary bg-secondary rounded-xl text-xs font-semibold">Отправить</button>
      </form>
    </div>
    <div class="md:mt-16 mt-10 flex sm:flex-row flex-col gap-4">
      <div class="w-[30%] flex flex-col justify-between">
        <div>
          <p class="uppercase font-medium text-[10px] opacity-[0.4]">ДОПОЛНИТЕЛЬНО</p>
          <div class="text-sm mt-6 opacity-[0.8]">
            <router-link to="/contacts" class="block decoration-0">Контакты и региональные подразделения АКК</router-link>
            <router-link to="/news" class="block decoration-0">Новости</router-link>
            <!--            <a href="#" class="block decoration-0">Equipment Installation</a>-->
            <router-link to="/gallery" class="block decoration-0">Галерея</router-link>
          </div>
        </div>

        <p class="text-xs font-medium opacity-[0.4] justify-end">© 2023 — Copyright</p>
      </div>
      <div class="md:w-[70%] w-full">
        <div class="flex md:gap-20 gap-10 md:flex-row flex-col">
          <div>
            <p class="uppercase font-medium text-[10px] opacity-[0.4]">карта сайта</p>
            <div class="text-sm mt-6 opacity-[0.8]">
              <router-link to="/associations" class="decoration-0">Ассоциация корецев Казахстана</router-link>
              <router-link to="/news" class="decoration-0">Корейские новости</router-link>
              <router-link to="/ilbo" class="decoration-0">Коре ильбо</router-link>
              <router-link to="/library" class="decoration-0">Библиотека</router-link>
            </div>
          </div>
          <div class="md:mt-[-8%]">
            <router-link to="/" class="flex justify-center items-center md:min-w-[75px] min-w-[50px] md:w-[75px] md:h-[100px] w-[50px] h-[50px] overflow-hidden">
              <img class="max-w-none w-[250%]" src="@/assets/img/logo.png" alt="">
            </router-link>
            <div class="mt-6 flex gap-16">
              <div>
                <a href="tel:+7 777 77 77">+7 777 77 77</a>
                <a href="mailto:roo_akk@mail.ru" class="underline">roo_akk@mail.ru</a>
                <a href="mailto:info@koreans.kz" class="underline">info@koreans.kz</a>
              </div>
              <div class="flex flex-col gap-4">
                <icon-telegram/>
                <icon-whatsapp/>
              </div>
            </div>
          </div>
        </div>


        <div class="text-sm lg:mt-16 md:mt-12 mt-8">

          <div class="flex justify-between gap-2.5 lg:mt-40 md:mt-30 mt-20">
            <div class="text-sm flex gap-4">
              <router-link to="/">Главная страница</router-link>
              <span class="opacity-[0.2]">/</span>
              <router-link to="/news">Новости</router-link>
              <span class="opacity-[0.2]">/</span>
              <router-link to="/contacts">Контакты</router-link>
            </div>

            <p class="text-xs opacity-[0.4] font-medium">Privacy</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
* {
  font-family: 'Inter', sans-serif;
}
footer {
  background: url('@/assets/img/eagle.svg') no-repeat #032973;
  background-position: bottom 35% right 5%;
  background-size: 35%;
}
</style>