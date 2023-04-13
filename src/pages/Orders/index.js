import { createApp } from 'vue'
import Orders from './Orders.vue'
import { store } from '../../store'

createApp(Orders)
  .use(store)
  .mount('#app')