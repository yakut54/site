<template>
  <div class="navbar-katalog-content">
    <div class="inner-navbar-katalog-content">

      <div :key="idx" v-for="(_, idx) in NAV" class="katalog-content-col">
        <a 
          :href="item.link" 
          :key="i * Math.random()" 
          class="row katalog-button"
          v-for="(item, i) in NAV[idx]" 
        >
          <img alt="" class="img-katalog-button" :src="`${path}${item.img}`">
          <div class="inner-katalog-button">
            <span class="inner-span-katalog" v-html="item.name"></span>
            <span class="flag-wrapper">
              <span v-if="item.hit" class="hit-span">ХИТ</span>
              <span v-if="item.new" class="new-span">NEW</span>
            </span>
          </div>
        </a>
      </div>

    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { navbar, delimetr } from './Navbar'
import { pathname } from '@/path'

export default {
  name: 'NavbarContent',
  setup() {
    const NAV = ref(delimetr(navbar))
    const path = ref(pathname)

    return { NAV, path }
  },

}
</script>

<style>
@import url(./Navbar.css);
</style>