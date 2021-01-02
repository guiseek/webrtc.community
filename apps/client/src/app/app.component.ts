import { code } from '@quertc/controls'
import {
  Component,
  OnDestroy,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  ViewChild,
  AfterViewInit,
} from '@angular/core'
import { MediaMatcher } from '@angular/cdk/layout'
import { NavigationStart, Router } from '@angular/router'
import { MatSidenav } from '@angular/material/sidenav'
import { filter, map, pairwise, startWith } from 'rxjs/operators'
import { Subscription } from 'rxjs'
import { MediaService } from '@quertc/meeting'
import { GaService, NavFocusService } from './interceptors'
import { CookieStorage } from '@quertc/data/access'
import { Platform } from '@angular/cdk/platform'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit, OnDestroy {
  shareMessage = 'Bora ver a nova plataforma de comunicação livre?'

  @ViewChild('snav') snav: MatSidenav
  subscription: Subscription
  title = 'WebRTC.Community'

  mobileQuery: MediaQueryList

  navLinks = [
    { route: '/', icon: 'home', label: 'Home' },
    { route: '/restart-ice', icon: 'cached', label: 'Reiniciar candidato' },
    { route: '/peer-to-peer', icon: 'alt_route', label: 'Ponto a ponto' },
    { route: '/munge-sdp', icon: 'alt_route', label: 'Munge SDP' },
    {
      route: '/perfect-negotiation',
      icon: 'swap_calls',
      label: 'Negociação perfeita',
    },
  ]

  private _mobileQueryListener: () => void

  private subscriptions = new Subscription()

  constructor(
    navFocusService: NavFocusService,
    private stream: MediaService,
    detector: ChangeDetectorRef,
    mediaMatcher: MediaMatcher,
    private cookieStorage: CookieStorage,
    private platform: Platform,
    ga: GaService
  ) {
    this.mobileQuery = mediaMatcher.matchMedia('(max-width: 600px)')
    this._mobileQueryListener = () => detector.detectChanges()
    this.mobileQuery.addEventListener('change', this._mobileQueryListener)

    this.subscriptions.add(
      navFocusService.navigationEndEvents
        .pipe(
          map((e) => e.urlAfterRedirects),
          startWith(''),
          pairwise()
        )
        .subscribe(([fromUrl, toUrl]) => {
          // We want to reset the scroll position on navigation except when navigating within
          // the documentation for a single component.
          if (!navFocusService.isNavWithinComponentView(fromUrl, toUrl)) {
            resetScrollPosition()
          }
          if (this.stream.currentStream?.active) {
            this.stream.currentStream.getTracks().forEach((t) => t.stop())
          }
          ga.locationChanged(toUrl)
          this.snav.close()
        })
    )
  }

  ngAfterViewInit() {
    const guest = this.cookieStorage.get('guest')
    if (!guest) {
      const guestCode = code()
      this.cookieStorage.set('guest', guestCode)
    }
  }

  share(text: string) {

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener)
  }
}

function resetScrollPosition() {
  if (typeof document === 'object' && document) {
    const sidenavContent = document.querySelector('.mat-drawer-content')
    if (sidenavContent) {
      sidenavContent.scrollTop = 0
    }
  }
}
