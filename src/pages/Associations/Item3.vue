<script setup>
import IconClose from "@/components/icon/close.vue";
</script>

<template>
  <teleport to="body">
    <div class="text-center-mobile">
      <section class="absolute top-0 w-[100%] h-fit z-[101] bg-lighter">
        <div class="container">
          <div class="flex justify-between items-center lg:py-12 py-6">
            <h1 class="lg:text-5xl text-3xl">
              Попечительный совет Ассоциации Корейцев Казахстана
            </h1>
            <icon-close @click="$router.go(-1)" />
          </div>
          <div class="flex flex-col md:gap-11 gap-5">
            <div class="flex flex-row items-start gap-4">
              <img
                alt="Цхай Юрий Андреевич"
                class="flex-none w-128 h-128 object-cover"
                src="@/assets/img/sovet/1.jpg"
              />
              <div class="flex-grow">
                <p class="md:text-2xl text-xl">
                  <strong>Ф.И.О&nbsp;</strong> Цхай Юрий Андреевич<br />
                  <strong>Дата рождения:</strong> 14.10.1948<br />
                  <strong> Должность:</strong> Председатель Попечительского
                  Совета ОЮЛ «Ассоциация корейцев Казахстана». Председатель
                  Совета директоров АО "Caspian Group".<br />
                  <br />
                </p>
                <br />
              </div>
            </div>

            <hr />

            <div class="flex flex-row items-start gap-4">
              <img
                alt="Кан Георгий Васильевич"
                class="flex-none w-128 h-128 object-cover"
                src="@/assets/img/sovet/2.png"
              />
              <div class="flex-grow">
                <p class="md:text-2xl text-xl">
                  <strong>Ф.И.О&nbsp;</strong> Кан Георгий Васильевич<br />
                  <strong>Дата рождения:</strong> 28.06.1965<br />
                  <strong> Должность:</strong> Доктор исторических наук,
                  профессор. Член государственной комиссии по полной
                  реабилитации жертв политических репрессий. Член
                  научно-экспертного совета (НЭС) АНК. Заместитель Председателя
                  ОО «Алматинский корейский национальный центр»..<br />
                  <br />
                </p>
                <br />
              </div>
            </div>

            <hr />
            <div class="flex flex-row items-start gap-4">
              <img
                alt="Кан Сергей Владимирович"
                class="flex-none w-128 h-128 object-cover"
                src="@/assets/img/sovet/3.png"
              />
              <div class="flex-grow">
                <p class="md:text-2xl text-xl">
                  <strong>Ф.И.О&nbsp;</strong> Кан Сергей Владимирович<br />
                  <strong>Дата рождения:</strong> 10.02.1968<br />
                  <strong> Должность:</strong> Председатель совета директоров АО
                  «Казахский институт нефти и газа». Член совета директоров АО
                  «ЦАТЭК». Председатель Совета директоров АО «Circle Maritime
                  Invest».<br />
                  <br />
                </p>
                <br />
              </div>
            </div>

            <hr />

            <div class="flex flex-row items-start gap-4">
              <img
                alt="Ким Герман Николаевич"
                class="flex-none w-128 h-128 object-cover"
                src="@/assets/img/sovet/4.png"
              />
              <div class="flex-grow">
                <p class="md:text-2xl text-xl">
                  <strong>Ф.И.О&nbsp;</strong> Ким Герман Николаевич<br />
                  <strong>Дата рождения:</strong> 16.07.1953<br />
                  <strong> Должность:</strong> Доктор исторических наук,
                  профессор. Директор института Азиатских исследований КазНУ им.
                  аль- Фараби. Заслуженный деятель РК.<br />
                  <br />
                </p>
                <br />
              </div>
            </div>

            <hr />

            <div class="flex flex-row items-start gap-4">
              <img
                alt="Ким Роман Ухенович"
                class="flex-none w-128 h-128 object-cover"
                src="@/assets/img/sovet/5.jpg"
              />
              <div class="flex-grow">
                <p class="md:text-2xl text-xl">
                  <strong>Ф.И.О&nbsp;</strong> Ким Роман Ухенович<br />
                  <strong>Дата рождения:</strong> 08.05.1955<br />
                  <strong> Должность:</strong> Депутат V и VI созыва Мажилиса
                  Парламента РК Член Консультативного комитета по мирному и
                  демократическому объединению Кореи при Президенте Республика
                  Корея.<br />
                  <br />
                </p>
                <br />
              </div>
            </div>

            <hr />

            <div class="flex flex-row items-start gap-4">
              <img
                alt="Ни Любовь Августовна"
                class="flex-none w-128 h-128 object-cover"
                src="@/assets/img/sovet/6.png"
              />
              <div class="flex-grow">
                <p class="md:text-2xl text-xl">
                  <strong>Ф.И.О&nbsp;</strong> Ни Любовь Августовна<br />
                  <strong>Дата рождения:</strong> 26.01.1952<br />
                  <strong> Должность:</strong> Директор Государственного
                  республиканского академического корейского театра музыкальной
                  комедии.<br />
                  <br />
                </p>
                <br />
              </div>
            </div>

            <hr />

            <div class="flex flex-row items-start gap-4">
              <img
                alt="Пя Юрий Владимирович"
                class="flex-none w-128 h-128 object-cover"
                src="@/assets/img/sovet/7.png"
              />
              <div class="flex-grow">
                <p class="md:text-2xl text-xl">
                  <strong>Ф.И.О&nbsp;</strong> Пя Юрий Владимирович<br />
                  <strong>Дата рождения:</strong> 22.08.1957<br />
                  <strong> Должность:</strong>Доктор медицинских наук.
                  Председатель правления корпоративного фонда «University
                  Medical Center». Председатель Правления АО «Национальный
                  научный<br />
                  <br />
                </p>
                <br />
              </div>
            </div>
            <hr />

            <div class="flex flex-row items-start gap-4">
              <img
                alt="Пя Юрий Владимирович"
                class="flex-none w-128 h-128 object-cover"
                src="@/assets/img/sovet/8.png"
              />
              <div class="flex-grow">
                <p class="md:text-2xl text-xl">
                  <strong>Ф.И.О&nbsp;</strong> Шин Бронислав Сергеевич<br />
                  <strong>Дата рождения:</strong> 02.08.1946<br />
                  <strong> Должность:</strong>Председатель совета директоров АО
                  «Алматыинжстрой» и «Алматыкурылыс». Председатель ОО
                  «Алматинский корейский национальный центр». Член Ассамблеи и
                  малой Ассамблеи народа Казахстана. Почётный профессор
                  Казахской автомобильно-дорожной академии им. Л.Б.
                  Гончарова.<br />
                  <br />
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </teleport>
</template>

<style scoped>
@media (max-width: 768px) {
  /* Предполагаем, что 768px - это максимальная ширина мобильных устройств */
  .text-center-mobile {
    /* Класс, который будет применять выравнивание текста по центру */
    text-align: center;
  }
}

@media (max-width: 768px) {
  /* Предполагаем, что 768px - это максимальная ширина мобильных устройств */
  .flex-row.items-start {
    flex-direction: column; /* Меняем направление на вертикальное */
    align-items: center; /* Центрируем элементы в контейнере для лучшего вида */
  }
  img {
    width: 90%; /* Подгоняем ширину изображения под размер экрана */
    height: auto; /* Сохраняем пропорции изображения */
  }
}
</style>
