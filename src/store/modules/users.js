import * as userApi from '../../api/users'
import * as types from '../mutation-types'
// import Vue from 'vue'

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
  }
}

const getters = {
  currentUser: state => state.currentUser
}

const actions = {
  loadUser ({ commit }, user) {
    commit(types.FETCH_USER, user)
    userApi.getUser(user).then(userData => {
      commit(types.RECEIVE_USER, {userData})
    })
  }
}

const mutations = {
  [types.FETCH_USER] (state) {
    state.currentUser = { ...initialState }
  },
  [types.RECEIVE_USER] (state, {userData}) {
    state.currentUser = userData
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
