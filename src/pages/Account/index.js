import { createApp } from 'vue'
import Account from './Account.vue'
import { store } from '../../store'
import VueTheMask from 'vue-the-mask'

createApp(Account)
  .use(store)
  .use(VueTheMask)
  .mount('#app')