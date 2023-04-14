<template>
  <div class="about-item" data-about>
    <div class="about-line"></div>
    <div class="about-item-text-block">
      <div class="gradient-text">
        <div class="inner-gradient-text aeb">{{ title }}</div>
      </div>
      <div class="about-item-text">{{ subtitle }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle']
}
</script>