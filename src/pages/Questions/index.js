import { createApp } from 'vue'
import Questions from './Questions.vue'
import { store } from '../../store'

createApp(Questions)
  .use(store)
  .mount('#app')