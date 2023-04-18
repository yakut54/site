<template>
  <div class="page">
    <Page>
      <TopContentRedLine :title="'Частые вопросы'" :link="'index.html'" />

      <div class="questions-akk">


        <div class="questions-akk-item" v-for="(item, idx) in questions_" :key="item.title">

          <div :class="item.isOpen ? 'questions-akk-top active' : 'questions-akk-top'" @click="toggleOpen(idx)">
            <div class="questions-akk-title" v-html="item.title"></div>
            <div class="questions-akk-cross">
              <div class="cross">
                <div class="cross-x"></div>
                <div class="cross-y"></div>
              </div>
            </div>
          </div>
          <transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
            <div class="questions-akk-bottom" v-show="item.isOpen">
              <div class="inner-questions-akk-bottom">
                <div class="paragraph" v-html="item.text"></div>
              </div>
            </div>
          </transition>

        </div>
      </div>

      <Teleport to="body">
        <Warranty />
      </Teleport>

    </Page>
  </div>
</template>

<script>
import Page from '@/hoc/hoc'
import TopContentRedLine from '@/components/TopContentRedLine'
import Warranty from './Warranty'
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { pathname } from '@/path'
import { questions } from './questions'

export default {
  name: "Questions",
  setup() {
    const store = useStore()
    const path = ref(pathname)
    const questions_ = ref(questions)

    const enter = (el) => {
      el.style.height = 'auto'
      const height = getComputedStyle(el).height
      el.style.height = 0
      getComputedStyle(el)
      setTimeout(() => el.style.height = height)
    }
    const afterEnter = (el) => {
      el.style.height = 'auto'
    }
    const leave = (el) => {
      el.style.height = getComputedStyle(el).height;

      getComputedStyle(el);
      setTimeout(() => {
        el.style.height = 0;
      });
    }

    const toggleOpen = (idx) => {
      if (questions_.value[idx].isOpen) {
        questions_.value[idx].isOpen = false
      } else {
        questions_.value.forEach(item => item.isOpen = false)
        questions_.value[idx].isOpen = !questions_.value[idx].isOpen
      }
    }


    const warranty = ref(null)
    const toggleIsModalWarrantyOpen = () => store.commit('toggleIsModalWarrantyOpen')

    onMounted(() => {
      warranty.value = document.querySelector('[data-warranty]')
      warranty.value.onclick = () => {
        toggleIsModalWarrantyOpen()
      }
    })

    return { path, questions_, enter, afterEnter, leave, toggleOpen }
  },
  components: { Page, TopContentRedLine, Warranty }
}
</script>

<style>
@import url(./Questions.css);

.expand-enter-active,
.expand-leave-active {
  transition: height .3s ease-in-out;
  overflow: hidden;
}
</style>