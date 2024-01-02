<script setup>
import IconTelegram from '@/components/icon/telegram.vue'
import IconWhatsapp from '@/components/icon/whatsapp.vue'
</script>

<template>
  <footer class="lg:px-14 md:px-10 px-8 lg:mt-20 md:mt-16 mt-10 pb-12 bg-primary text-secondary">
    <div class="text-center md:py-16 py-10">
      <p class="lg:text-3xl md:text-2xl text-xl">У вас есть вопросы?</p>
      <p class="text-base mt-2">Вы можете написать нам</p>
      <div class="rounded-2xl border border-light max-w-[690px] mx-auto flex overflow-hidden p-1 mt-8">
        <input type="text" class="py-3 px-5 w-full bg-primary outline-none">
        <button class="px-5 py-3 uppercase text-primary bg-secondary rounded-xl text-xs font-semibold">Отправить</button>
      </div>
    </div>
    <div class="md:mt-16 mt-10 flex sm:flex-row flex-col gap-4">
      <div class="w-[30%] flex flex-col justify-between">
        <div>
          <p class="uppercase font-medium text-[10px] opacity-[0.4]">карта сайта</p>
          <div class="text-sm mt-6 opacity-[0.8]">
            <a href="#" class="decoration-0">Ассоциация корецев Казахстана</a>
            <a href="#" class="decoration-0">Корейские новости</a>
            <a href="#" class="decoration-0">Коре ильбо</a>
            <a href="#" class="decoration-0">Библиотека</a>
          </div>
        </div>

        <p class="text-xs font-medium opacity-[0.4] justify-end">© 2023 — Copyright</p>
      </div>
      <div class="md:w-[70%] w-full">
        <div>
          <p class="uppercase font-medium text-[10px] opacity-[0.4]">ДОПОЛНИТЕЛЬНО</p>
          <div class="text-sm mt-6 opacity-[0.8]">
            <a href="#" class="block decoration-0">Контакты и региональные подразделения АКК</a>
            <a href="#" class="block decoration-0">Новости</a>
            <a href="#" class="block decoration-0">Equipment Installation</a>
            <a href="#" class="block decoration-0">Галерея</a>
          </div>
        </div>
        <div class="text-sm lg:mt-16 md:mt-12 mt-8">
          <p>Логотип</p>
          <div class="mt-6 flex gap-16">
            <div>
              <a href="tel:+7 777 77 77">+7 777 77 77</a>
              <a href="#">roo_akk@mail.ru</a>
              <a href="#">info@koreans.kz</a>
            </div>
            <div class="flex gap-8 pt-4">
              <icon-telegram/>
              <icon-whatsapp/>
            </div>
          </div>

          <div class="flex justify-between gap-2.5 lg:mt-40 md:mt-30 mt-20">
            <div class="text-sm flex gap-4">
              <a href="#">Главная страница</a>
              <span class="opacity-[0.2]">/</span>
              <a href="#">Новости</a>
              <span class="opacity-[0.2]">/</span>
              <a href="#">Контакты</a>
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
  background: url('@/assets/img/eagle.svg') no-repeat #001D3E;
  background-position: bottom 35% right 5%;
  background-size: 35%;
}
</style>