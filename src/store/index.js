import { createStore } from 'vuex'
import menu from './Menu/menu'
import modal from './Modal/modalWindow'
import profile from './Profile/Profile'

export const store = createStore({
  state: () => ({
    isLoader: false,
    isLoaderBtn: false
  }),
  mutations: {
    toggleIsLoader: (state, bool) => state.isLoader = bool,
    toggleIsLoaderBtn: (state, bool) => state.isLoaderBtn = bool,
  },
  modules: {
    menu, 
    modal,
    profile
  }
})
