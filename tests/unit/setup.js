import Vue from 'vue'

Vue.config.productionTip = false

// seession storage
const sessionStorageMock = (() => {
  let store = {}

  return {
    getItem (key) {
      return store[key] || null
    },
    setItem (key, value) {
      store[key] = value.toString()
    },
    clear () {
      store = {}
    }
  }
})()

Object.defineProperty(window, 'sessionStorage', {
  value: sessionStorageMock
})
