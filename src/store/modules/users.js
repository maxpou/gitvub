import * as userApi from '../../api/users'
import * as types from '../mutation-types'

const initialState = {
  login: '',
  id: 0,
  avatar_url: '',
  gravatar_id: '',
  url: '',
  html_url: '',
  followers_url: '',
  following_url: '',
  gists_url: '',
  starred_url: '',
  subscriptions_url: '',
  organizations_url: '',
  repos_url: '',
  events_url: '',
  received_events_url: '',
  type: '',
  site_admin: false,
  name: '',
  company: '',
  blog: '',
  location: '',
  email: '',
  hireable: false,
  bio: '',
  public_repos: 0,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: '',
  updated_at: ''
}

const state = {
  currentUser: {
    ...initialState
  },
  notFoundUser: false
}

const getters = {
  currentUser: state => state.currentUser,
  notFoundUser: state => state.notFoundUser
}

const actions = {
  async loadUser ({ commit }, username) {
    commit(types.FETCH_USER, username)

    try {
      const userData = await userApi.getUser(username)
      commit(types.RECEIVE_USER, {userData})
    } catch (error) {
      commit(types.NOT_FOUND_USER)
    }
  }
}

const mutations = {
  [types.FETCH_USER] (state) {
    state.currentUser = { ...initialState }
  },
  [types.RECEIVE_USER] (state, {userData}) {
    state.currentUser = userData
    state.notFoundUser = false
  },
  [types.NOT_FOUND_USER] (state) {
    state.notFoundUser = true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
