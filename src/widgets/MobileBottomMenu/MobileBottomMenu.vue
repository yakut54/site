<template>
  <div class="mobile-bottom-menu show_1025_f">
    <div class="inner-mobile-menu">
      <div class="bottom-btn left_" @click="leftOpen">Спецпредложения</div>
      <div class="bottom-btn right_" @click="rightOpen">Это интересно</div>
    </div>
    <div class="bottom-menu">
      <div class="left-curtain curtain" :class="{'active': leftIsOpen}">
        <div class="bottom-btn"><a href="gifts.html">3 подарка</a></div>
        <div class="bottom-btn">Сеанс недели</div>
        <div class="bottom-btn">Технология месяца</div>
        <div class="bottom-btn">Бестселлеры</div>
        <div class="bottom-btn">Новинки</div>
        <div class="bottom-btn">Вкусная распродажа</div>
      </div>
      <div class="right-curtain curtain" :class="{'active': rightIsOpen}">
        <div class="bottom-btn">Гипнотические заговоры</div>
        <div class="bottom-btn">Нейрокорректоры</div>
        <div class="bottom-btn">Метахилинг</div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'MobileBottomMenu',
  setup(){
    const store = useStore()
    const leftIsOpen = computed(() => store.state.menu.leftIsOpen)
    const rightIsOpen = computed(() => store.state.menu.rightIsOpen)

    const leftOpen = () => store.commit('leftOpen')
    const rightOpen = () => store.commit('rightOpen')

    return {
      leftIsOpen, rightIsOpen, leftOpen, rightOpen
    }
  }
}
</script>


<style>
@import url(./MobileBottomMenu.css);
</style>