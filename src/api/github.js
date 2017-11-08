import axios from 'axios'

export function getRepositories (username) {
  const cacheKey = `users/${username}/repos`

  if (sessionStorage.getItem(cacheKey)) {
    return Promise.resolve(JSON.parse(sessionStorage.getItem(cacheKey)))
  }

  const url = `${process.env.GITHUB_URL}/users/${username}/repos?client_id=2c1a8680d4e497d52a52&client_secret=9c64d4b112a250806911ed8ba9c3a76e1afbfab2`
  return axios.get(url).then(response => {
    sessionStorage.setItem(cacheKey, JSON.stringify(response.data))
    return response.data
  })
}

export function getRepositoryLanguage (username, repository) {
  const cacheKey = `repos/${username}/${repository}/language`

  if (sessionStorage.getItem(cacheKey)) {
    return Promise.resolve(JSON.parse(sessionStorage.getItem(cacheKey)))
  }

  const url = `${process.env.GITHUB_URL}/repos/${username}/${repository}/languages`
  return axios.get(url).then(response => {
    sessionStorage.setItem(cacheKey, JSON.stringify(response.data))
    return response.data
  })
}
