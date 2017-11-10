import { mount } from 'vue-test-utils'
import MainComponent from '@/App.vue'
import store from '@/store'

describe('App.vue', () => {
  it('test initial rendering', () => {
    const wrapper = mount(MainComponent, { store })
    const appTemplate = wrapper.html()

    expect(appTemplate).toMatchSnapshot()
  })
})
