import Vue from 'vue'
import Router from 'vue-router'
import router from '@/router/index'

jest.mock('vue', () => ({
  use: jest.fn()
}))

jest.mock('vue-router', () => class VueRouter {
  constructor (routes) {
    return routes
  }
})

jest.mock('@/views/Welcome', () => 'Welcome component')
jest.mock('@/views/About', () => 'About component')
jest.mock('@/views/SearchResults', () => 'SearchResults component')
jest.mock('@/views/UserRepoList', () => 'UserRepoList component')
jest.mock('@/views/RepoDetail', () => 'RepoDetail component')
jest.mock('@/components/NotFound', () => 'NotFound component')

describe('router', () => {
  it('Vue should use router', () => {
    expect(Vue.use).toHaveBeenCalledWith(Router)
  })

  it('should declare Welcome route', () => {
    expect(router.routes[0].component).toEqual('Welcome component')
    expect(router.routes[0].name).toEqual('Welcome')
    expect(router.routes[0].path).toEqual('/')
  })
  it('should declare About route', () => {
    expect(router.routes[1].component).toEqual('About component')
    expect(router.routes[1].name).toEqual('About')
    expect(router.routes[1].path).toEqual('/about')
  })
  it('should declare SearchResults route', () => {
    expect(router.routes[2].component).toEqual('SearchResults component')
    expect(router.routes[2].name).toEqual('SearchResults')
    expect(router.routes[2].path).toEqual('/search')
  })

  it('should declare UserRepoList route', () => {
    expect(router.routes[3].component).toEqual('UserRepoList component')
    expect(router.routes[3].name).toEqual('UserRepoList')
    expect(router.routes[3].path).toEqual('/users/:user')
  })

  it('should declare RepoDetail route', () => {
    expect(router.routes[4].component).toEqual('RepoDetail component')
    expect(router.routes[4].name).toEqual('RepoDetail')
    expect(router.routes[4].path).toEqual('/users/:user/:repository/detail')
  })

  it('should declare NotFound route', () => {
    expect(router.routes[5].component).toEqual('NotFound component')
    expect(router.routes[5].name).toEqual('NotFound')
    expect(router.routes[5].path).toEqual('/404')
  })
})
