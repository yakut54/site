<template>
  <div class="modal ar" v-if="isModalWarrantyOpen">
    <div class="modal-warranty">
      <img src="@/assets/images/close.png" alt="" class="modal-close" @click="toggleIsModalWarrantyOpen">
      <div class="modal-warranty-title">ДВОЙНАЯ ГАРАНТИЯ</div>
      
      <div class="row">
        <div class="modal-warranty-left">
          <div class="warranty-red-text">Гарантия по закону РФ</div>
          <div class="warranty-text">
            По закону о защите прав потребителя <br>
            в течение 14 дней с момента покупки <br>
            вы имеете право вернуть свои деньги <br>
            в полном размере
          </div>
        </div>
        <div class="modal-warranty-right">
          <div class="warranty-red-text">Усиленная Гарантия</div>
          <div class="warranty-text">
            Гарантия на сеансы и программы проекта Marta-NG действует в течение 1 года. <br><br>
            
            В этом сроке в любое время можно предъявить <br>
            требование о возврате средств, оплаченных <br>
            за сеансы и программы проекта Marta-NG<br class="br"><br class="br">
            
            Требование выполняется безоговорочно, <br>
            без запроса на объяснение причин.<br class="br"><br class="br">
            
            Возврат средств по гарантии осуществляется <br>
            в течение 5 дней с момента предъявления требования.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: "Warranty",
  setup() {
    const store = useStore()
    const isModalWarrantyOpen = computed(() => store.state.modal.isModalWarrantyOpen)
    const toggleIsModalWarrantyOpen = () => store.commit('toggleIsModalWarrantyOpen')

    return { isModalWarrantyOpen, toggleIsModalWarrantyOpen }
  },
}
</script>