import axios from 'axios'

export default {
  namespaced: true,
  state: {
    user: {}
  },

  getters: {
    user: state => state.user
  },

  mutations: {
    user: function (state, user) {
      state.user = user
    }
  },

  actions: {
    userSubmit: function ({ commit }, data) {
      return axios.post('/api/v1/user/', data.user).then(function () {
        commit('user', data.user)
      })
    },
    getUser: function () {
    }
  }
}
