import { AuthResponse, uuid } from '@quertc/core'
import { AuthStorage } from './auth-storage'

const testStorageKey = AuthStorage.storageKey
const testAuth: AuthResponse = {
  access_token: '123',
  payload: {
    email: 'gui@email.com',
    name: 'Gui',
    uuid: uuid(),
  },
}

describe('AuthStorage Service', () => {
  const service = new AuthStorage()
  const getCurrToken = () => window.localStorage.getItem(testStorageKey)
  const secondTestToken: AuthResponse = {
    access_token: '321',
    payload: {
      email: 'email@gui.com',
      name: 'Uig',
      uuid: uuid(),
    },
  }

  beforeEach(() => {
    window.localStorage[testStorageKey] = testAuth.access_token
  })

  afterEach(() => {
    window.localStorage.clear()
  })

  it('should set the current auth access_token', () => {
    expect(getCurrToken()).toEqual(testAuth.access_token)
    service.storeToken(secondTestToken)
    expect(getCurrToken()).toEqual(secondTestToken.access_token)
  })

  it('should get the current auth access_token', () => {
    const auth = service.getStoredTokenValue()
    expect(auth).toEqual(testAuth.access_token)
  })

  it('should clear the stored auth data', () => {
    expect(getCurrToken()).not.toBeNull()
    service.clearStorage()
    expect(getCurrToken()).toBeNull()
  })

  it('should emit an event when setToken is called', () => {
    spyOn(service.onTokenUpdate, 'emit')
    service.storeToken(secondTestToken)
    expect(service.onTokenUpdate.emit).toHaveBeenCalled()
    expect(service.onTokenUpdate.emit).toHaveBeenCalledWith(secondTestToken)
  })
})
