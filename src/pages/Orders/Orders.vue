<template>
  <div class="page">
    <Page>
      <div class="bread-crumbs">
        <a class="bread-crumbs-item" href="#">
          <span class="bread-crumbs-title">Главная</span>
          <span class="bread-arrow"></span>
        </a>
        <a class="bread-crumbs-item" href="#">
          <span class="bread-crumbs-title">Мои заказы</span>
          <span class="bread-arrow"></span>
        </a>
      </div>
      <TopContentRedLine :title="'Мои заказы'" :link="'index.html'"/>

      <div class="row order-row">
        <div class="order-row-left row">
          <div class="order-date">
            <div class="order-date-paragraph paragraph">01.02.23</div>
            <div class="order-date-paragraph-mini"><em>Заказ оформлен</em></div>
          </div>
          <div class="order-title">
            <p>Технология «Исцеление Кармы»</p>
          </div>
          <div class="order-delete show_900">
            <img src="@/assets/images/delete.png" alt="">
          </div>
        </div>
        <div class="order-row-right row">
          <div class="order-cost">
            <p>2 490 руб</p>
          </div>
          <div class="order-btn-block">
            <a href="#" class="order-btn pay">ОПЛАТИТЬ</a>
          </div>
          <div class="order-delete hide_900">
            <img src="@/assets/images/delete.png" alt="">
          </div>
        </div>
      </div>
      <div class="row order-row recover-row">
        <div class="order-row-left row">
          <div class="order-date">
            <div class="order-date-paragraph paragraph">01.02.23</div>
            <div class="order-date-paragraph-mini"><em>‍Заказ отменен</em></div>
          </div>
          <div class="order-title">
            <p>Технология «Исцеление Кармы»</p>
          </div>
          <div class="order-delete show_900">
            <img src="@/assets/images/delete.png" alt="">
          </div>
        </div>
        <div class="order-row-right row">
          <div class="order-cost">
            <p>2 490 руб</p>
          </div>
          <div class="order-btn-block">
            <span class="order-btn recover" @click="toggleIsModalOrdersOpen">ВОССТАНОВИТЬ</span>
          </div>
          <div class="order-delete hide_900">
            <img src="@/assets/images/delete.png" alt="">
          </div>
        </div>
      </div>
      <div class="row order-row">
        <div class="order-row-left row">
          <div class="order-date">
            <div class="order-date-paragraph paragraph">01.02.23</div>
            <div class="order-date-paragraph-mini"><em>Заказ оплачен</em></div>
          </div>
          <div class="order-title">
            <ol class="order-ol">
              <li><div class="order-ol-text">Сеанс «Естественное обезболивающее»</div></li>
              <li><div class="order-ol-text">Технология «Метахилинг»</div></li>
              <li><div class="order-ol-text">Сеанс«Автобиография»</div></li>
            </ol>
          </div>
          <div class="order-delete show_900">
            <img src="@/assets/images/delete.png" alt="">
          </div>
        </div>
        <div class="order-row-right row">
          <div class="order-cost">
            <p>2 490 руб</p>
          </div>
          <div class="order-btn-block">
            <a href="#" class="order-btn access">ПОЛУЧИТЬ ДОСТУП</a>
          </div>
          <div class="order-delete hide_900">
            <img src="@/assets/images/delete.png" alt="">
          </div>
        </div>
      </div>
      <div class="row order-row">
        <div class="order-row-left row">
          <div class="order-date">
            <div class="order-date-paragraph paragraph">01.02.23</div>
            <div class="order-date-paragraph-mini"><em>Заказ оплачен</em></div>
          </div>
          <div class="order-title">
            <p>Каталог «Нейрокорректоры»</p>
          </div>
          <div class="order-delete show_900">
            <img src="@/assets/images/delete.png" alt="">
          </div>
        </div>
        <div class="order-row-right row">
          <div class="order-cost">
            <p>2 490 руб</p>
          </div>
          <div class="order-btn-block">
            <a href="#" class="order-btn access">ПОЛУЧИТЬ ДОСТУП</a>
          </div>
          <div class="order-delete hide_900">
            <img src="@/assets/images/delete.png" alt="">
          </div>
        </div>
      </div>


      <Teleport to="body">
        <Recover />
      </Teleport>
    </Page>
  </div>
</template>

<script>
import Page from '@/hoc/hoc'
import TopContentRedLine from '@/components/TopContentRedLine'
import Recover from './Recover'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { pathname } from '@/path'

export default {
  name: "Orders",
  setup() {
    const store = useStore()
    const path = ref(pathname)

    const toggleIsModalOrdersOpen = () => store.commit('toggleIsModalOrdersOpen')

    return { path, toggleIsModalOrdersOpen }
  },
  components: { Page, TopContentRedLine, Recover }
}
</script>

<style>
@import url(./Orders.css);
</style>