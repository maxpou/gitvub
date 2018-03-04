import * as http from './index'

/**
 * @param {string} keywords
 * @return {Promise<Object[]>} array of users
 * @see {@link https://developer.github.com/v3/search/#search-users}
 */
export async function searchUsers (keywords) {
  const response = await http.get(`search/users?q=${keywords}`)
  return response.items
}

/**
 * @param {string} username
 * @return {Promise<Object>} user detail
 * @see {@link https://developer.github.com/v3/users/#get-a-single-user/}
 */
export function getUser (username) {
  return http.get(`users/${username}`)
}
