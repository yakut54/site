import { createApp } from 'vue'
import Home from './Home.vue'
import { store } from '../../store'
import VueTheMask from 'vue-the-mask'

createApp(Home)
  .use(store)
  .use(VueTheMask)
  .mount('#app')

