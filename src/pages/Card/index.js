import { createApp } from 'vue'
import Card from './Card.vue'
import { store } from '../../store'
import VueTheMask from 'vue-the-mask'

createApp(Card)
  .use(store)
  .use(VueTheMask)
  .mount('#app')