import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest'
import { MediaStreamService } from './media-stream.service'

describe('MediaStreamService', () => {
  let spectator: SpectatorService<MediaStreamService>
  const createService = createServiceFactory(MediaStreamService)

  beforeEach(() => (spectator = createService()))

  it('should...', () => {
    expect(spectator.service).toBeTruthy()
  })
})
