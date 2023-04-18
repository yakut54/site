export default {
  state: () => ({
    currentWindow: 'RegisterModal',
    way: 'phone',
    phoneString: '',
    phoneNumber: 0,
    email: '',
    invalidCode: false,
  }),
  mutations: {
    setPhoneString: (state, phoneString) => state.phoneString = phoneString,
    setPhoneNumber: (state, phoneNumber) => state.phoneNumber = phoneNumber,
    setEmail: (state, email) => state.email = email,
    setWay: (state, way) => state.way = way,
    setCurrentWindow: (state, currentWindow) => state.currentWindow = currentWindow,
    toggleInvalidCode: (state, bool) => state.invalidCode = bool,
  },
  actions: {
    sendPhone: async ({ commit, state }, phone) => {
      commit('toggleIsLoader', true)
      const sendData = JSON.stringify({
        request_type: 'send_phone',
        phone: phone
      }, null, 2)

      console.log('sendPhone >> ', sendData)

      setTimeout(() => {
        commit('toggleIsLoader', false)
        commit('setCurrentWindow', 'EnterCodeModal')
      }, 500)
    },
    sendEmail: async ({ commit, state }, email) => {
      commit('toggleIsLoader', true)
      const sendData = JSON.stringify({
        request_type: 'send_email',
        email: email
      }, null, 2)

      console.log('sendEmail >> ', sendData)

      setTimeout(() => {
        commit('toggleIsLoader', false)
        commit('setCurrentWindow', 'EnterCodeModal')
      }, 500)
    },
    sendCode: async ({ commit, state }, code) => {
      commit('toggleIsLoaderBtn', true)
      const sendData = JSON.stringify({
        request_type: 'send_code',
        code: code
      }, null, 2)

      console.log('sendCode >> ', sendData)

      setTimeout(() => {
        commit('toggleIsLoaderBtn', false)
        alert('Попадаем в личный кабинет')
        commit('toggleIsModalAccountOpen')
        commit('setCurrentWindow', 'RegisterModal')
        commit('setWay', 'phone')
      }, 500)
    },
  }
}