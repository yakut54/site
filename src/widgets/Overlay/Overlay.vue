<template>
  <div class="overlay" v-if="isOverlay" @click="toggleIsOverlay(!isOverlay)"></div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Navbar',
  setup(){
    const store = useStore()
    const isOverlay = computed(() => store.state.menu.isOverlay)
    const toggleIsOverlay = bool => store.commit('toggleIsOverlay', bool)


    return { isOverlay, toggleIsOverlay }
  },
}
</script>


<style>
.overlay{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, .7);
}
</style>