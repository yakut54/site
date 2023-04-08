<template>
  <div class="modal ar" v-if="isModalAccountOpen">
    <div class="modal-account">
      <img src="@/assets/images/close.png" alt="" class="modal-close" @click="toggleIsModalAccountOpen">

      <div class="modal-account-title">{{ !isAuth ? 'ВХОД В ЛИЧНЫЙ КАБИНЕТ' : 'РЕГИСТРАЦИЯ' }}</div>
      <div class="modal-account-form">
        <p class="modal-account-paragraph">Номер телефона</p>
        <div class="phone-block">
          <div class="phone-block-left">
            <select name="" id="" class="ar" v-model="code">
              <option value="+7">+7</option>
              <option value="+326">+326</option>
              <option value="+998">+998</option>
              <option value="+788">+788</option>
            </select>
          </div>
          <div class="phone-block-right">
            <input type="text" class="ar" placeholder="Введите телефон" v-mask="'(###) ###-##-##'" v-model="number">
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

    const code = ref('+7')
    const number = ref('')
    const tel = computed(() => code.value + ' ' + number.value)

    return { isModalAccountOpen, toggleIsModalAccountOpen, isAuth, toggleAuth, tel, code, number }
  },
}
</script>

<style>
@import url(./AccountModal.css);
</style>