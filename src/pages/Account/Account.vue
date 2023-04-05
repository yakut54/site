<template>
  <div class="page">
    <Page>
      <div class="bread-crumbs">
        <a class="bread-crumbs-item" href="#">
          <span class="bread-crumbs-title">Главная</span>
          <span class="bread-arrow"></span>
        </a>
        <a class="bread-crumbs-item" href="#">
          <span class="bread-crumbs-title">Личный кабинет</span>
          <span class="bread-arrow"></span>
        </a>
      </div>
      <TopContentRedLine :title="'ЛИЧНЫЙ КАБИНЕТ'" :link="'index.html'"/>

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
  name: "Account",
  setup() {
    const store = useStore()
    const path = ref(pathname)

    return { path }
  },
  components: { Page, TopContentRedLine }
}
</script>

<style>
@import url(./Account.css);
</style>