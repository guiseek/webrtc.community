import { Spectator, createComponentFactory } from '@ngneat/spectator/jest'

import { LogoComponent } from './logo.component'

describe('LogoComponent', () => {
  let spectator: Spectator<LogoComponent>
  const createComponent = createComponentFactory(LogoComponent)

  it('should create', () => {
    spectator = createComponent()

    expect(spectator.component).toBeTruthy()
  })
})
