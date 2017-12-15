import reposResponse from '../__mocks__/repos.maxpou.json'
import languageResponse from '../__mocks__/repos.maxpou.vue-vuex-jest.language.json'
import repoResponse from '../__mocks__/repos.maxpou.gitvub.json'
import readmeResponse from '../__mocks__/repos.maxpou.gitvub.readme.json'
import contentResponse from '../__mocks__/repos.maxpou.gitvub.contents.json'
import * as repositoriesApi from '@/api/repositories'

describe('Repositories API', () => {
  it('getRepositories(user) should return the response data', () => {
    expect.assertions(1)
    return expect(repositoriesApi.getRepositories('maxpou')).resolves.toEqual({
      repos: reposResponse.data,
      isLastPage: true
    })
  })

  it('getRepository(username, repository) should return the response data', () => {
    expect.assertions(1)
    return expect(repositoriesApi.getRepository('maxpou', 'gitvub')).resolves.toEqual(repoResponse)
  })

  it('getRepositoryLanguage(username, repository) should return the response data', () => {
    expect.assertions(1)
    return expect(repositoriesApi.getRepositoryLanguage('maxpou', 'vue-vuex-jest')).resolves.toEqual(languageResponse)
  })

  it('getRepositoryReadme(username, repository) should return the response data', () => {
    expect.assertions(1)
    return expect(repositoriesApi.getRepositoryReadme('maxpou', 'gitvub')).resolves.toEqual(readmeResponse)
  })

  it('getRepositoryContent(username, repository) should return the response data', async () => {
    expect.assertions(1)
    expect(repositoriesApi.getRepositoryContent('maxpou', 'gitvub')).resolves.toEqual(contentResponse)
  })

  it('getRepositoryContent(username, repository, path) should throw an error when path don\'t start with a "/"', async () => {
    expect.assertions(1)
    expect(repositoriesApi.getRepositoryContent('maxpou', 'gitvub', 'foo')).rejects.toEqual(new Error('Path must start with a "/"'))
  })
})
