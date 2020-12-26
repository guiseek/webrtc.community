import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { LayoutModule } from '@angular/cdk/layout'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RTCPeerMock, SignalingChannel } from '@quertc/core'
import { SignalingFactory, SIGNALING_CLIENT } from './adapters'
import { NavbarComponent } from './components'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        LayoutModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        BrowserAnimationsModule,
      ],
      declarations: [AppComponent, NavbarComponent],
      providers: [
        {
          provide: SIGNALING_CLIENT,
          useValue: 'http://localhost:3000',
        },
        {
          provide: SignalingChannel,
          useFactory: SignalingFactory,
          deps: [SIGNALING_CLIENT],
        },
      ],
    }).compileComponents()
  })

  it('should compile', () => {
    class TestMyES6Class extends RTCPeerMock {
      public testonconnectionstatechange(event) {
        this.conn.onconnectionstatechange!(event)
      }
      public testonicecandidate(event: RTCPeerConnectionIceEvent) {
        this.conn.onicecandidate!(event)
      }
    }
    const logSpy = jest.spyOn(console, 'log')
    ;(global as any).RTCPeerConnection = jest.fn()
    const instance = new TestMyES6Class()
    instance.testonconnectionstatechange({} as Event)
    instance.testonicecandidate({} as RTCPeerConnectionIceEvent)
    expect((global as any).RTCPeerConnection).toBeCalledTimes(1)
    expect(logSpy).toBeCalledWith('onConnectionStateChange')
    expect(logSpy).toBeCalledWith('onIceCandidate')
  })
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  // it(`should have as title 'client-app'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent)
  //   const app = fixture.componentInstance
  //   expect(app.title).toEqual('client-app')
  // })

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent)
  //   fixture.detectChanges()
  //   const compiled = fixture.nativeElement
  //   expect(compiled.querySelector('h1').textContent).toContain(
  //     'Welcome to client-app!'
  //   )
  // })
})
