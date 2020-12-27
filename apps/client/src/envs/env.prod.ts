export const env = {
  prod: true,
  signaling: 'https://webrtc-community.herokuapp.com',
  endpoint: 'https://webrtc-community.herokuapp.com',
  configuration: {
    iceServers: [
      { urls: 'stun:3.85.30.220:3478' },
      { urls: 'stun:stun.services.mozilla.com' },
      // { urls: 'stun:stun.stunprotocol.org:3478' },
      // { urls: 'stun:stun.l.google.com:19302' },
    ],
  },
}
