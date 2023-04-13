import { createStore } from 'vuex'
import menu from './Menu/menu'
import modal from './Modal/modalWindow'

export const store = createStore({
  state: () => ({
    
  }),
  mutations: {
    
  },
  modules: {
    menu, 
    modal
  }
})
