import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MungeSdpComponent } from './munge-sdp.component'

describe('MungeSdpComponent', () => {
  let component: MungeSdpComponent
  let fixture: ComponentFixture<MungeSdpComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MungeSdpComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(MungeSdpComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
