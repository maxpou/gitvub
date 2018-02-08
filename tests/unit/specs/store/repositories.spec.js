import repositoriesStore from '@/store/modules/repositories'
import { testAction } from '../../custom/test-actions'
import userMaxpouReposData from '../__mocks__/repos.maxpou.json'

describe('repositories store - getters', () => {
  it('currentUserRepositories - return current user repositories', () => {
    const state = {
      repositories: [
        { name: 'foo' },
        { name: 'bar' }
      ]
    }

    const result = repositoriesStore.getters.currentUserRepositories(state)
    expect(Array.isArray(result)).toBeTruthy()
    expect(result).toEqual(state.repositories)
  })

  it('isFullyLoaded - if all repos are loaded', () => {
    const state = {
      isLastPage: false
    }

    const result = repositoriesStore.getters.isFullyLoaded(state)
    expect(result).toBeFalsy()
  })
})

describe('repositories store - mutations', () => {
  it('INIT_USER_REPOS', () => {
    const state = {
      repositories: [
        { name: 'foo' },
        { name: 'bar' }
      ],
      nextPage: 5,
      isLastPage: false
    }

    repositoriesStore.mutations.INIT_USER_REPOS(state)

    expect(state).toEqual({
      nextPage: 1,
      isLastPage: true,
      repositories: []
    })
  })

  it('RECEIVE_REPOSITORIES', () => {
    const state = {
      repositories: [],
      isLastPage: true
    }
    const recievedRepositories = {
      repos: [
        { name: 'docker-symfony' },
        { name: 'dotfiles' },
        { name: 'vuejs.org' }
      ],
      isLastPage: false
    }

    repositoriesStore.mutations.RECEIVE_REPOSITORIES(state, recievedRepositories)

    const expected = {
      repositories: [
        { name: 'docker-symfony' },
        { name: 'dotfiles' },
        { name: 'vuejs.org' }
      ],
      isLastPage: false
    }
    expect(state).toEqual(expected)
  })

  it('FETCH_USER_REPOS', () => {
    const state = {
      nextPage: 2
    }
    repositoriesStore.mutations.FETCH_USER_REPOS(state)
    expect(state.nextPage).toEqual(3)
  })
})

describe('repositories store - action', () => {
  it('loadUserRepositories', (done) => {
    testAction(repositoriesStore.actions.loadUserRepositories, 'maxpou', {}, [
      { type: 'INIT_USER_REPOS' },
      { type: 'RECEIVE_REPOSITORIES',
        payload: {
          isLastPage: true,
          repos: userMaxpouReposData.data
        }
      }
    ], done)
  })
})
