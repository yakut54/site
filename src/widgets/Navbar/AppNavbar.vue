<template>

  <div class="mobile-navbar show_1025" :class="{'active': isDrop}">
    <NavbarContent />
  </div>

  <div class="descktop-navbar">
    <div class="inner-descktop-navbar">
      <div class="logotip">
        <img src="@/assets/images/logotip.png" alt="" />
      </div>
      <div class="navbar">
        <div class="left-navbar">
          <a href="#" class="left-navbar-link">
            <img src="@/assets/images/home.png" alt="" />
            <span class="span-katalog">Главная</span>
          </a>
          <a href="#" class="left-navbar-link">
            <img src="@/assets/images/msg.png" alt="" />
            <span class="span-katalog">Сообщения</span>
          </a>
          <a href="#" class="left-navbar-link">
            <img src="@/assets/images/gift.png" alt="" />
            <span class="span-katalog">Бесплатно</span>
          </a>
          <DescktopNavbar />
          <div class="left-navbar-link navbar-katalog-btn show_1025_f" @click="toggleIsDrop(!isDrop)">
            <img src="@/assets/images/katalog.png" alt="" />
            <span class="span-katalog">Каталог</span>
            <span class="navbar-katalog-coner">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.67" stroke-linecap="round"
                  stroke-linejoin="round"></path>
              </svg>
            </span>
          </div>
        </div>
        <div class="right-navbar">
          <div class="search-left">
            <input type="text" class="search-input">
            <div class="loupe"></div>
          </div>
          <div class="search-right">
            <button class="lk-btn ar"><span class="hide_600">Личный кабинет</span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import DescktopNavbar from './DescktopNavbar'
import NavbarContent from './NavbarContent'

export default {
  name: 'Navbar',
  setup(){
    const store = useStore()
    const isDrop = computed(() => store.state.menu.isDropMenu)
    const toggleIsDrop = bool => store.commit('toggleIsDropMenu', bool)

    return { isDrop, toggleIsDrop }
  },
  components: { DescktopNavbar, NavbarContent }
}
</script>

<style>
@import url(./Navbar.css);
</style>
