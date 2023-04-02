<template>
  <div class="left-navbar-link navbar-katalog-btn hide_1025">
    <img src="@/assets/images/katalog.png" alt="" />
    <span class="span-katalog">Каталог</span>
    <span class="navbar-katalog-coner">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.67" stroke-linecap="round"
          stroke-linejoin="round"></path>
      </svg>
    </span>
    <NavbarContent />
  </div>
</template>

<script>
import NavbarContent from './NavbarContent'

export default {
  name: 'DescktopNavbar',
  components: { NavbarContent }
}
</script>
