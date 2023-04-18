import { createApp } from 'vue'
import About from './About.vue'
import { store } from '../../store'
import VueTheMask from 'vue-the-mask'

createApp(About)
  .use(store)
  .use(VueTheMask)
  .mount('#app')