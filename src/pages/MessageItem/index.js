import { createApp } from 'vue'
import MessageItem from './MessageItem.vue'
import { store } from '../../store'
import VueTheMask from 'vue-the-mask'

createApp(MessageItem)
  .use(store)
  .use(VueTheMask)
  .mount('#app')