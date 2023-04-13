<template>
  <div class="modal ar" v-if="isModalAccountOpen">
    <div class="modal-account">
      <img src="@/assets/images/close.png" alt="" class="modal-close" @click="toggleIsModalAccountOpen">

      <div class="modal-account-title">{{ !isAuth ? 'ВХОД В ЛИЧНЫЙ КАБИНЕТ' : 'РЕГИСТРАЦИЯ' }}</div>
      <div class="modal-account-form">
        <p class="modal-account-paragraph">Номер телефона</p>
        <div class="phone-block">
          <div class="phone-block-left">
            <select name="" id="" class="ar">
              <option value="+7">+7</option>
              <option value="+326">+326</option>
              <option value="+998">+998</option>
              <option value="+788">+788</option>
            </select>
          </div>
          <div class="phone-block-right">
            <input type="text" class="ar" maxlength="256" name="name-2" data-name="Name 2" placeholder="(___) ___-__-__"
              id="name-2">
          </div>
        </div>

        <a href="account.html" class="phone-btn">Получить код</a>

        <div class="paragraph center cu">
          <span @click="toggleAuth" :class="!isAuth ? '' : 'aeb selection'">
            Вход</span> |
          <span @click="toggleAuth" :class="isAuth ? '' : 'aeb selection'">
            Регистрация</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  name: "ModalAccount",
  setup() {
    const store = useStore()
    const isModalAccountOpen = computed(() => store.state.modal.isModalAccountOpen)
    const toggleIsModalAccountOpen = () => store.commit('toggleIsModalAccountOpen')

    const isAuth = ref(false)
    const toggleAuth = () => isAuth.value = !isAuth.value

    return { isModalAccountOpen, toggleIsModalAccountOpen, isAuth, toggleAuth }
  },
}
</script>

<style>
@import url(./AccountModal.css);
</style>