import { mount } from '@vue/test-utils'
import RepoList from '@/components/RepoList.vue'
import store from '@/store'

describe('RepoList.vue', () => {
  it('test initial rendering', () => {
    const wrapper = mount(RepoList, {
      store,
      propsData: {
        repositories: [{
          name: 'test-repo',
          description: 'i\'m a test repo',
          owner: {
            login: 'bob'
          }
        }]
      }
    })
    const template = wrapper.html()
    expect(template).toMatchSnapshot()
  })
})
