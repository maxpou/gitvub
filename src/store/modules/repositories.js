import * as repositoriesApi from '../../api/repositories'
import * as types from '../mutation-types'

// initial state
const state = {
  repositories: [],
  nextPage: 1,
  isLastPage: true
}

const getters = {
  currentUserRepositories: (state) => state.repositories,
  isFullyLoaded: (state) => state.isLastPage
}

const actions = {
  async loadUserRepositories ({ commit }, username) {
    commit(types.INIT_USER_REPOS)
    const repositories = await repositoriesApi.getRepositories(username)
    commit(types.RECEIVE_REPOSITORIES, repositories)
  }
  // async loadMoreRepositories ({ commit, state }, username) {
  //   commit(types.FETCH_USER_REPOS)
  //   const repositories = await repositoriesApi.getRepositories(username, state.nextPage)
  //   commit(types.RECEIVE_REPOSITORIES, repositories)
  // }
}

const mutations = {
  [types.INIT_USER_REPOS] (state) {
    state.repositories = []
    state.nextPage = 1
    state.isLastPage = true
  },
  [types.FETCH_USER_REPOS] (state) {
    state.nextPage = state.nextPage + 1
  },
  [types.RECEIVE_REPOSITORIES] (state, repositories) {
    state.repositories = repositories.repos
    state.isLastPage = repositories.isLastPage
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
