import { createApp } from 'vue'
import Catalog from './Catalog.vue'
import { store } from '../../store'
import VueTheMask from 'vue-the-mask'

createApp(Catalog)
  .use(store)
  .use(VueTheMask)
  .mount('#app')