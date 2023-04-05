<template>
  <div class="page">
    <Page>
      <div class="bread-crumbs">
        <a class="bread-crumbs-item" href="#">
          <span class="bread-crumbs-title">Главная</span>
          <span class="bread-arrow"></span>
        </a>
        <a class="bread-crumbs-item" href="#">
          <span class="bread-crumbs-title">Личный кабинет</span>
          <span class="bread-arrow"></span>
        </a>
      </div>
      <TopContentRedLine :title="'ЛИЧНЫЙ КАБИНЕТ'" :link="'index.html'" />

      <div class="row acc-row">
        <div class="account-left">
          <div class="account-wrap">
            <div class="account-title">Личные данные</div>
            <div class="border-red"></div>

            <div class="avatar-wrap">
              <div class="avatar">
                <img :src="img ? img : `${path}/img/telo-transformed.png`" alt="">
              </div>
              <label for="upload-photo" class="avatar-download"></label>
              <input @change="handler" accept="image/png, image/jpeg, image/jpg, image/gif" type="file" name="photo"
                id="upload-photo" />
            </div>
          </div>

          <div class="account-form">
            <div class="account-form-item">
              <label for="name" class="label">Ваше имя</label>
              <input type="text" id="name" class="input ar" placeholder="Ваше имя">
            </div>
            <div class="account-form-item">
              <label for="name" class="label">Ваша фамилия</label>
              <input type="text" id="name" class="input ar" placeholder="Ваша фамилия">
            </div>
            <div class="account-form-item">
              <label for="name" class="label">Ваш телефон</label>
              <input type="text" id="name" class="input ar" placeholder="Ваш телефон">
            </div>

            <span class="submit">Сохранить</span>
          </div>

        </div>
        <div class="account-right">
          <div class="buttons-block">
            <a class="account-btn active" href="#">Мой профиль</a>
            <a class="account-btn" href="orders.html">Мои заказы</a>
            <a class="account-btn" href="#">Мои сообщения</a>
            <span class="account-btn galka" @click="isOpen = !isOpen" :class="{ 'open': isOpen }">
              Помощь
            </span>

            <transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
              <div class="buttons-block-mini" v-show="isOpen">
                <a href="#" class="account-btn-mini">Чат с поддержкой</a>
                <a href="#" class="account-btn-mini">Позвонить в поддержку</a>
                <a href="#" class="account-btn-mini">Написать письмо</a>
                <a href="#" class="account-btn-mini">Частые вопросы</a>
              </div>
            </transition>

            <a class="account-btn" href="#">О проекте</a>
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

export default {
  name: "Account",
  setup() {
    const store = useStore()
    const path = ref(pathname)

    const isOpen = ref(true)

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


    const img = ref(null)

    const handler = e => {
      const { files } = e.target
      if (files[0].size > 500000) {
        alert('Файл не может превышать 512kb')
        return
      }
      const reader = new FileReader()
      reader.onload = e => img.value = e.target.result
      reader.readAsDataURL(files[0])
    }

    return { path, isOpen, enter, afterEnter, leave, handler, img }
  },
  components: { Page, TopContentRedLine }
}
</script>

<style>
@import url(./Account.css);

.expand-enter-active,
.expand-leave-active {
  transition: height .5s ease-in-out;
  overflow: hidden;
}
</style>