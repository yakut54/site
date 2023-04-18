import { createApp } from 'vue'
import Orders from './Orders.vue'
import { store } from '../../store'
import VueTheMask from 'vue-the-mask'

createApp(Orders)
  .use(store)
  .use(VueTheMask)
  .mount('#app')