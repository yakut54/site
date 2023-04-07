<template>
  <div class="page">
    <Page>
      <TopContentRedLine :title="'Чат с поддержкой'" :link="'index.html'"/>

      <div class="form">
        <label for="name" class="chat-label label ar">
          Ваше имя
        </label>
        <input type="text" id="name" placeholder="Ваше имя" class="input ar">
        <label for="name" class="chat-label label ar">
          Ваш email
        </label>
        <input type="text" id="email" placeholder="Ваш email" class="input ar">
        
        <label for="message" class="chat-label label ar">
          Ваше сообщение
        </label>
        <textarea name="" id="message" class="chat-textarea input ar" placeholder="Ваше сообщение"></textarea>

        <div class="row">
          <div class="chat-button-block-left">
            <span class="chat-button send">ОТПРАВИТЬ</span>
          </div>
          <div class="chat-button-block-right">
            <span class="chat-button cancel">ОТМЕНИТЬ</span>
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
  name: "Chat",
  setup() {
    const store = useStore()
    const path = ref(pathname)

    return { path }
  },
  components: { Page, TopContentRedLine }
}
</script>

<style>
@import url(./Chat.css);
</style>