import * as http from './index'
import {isLastPage} from './linkHeaderParser'

/**
 * @param {string} username
 * @param {number} [page=1]
 * @return {Promise<Object[]>} array of repositories
 * @see {@link https://developer.github.com/v3/repos/#list-user-repositories}
 */
export function getRepositories (username, page = 1) {
  return http.get(`users/${username}/repos?page=${page}&sort=updated`, true).then((response) => {
    return {
      repos: response.data,
      isLastPage: isLastPage(response)
    }
  })
}

/**
 * @param {string} username
 * @return {Promise<Object[]>} array of repositories
 * @see {@link https://developer.github.com/v3/repos/#get}
 */
export function getRepository (username, repository) {
  return http.get(`repos/${username}/${repository}`)
}

/**
 * @param {string} username
 * @param {string} repository
 * @return {Promise<Object>} a key/value object (key=language / value=bytes of code per language)
 * @see {@link https://developer.github.com/v3/repos/#list-languages}
 */
export function getRepositoryLanguage (username, repository) {
  return http.get(`repos/${username}/${repository}/languages`)
}

/**
 * @param {string} username
 * @param {string} repository
 * @return {Promise<Object>} repository detail
 * @see {@link https://developer.github.com/v3/repos/contents/#get-the-readme}
 */
export function getRepositoryReadme (username, repository) {
  return http.get(`repos/${username}/${repository}/readme`)
}

/**
 * @param {string} username
 * @param {string} repository
 * @param {string} [path=''] must start with a "/" if defined
 * @return {Promise<Object>} repository content (files on root)
 * @see {@link https://developer.github.com/v3/repos/contents/#get-contents}
 */
export async function getRepositoryContent (username, repository, path = '') {
  if (path && path.charAt(0) !== '/') {
    return Promise.reject(new Error('Path must start with a "/"'))
  }
  return http.get(`repos/${username}/${repository}/contents${path}`)
}
