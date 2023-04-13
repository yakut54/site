export default {
  state: () => ({
    isModalOpen: false,
    isModalAccountOpen: false,
    isModalOrdersOpen: false,
  }),
  mutations: {
    toggleIsModalOpen: state => state.isModalOpen = !state.isModalOpen,
    toggleIsModalAccountOpen: state => state.isModalAccountOpen = !state.isModalAccountOpen,
    toggleIsModalOrdersOpen: state => state.isModalOrdersOpen = !state.isModalOrdersOpen
  },
}