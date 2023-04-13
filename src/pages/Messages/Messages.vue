<template>
  <div class="page">
    <Page>
      <div class="bread-crumbs">
        <a class="bread-crumbs-item" href="#">
          <span class="bread-crumbs-title">Главная</span>
          <span class="bread-arrow"></span>
        </a>
        <a class="bread-crumbs-item" href="#">
          <span class="bread-crumbs-title">Сообщения</span>
          <span class="bread-arrow"></span>
        </a>
      </div>
      <TopContentRedLine :title="'Мои сообщения'" :link="'index.html'"/>

      <div class="messages-text mmb dop-1">
        Чтобы открыть доступ к сообщениям <br class="show_500"><a href="#" class="messages-text-a underline">войдите</a> или <a href="#" class="messages-text-a underline">зарегистрируйтесь</a>
      </div>

      <TopContentRedLine :title="'Мои сообщения'" :link="'index.html'"/>

      <div class="messages-text mmb">
        Показать: <a href="#" class="messages-text-a underline">Все</a>
      </div>

      <a href="#" class="row messages-row new-message">
        <div class="messages-left">
          <div class="inner-messages-left">
            <img src="@/assets/images/red_flame.png" alt="">
          </div>
        </div>
        <div class="messages-center">
          <div class="inner-messages-center">
            <div class="messages-center-title">Акции</div>
            <div class="messages-center-date">22.02.23 в 12:25</div>
          </div>
        </div>
        <div class="messages-right">
          <div class="inner-messages-right">
            <div class="messages-right-link">(Технология Недели) Спящий потенциал + 3 Подарка</div>
          </div>
        </div>
      </a>

      <a href="#" class="row messages-row new-message">
        <div class="messages-left">
          <div class="inner-messages-left">
            <img src="@/assets/images/red_mail.png" alt="">
          </div>
        </div>
        <div class="messages-center">
          <div class="inner-messages-center">
            <div class="messages-center-title">Лайфхаки</div>
            <div class="messages-center-date">22.02.23 в 12:25</div>
          </div>
        </div>
        <div class="messages-right">
          <div class="inner-messages-right">
            <div class="messages-right-link">Дурацкий вопрос, который помогает жить</div>
          </div>
        </div>
      </a>

      <a href="#" class="row messages-row new-message">
        <div class="messages-left">
          <div class="inner-messages-left">
            <img src="@/assets/images/red_mail_heart.png" alt="">
          </div>
        </div>
        <div class="messages-center">
          <div class="inner-messages-center">
            <div class="messages-center-title">Полезное</div>
            <div class="messages-center-date">22.02.23 в 12:25</div>
          </div>
        </div>
        <div class="messages-right">
          <div class="inner-messages-right">
            <div class="messages-right-link">Дурацкий вопрос, который помогает жить</div>
          </div>
        </div>
      </a>

      <a href="#" class="row messages-row">
        <div class="messages-left">
          <div class="inner-messages-left">
            <img src="@/assets/images/black_mail_heart.png" alt="">
          </div>
        </div>
        <div class="messages-center">
          <div class="inner-messages-center">
            <div class="messages-center-title">Полезное</div>
            <div class="messages-center-date">22.02.23 в 12:25</div>
          </div>
        </div>
        <div class="messages-right">
          <div class="inner-messages-right">
            <div class="messages-right-link">Дурацкий вопрос, который помогает жить</div>
          </div>
        </div>
      </a>

      <a href="#" class="row messages-row">
        <div class="messages-left">
          <div class="inner-messages-left">
            <img src="@/assets/images/black_flame.png" alt="">
          </div>
        </div>
        <div class="messages-center">
          <div class="inner-messages-center">
            <div class="messages-center-title">Акции</div>
            <div class="messages-center-date">22.02.23 в 12:25</div>
          </div>
        </div>
        <div class="messages-right">
          <div class="inner-messages-right">
            <div class="messages-right-link">(Технология Недели) Спящий потенциал + 3 Подарка</div>
          </div>
        </div>
      </a>

      <a href="#" class="row messages-row new-message">
        <div class="messages-left">
          <div class="inner-messages-left">
            <img src="@/assets/images/red_pen.png" alt="">
          </div>
        </div>
        <div class="messages-center">
          <div class="inner-messages-center">
            <div class="messages-center-title">Системное</div>
            <div class="messages-center-date">22.02.23 в 12:25</div>
          </div>
        </div>
        <div class="messages-right">
          <div class="inner-messages-right">
            <div class="messages-right-link">(Технология Недели) Спящий потенциал + 3 Подарка</div>
          </div>
        </div>
      </a>

      <a href="#" class="row messages-row">
        <div class="messages-left">
          <div class="inner-messages-left">
            <img src="@/assets/images/black_pen.png" alt="">
          </div>
        </div>
        <div class="messages-center">
          <div class="inner-messages-center">
            <div class="messages-center-title">Системное</div>
            <div class="messages-center-date">22.02.23 в 12:25</div>
          </div>
        </div>
        <div class="messages-right">
          <div class="inner-messages-right">
            <div class="messages-right-link">(Технология Недели) Спящий потенциал + 3 Подарка</div>
          </div>
        </div>
      </a>

      <a href="#" class="row messages-row">
        <div class="messages-left">
          <div class="inner-messages-left">
            <img src="@/assets/images/black_mail.png" alt="">
          </div>
        </div>
        <div class="messages-center">
          <div class="inner-messages-center">
            <div class="messages-center-title">Лайфхаки</div>
            <div class="messages-center-date">22.02.23 в 12:25</div>
          </div>
        </div>
        <div class="messages-right">
          <div class="inner-messages-right">
            <div class="messages-right-link">(Технология Недели) Спящий потенциал + 3 Подарка</div>
          </div>
        </div>
      </a>

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
  name: "Messages",
  setup() {
    const store = useStore()
    const path = ref(pathname)

    return { path }
  },
  components: { Page, TopContentRedLine }
}
</script>

<style>
@import url(./Messages.css);
</style>