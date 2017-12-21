import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/views/Welcome'
import UserRepoList from '@/views/UserRepoList'
import RepoDetail from '@/views/RepoDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    }, {
      path: '/users/:user',
      name: 'UserRepoList',
      component: UserRepoList
    }, {
      path: '/users/:user/:repository/detail',
      name: 'RepoDetail',
      component: RepoDetail
    }
  ]
})
