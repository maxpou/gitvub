import repoResponse from '../__mocks__/repo.maxpou.response.json'
import languageResponse from '../__mocks__/repo.maxpou.vue-vuex-jest.response.json'
import * as githubApi from '@/api/github'

describe('swapi HTTP', () => {
  it('getRepositories(user) should return the response data', () => {
    expect.assertions(1)
    return expect(githubApi.getRepositories('maxpou')).resolves.toEqual(repoResponse)
  })

  it('getRepositoryLanguage(username, repository) should return the response data', () => {
    expect.assertions(1)
    return expect(githubApi.getRepositoryLanguage('maxpou', 'vue-vuex-jest')).resolves.toEqual(languageResponse)
  })
})
