import { createApp } from 'vue'
import Chat from './Chat.vue'
import { store } from '../../store'
import VueTheMask from 'vue-the-mask'

createApp(Chat)
  .use(store)
  .use(VueTheMask)
  .mount('#app')