import { mount } from 'vue-test-utils'
import FooterBar from '@/components/FooterBar.vue'

describe('FooterBar.vue', () => {
  it('test initial rendering', () => {
    const wrapper = mount(FooterBar)
    const template = wrapper.html()
    expect(template).toMatchSnapshot()
  })
})
