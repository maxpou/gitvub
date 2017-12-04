import * as http from './index'

/**
 * @param {string} username
 * @return {Promise<Object>} user detail
 * @see {@link https://developer.github.com/v3/users/#get-a-single-user/}
 */
export function getUser (username) {
  return http.get(`users/${username}`)
}
