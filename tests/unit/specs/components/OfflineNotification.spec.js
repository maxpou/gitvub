import { mount } from '@vue/test-utils'
import OfflineNotification from '@/components/OfflineNotification.vue'
import store from '@/store'

describe('OfflineNotification.vue', () => {
  it('test initial rendering (when online)', () => {
    const wrapper = mount(OfflineNotification, {
      store,
      propsData: {
        isOffline: false
      }
    })
    const template = wrapper.html()
    expect(template).toMatchSnapshot()
  })

  it('test initial rendering (when offline)', () => {
    const wrapper = mount(OfflineNotification, {
      store,
      propsData: {
        isOffline: true
      }
    })
    const template = wrapper.html()
    expect(template).toMatchSnapshot()
  })
})
