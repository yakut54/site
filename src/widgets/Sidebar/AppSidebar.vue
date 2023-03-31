<template>
  <aside>
    <div class="inner-aside">
      <div class="sidebar-slider">
        <template v-for="(item, idx) in slider_">
          <transition-group :name="transitionName">
            <a href="#" v-if="currentSlide === idx" class="slider-a">
              <img :src="`${path}/img/${item.img}`" alt="" :key="item" class="slider-a-img">
            </a>
          </transition-group>
        </template>
      </div>

      <div class="sidebar-content">
        <div class="sidebar-title">Топ-20 постов</div>
        <div class="sidebar-red-line"></div>
        <a href="#" class="sidebar-link active">Феноменальный шепоток</a>
        <a href="#" class="sidebar-link">Синдром самозванки</a>
        <a href="#" class="sidebar-link">Смотри только в свою тарелку</a>
        <a href="#" class="sidebar-link">Как я напоролась на активную могилу</a>
        <a href="#" class="sidebar-link">Взгляни, это с тобой резонирует?</a>
        <a href="#" class="sidebar-link">Интересно, зачем люди медитируют?</a>
        <a href="#" class="sidebar-link">Молитва на воде</a>
        <a href="#" class="sidebar-link">Снова встать на каблуки</a>
        <a href="#" class="sidebar-link">Как я беседовала с платьем в горошек</a>
        <a href="#" class="sidebar-link">Я не могу похудеть</a>

        <a href="#" class="sidebar-link read-more">читать далее...</a>
      </div>
    </div>
  </aside>
</template>

<script>
import { ref } from 'vue'
import { pathname } from '@/path'
import { slider } from './SliderSidebar'

export default {
  name: 'AppSlider',
  setup() {
    const slider_ = ref(slider)
    const path = ref(pathname)

    const currentSlide = ref(0)
    const transitionName = ref('next2')
    const isClick = ref(true)
    const t = ref(2700)

    const dNext = () => {
      if (isClick.value) {
        transitionName.value = 'next2';
        isClick.value = false;
        currentSlide.value === slider_.value.length - 1
          ? currentSlide.value = 0
          : currentSlide.value++;
        setTimeout(() => isClick.value = true, t.value);
      }
    }

    setInterval(() => dNext(), t.value)

    return { slider_, currentSlide, transitionName, t, path }
  },

}
</script>

<style>
@import url(./Sidebar.css);

.next2-enter-active,
.next2-leave-active {
  transition: all .7s ease-in-out;
  position: absolute;
}

.next2-enter-from {
  opacity: 0;
}

.next2-leave-to {
  opacity: 0;
}
</style>