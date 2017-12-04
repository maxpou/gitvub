import {isLastPage} from '@/api/linkHeaderParser'

describe('linkHeaderParser', () => {
  it('isLastPage(response) should return false when response link header contain rel=next', () => {
    const response = {
      headers: {
        link: '<https://api.github.com/user/491848/repos?sort=updated&client_id=2c1a8680d4e497d52a52&client_secret=9c64d4b112a250806911ed8ba9c3a76e1afbfab2&page=2>; rel="next", <https://api.github.com/user/491848/repos?sort=updated&client_id=2c1a8680d4e497d52a52&client_secret=9c64d4b112a250806911ed8ba9c3a76e1afbfab2&page=6>; rel="last"'
      }
    }

    return expect(isLastPage(response)).toBeFalsy()
  })

  it('isLastPage(response) should return false when no link header', () => {
    const response = {
      headers: {}
    }

    return expect(isLastPage(response)).toBeTruthy()
  })
})
