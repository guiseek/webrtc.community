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
}
