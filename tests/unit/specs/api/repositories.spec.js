import repoResponse from '../__mocks__/repos.maxpou.response.json'
import languageResponse from '../__mocks__/repos.maxpou.vue-vuex-jest.response.json'
import * as repositoriesApi from '@/api/repositories'

describe('Repositories API', () => {
  it('getRepositories(user) should return the response data', () => {
    expect.assertions(1)
    return expect(repositoriesApi.getRepositories('maxpou')).resolves.toEqual({
      repos: repoResponse.data,
      isLastPage: true
    })
  })

  it('getRepositoryLanguage(username, repository) should return the response data', () => {
    expect.assertions(1)
    return expect(repositoriesApi.getRepositoryLanguage('maxpou', 'vue-vuex-jest')).resolves.toEqual(languageResponse)
  })
})
