<template>
  <div class="page about-page">
    About
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "About",
  setup() {
    const store = useStore()

    return { };
  },
};
</script>


<style>
@import url(@/assets/css/styles.css);
</style>