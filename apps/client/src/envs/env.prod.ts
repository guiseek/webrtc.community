export const env = {
  prod: true,
  gaClientId: 'UA-186132597-1',
  signaling: 'https://server.webrtc.community',
  endpoint: 'https://server.webrtc.community',
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
