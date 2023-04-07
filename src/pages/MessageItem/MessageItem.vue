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
        <a class="bread-crumbs-item" href="#">
          <span class="bread-crumbs-title">Спящий потенциал + 3 Подарка</span>
          <span class="bread-arrow"></span>
        </a>
      </div>
      <TopContentRedLine :title="'(Технология Недели) <br>Спящий потенциал + 3 Подарка'" :link="'index.html'" />

      <div class="message-wrap">
        <div class="theme-message">
          <div class="theme-message-text">Тема: (Технология Недели) <br class="show_500">Спящий потенциал + 3 Подарка</div>
          <div class="theme-message-text-mini">Отправитель: Марта Николаева-Гарина &lt;info@to-buybook.ru&gt; 22.02.23 в
            12:25</div>
          <div class="theme-border"></div>
        </div>

        <div>
          <div class="message-text-16">
            Это Софья, специалист службы клиентской поддержки проекта «MARTA – NG». <br>
            Мне поручено сообщить, что сегодня запущена акция на технологию «Спящий Потенциал».
          </div>

          <div class="row message-row">
            <div class="message-content pl0">
              <div class="paragraph">
                <span class="message-text-20">СПЯЩИЙ ПОТЕНЦИАЛ</span> <br>
                <em>
                  Активация потенциалов СВЕРХСПОСОБНОСТЕЙ <br>
                  по методу интегрального нейропрограммирования<br class="br"><br class="br">
                </em>

                Приёмы, на которых построены сеансы, позволяют обнаружить <br>
                такое в себе, о чём даже и подозревать было нельзя. <br>
                Познавая себя, изменяется ваша жизнь: <a href="" target="_blank"
                  class="message-link">подробнее&gt;&gt;</a>
              </div>
            </div>
            <div class="message-img">
              <img :src="`${path}/img/kosm.png`" alt="">
            </div>
          </div>

          <div class="message-border-left">
            <p class="paragraph">
              ОБРАТИТЕ ВНИМАНИЕ: сегодня при оформлении заказа <br>
              на технологию <a href="" class="message-link">«Спящий Потенциал»</a> у вас есть <br>
              возможность получить <a href="" class="message-link">3 классных подарка:</a>
            </p>
          </div>

          <div class="row message-row">
            <div class="message-content pl0">
              <div class="paragraph">
                <span class="message-text-20">СПЯЩИЙ ПОТЕНЦИАЛ</span> <br>
                <em>
                  Активация потенциалов СВЕРХСПОСОБНОСТЕЙ <br>
                  по методу интегрального нейропрограммирования<br class="br"><br class="br">
                </em>

                Приёмы, на которых построены сеансы, позволяют обнаружить <br>
                такое в себе, о чём даже и подозревать было нельзя. <br>
                Познавая себя, изменяется ваша жизнь: <a href="" target="_blank"
                  class="message-link">подробнее&gt;&gt;</a>
              </div>
            </div>
            <div class="message-img">
              <img :src="`${path}/img/kosm.png`" alt="">
            </div>
          </div>

          <div class="row message-row">
            <div class="message-content pl0">
              <div class="paragraph">
                <span class="message-text-20">СПЯЩИЙ ПОТЕНЦИАЛ</span> <br>
                <em>
                  Активация потенциалов СВЕРХСПОСОБНОСТЕЙ <br>
                  по методу интегрального нейропрограммирования<br class="br"><br class="br">
                </em>

                Приёмы, на которых построены сеансы, позволяют обнаружить <br>
                такое в себе, о чём даже и подозревать было нельзя. <br>
                Познавая себя, изменяется ваша жизнь: <a href="" target="_blank"
                  class="message-link">подробнее&gt;&gt;</a>
              </div>
            </div>
            <div class="message-img">
              <img :src="`${path}/img/kosm.png`" alt="">
            </div>
          </div>

          <div class="center message-go"><a class="message-go-link">ПЕРЕЙТИ</a></div>

        </div>
      </div>
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
  name: "MessageItem",
  setup() {
    const store = useStore()
    const path = ref(pathname)

    return { path }
  },
  components: { Page, TopContentRedLine }
}
</script>

<style>
@import url(./MessageItem.css);
</style>