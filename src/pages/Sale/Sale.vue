<template>
  <div class="page">
    <Page>
      <TopContentRedLine :title="'ВКУСНАЯ РАСПРОДАЖА'" :link="'index.html'"/>

      <div class="gift-card">
        <div class="gift-card-title">Сеанс Психокосметика. Пластика лица</div>
        <div class="row">
          <div class="sale-images">
            <img :src="`${path}/img/psihokosmetika.png`" alt="" class="sale-big-img">
            <img :src="`${path}/img/50.png`" alt="" class="sale-small-img">
          </div>
          <div class="sale-content"> 
            <div class="paragraph">
              Психокосметика – это удивительное изобретение. <br>
              Точнее, открытие. Его сделал самарский учёный,  <br>
              доктор психологических наук К.С.Лисецкий. Его  <br>
              открытие основано на знании одной особенностей  <br>
              человеческого мозга: оказывается, наш мозг способен  <br>
              работать как сила, изменяющая наши биогенетические  <br>
              программы. Это даёт возможность направлять мозг,  <br>
              чтобы он, ориентируясь на специальные команды,  <br>
              передавал определённые инструкции клеткам и целым  <br>
              системам организма. Так и получается эффект внешнего  <br>
              омоложения лица. И обычно он наглядный.
            </div>
            <div class="sale-buttons row">
              <div class="inner-sale-buttons">
                <span class="sale-btn" @click="toggleIsModalOpen">Посмотреть отзывы</span>
              </div>
              <div class="inner-sale-buttons">
                <a href="#" class="sale-btn sale-btn-link">Подробнее →</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="gift-card">
        <div class="gift-card-title">Сборник медитаций Формула Молитвы</div>
        <div class="row">
          <div class="sale-images">
            <img :src="`${path}/img/formula-molitvy2021.png`" alt="" class="sale-big-img">
            <img :src="`${path}/img/50.png`" alt="" class="sale-small-img">
          </div>
          <div class="sale-content"> 
            <div class="paragraph">
              Психокосметика – это удивительное изобретение. <br>
              Точнее, открытие. Его сделал самарский учёный,  <br>
              доктор психологических наук К.С.Лисецкий. Его  <br>
              открытие основано на знании одной особенностей  <br>
              человеческого мозга: оказывается, наш мозг способен  <br>
              работать как сила, изменяющая наши биогенетические  <br>
              программы. Это даёт возможность направлять мозг,  <br>
              чтобы он, ориентируясь на специальные команды,  <br>
              передавал определённые инструкции клеткам и целым  <br>
              системам организма. Так и получается эффект внешнего  <br>
              омоложения лица. И обычно он наглядный.
            </div>
            <div class="sale-buttons row">
              <div class="inner-sale-buttons">
                <span class="sale-btn" @click="toggleIsModalOpen">Посмотреть отзывы</span>
              </div>
              <div class="inner-sale-buttons">
                <a href="#" class="sale-btn sale-btn-link">Подробнее →</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#" class="card-link">← НАЗАД К РАЗДЕЛУ</a>


      <Teleport to="body">
        <Feedback />
      </Teleport>

    </Page>
  </div>
</template>

<script>
import Page from '@/hoc/hoc'
import TopContentRedLine from '@/components/TopContentRedLine'
import Feedback from '@/pages/Catalog/Feedback'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { pathname } from '@/path'

export default {
  name: "Sale",
  setup() {
    const store = useStore()
    const path = ref(pathname)
    
    const toggleIsModalOpen = () => store.commit('toggleIsModalOpen')

    return { path, toggleIsModalOpen }
  },
  components: { Page, TopContentRedLine, Feedback }
}
</script>

<style>
@import url(./Sale.css);
</style>