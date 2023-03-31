<template>
  <div class="header-slider">
    <template v-for="(item, idx) in slData" :key="idx">

      <transition-group :name="transitionName">
        <div
          class="slider-item"
          v-if="currentSlide === idx"
          :class="[`slider-type-${idx}`]"
          @touchend="touchend($event)" 
          @touchstart="touchstart($event)"
          :style="{backgroundImage: clientWidth(item)}"
        >
          <div class="max1200 slider-content" v-if="idx === 0">
            <FirstSlide />
          </div>
          <div class="max1200 slider-content" v-else>

            <div v-if="item.type === 1" class="inner-slider-content">
              <div class="slider-black-text" v-html="item.black_text"></div>
              <div class="slider-red-text" v-html="item.red_text"></div>
              <div class="slider-yellow-text" v-html="item.yellow_text"></div>
              <div class="slider-gragient-line"></div>
              <a :href="item.link" class="slider-link">Подробнее &gt;&gt;&gt;</a>
            </div>

            <a v-if="item.type === 2" class="inner-slider-content" :href="item.link"></a>

            <div v-if="item.type === 3" class="inner-slider-content">
              <div class="slider-yellow-text" v-html="item.yellow_text"></div>
              <div class="slider-red-text" v-html="item.red_text"></div>
              <div class="slider-gragient-line"></div>
              <a :href="item.link" class="slider-link">Читать &gt;&gt;&gt;</a>
            </div>

            <div v-if="item.type === 4" class="inner-slider-content">
              <div class="slider-yellow-text" v-html="item.yellow_text"></div>
              <div class="slider-red-text big-red-text" v-html="item.red_text"></div>
              <div class="slider-black-text" v-html="item.black_text"></div>
              <div class="slider-gragient-line"></div>
              <a :href="item.link" class="slider-link">Установить &gt;&gt;&gt;</a>
            </div>

          </div>
        </div>
      </transition-group>

    </template>

    <div class="sl-buttons">
      <div class="sl-inner-btns">
        <div
          class="sl-dot-btn"
          :class="dotActive(idx)"
          v-for="(_, idx) in slData"
          @click="btnDot(idx)"
        ></div>
      </div>
    </div>

  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { slider } from './Slider'
import { pathname } from '@/path'
import FirstSlide from './FirstSlide'

export default {
  name: 'AppSlider',
  setup() {
    const path = ref(pathname)
    const slData = reactive(slider)
    const currentSlide = ref(0)
    const transitionName = ref('next')
    const isClick = ref(true)
    const t = ref(700)
    const touchStartPx = ref(0)
    const touchEndPx = ref(0)

    const btnDot = (idx) => {
      idx > currentSlide.value ? transitionName.value = 'next' : transitionName.value = 'prev';
      if (isClick.value) {
        isClick.value = false;
        currentSlide.value = idx;
        setTimeout(() => isClick.value = true, t.value);
      }
    }
    const dNext = () => {
      if (isClick.value) {
        transitionName.value = 'next';
        isClick.value = false;
        currentSlide.value === slData.length - 1
          ? currentSlide.value = 0
          : currentSlide.value++;
        setTimeout(() => isClick.value = true, t.value);
      }
    }
    const dPrev = () => {
      if (isClick.value) {
        transitionName.value = 'prev';
        isClick.value = false;
        currentSlide.value === 0
          ? currentSlide.value = slData.length - 1
          : currentSlide.value--;
        setTimeout(() => isClick.value = true, t.value);
      }
    }
    const dotActive = (idx) => {
      return idx === currentSlide.value ? 'active' : '';
    }
    const touchstart = (e) => {
      touchStartPx.value = e.changedTouches[0].clientX;
    }
    const touchend = (e) => {
      touchEndPx.value = e.changedTouches[0].clientX;
      touchEndPx.value > touchStartPx.value ? dPrev() : dNext();
    }


    const width = ref(0)
    
    const clientWidth = (item) => {
      if(item.type === 2){
        if(width.value <= 500){
          return `url(${path.value}/img/${item.background_mobile}`
        }
      }
      return `url(${path.value}/img/${item.background}`
    }

    const changedWidth = () => width.value = document.documentElement.clientWidth
    window.onresize = changedWidth
    changedWidth()


    return {
      slData, 
      currentSlide, transitionName, t, touchStartPx, touchEndPx, path, width,
      btnDot, dNext, dPrev, dotActive, touchstart, touchend, clientWidth
    }
  },
  components: { FirstSlide }
}
</script>

<style>
@import url(./Slider.css);

.next-enter-active,
.next-leave-active {
    transition: all .7s ease-in-out;
}
.next-enter-from {
    opacity: 0;
    transform: rotateX(90deg);
}
.next-leave-to {
    opacity: 0;
    transform: rotateX(-90deg);
}

.prev-enter-active,
.prev-leave-active {
    transition: all .7s ease;
}
.prev-enter-from {
    opacity: 0;
    transform: rotateX(-90deg);
}
.prev-leave-to {
    opacity: 0;
    transform: rotateX(90deg);
}
@media(max-width: 801px){
    .next-enter-from {
        transform: translateX(100%);
    }
    .next-leave-to {
        transform: translateX(-100%);
    }

    .prev-enter-from {
        transform: translateX(-100%);
    }
    .prev-leave-to {
        transform: translateX(100%);
    }
}
</style>