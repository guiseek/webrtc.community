import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatButtonModule } from '@angular/material/button'
import { Spectator, createComponentFactory } from '@ngneat/spectator'
import { RestartIceComponent } from './restart-ice.component'

describe('RestartIceComponent', () => {
  let spectator: Spectator<RestartIceComponent>
  const createComponent = createComponentFactory({
    component: RestartIceComponent,
    imports: [MatButtonModule, MatCardModule, MatToolbarModule],
  })

  beforeEach(() => (spectator = createComponent()))

  it('should create component', () => {
    expect(spectator.component).toBeTruthy()
  })

  it('should localCandidateId has no value', () => {
    const localCandidate = spectator.query('#localCandidateId')
    expect(localCandidate.nodeValue).toEqual(null)
  })
  it('should callButton is disabled', () => {
    const callButton: HTMLButtonElement = spectator.query('#callButton')
    expect(callButton.disabled).toBe(true)
  })
  it('should restartButton is disabled', () => {
    const restartButton: HTMLButtonElement = spectator.query('#restartButton')
    expect(restartButton.disabled).toBe(true)
  })
  it('should hangupButton is disabled', () => {
    const hangupButton: HTMLButtonElement = spectator.query('#hangupButton')
    expect(hangupButton.disabled).toBe(true)
  })
  // TODO: Encontrar bons mocks relacionados a RTC e seguir com testes mais úteis
})
