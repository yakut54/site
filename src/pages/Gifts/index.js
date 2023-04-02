import { createApp } from 'vue'
import About from './Gifts.vue'
import { store } from '../../store'

createApp(About)
  .use(store)
  .mount('#app')