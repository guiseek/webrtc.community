import { InjectionToken } from '@angular/core'

export const RTC_CONFIGURATION = new InjectionToken<RTCConfiguration>(
  'RTCConfiguration'
)

export const MEDIA_STREAM = new InjectionToken<MediaStreamConstraints>(
  'MediaStream'
)
