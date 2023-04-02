<template>
  <div class="page home-page">
    <AppHeader />

    <div class="max1200 row">
      <AppSidebar />
      <div class="content">
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
                  <p v-html="item.text"></p>
                </div>
                <div class="wrap-item-btn"><a :href="item.link" class="item-btn">Подробнее →</a></div>
              </div>
            </div>
          </div>


        </div>

      </div>
    </div>

    <AppFooter />
    <MobileBottomMenu />
    <Overlay />

  </div>
</template>

<script>
import { ref } from 'vue'
import { pathname } from '@/path'
import { MainPage } from './MainPage'
import AppHeader from '@/widgets/Header/AppHeader'
import AppSidebar from '@/widgets/Sidebar/AppSidebar'
import AppFooter from '@/widgets/Footer/AppFooter'
import Overlay from '@/widgets/Overlay/Overlay'
import MobileBottomMenu from '@/widgets/MobileBottomMenu/MobileBottomMenu'

export default {
  name: "Home",
  setup() {
    const path = ref(pathname)
    const page = ref(MainPage)

    return { path, page }
  },
  components: { AppHeader, AppSidebar, AppFooter, MobileBottomMenu, Overlay }
}
</script>

<style>
@import url(@/assets/css/styles.css);
</style>
