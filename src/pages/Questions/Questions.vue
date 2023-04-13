<template>
  <div class="page">
    <Page>
      <TopContentRedLine :title="'Частые вопросы'" :link="'index.html'"/>
    </Page>
  </div>
</template>

<script>
import Page from '@/hoc/hoc'
import TopContentRedLine from '@/components/TopContentRedLine'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { pathname } from '@/path'

export default {
  name: "Questions",
  setup() {
    const store = useStore()
    const path = ref(pathname)

    return { path }
  },
  components: { Page, TopContentRedLine }
}
</script>

<style>
@import url(./Questions.css);
</style>