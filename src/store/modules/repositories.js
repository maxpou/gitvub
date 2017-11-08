import * as githubApi from '../../api/github'
import * as types from '../mutation-types'
import Vue from 'vue'

// initial state
const state = {
  currentUser: '',
  currentRepository: '',
  users: {},
  repositoryDetail: {}
}

const getters = {
  currentUserRepositories: (state) => {
    return state.users[state.currentUser].repos || []
  }
}

const actions = {
  loadUserRepositories ({ commit }, user) {
    commit(types.FETCH_USER_REPOS, user)
    githubApi.getRepositories(user).then(repositories => {
      commit(types.RECEIVE_REPOSITORIES, {repositories, user})
    })
  },
  loadRepositoryDetail ({ commit }, {user, repository}) {
    commit(types.FETCH_REPO_DETAIL, {user, repository})
    githubApi.getRepositoryLanguage(user, repository).then(data => {
      commit(types.RECEIVE_REPOSITORY_DETAIL, data)
    })
  }
}

const mutations = {
  [types.FETCH_USER_REPOS] (state, user) {
    state.currentUser = user
    if (typeof state.users[user] === 'undefined') {
      Vue.set(state.users, user, {repos: {}})
    }
  },
  [types.RECEIVE_REPOSITORIES] (state, {repositories, user}) {
    if (typeof state.users[user] === 'undefined') {
      state.users[user] = {repos: {}}
    }
    repositories.forEach(repo => {
      Vue.set(state.users[user].repos, repo.name, repo)
    })
  },
  [types.FETCH_REPO_DETAIL] (state, {user, repository}) {
    if (state.currentUser !== user) {
      state.currentUser = user
    }
    state.currentRepository = repository
    state.repositoryDetail = {}
  },
  [types.RECEIVE_REPOSITORY_DETAIL] (state, data) {
    state.repositoryDetail = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
