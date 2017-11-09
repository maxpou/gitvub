class Axios {
  get (url) {
    const shortUrl = url.replace(process.env.GITHUB_URL, '')

    switch (shortUrl) {
      case '/users/maxpou/repos': return Promise.resolve({ data: import('./repo.maxpou.response.json') })
      case '/repos/maxpou/vue-vuex-jest/languages': return Promise.resolve({ data: import('./repo.maxpou.vue-vuex-jest.response.json') })
    }
  }
}

export default new Axios()
