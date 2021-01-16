import { InjectionToken } from '@angular/core'
import { SignalingChannel } from '@webrtc-comm/core'

export function SignalingFactory(uri: string) {
  return new SignalingChannel(uri)
}

export const SIGNALING_CLIENT = new InjectionToken<string>('SignalingChannel')
