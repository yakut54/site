export default {
  state: () => ({
    isOverlay: false,
    isDropMenu: false,
    leftIsOpen: false,
    rightIsOpen: false,
  }),
  mutations: {
    toggleIsOverlay: (state, bool) => {
      console.log('toggleIsOverlay', bool);
      if (!bool) {
        state.leftIsOpen = false
        state.rightIsOpen = false
        state.isDropMenu = false
      }
      state.isOverlay = bool
    },
    toggleIsDropMenu: (state, bool) => {
      state.isDropMenu = bool
      if (state.leftIsOpen || state.rightIsOpen) {
        return
      }
      state.isOverlay = bool
    },
    leftOpen: state => {
      state.leftIsOpen = !state.leftIsOpen
      if (state.leftIsOpen || state.rightIsOpen) {
        state.isOverlay = true
      } else {
        if (state.isDropMenu) {
          return
        }
        state.isOverlay = false
      }
    },
    rightOpen: state => {
      state.rightIsOpen = !state.rightIsOpen
      if (state.leftIsOpen || state.rightIsOpen) {
        state.isOverlay = true
      } else {
        if (state.isDropMenu) {
          return
        }
        state.isOverlay = false
      }
    }
  },
}