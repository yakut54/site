import { createApp } from 'vue'
import Sale from './Sale.vue'
import { store } from '../../store'
import VueTheMask from 'vue-the-mask'

createApp(Sale)
  .use(store)
  .use(VueTheMask)
  .mount('#app')