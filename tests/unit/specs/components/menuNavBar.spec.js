import { mount } from 'vue-test-utils'
import MenuNavBar from '@/components/MenuNavBar.vue'

describe('MenuNavBar.vue', () => {
  it('test initial rendering', () => {
    const wrapper = mount(MenuNavBar)
    const template = wrapper.html()
    expect(template).toMatchSnapshot()
  })
})
