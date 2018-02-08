import navigatorStore from '@/store/modules/navigator'
import { testAction } from '../../custom/test-actions'

describe('navigator store - state', () => {
  it('isOnline should be true if navigator is undefined', () => {
    expect(navigatorStore.state.isOnline).toBeTruthy()
  })
})

describe('navigator store - mutations', () => {
  it('ONLINE', () => {
    const state = {
      isOnline: false
    }

    navigatorStore.mutations.ONLINE(state)

    expect(state).toEqual({
      isOnline: true
    })
  })
  it('OFFLINE', () => {
    const state = {
      isOnline: true
    }

    navigatorStore.mutations.OFFLINE(state)

    expect(state).toEqual({
      isOnline: false
    })
  })
})

describe('navigator store - actions - when switch to offline', () => {
  it('actions - connexionChange', (done) => {
    window.navigator.__defineGetter__('onLine', () => false)

    testAction(navigatorStore.actions.connexionChange, null, {}, [
      { type: 'OFFLINE', payload: {} }
    ], done)
  })

  it('actions - connexionChange - when switch to online', (done) => {
    window.navigator.__defineGetter__('onLine', () => true)

    testAction(navigatorStore.actions.connexionChange, null, {}, [
      { type: 'ONLINE', payload: {} }
    ], done)
  })
})
