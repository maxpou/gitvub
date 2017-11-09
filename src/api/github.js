import axios from 'axios'

export function getRepositories (username) {
  const cacheKey = `users/${username}/repos`

  if (sessionStorage.getItem(cacheKey)) {
    return Promise.resolve(JSON.parse(sessionStorage.getItem(cacheKey)))
  }

  const url = `${process.env.GITHUB_URL}/users/${username}/repos`
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
