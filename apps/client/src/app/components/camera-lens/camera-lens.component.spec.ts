import { Spectator, createComponentFactory } from '@ngneat/spectator'

import { CameraLensComponent } from './camera-lens.component'

describe('CameraLensComponent', () => {
  let spectator: Spectator<CameraLensComponent>
  const createComponent = createComponentFactory(CameraLensComponent)

  it('should create', () => {
    spectator = createComponent()

    expect(spectator.component).toBeTruthy()
  })
})
