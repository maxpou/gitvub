import repositoriesStore from '@/store/modules/repositories'

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

  it('FETCH_REPO_DETAIL', () => {
    const state = {
      repository: {
        detail: {},
        languages: {},
        readme: {}
      }
    }

    repositoriesStore.mutations.FETCH_REPO_DETAIL(state, {user: 'yyx990803', repository: 'benchmark'})

    const expected = {
      repository: {
        detail: {},
        languages: {},
        readme: {}
      }
    }
    expect(state).toEqual(expected)
  })

  it('RECEIVE_REPOSITORY_LANGUAGE', () => {
    const state = {
      repository: {
        detail: {},
        languages: {},
        readme: {}
      }
    }
    const details = {'JavaScript': 97217, 'Vue': 61263, 'HTML': 6769, 'CSS': 807}
    repositoriesStore.mutations.RECEIVE_REPOSITORY_LANGUAGE(state, details)

    const expected = {
      repository: {
        detail: {},
        languages: {'JavaScript': 97217, 'Vue': 61263, 'HTML': 6769, 'CSS': 807},
        readme: {}
      }
    }
    expect(state).toEqual(expected)
  })
})
