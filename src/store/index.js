import Vue from 'vue'
import Vuex from 'vuex'
import repositories from './modules/repositories'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    repositories
  },
  strict: debug
})

/* istanbul ignore if */
if (module.hot) {
  module.hot.accept([
    './modules/repositories'
  ], () => {
    const repositories = require('./modules/repositories').default
    store.hotUpdate({
      modules: {
        repositories
      }
    })
  })
}

export default store
