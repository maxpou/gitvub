import usersStore from '@/store/modules/users'
import { testAction } from '../../custom/test-actions'
import userMaxpouData from '../__mocks__/users.maxpou.json'

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

describe('users store - getters', () => {
  it('currentUser - return current user', () => {
    const state = {
      currentUser: {
        ...initialState
      }
    }

    const result = usersStore.getters.currentUser(state)
    expect(result).toEqual(state.currentUser)
  })

  it('notFoundUser - return user found user status', () => {
    const state = {
      notFoundUser: true
    }

    const result = usersStore.getters.notFoundUser(state)
    expect(result).toBeTruthy()
  })
})

describe('users store - action', () => {
  it('loadUser - load an existing user', (done) => {
    testAction(usersStore.actions.loadUser, 'maxpou', {}, [
      { type: 'FETCH_USER', payload: 'maxpou' },
      { type: 'RECEIVE_USER', payload: {userData: userMaxpouData} }
    ], done)
  })

  it('loadUser - load an non existing user', (done) => {
    testAction(usersStore.actions.loadUser, 'notfound', {}, [
      { type: 'FETCH_USER', payload: 'notfound' },
      { type: 'NOT_FOUND_USER' }
    ], done)
  })
})

describe('users store - mutations', () => {
  it('FETCH_USER - fetch user through API (not loaded yet)', () => {
    const state = {
      currentUser: {
        login: 'JohnDoe'
      }
    }
    usersStore.mutations.FETCH_USER(state)

    expect(state.currentUser).toEqual(initialState)
  })
  it('RECEIVE_USER - receive user from API', () => {
    const state = {
      currentUser: {
        ...initialState
      }
    }

    usersStore.mutations.RECEIVE_USER(state, {userData: userMaxpouData})
    expect(state.currentUser).toEqual(userMaxpouData)
    expect(state.notFoundUser).toBeFalsy()
  })
  it('NOT_FOUND_USER - user not found', () => {
    const state = {
      notFoundUser: false
    }

    usersStore.mutations.NOT_FOUND_USER(state)
    expect(state.notFoundUser).toBeTruthy()
  })
})
