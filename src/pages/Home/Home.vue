<template>
  <div class="page home-page">
    <Page>

      <div class="item-block row">
        <a href="/lifehacks/" class="home-banner-link">
          <img class="lifehacks-banner" :src="`${path}/img/livefuck.png`">
        </a>
        <a href="/top/" class="home-banner-link">
          <img class="lifehacks-banner" :src="`${path}/img/top-20.png`">
        </a>
      </div>

      <div class="row">
        <div class="home-item" v-for="item in page" :key="item.title">
          <div class="text">
            <h5 class="ael razum-h5-background" v-html="item.title"></h5>

            <div class="inner-home-item">
              <div>
                <div class="item-img">
                  <img :src="`${path}/img/${item.img}`" alt="" title="">
                </div>
                <p v-html="item.text" class="paragraph"></p>
              </div>
              <div class="wrap-item-btn"><a :href="item.link" class="item-btn">Подробнее →</a></div>
            </div>
          </div>
        </div>
      </div>

      <Teleport to="body">
        <AccountModal />
      </Teleport>

    </Page>
  </div>
</template>

<script>
import Page from '@/hoc/hoc'
import { onMounted, ref } from 'vue'
import { pathname } from '@/path'
import { MainPage } from './MainPage'

export default {
  name: "Home",
  setup() {
    const path = ref(pathname)
    const page = ref(MainPage)


    onMounted(() => {
      localStorage.setItem('page', JSON.stringify(page.value))
    })

    return { path, page }
  },
  components: { Page }
}
</script>

