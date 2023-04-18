<template>
  <div class="page">
    <Page>
      <TopContentRedLine :title="'О проекте'" :link="'index.html'"/>

      <img src="@/assets/images/logotip.png" alt="" class="about-image">
      <div class="gradient-text-mini">
        <div class="inner-gradient-text-mini"><strong>16 марта 2011 года - дата основания проекта</strong></div>
      </div>

      <div class="about-text-24">
        За 12 лет существования проект <br>
        добился вот таких результатов:
      </div>

      <div class="about-row row">
        <div class="about-left">
          <AboutItem :title="'2 млн'" :subtitle="'подписчиков'" ref="about"/>
          <AboutItem :title="'200 000'" :subtitle="'Довольных клиентов'"/>
        </div>
        <div class="about-center">
          <Curtain />
        </div>
        <div class="about-right">
          <AboutItem :title="'БОЛЕЕ 150'" :subtitle="'Аудио и видеосеансов'"/>
          <AboutItem :title="'30'" :subtitle="'Авторских методик'"/>
        </div>
      </div>

      <div class="about-red-line">
        <div class="about-red-line-title">НАША КОМАНДА:</div>
      </div>

      <div class='team-row'>
        <div class='team-card' v-for="item in teamList" :key="item.name">
          <img :src="`${path}/img/${item.img}`" alt="" class="team-img">
          <div class="team-name">{{item.name}}</div>
          <div class="team-post" v-html="item.post"></div>
          <div class="team-sub" v-html="item.sub"></div>
        </div>
      </div>

      <div class="about-orange-block" data-about>
        <div class="about-orange-title">МЫ ЗНАЕМ И ЛЮБИМ СВОЁ ДЕЛО</div>
        <div class="about-orange-text">...И у нас ТАКИЕ клиенты, <br>что просто одно удовольствие</div>
      </div>

      <div class="about-slider">
        <div class="about-slider-top">
          <div class="left-slider-top"><div class="prev slider-arrow-btn" @click="dPrev"></div></div>
          <div class="center-slider-top">

            <template v-for="(item, idx) in slData" :key="idx">
              <transition-group :name="transitionName">
                <div
                  class="about-item-wrapper"
                  v-if="currentSlide === idx"
                  @touchend="touchend($event)"
                  @touchstart="touchstart($event)"
                >
                  <div class="about-slider-item about-sl-0" v-if="idx===0">
                    <div class="about-sl-0-text" data-about>
                      <span>ОТЗЫВЫ КЛИЕНТОВ <br>о продукции проекта Marta-NG</span>
                    </div>
                  </div>

                  <div :class="`about-slider-item about-sl-${idx + 1}`" v-else>
                    <div class="slider-item-title aeb">{{ item.name }}</div>
                    <div class="slider-item-text" v-html="item.text"></div>
                    <div class="slider-item-sub"><em v-html="item.sub"></em></div>
                  </div>
                </div>
              </transition-group>
            </template>

          </div>
          <div class="right-slider-top"><div class="next slider-arrow-btn" @click="dNext"></div></div>
        </div>
        <div class="about-slider-bottom">
          <div class="slider-bottom-dots">
            <div
              :class="dotActive(idx)"
              v-for="(_, idx) in slData"
              @click="btnDot(idx)"
              class="about-sl-dot"
            ></div>
          </div>
        </div>
      </div>
    </Page>
  </div>
</template>

<script>
import Page from '@/hoc/hoc'
import TopContentRedLine from '@/components/TopContentRedLine'
import AboutItem from './AboutItem'
import Curtain from './Curtain'
import { team } from './team'
import { onMounted, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { pathname } from '@/path'
import { fileReviews } from './reviews'

export default {
  name: "About",
  setup() {
    const store = useStore()
    const path = ref(pathname)
    const abouts = ref([])

    onMounted(() => {
      abouts.value = document.querySelectorAll('[data-about]')
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }

      const addClass = (target) => {
        target.classList.add('about-show')
      }
      const handler = elems => {
        elems.forEach(el => {
          if(el.intersectionRatio > 0){
            addClass(el.target)
          }
        })
      }

      const observer = new IntersectionObserver(handler, options)

      abouts.value.forEach(item => {
        observer.observe(item)
      })
    })

    const teamList = ref(team)

    const slData = reactive(fileReviews)
    const currentSlide = ref(0)
    const transitionName = ref('next3')
    const isClick = ref(true)
    const t = ref(700)
    const touchStartPx = ref(0)
    const touchEndPx = ref(0)

    const btnDot = (idx) => {
      idx > currentSlide.value ? transitionName.value = 'next3' : transitionName.value = 'prev3';
      if (isClick.value) {
        isClick.value = false;
        currentSlide.value = idx;
        setTimeout(() => isClick.value = true, t.value);
      }
    }
    const dNext = () => {
      if (isClick.value) {
        transitionName.value = 'next3';
        isClick.value = false;
        currentSlide.value === slData.length - 1
          ? currentSlide.value = 0
          : currentSlide.value++;
        setTimeout(() => isClick.value = true, t.value);
      }
    }
    const dPrev = () => {
      if (isClick.value) {
        transitionName.value = 'prev3';
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

    return { path, teamList, slData,
      currentSlide, transitionName, t, touchStartPx, touchEndPx,
      btnDot, dNext, dPrev, dotActive, touchstart, touchend
    }
  },
  components: { Page, TopContentRedLine, AboutItem, Curtain }
}
</script>

<style>
@import url(./About.css);
.next3-enter-active,
.next3-leave-active {
    transition: all .7s ease-in-out;
}
.next3-enter-from {
    transform: translateX(100%);
}
.next3-leave-to {
    transform: translateX(-100%);
}

.prev3-enter-active,
.prev3-leave-active {
    transition: all .7s ease;
}
.prev3-enter-from {
    transform: translateX(-100%);
}
.prev3-leave-to {
    transform: translateX(100%);
}
@media(max-width: 801px){
    .next3-enter-from {
        transform: translateX(100%);
    }
    .next3-leave-to {
        transform: translateX(-100%);
    }

    .prev3-enter-from {
        transform: translateX(-100%);
    }
    .prev3-leave-to {
        transform: translateX(100%);
    }
}
</style>