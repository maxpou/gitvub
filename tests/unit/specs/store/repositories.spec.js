import repositoriesStore from '@/store/modules/repositories'

describe('repositories store - getters', () => {
  it('currentUserRepositories - return current user repositories', () => {
    const state = {
      currentUser: 'maxpou-slides',
      users: {
        bob: {
          repos: {
            'test-a': {},
            'test-b': {}
          }
        },
        'maxpou-slides': {
          repos: {
            'vuejs-training': {},
            'immutability-js': {}
          }
        }
      }
    }

    const result = repositoriesStore.getters.currentUserRepositories(state)
    expect(result).toEqual(state.users['maxpou-slides'].repos)
  })
})

describe('repositories store - mutations', () => {
  it('FETCH_USER_REPOS', () => {
    const state = {
      currentUser: '',
      users: {}
    }

    repositoriesStore.mutations.FETCH_USER_REPOS(state, 'maxpou')
    const expected = {
      currentUser: 'maxpou',
      users: {
        maxpou: {
          repos: {}
        }
      }
    }
    expect(state).toEqual(expected)
  })

  it('RECEIVE_REPOSITORIES', () => {
    const state = {
      currentUser: 'maxpou',
      users: {
        maxpou: {
          repos: {}
        }
      }
    }
    const repositories = [
      { name: 'docker-symfony' },
      { name: 'dotfiles' },
      { name: 'vuejs.org' }
    ]

    repositoriesStore.mutations.RECEIVE_REPOSITORIES(state, {repositories, user: 'maxpou'})

    const expected = {
      currentUser: 'maxpou',
      users: {
        maxpou: {
          repos: {
            'docker-symfony': {
              'name': 'docker-symfony'
            },
            'dotfiles': {
              'name': 'dotfiles'
            },
            'vuejs.org': {
              'name': 'vuejs.org'
            }
          }
        }
      }
    }
    expect(state).toEqual(expected)
  })

  it('FETCH_REPO_DETAIL', () => {
    const state = {
      currentUser: 'maxpou',
      currentRepositoryName: 'dotfiles',
      repositoryDetail: {
        languages: {},
        readme: {}
      }
    }

    repositoriesStore.mutations.FETCH_REPO_DETAIL(state, {user: 'yyx990803', repository: 'benchmark'})

    const expected = {
      currentUser: 'yyx990803',
      currentRepositoryName: 'benchmark',
      repositoryDetail: {
        languages: {},
        readme: {}
      }
    }
    expect(state).toEqual(expected)
  })

  it('RECEIVE_REPOSITORY_LANGUAGE', () => {
    const state = {
      repositoryDetail: {
        languages: {},
        readme: {}
      }
    }
    const details = {'JavaScript': 97217, 'Vue': 61263, 'HTML': 6769, 'CSS': 807}
    repositoriesStore.mutations.RECEIVE_REPOSITORY_LANGUAGE(state, details)

    const expected = {
      repositoryDetail: {
        languages: details,
        readme: {}
      }
    }
    expect(state).toEqual(expected)
  })
})
