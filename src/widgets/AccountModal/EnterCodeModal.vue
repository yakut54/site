<template>
  <div class="inner-modal-account">
    <img src="@/assets/images/close.png" alt="" class="modal-close" @click="close">

    <div class="modal-account-title">ВВЕДИТЕ КОД ПОДТВЕРЖДЕНИЯ</div>

    <div class="selection-phone-row-column">
      <div class="paragraph center">
        Код подтверждения отправлен <br>
        {{ way === 'phone' ? 'на указанный номер в смс сообщении:' : 'на указанный email' }}
      </div>
      <div class="paragraph-20 center">{{ way === 'phone' ? `${phoneString}` : email }}</div>
    </div>

    <div class="code-input-row">
      <div class="code-input-left">
        <input 
          type="text" 
          :class="invalidCode ? `input ar ivalid` : `input ar`" 
          placeholder="Код подтверждения" 
          v-mask="'######'" 
          @keyup.enter="sendCode"
          @input="delInvalide"
          ref="input"
          v-model="code"
        >
      </div>
      <div 
        :class="code.length === 6 ? `code-input-right` : `code-input-right disabled`" 
        @click="sendCode"
      >
        <LoaderBtn v-if="isLoaderBtn" />
        <img v-else src="@/assets/images/otzyv.png" alt="" class="code-send-img">
      </div>
    </div>

    <div
      v-if="invalidCode"
      class="paragraph center mt10" 
      style="color: var(--main-color)"
    >
      Неверный код
    </div>

    <div class="paragraph center mt10" v-if="isShowCodeText">
      <span v-if="time > 0">не пришёл код?<br class="br"></span>
      <span
        @click="sendRepeat"
        :class="time === 0 ? `link` : ``"
      >отправить повторно</span> <span v-if="time !== 0"
    >
        через <span class="code-timer">{{ time }} сек</span>
      </span>
    </div>

  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'
import Loader from '@/widgets/Loader/Loader'
import LoaderBtn from '@/widgets/Loader/LoaderBtn'

export default {
  name: "EnterCodeModal",
  setup() {
    const store = useStore()
    const way = computed(() => store.state.profile.way)
    const isLoader = computed(() => store.state.isLoader)
    const email = computed(() => store.state.profile.email)
    const isLoaderBtn = computed(() => store.state.isLoaderBtn)
    const phoneString = computed(() => store.state.profile.phoneString)
    const phoneNumber = computed(() => store.state.profile.phoneNumber)
    const invalidCode = computed(() => store.state.profile.invalidCode)
    const isShowCodeText = ref(false)
    const isClick = ref(false)
    const input = ref(null)
    const code = ref('')
    const time = ref(90)

    const sendRepeat = () => {
      if(isClick.value){
        if(way.value === 'phone'){
          store.dispatch('sendPhone', phoneNumber.value)
        } else {
          store.dispatch('sendEmail', email.value)
        }
        isClick.value = false
        time.value = 90
        timer()
      }
    }

    const close = () => {
      store.commit('toggleIsModalAccountOpen')
      store.commit('setCurrentWindow', 'RegisterModal')
      store.commit('setWay', 'phone')
    }

    const timer = () => {
      const interval = setInterval(() => {
        time.value--

        if (time.value === 0) {
          clearInterval(interval)
          isClick.value = true
        }
      }, 1000)
    }

    const sendCode = () => {
      if (code.value.length === 6) {
        store.dispatch('sendCode', Number(code.value))
      }
    }

    const delInvalide = () => {
      store.commit('toggleInvalidCode', false)
    }

    onMounted(() => {
      isShowCodeText.value = true
      input.value.focus()
      timer()
    })

    return {
      way,
      code,
      time,
      email,
      input,
      isLoader,
      isLoaderBtn,
      phoneString,
      invalidCode,
      isShowCodeText,
      close,
      sendCode,
      sendRepeat,
      delInvalide
    }
  },
  components: { 
    Loader, LoaderBtn 
  }
}
</script>

