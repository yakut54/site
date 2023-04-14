<template>
  <div class="modal ar" v-if="isModalOpen">
    <div class="modal-feedback">
      <img src="@/assets/images/close.png" alt="" class="modal-close" @click="toggleIsModalOpen">

      <div class="feedback-item">
        <p class="feedback-paragraph">
          Марта, хочу выразить вам свою благодарность за ваш канал, за ваши чудесные подарки, за ваш труд, за ваши"
          рабочие" аффирмации и гипнотические сеансы, за ваше приложение "Женский журнал ". Пользуюсь вашими продуктами
          второй год и каждый раз радуюсь качеству и подачи материала. Марта, хочу выразить вам свою благодарность за ваш
          канал, за ваши чудесные подарки, за ваш труд, за ваши" рабочие" аффирмации и гипнотические сеансы, за ваше
          приложение "Женский журнал ". Пользуюсь вашими продуктами второй год и каждый раз радуюсь качеству и подачи
          материала.
        </p>
        <p class="paragraph right">Гульнара Барахатова</p>
      </div>
      <div class="feedback-item">
        <p class="feedback-paragraph">
          Марта, хочу выразить вам свою благодарность за ваш канал, за ваши чудесные подарки, за ваш труд, за ваши"
          рабочие" аффирмации и гипнотические сеансы, за ваше приложение "Женский журнал ". Пользуюсь вашими продуктами
          второй год и каждый раз радуюсь качеству и подачи материала.
        </p>
        <p class="paragraph right">Вася Ветров</p>
      </div>

      <div class="feedback-textarea">
        <textarea placeholder="Оставьте здесь свой отзыв" class="ar"></textarea>
        <div class="feedback-submit"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: "Feedback",
  setup() {
    const store = useStore()
    const isModalOpen = computed(() => store.state.modal.isModalOpen)
    const toggleIsModalOpen = () => store.commit('toggleIsModalOpen')

    return { isModalOpen, toggleIsModalOpen }
  },
}
</script>