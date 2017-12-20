import * as types from '../mutation-types'

const state = {
  isOnline: navigator.onLine || true
}

const actions = {
  connexionChange ({ commit }) {
    navigator.onLine ? commit(types.ONLINE) : commit(types.OFFLINE)
  }
}

const mutations = {
  [types.ONLINE] (state) {
    state.isOnline = true
  },
  [types.OFFLINE] (state) {
    state.isOnline = false
  }
}

export default {
  state,
  actions,
  mutations
}
