import * as repositoriesApi from '../../api/repositories'
import * as types from '../mutation-types'

// initial state
const state = {
  repositories: [],
  nextPage: 1,
  isLastPage: true,
  repository: {
    detail: {},
    languages: {},
    readme: {}
  }
}

const getters = {
  currentUserRepositories: (state) => state.repositories,
  currentRepository: (state) => state.repository,
  isFullyLoaded: (state) => state.isLastPage
}

const actions = {
  loadUserRepositories ({ commit }, user) {
    commit(types.INIT_USER_REPOS)
    repositoriesApi.getRepositories(user).then(repositories => {
      commit(types.RECEIVE_REPOSITORIES, repositories)
    })
  },
  loadMoreRepositories ({ commit, state }, user) {
    commit(types.FETCH_USER_REPOS)
    repositoriesApi.getRepositories(user, state.nextPage).then(repositories => {
      commit(types.RECEIVE_REPOSITORIES, repositories)
    })
  },
  loadRepositoryDetail ({ commit }, {user, repository}) {
    commit(types.FETCH_REPO_DETAIL, repository)
    repositoriesApi.getRepository(user, repository).then(data => {
      commit(types.RECEIVE_REPOSITORY, data)
    })
    repositoriesApi.getRepositoryLanguage(user, repository).then(data => {
      commit(types.RECEIVE_REPOSITORY_LANGUAGE, data)
    })
    repositoriesApi.getRepositoryReadme(user, repository).then(data => {
      commit(types.RECEIVE_REPOSITORY_README, data)
    })
  }
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
  },
  [types.FETCH_REPO_DETAIL] (state, repository) {
    state.repository = {
      detail: {},
      languages: {},
      readme: {}
    }
  },
  [types.RECEIVE_REPOSITORY] (state, data) {
    state.repository.detail = data
  },
  [types.RECEIVE_REPOSITORY_LANGUAGE] (state, data) {
    state.repository.languages = data
  },
  [types.RECEIVE_REPOSITORY_README] (state, data) {
    state.repository.readme = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
