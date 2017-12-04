import userResponse from '../__mocks__/users.maxpou.response.json'
import * as usersApi from '@/api/users'

describe('Users API', () => {
  it('getUser(user) should return the response data', () => {
    expect.assertions(1)
    return expect(usersApi.getUser('maxpou')).resolves.toEqual(userResponse)
  })
})
