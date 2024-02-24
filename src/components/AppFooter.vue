<script setup>
import IconTelegram from "@/components/icon/telegram.vue";
import IconWhatsapp from "@/components/icon/whatsapp.vue";
import IconInstagram from "@/components/icon/instagram.vue";
import { useHttp } from "@/composables/useHttp.js";
import { ref } from "vue";
const { sendPhone } = useHttp();

const phone = ref("+7");
const showModal = ref(false);

async function handleSendPhone() {
  let data = {
    phone_number: "+" + phone.value.replace(/\D/g, ""),
  };
  await sendPhone(data);
  phone.value = "+7";

  showModal.value = true;
}
</script>

<template>
  <footer class="lg:px-14 md:px-10 px-8 pb-6 bg-primary text-secondary">
    <div class="text-center md:py-8 py-5">
      <p class="lg:text-2xl md:text-xl text-lg">У вас есть вопросы?</p>
      <p class="text-sm mt-1">Вы можете написать нам</p>
      <form
        @submit.prevent="handleSendPhone"
        class="rounded-2xl border border-light max-w-[690px] mx-auto flex overflow-hidden p-1 mt-4"
      >
        <input
          type="text"
          v-mask="'+7 (###) ### ## ##'"
          v-model="phone"
          class="py-2 px-4 w-full bg-transparent outline-none text-sm"
        />
        <button
          class="px-4 py-2 uppercase text-primary bg-secondary rounded-xl text-xs font-semibold"
        >
          Отправить
        </button>
      </form>
    </div>
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div class="bg-white p-8 rounded-lg w-3/4 lg:w-1/2">
        <div class="flex justify-between items-start">
          <p class="text-black text-center flex-1 text-2xl">
            Ваш запрос успешно отправлен!
          </p>
          <button
            @click="showModal = false"
            class="text-red-500 text-lg hover:text-red-700"
          >
            &#10005;
            <!-- Это символ крестика -->
          </button>
        </div>
      </div>
    </div>
    <div class="md:mt-8 mt-5 flex sm:flex-row flex-col gap-4">
      <div
        class="w-[30%] flex flex-col justify-between font-medium text-[13px]"
      >
        <div>
          <p class="uppercase font-medium text-[13px] opacity-[0.4]">
            ДОПОЛНИТЕЛЬНО
          </p>
          <div class="text-xs mt-4 opacity-[0.8]">
            <router-link
              to="/contacts"
              class="block decoration-0 font-medium text-[13px]"
              >Контакты и региональные подразделения АКК</router-link
            ><br />
            <router-link
              to="/news"
              class="block decoration-0 font-medium text-[13px]"
              >Новости</router-link
            ><br />
            <router-link
              to="/gallery"
              class="block decoration-0 font-medium text-[13px]"
              >Галерея</router-link
            ><br />
          </div>
        </div>
        <p class="text-xs font-medium opacity-[0.4] justify-end">
          © 2023 — Copyright
        </p>
      </div>
      <div class="md:w-[70%] w-full">
        <div class="flex md:gap-16 gap-8 md:flex-row flex-col">
          <div>
            <p class="uppercase font-medium text-[13px] opacity-[0.4]">
              карта сайта
            </p>
            <div class="text-xs mt-4 opacity-[0.8]">
              <a
                href="/#associations"
                class="decoration-0 font-medium text-[13px]"
                >Ассоциация корейцев Казахстана</a
              ><br />
              <router-link
                to="/news"
                class="decoration-0 font-medium text-[13px]"
                >Корейские новости</router-link
              ><br />
              <router-link
                to="/ilbo"
                class="decoration-0 font-medium text-[13px]"
                >Коре ильбо</router-link
              ><br />
              <router-link
                to="/library"
                class="decoration-0 font-medium text-[13px]"
                >Библиотека</router-link
              ><br />
            </div>
          </div>
          <div>
            <router-link
              to="/"
              class="flex justify-center items-center md:min-w-[75px] min-w-[50px] md:w-[75px] md:h-[75px] w-[50px] h-[50px] overflow-hidden"
            >
              <img
                class="max-w-none w-[200%]"
                src="@/assets/img/logo.png"
                alt=""
              />
            </router-link>
            <div class="mt-4 flex gap-12">
              <div>
                <a href="tel:+7 701 478 1825" class="font-medium text-[13px]"
                  >+7 701 478 1825
                </a>
                <a
                  href="mailto:roo_akk@mail.ru"
                  class="underline font-medium text-[13px]"
                  >roo_akk@mail.ru</a
                >
                <a
                  href="mailto:info@koreans.kz"
                  class="underline font-medium text-[13px]"
                  >info@koreans.kz</a
                >
              </div>
              <div class="flex flex-col gap-3">
                <a
                  href="https://www.instagram.com/koreans_in_kazakhstan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon-instagram class="text-xs" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="font-medium text-[13px] lg:mt-8 md:mt-6 mt-4">
          <div class="flex justify-between gap-2.5 lg:mt-20 md:mt-15 mt-10">
            <div class="font-medium text-[13px] flex gap-3">
              <router-link to="/" class="font-medium text-[13px]"
                >Главная страница</router-link
              ><br />
              <span class="opacity-[0.2]">/</span><br />
              <router-link to="/news" class="font-medium text-[13px]"
                >Новости</router-link
              ><br />
              <span class="opacity-[0.2]">/</span><br />
              <router-link to="/contacts" class="font-medium text-[13px]"
                >Контакты</router-link
              ><br />
            </div>
            <p class="font-medium text-[13px] opacity-[0.4] font-medium">
              Privacy
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
* {
  font-family: "Inter", sans-serif;
}
footer {
  background: url("@/assets/img/eagle.svg") no-repeat #032973;
  background-position: bottom 35% right 5%;
  background-size: 19%;
  margin-top: 20px; /* Уменьшено с 35% до 25% */
}
</style>
