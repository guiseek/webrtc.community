// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const env = {
  prod: false,
  gaClientId: 'UA-186132597-1',
  signaling: 'http://localhost:3000',
  endpoint: 'http://localhost:3000',
  configuration: {
    iceServers: [
      { urls: 'stun:3.85.30.220:3478' },
      { urls: 'stun:stun.services.mozilla.com' },
      // { urls: 'stun:stun.stunprotocol.org:3478' },
      // { urls: 'stun:stun.l.google.com:19302' },
    ],
  },
  media: {
    audio: {
      channelCount: {
        ideal: 2,
      },
      echoCancellation: true,
      frameRate: {
        ideal: 22000,
      },
    },
    video: {
      width: {
        min: 480,
        max: 1280,
        ideal: 1280,
      },
      height: {
        min: 320,
        max: 720,
        ideal: 720,
      },
      facingMode: {
        ideal: 'user',
      },
      frameRate: {
        ideal: 60,
        min: 10,
      },
    },
  }
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error' // Included with Angular CLI.
