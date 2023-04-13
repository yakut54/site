import { createApp } from 'vue'
import Account from './Account.vue'
import { store } from '../../store'

createApp(Account)
  .use(store)
  .mount('#app')