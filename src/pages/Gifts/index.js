import { createApp } from 'vue'
import Gifts from './Gifts.vue'
import { store } from '../../store'

createApp(Gifts)
  .use(store)
  .mount('#app')