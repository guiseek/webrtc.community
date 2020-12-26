import { Component } from '@angular/core'
import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest'

import { RoomComponent } from './room.component'

@Component({ template: '' })
class CustomHostComponent {
  title = 'Custom HostComponent'
}

describe('RoomComponent', () => {
  let host: SpectatorHost<RoomComponent, CustomHostComponent>
  const createHost = createHostFactory({
    component: RoomComponent,
    host: CustomHostComponent,
  })

  it('should display the host component title', () => {
    host = createHost(`<zippy [title]="title"></zippy>`)
    expect(host.query('.zippy__title')).toHaveText('Custom HostComponent')
  })
})
