class Axios {
  get (url, includeHeaders = false) {
    const shortUrl = url.replace(process.env.GITHUB_URL, '')

    switch (shortUrl) {
      case '/users/maxpou/repos?page=1&sort=updated': return Promise.resolve(import('./repos.maxpou.json'))
      case '/repos/maxpou/vue-vuex-jest/languages': return Promise.resolve({ data: import('./repos.maxpou.vue-vuex-jest.language.json') })
      case '/repos/maxpou/gitvub': return Promise.resolve({ data: import('./repos.maxpou.gitvub.json') })
      case '/repos/maxpou/gitvub/readme': return Promise.resolve({ data: import('./repos.maxpou.gitvub.readme.json') })
      case '/repos/maxpou/gitvub/contents': return Promise.resolve({ data: import('./repos.maxpou.gitvub.contents.json') })
      case '/users/maxpou': return Promise.resolve({ data: import('./users.maxpou.json') })
    }
    return Promise.reject(new Error(`Url not handled: ${shortUrl}`))
  }
}

export default new Axios()
