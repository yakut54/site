<template>
  <AppHeader />

  <div class="max1200 row wrapper">
    <AppSidebar />
    <div class="content">
      <slot></slot>
    </div>
  </div>

  <AppFooter />
  <MobileBottomMenu />
  <Overlay />
</template>

<script>
import AppHeader from '@/widgets/Header/AppHeader'
import AppSidebar from '@/widgets/Sidebar/AppSidebar'
import AppFooter from '@/widgets/Footer/AppFooter'
import Overlay from '@/widgets/Overlay/Overlay'
import MobileBottomMenu from '@/widgets/MobileBottomMenu/MobileBottomMenu'

export default {
  name: "Page",

  components: {
    AppHeader,
    AppSidebar,
    AppFooter,
    MobileBottomMenu,
    Overlay
  }
}
</script>

<style>
@import url(@/assets/css/styles.css);
</style>