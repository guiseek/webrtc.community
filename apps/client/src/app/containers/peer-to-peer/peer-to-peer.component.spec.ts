import { Spectator, createComponentFactory } from '@ngneat/spectator/jest'

import { PeerToPeerComponent } from './peer-to-peer.component'

describe('PeerToPeerComponent', () => {
  let spectator: Spectator<PeerToPeerComponent>
  const createComponent = createComponentFactory(PeerToPeerComponent)

  it('should create', () => {
    spectator = createComponent()

    expect(spectator.component).toBeTruthy()
  })
})
