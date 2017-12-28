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
jest.mock('@/views/UserRepoList', () => 'UserRepoList component')
jest.mock('@/views/RepoDetail', () => 'RepoDetail component')

describe('router', () => {
  it('Vue should use router', () => {
    expect(Vue.use).toHaveBeenCalledWith(Router)
  })

  it('should declare Welcome route', () => {
    expect(router.routes[0].component).toEqual('Welcome component')
    expect(router.routes[0].name).toEqual('Welcome')
    expect(router.routes[0].path).toEqual('/')
  })
  it('should declare Welcome route', () => {
    expect(router.routes[1].component).toEqual('About component')
    expect(router.routes[1].name).toEqual('About')
    expect(router.routes[1].path).toEqual('/about')
  })

  it('should declare UserRepoList route', () => {
    expect(router.routes[2].component).toEqual('UserRepoList component')
    expect(router.routes[2].name).toEqual('UserRepoList')
    expect(router.routes[2].path).toEqual('/users/:user')
  })

  it('should declare RepoDetail route', () => {
    expect(router.routes[3].component).toEqual('RepoDetail component')
    expect(router.routes[3].name).toEqual('RepoDetail')
    expect(router.routes[3].path).toEqual('/users/:user/:repository/detail')
  })
})
