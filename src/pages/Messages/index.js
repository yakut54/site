import { createApp } from 'vue'
import Messages from './Messages.vue'
import { store } from '../../store'
import VueTheMask from 'vue-the-mask'

createApp(Messages)
  .use(store)
  .use(VueTheMask)
  .mount('#app')