<script setup>
import FiltersList from "@/widgets/FiltersList.vue";
import IconLocation from "@/components/icon/location.vue";
import IconPhone from "@/components/icon/phone.vue";
import IconEmail from "@/components/icon/email.vue";
</script>

<template>
  <section class="lg:pt-24 md:pt-16 pt-8 flex flex-col lg:gap-20 md:gap-14 gap-8">
   <h1 class="title container">Контакты и Региональные подразделения АКК</h1>
    <filters-list class="px-calc"/>
    <div class="container grid md:grid-cols-2 gap-9 lg:text-2xl md:text-xl text-base">
      <div class="flex flex-col gap-3.5">
        <p class="font-bold">ОО «Алматинский корейский национальный центр»</p>
        <div class="flex gap-3.5">
          <icon-location/>
          <p>РК, г. Алматы, ул. Байтурсынова, 145</p>
        </div>
        <div class="flex gap-3.5">
          <icon-phone/>
          <p>+7 (727) 292-05-74</p>
        </div>
        <div class="flex gap-3.5">
          <icon-email/>
          <p>ooaknc@gmail.com</p>
        </div>
      </div>
      <div class="flex flex-col gap-3.5">
        <p class="font-bold">ОО «Алматинский корейский национальный центр»</p>
        <div class="flex gap-3.5">
          <icon-location/>
          <p>РК, г. Алматы, ул. Байтурсынова, 145</p>
        </div>
        <div class="flex gap-3.5">
          <icon-phone/>
          <p>+7 (727) 292-05-74</p>
        </div>
        <div class="flex gap-3.5">
          <icon-email/>
          <p>ooaknc@gmail.com</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>