/**
 * @deprecated
 *
 * @export
 * @abstract
 * @class TokenStorage
 */
export abstract class TokenStorage {
  static storageKey = 'token-storage-current-user'

  // onTokenUpdate: EventEmitter<string> = new EventEmitter<string>()

  storeToken(token: string) {
    try {
      window.localStorage[TokenStorage.storageKey] = token
    } catch {}

    // this.onTokenUpdate.emit(token)
  }

  getStoredTokenValue(): string | null {
    try {
      return window.localStorage[TokenStorage.storageKey] || null
    } catch {
      return null
    }
  }

  clearStorage() {
    try {
      window.localStorage.removeItem(TokenStorage.storageKey)
    } catch {}
  }
}
