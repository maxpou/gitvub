import { mount, RouterLinkStub } from '@vue/test-utils'
import RepoList from '@/components/RepoList.vue'
import store from '@/store'

describe('RepoList.vue', () => {
  it('test initial rendering', () => {
    const wrapper = mount(RepoList, {
      store,
      stubs: {
        'router-link': RouterLinkStub
      },
      propsData: {
        repositories: [{
          name: 'test-repo',
          description: 'I\'m a test repo',
          owner: {
            login: 'bob'
          }
        }]
      }
    })
    const template = wrapper.html()
    expect(template).toMatchSnapshot()
  })

  it('test initial rendering without props', () => {
    const wrapper = mount(RepoList, {
      stubs: {
        'router-link': RouterLinkStub
      }
    })
    const template = wrapper.html()
    expect(template).toMatchSnapshot()
    expect(wrapper.props().repositories).toEqual([])
  })
})
