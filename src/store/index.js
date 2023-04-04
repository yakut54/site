import { createStore } from 'vuex'
import menu from './Menu/menu'

export const store = createStore({
  state: () => ({
    isModalOpen: false
  }),
  mutations: {
    toggleIsModalOpen: state => state.isModalOpen = !state.isModalOpen
  },
  modules: {
    menu
  }
})
