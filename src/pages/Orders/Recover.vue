<template>
  <div class="modal ar" v-if="isModalOrdersOpen">
    <div class="modal-order row">
      <img src="@/assets/images/close.png" alt="" class="modal-close" @click="toggleIsModalOrdersOpen">

      <div class="modal-order-left">
        <div class="inner-modal-order-left"></div>
      </div>
      <div class="modal-order-right">
        <div class="paragraph">
          Для восстановления заказа на <br>
          <span class="bold-text-726">«Технология «Азбука Сна»</span> <br>
          обратитесь в службу клиентской поддержки <br>
          написав следующее сообщение:<br class="br"><br class="br">

          <em>«Хочу восстановить счёт № 21335433»</em><br class="br"><br class="br">
          
          одним из следующих способов:<br class="br">
          Написать в Whatsapp <a href="#" class="link-56">перейти</a><br class="br">
          Написать на почту <strong class="bold-text-725">info@marta-ng.com</strong><br class="br">
          Позвонить по номеру <a href="tel:88003507963"><strong class="bold-text-724 underline">8 800 350 79 63</strong></a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: "Recover",
  setup() {
    const store = useStore()
    const isModalOrdersOpen = computed(() => store.state.modal.isModalOrdersOpen)
    const toggleIsModalOrdersOpen = () => store.commit('toggleIsModalOrdersOpen')

    return { isModalOrdersOpen, toggleIsModalOrdersOpen }
  },
}
</script>