import { mount } from 'vue-test-utils'
import RepoListItem from '@/components/RepoListItem.vue'
import store from '@/store'

describe('RepoListItem.vue', () => {
  it('test initial rendering', () => {
    const wrapper = mount(RepoListItem, {
      store,
      propsData: {
        repository: {
          name: 'test-repo',
          description: 'i\'m a test repo',
          owner: {
            login: 'bob'
          }
        }
      }
    })
    const template = wrapper.html()
    expect(template).toMatchSnapshot()
  })
})
