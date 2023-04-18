import { createApp } from 'vue'
import Questions from './Questions.vue'
import { store } from '../../store'
import VueTheMask from 'vue-the-mask'

createApp(Questions)
  .use(store)
  .use(VueTheMask)
  .mount('#app')