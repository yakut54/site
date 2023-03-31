<template>
  <div class="overlay" v-if="isDrop" @click="toggleIsDrop(!isDrop)"></div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Navbar',
  setup(){
    const store = useStore()
    const isDrop = computed(() => store.state.isDropMenu)
    const toggleIsDrop = bool => store.commit('toggleIsDropMenu', bool)

    return { isDrop, toggleIsDrop }
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