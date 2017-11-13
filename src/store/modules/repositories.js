import * as githubApi from '../../api/github'
import * as types from '../mutation-types'
import Vue from 'vue'

// initial state
const state = {
  currentUser: '',
  currentRepositoryName: '',
  users: {},
  repositoryDetail: {
    languages: {},
    readme: {}
  }
}

const getters = {
  currentUserRepositories: (state) => {
    if (state.users[state.currentUser] === undefined) {
      return {}
    }
    return state.users[state.currentUser].repos
  },
  currentRepository: (state, getters) => {
    return getters.currentUserRepositories[state.currentRepositoryName]
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
      commit(types.RECEIVE_REPOSITORY_LANGUAGE, data)
    })
    githubApi.getRepositoryReadme(user, repository).then(data => {
      commit(types.RECEIVE_REPOSITORY_README, data)
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
    state.currentRepositoryName = repository
    state.repositoryDetail = {
      languages: {},
      readme: {}
    }
  },
  [types.RECEIVE_REPOSITORY_LANGUAGE] (state, data) {
    state.repositoryDetail.languages = data
  },
  [types.RECEIVE_REPOSITORY_README] (state, data) {
    state.repositoryDetail.readme = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
