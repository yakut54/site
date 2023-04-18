import { createApp } from 'vue'
import Gifts from './Gifts.vue'
import { store } from '../../store'
import VueTheMask from 'vue-the-mask'

createApp(Gifts)
  .use(store)
  .use(VueTheMask)
  .mount('#app')