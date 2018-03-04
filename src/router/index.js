import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/views/Welcome'
import About from '@/views/About'
import SearchResults from '@/views/SearchResults'
import UserRepoList from '@/views/UserRepoList'
import RepoDetail from '@/views/RepoDetail'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    }, {
      path: '/about',
      name: 'About',
      component: About
    }, {
      path: '/search',
      name: 'SearchResults',
      component: SearchResults
    }, {
      path: '/users/:user',
      name: 'UserRepoList',
      component: UserRepoList
    }, {
      path: '/users/:user/:repository/detail',
      name: 'RepoDetail',
      component: RepoDetail
    }, {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    }, {
      path: '*',
      redirect: '404'
    }
  ]
})
