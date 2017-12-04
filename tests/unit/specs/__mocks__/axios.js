class Axios {
  get (url) {
    const shortUrl = url.replace(process.env.GITHUB_URL, '')

    switch (shortUrl) {
      case '/users/maxpou/repos?page=1&sort=updated': return Promise.resolve(import('./repos.maxpou.response.json'))
      case '/repos/maxpou/vue-vuex-jest/languages': return Promise.resolve({ data: import('./repos.maxpou.vue-vuex-jest.response.json') })
      case '/users/maxpou': return Promise.resolve({ data: import('./users.maxpou.response.json') })
    }
    return Promise.reject(new Error(`Url not handled: ${shortUrl}`))
  }
}

export default new Axios()
