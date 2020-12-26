import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest'

import { UserProfileComponent } from './user-profile.component'

describe('UserProfileComponent', () => {
  let spectator: SpectatorHost<UserProfileComponent>

  const createHost = createHostFactory(UserProfileComponent)

  it('should create', () => {
    spectator = createHost(`<zippy title="Zippy title"></zippy>`)
    expect(spectator.component).toBeTruthy()
  })

  it('should...', () => {
    spectator = createHost(`<zippy title="Zippy title">Zippy content</zippy>`)
    spectator.click('.zippy__title')
    expect(spectator.query('.arrow')).toHaveText('Close')
  })

  it('should...', () => {
    spectator = createHost(`<zippy title="Zippy title"></zippy>`)
    spectator.click('.zippy__title')
    expect(spectator.query('.zippy__content')).toExist()
    spectator.click('.zippy__title')
    expect('.zippy__content').not.toExist()
  })
})
