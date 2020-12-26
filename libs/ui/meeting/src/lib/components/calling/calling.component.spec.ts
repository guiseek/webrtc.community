import { Component } from '@angular/core'
import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest'
import { Subject } from 'rxjs'

import { CallingComponent } from './calling.component'

@Component({ template: '' })
class CustomHostComponent {
  active = new Subject()
  active$ = this.active.asObservable()

  title = 'Custom HostComponent'

  constructor() {}
}

describe('CallingComponent', () => {
  let host: SpectatorHost<CallingComponent, CustomHostComponent>
  const createHost = createHostFactory({
    component: CallingComponent,
    host: CustomHostComponent,
  })

  it('should display the host component title', () => {
    host = createHost(
      `<quertc-calling [active]="(active$ | async) === null"></quertc-calling>`
    )
    expect(host.hostElement.classList.contains('.active')).toBe(false)
    expect(host.component.isCalling).toBe(true)
    console.log(host.hostElement.classList)
    host.hostComponent.active.next(false)
    host.detectChanges()
    console.log(host.hostElement.classList)

    expect(host.hostElement.classList.contains('.active')).toBe(true)
    expect(host.component.isCalling).toBe(false)
    // expect()
  })
})
