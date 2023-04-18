<template>
  <div class="inner-modal-account">
    <img src="@/assets/images/close.png" alt="" class="modal-close" @click="toggleIsModalAccountOpen">

    <div class="modal-account-title">{{ !isRegister ? 'ВХОД В ЛИЧНЫЙ КАБИНЕТ' : 'РЕГИСТРАЦИЯ' }}</div>


    <div class="row selection-phone-row">
      <div @click="togglePhone(false)" :class="isPhone ? `select-register active` : `select-register`">По номеру телефона</div>
      <div :class="!isPhone ? `select-register active` : `select-register`" @click="togglePhone(true)">По email</div>
    </div>

    <Loader v-if="isLoader" />

    <div class="modal-account-form" v-else>
      <div v-if="!isPhone">
        <p class="modal-account-paragraph">Номер телефона</p>
        <div class="phone-block">

          <div class="phone-block-right">
            <input 
              ref="input"
              type="text"
              class="ar"
              @keyup.enter="sendPhone"
              placeholder="Введите телефон"
              v-mask="'+7 (9##) ###-##-##'"
              v-model="tel">
          </div>

          <div class="paragraph-14 mb10" v-if="isRegister">
            Нажимая кнопку "Зарегистрироваться", Вы соглашаетесь <br>
            c условиями <span class="link" @click="toggleIsModalSecurityPolicyOpen">политики конфиденциальности</span>
          </div>
        </div>


        <span :class="tel.length < 18 ? 'phone-btn disabled' : 'phone-btn'" @click="sendPhone">{{isRegister ? 'Зарегистрироваться' : 'Войти'}}</span>
      </div>

      <div v-else>
        <p class="modal-account-paragraph">Введите email</p>
        <div class="phone-block">

          <div class="phone-block-right">
            <input 
              type="text" 
              class="ar" 
              placeholder="Введите email" 
              v-model="email"
              @keyup.enter="sendEmail"
              @input="validate($event)">
          </div>

          <div class="paragraph-14 mb10" v-if="isRegister">
            Нажимая кнопку "Зарегистрироваться", Вы соглашаетесь <br>
            c условиями <span class="link" @click="toggleIsModalSecurityPolicyOpen">политики конфиденциальности</span>
          </div>
        </div>

        <span :class="!IsValidate ? 'phone-btn disabled' : 'phone-btn'" @click="sendEmail">{{isRegister ? 'Зарегистрироваться' : 'Войти'}}</span>
      </div>

      <div class="paragraph center cu">
        <span @click="toggleRegster(false)" :class="!isRegister ? '' : 'aeb selection'">
          Вход</span> |
        <span @click="toggleRegster(true)" :class="isRegister ? '' : 'aeb selection'">
          Регистрация</span>
      </div>
    </div>


  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'
import { validateEmail } from './validateEmail'
import Loader from '@/widgets/Loader/Loader'

export default {
  name: "RegisterModal",
  setup() {
    const store = useStore()
    const isLoader = computed(() => store.state.isLoader)
    const toggleIsModalAccountOpen = () => store.commit('toggleIsModalAccountOpen')
    const toggleIsModalSecurityPolicyOpen = () => store.commit('toggleIsModalSecurityPolicyOpen')
    const input = ref(null)

    const isRegister = ref(true)
    const toggleRegster = bool => {isRegister.value = bool}

    const tel = ref('+7')
    const email = ref('')

    const isPhone = ref(false)
    const togglePhone = bool => isPhone.value = bool

    const IsValidate = ref(false)
    const validate = (e) => {
      if (validateEmail(e.target.value)) {
        if (!/@(ukr.net?|icloud.com?)$/.test(e.target.value)) {
          IsValidate.value = true
        } else {
          IsValidate.value = false
        }
      } else {
        IsValidate.value = false
      }
    }

    const sendPhone = () => {
      if (tel.value.length >= 18) {
        store.commit('setPhoneString', tel.value)
        store.commit('setPhoneNumber', Number(tel.value.replace(/\D/g, '').substring(1)))
        store.commit('setWay', 'phone')

        store.dispatch('sendPhone', Number(tel.value.replace(/\D/g, '').substring(1)))
      }
    }

    const sendEmail = () => {
      if (IsValidate.value) {
        store.commit('setEmail', email.value)
        store.commit('setWay', 'email')

        store.dispatch('sendEmail', email.value)
      }
    }

    onMounted(() => {
      input.value.focus()
    })

    return {
      tel,
      email,
      input,
      isPhone,
      isLoader,
      isRegister,
      IsValidate,
      validate,
      sendPhone,
      sendEmail,
      togglePhone,
      toggleRegster,
      toggleIsModalAccountOpen,
      toggleIsModalSecurityPolicyOpen
    }
  },
  components: { Loader }
}
</script>