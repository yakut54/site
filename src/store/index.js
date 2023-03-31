import { createStore } from 'vuex'

export const store = createStore({
  state: () => ({
    isDropMenu: false
  }),
  mutations: {
    toggleIsDropMenu: (state, bool) => state.isDropMenu = bool
  }
})
