<template>
  <div class="page">
    <Page>
      <div class="bread-crumbs">
        <a class="bread-crumbs-item" href="#">
          <span class="bread-crumbs-title">Каталог</span>
          <span class="bread-arrow"></span>
        </a>
        <a class="bread-crumbs-item" href="#">
          <span class="bread-crumbs-title">Нейрокорректоры</span>
          <span class="bread-arrow"></span>
        </a>
      </div>

      <TopContentRedLine :title="'Каталог'" :link="'index.html'" />

      <div class="row">

        <div class="wrap-catalog-top-btn _pl0">
          <a class="catalog-top-btn" href="#">
            <div class="catalog-top-btn-left">
              <img :src="`${path}/nav_19.png`" alt="" class="catalog-top-btn-img">
            </div>
            <div class="catalog-top-btn-right">
              <div class="inner-catalog-top-btn-right">Бестселлеры</div>
              <div class="inner-catalog-top-btn-left abold">Подробнее <span></span></div>
            </div>
          </a>
        </div>

        <div class="wrap-catalog-top-btn">
          <a class="catalog-top-btn" href="#">
            <div class="catalog-top-btn-left">
              <img :src="`${path}/nav_20.png`" alt="" class="catalog-top-btn-img">
            </div>
            <div class="catalog-top-btn-right">
              <div class="inner-catalog-top-btn-right">Новинки</div>
              <div class="inner-catalog-top-btn-left abold">Подробнее <span></span></div>
            </div>
          </a>
        </div>

        <div class="wrap-catalog-top-btn _pr0">
          <a class="catalog-top-btn" href="#">
            <div class="catalog-top-btn-left">
              <img :src="`${path}/nav_21.png`" alt="" class="catalog-top-btn-img">
            </div>
            <div class="catalog-top-btn-right">
              <div class="inner-catalog-top-btn-right">вкусная распродажа</div>
              <div class="inner-catalog-top-btn-left abold">Подробнее <span></span></div>
            </div>
          </a>
        </div>

      </div>

      <div class="sort-block">
        Сортировка:
        <select name="" class="sort-block-select ar">
          <option value="">сначала популярные</option>
          <option value="">по разделам</option>
          <option value="">сначала недорогие</option>
          <option value="">сначала дорогие</option>
          <option value="">по алфавиту</option>
        </select>
      </div>

      <div class="akkordeon">
        <div class="akkordeon-item">

          <div class="akkordeon-top" @click="toggleIsOpen">
            <div class="akk-top-left">
              <img :src="`${path}/nav_1.png`" alt="" class="akk-top-img">
            </div>
            <div class="akk-top-right">
              <div class="akk-top-right-title">Нейрокорректоры</div>
            </div>
          </div>

          <div>
            <div class="row">

              <div class="akk-card">
                <div class="inner-akk-card">
                  <img :src="`${path}/akk1-00.png`" alt="" class="akk-card-img">
                  <div class="akk-card-format">Формат: <strong>аудиотрек</strong></div>
                  <div class="text-block-1335">Цена:</div>
                  <div class="text-block-350">1 080 <strong style="font-family: arial;">₽</strong></div>
                  <span class="otzyv" @click="toggleIsModalOpen">1 отзыв</span>

                  <div class="card-btn-detailed">ПОДРОБНЕЕ</div>
                  <span class="card-btn">В КОРЗИНУ</span>
                </div>
              </div>

              <div class="akk-card">
                <div class="inner-akk-card">
                  <img :src="`${path}/akk1-01.png`" alt="" class="akk-card-img">
                  <div class="akk-card-format">Формат: <strong>аудиотрек</strong></div>
                  <div class="text-block-1335">Цена:</div>
                  <div class="text-block-350">1 080 <strong style="font-family: arial;">₽</strong></div>
                  <span class="otzyv" @click="toggleIsModalOpen">1 отзыв</span>

                  <div class="card-btn-detailed">ПОДРОБНЕЕ</div>
                  <span class="card-btn">В КОРЗИНУ</span>
                </div>
              </div>
              <div class="akk-card">
                <div class="inner-akk-card">
                  <img :src="`${path}/akk1-00.png`" alt="" class="akk-card-img">
                  <div class="akk-card-format">Формат: <strong>аудиотрек</strong></div>
                  <div class="text-block-1335">Цена:</div>
                  <div class="text-block-350">1 080 <strong style="font-family: arial;">₽</strong></div>
                  <span class="otzyv" @click="toggleIsModalOpen">1 отзыв</span>

                  <div class="card-btn-detailed">ПОДРОБНЕЕ</div>
                  <span class="card-btn">В КОРЗИНУ</span>
                </div>
              </div>
              <div class="akk-card">
                <div class="inner-akk-card">
                  <img :src="`${path}/akk1-02.png`" alt="" class="akk-card-img">
                  <div class="akk-card-format">Формат: <strong>аудиотрек</strong></div>
                  <div class="text-block-1335">Цена:</div>
                  <div class="text-block-350">1 080 <strong style="font-family: arial;">₽</strong></div>
                  <span class="otzyv" @click="toggleIsModalOpen">1 отзыв</span>

                  <div class="card-btn-detailed">ПОДРОБНЕЕ</div>
                  <span class="card-btn">В КОРЗИНУ</span>
                </div>
              </div>
              <div class="akk-card">
                <div class="inner-akk-card">
                  <img :src="`${path}/akk1-03.png`" alt="" class="akk-card-img">
                  <div class="akk-card-format">Формат: <strong>аудиотрек</strong></div>
                  <div class="text-block-1335">Цена:</div>
                  <div class="text-block-350">1 080 <strong style="font-family: arial;">₽</strong></div>
                  <span class="otzyv" @click="toggleIsModalOpen">1 отзыв</span>

                  <div class="card-btn-detailed">ПОДРОБНЕЕ</div>
                  <span class="card-btn">В КОРЗИНУ</span>
                </div>
              </div>
              <div class="akk-card">
                <div class="inner-akk-card">
                  <img :src="`${path}/akk1-04.png`" alt="" class="akk-card-img">
                  <div class="akk-card-format">Формат: <strong>аудиотрек</strong></div>
                  <div class="text-block-1335">Цена:</div>
                  <div class="text-block-350">1 080 <strong style="font-family: arial;">₽</strong></div>
                  <span class="otzyv" @click="toggleIsModalOpen">1 отзыв</span>

                  <div class="card-btn-detailed">ПОДРОБНЕЕ</div>
                  <span class="card-btn">В КОРЗИНУ</span>
                </div>
              </div>

              <div class="akk-more-btn">ПОКАЗАТЬ ЕЩЕ</div>

            </div>
          </div>

        </div>
      </div>

      <Teleport to="body">
        <Feedback />
      </Teleport>

    </Page>
  </div>
</template>

<script>
import Page from '@/hoc/hoc'
import TopContentRedLine from '@/components/TopContentRedLine'
import Feedback from './Feedback'
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { pathname } from '@/path'

export default {
  name: "Catalog",
  setup() {
    const store = useStore()
    const path = ref(pathname)
    const isOpen = ref(true)

    const toggleIsOpen = () => {
      isOpen.value = !isOpen.value
    }

    const toggleIsModalOpen = () => store.commit('toggleIsModalOpen')

    onMounted(() => {
      console.log('localStorage >>> ', JSON.parse(localStorage.getItem('page'), null, 2));
    })

    return { path, isOpen, toggleIsOpen, toggleIsModalOpen }
  },
  components: {
    Page,
    TopContentRedLine,
    Feedback
  }
}
</script>

<style>
@import url(./Catalog.css);
</style>