import { createApp } from 'vue'
import About from './About.vue'
import { store } from '../../store'

createApp(About)
  .use(store)
  .use(VueTheMask)
  .mount('#app')