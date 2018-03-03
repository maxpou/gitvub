import { mount, RouterLinkStub } from '@vue/test-utils'
import MenuNavBar from '@/components/MenuNavBar.vue'

describe('MenuNavBar.vue', () => {
  it('test initial rendering', () => {
    const $route = {
      name: 'About'
    }
    const wrapper = mount(MenuNavBar, {
      stubs: {
        'router-link': RouterLinkStub
      },
      mocks: {
        $route
      }
    })

    const template = wrapper.html()
    expect(template).toMatchSnapshot()
  })

  it('test initial rendering on Welcome', () => {
    const $route = {
      name: 'Welcome'
    }
    const wrapper = mount(MenuNavBar, {
      stubs: {
        'router-link': RouterLinkStub
      },
      mocks: {
        $route
      }
    })

    const template = wrapper.html()
    expect(template).toMatchSnapshot()
  })
})
