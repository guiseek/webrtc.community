import { Component } from '@angular/core'
import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest'

import { RoomsComponent } from './rooms.component'

@Component({ template: '' })
class CustomHostComponent {
  title = 'Custom HostComponent'
}

describe('RoomsComponent', () => {
  let host: SpectatorHost<RoomsComponent, CustomHostComponent>
  const createHost = createHostFactory({
    component: RoomsComponent,
    host: CustomHostComponent,
  })

  it('should display the host component title', () => {
    host = createHost(`<zippy [title]="title"></zippy>`)
    expect(host.query('.zippy__title')).toHaveText('Custom HostComponent')
  })
})
