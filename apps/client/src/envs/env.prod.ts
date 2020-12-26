export const env = {
  prod: true,
  signaling: 'https://webrtc-community.herokuapp.com',
  configuration: {
    iceServers: [
      // { urls: 'stun:stun.stunprotocol.org:3478' },
      { urls: 'stun:stun.services.mozilla.com' },
      { urls: 'stun:stun.l.google.com:19302' },
    ],
  },
}
