import { SignalingChannel } from '@quertc/core'
import { MediaService } from '@quertc/meeting'
import { PerfectNegotiation } from './perfect-negotiation'

describe('PerfectNegotiation', () => {
  it('should create an instance', () => {
    expect(
      new PerfectNegotiation(new SignalingChannel(''), new MediaService())
    ).toBeTruthy()
  })
})
