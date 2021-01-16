import { AuthResponse } from '@webrtc-comm/core'
import { EventEmitter, Injectable } from '@angular/core'

@Injectable()
export class AuthStorage {
  static storageKey = 'auth-storage-current-token'

  onTokenUpdate: EventEmitter<AuthResponse> = new EventEmitter<AuthResponse>()

  storeToken(response: AuthResponse) {
    try {
      window.localStorage[AuthStorage.storageKey] = response.access_token
    } catch {}

    this.onTokenUpdate.emit(response)
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
