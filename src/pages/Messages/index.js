import { createApp } from 'vue'
import Messages from './Messages.vue'
import { store } from '../../store'

createApp(Messages)
  .use(store)
  .mount('#app')