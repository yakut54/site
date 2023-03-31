<template>
  <header>
    <AppNavbar />
    <AppSlider />
    <RedLine />
    <RunningLine />
  </header>
</template>

<script>

import AppNavbar from '@/widgets/Navbar/AppNavbar'
import AppSlider from '@/widgets/Slider/AppSlider'
import RedLine from '@/widgets/RedLine/RedLine'
import RunningLine from '@/widgets/RunningLine/RunningLine'

export default {
  components: {
    AppNavbar,
    AppSlider,
    RedLine,
    RunningLine
  },
}
</script>