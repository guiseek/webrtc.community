import { SignalingChannel } from '@webrtc-comm/core'
import { MediaService } from '@webrtc-comm/meeting'
import { PerfectNegotiation } from './perfect-negotiation'

describe('PerfectNegotiation', () => {
  it('should create an instance', () => {
    expect(
      new PerfectNegotiation(new SignalingChannel(''), new MediaService())
    ).toBeTruthy()
  })
})
