<template>
  <div class="page">
    <Page>
      <TopContentRedLine :title="'Сессия Деньги любят меня'" :link="'index.html'" />

      <div class="row">
        <div class="card-desc-content">
          <div class="paragraph">
            Считается, что проблема нехватки денег объективная (нестабильная <br>
            экономика, низкий уровень зарплаты, высокие цены – и т.д.). <br class="br"><br class="br">

            Но данные убеждения, касающиеся денег, искажённые: <strong>состояние <br>
              безденежья/нехватки денег, равно как и финансовый достаток, возникает <br>
              исключительно по субъективным причинам и произрастает из головы</strong>. <br class="br"><br class="br">

            В данном сеансе корректируются убеждения о деньгах: в особой технике <br>
            выявляются убеждения, которые либо уже своё отжили, либо изначально, <br>
            в момент их возникновения/внедрения, были искажёнными.<br class="br"><br class="br">

            По наблюдениям, увеличение дохода может быть постепенным (чаще), <br>
            может быть стремительным (реже). Постепенный рост доходности <br>
            с характеристиками стабильности роста квалифицируется как прямой <br>
            и целевой эффект программирования, стремительный - как эффект плацебо, <br>
            относящийся к программированию только косвенно.
          </div>
        </div>
        <div class="card-desc-img">
          <img :src="`${path}/img/gd98.png`" alt="">
        </div>
      </div>

      <div class="buy-block">
        <div class="buy-block-img">
          <img :src="`${path}/img/money_love_me.png`" alt="">
          <p class="buy-format paragraph">
            Формат: <strong>видео</strong><br class="br">
            Продолжительность: <strong>45 минут</strong>
          </p>
        </div>
        <div class="buy-block-content">
          <div class="buy-block-title">СЕССИЯ ДЕНЬГИ ЛЮБЯТ МЕНЯ</div>
          <div class="buy-block-cost">Стоимость:</div>
          <div class="buy-block-cena">990 руб.</div>
          <div class="buy-block-button">ДОБАВИТЬ В КОРЗИНУ</div>

          <p class="agreement">
            Скачать видеосессию «Деньги любят меня» можно <br>
            сразу после оплаты. Письмо со ссылкой придет на Ваш e-mail. <br>
            Оплачивая этот товар, Вы подтверждаете, что согласны  <br>
            с <strong><span>пользовательским соглашением </span></strong>со всеми его положениями.
          </p>

        </div>
      </div>

      <a href="#" class="card-link">← НАЗАД К РАЗДЕЛУ</a>
    </Page>
  </div>
</template>

<script>
import Page from '@/hoc/hoc'
import TopContentRedLine from '@/components/TopContentRedLine'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { pathname } from '@/path'

export default {
  name: "Card",
  setup() {
    const store = useStore()
    const path = ref(pathname)

    return { path }
  },
  components: { Page, TopContentRedLine }
}
</script>

<style>
@import url(./Card.css);
</style>