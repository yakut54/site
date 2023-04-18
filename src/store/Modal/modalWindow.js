export default {
  state: () => ({
    isModalOpen: false,
    isModalAccountOpen: false,
    isModalOrdersOpen: false,
    isModalWarrantyOpen: false,
    isModalSecurityPolicyOpen: false,
  }),
  mutations: {
    toggleIsModalOpen: state => state.isModalOpen = !state.isModalOpen,
    toggleIsModalAccountOpen: state => state.isModalAccountOpen = !state.isModalAccountOpen,
    toggleIsModalOrdersOpen: state => state.isModalOrdersOpen = !state.isModalOrdersOpen,
    toggleIsModalWarrantyOpen: state => state.isModalWarrantyOpen = !state.isModalWarrantyOpen,
    toggleIsModalSecurityPolicyOpen: state => state.isModalSecurityPolicyOpen = !state.isModalSecurityPolicyOpen
  },
}