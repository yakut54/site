<template>
  <div class="page">
    <Page>
      <TopContentRedLine :title="'3 апрельских подарка'" :link="'index.html'" />

      <div class="gift-card" v-for="item in gifts" :key="item.title">
        <div class="gift-card-title" v-html="item.title"></div>
        <div class="row">
          <div class="gift-card-content">
            <p class="paragraph" v-html="item.text"></p>
            <p class="paragraph-time center">
              Формат сеанса: <strong>{{ item.type }}</strong><br>
              Продолжительность: <strong>{{ item.duration }}</strong>
            </p>
          </div>
          <div class="gift-card-img">
            <img :src="`${path}/img/${item.img}`" alt="">
            <a :href="item.link" class="gift-a-btn">подробнее</a>
          </div>
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
import { Gifts } from './Gifts_3'

export default {
  name: "Gifts",
  setup() {
    const store = useStore()
    const path = ref(pathname)
    const gifts = ref(Gifts)

    return { path, gifts }
  },
  components: { Page, TopContentRedLine }
}
</script>

<style>
@import url(./Gifts.css);
</style>