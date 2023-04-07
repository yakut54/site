import { createApp } from 'vue'
import MessageItem from './MessageItem.vue'
import { store } from '../../store'

createApp(MessageItem)
  .use(store)
  .mount('#app')