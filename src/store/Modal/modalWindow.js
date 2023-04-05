export default {
  state: () => ({
    isModalOpen: false,
    isModalAccountOpen: false,
  }),
  mutations: {
    toggleIsModalOpen: state => state.isModalOpen = !state.isModalOpen,
    toggleIsModalAccountOpen: state => state.isModalAccountOpen = !state.isModalAccountOpen
  },
}