<template>
  <div class="modal ar" v-if="isModalAccountOpen">
    <div class="modal-account">
      <component :is="currentWindow"/>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import Loader from '@/widgets/Loader/Loader'
import RegisterModal from './RegisterModal'
import EnterCodeModal from './EnterCodeModal'

export default {
  name: "AccountModal",
  setup() {
    const store = useStore()
    const isLoader = computed(() => store.state.isLoader)
    const currentWindow = computed(() => store.state.profile.currentWindow)

    const isModalAccountOpen = computed(() => store.state.modal.isModalAccountOpen)
    const toggleIsModalAccountOpen = () => store.commit('toggleIsModalAccountOpen')
    
    return {
      isLoader,
      currentWindow,
      isModalAccountOpen, 
      toggleIsModalAccountOpen
    }
  },
  components: { Loader, RegisterModal, EnterCodeModal }
}
</script>

<style>
@import url(./AccountModal.css);
</style>