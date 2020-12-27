import { AuthResponse } from '@quertc/core'
import { EventEmitter, Injectable } from '@angular/core'

@Injectable()
export class AuthStorage {
  static storageKey = 'docs-theme-storage-current-name'

  onTokenUpdate: EventEmitter<string> = new EventEmitter<string>()

  storeToken({ access_token }: AuthResponse) {
    try {
      window.localStorage[AuthStorage.storageKey] = access_token
    } catch {}

    this.onTokenUpdate.emit(access_token)
  }

  getStoredTokenValue(): string | null {
    try {
      return window.localStorage[AuthStorage.storageKey] || null
    } catch {
      return null
    }
  }

  clearStorage() {
    try {
      window.localStorage.removeItem(AuthStorage.storageKey)
    } catch {}
  }
}
