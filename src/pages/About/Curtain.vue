<template>
  <div 
    @mouseenter="onEnter"
    @mouseleave="onLeave"
    :class="isCurtain ? 'about-curtain active' : 'about-curtain'"
  >
    <div class="top-curtain">
      <div class="top-curtain-title">Марта николаева-гарина</div>
      <ul class="top-curtain-list">
        <li><div class="top-curtain-list-text">Психотерапевт</div></li>
        <li><div class="top-curtain-list-text">Психолингвист</div></li>
        <li><div class="top-curtain-list-text">Гипнолог</div></li>
        <li><div class="top-curtain-list-text">Энерготерапевт</div></li>
      </ul>
      <div class="top-curtain-text">Ей можно доверять:</div>
      <ul class="top-curtain-list">
        <li><div class="top-curtain-list-text">Более 2 млн. подписчиков</div></li>
        <li><div class="top-curtain-list-text">Более 200 тыс. клиентов</div></li>
      </ul>
    </div>
    <div class="bottom-curtain"></div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  setup(){
    const isCurtain = ref(false)
    const width = ref(0)
    const onEnter = () => width.value > 800 ? isCurtain.value = true : null
    const onLeave = () => width.value > 800 ? isCurtain.value = false : null

    onMounted(() => {
      width.value = document.documentElement.clientWidth
    })

    return {isCurtain, onEnter, onLeave}
  }
}
</script>