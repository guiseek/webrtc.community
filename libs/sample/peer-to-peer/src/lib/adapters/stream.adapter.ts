import { InjectionToken } from '@angular/core'
import { Stream } from '@quertc/core'

export function StreamFactory(constraints: MediaStreamConstraints) {
  return new Stream(constraints)
}

export const STREAM_CLIENT = new InjectionToken<MediaStreamConstraints>(
  'Stream'
)
