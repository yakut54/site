import { createApp } from 'vue'
import Catalog from './Catalog.vue'
import { store } from '../../store'

createApp(Catalog)
  .use(store)
  .mount('#app')