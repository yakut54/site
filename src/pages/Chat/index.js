import { createApp } from 'vue'
import Chat from './Chat.vue'
import { store } from '../../store'

createApp(Chat)
  .use(store)
  .mount('#app')