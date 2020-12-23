import {
  Component,
  OnDestroy,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core'
import { MediaMatcher } from '@angular/cdk/layout'
import { NavigationEnd, Router } from '@angular/router'
import { MatSidenav } from '@angular/material/sidenav'
import { filter } from 'rxjs/operators'
import { noop, Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnDestroy {
  @ViewChild('snav') snav: MatSidenav
  subscription: Subscription

  mobileQuery: MediaQueryList

  navLinks = [
    { route: '/', label: 'Home' },
    { route: '/restart-ice', label: 'Reiniciar candidato' },
    { route: '/peer-to-peer', label: 'Ponto a ponto' },
    { route: '/perfect-negotiation', label: 'Negociação perfeita' },
  ]

  private _mobileQueryListener: () => void

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)')
    this._mobileQueryListener = () => changeDetectorRef.detectChanges()
    this.mobileQuery.addEventListener('change', this._mobileQueryListener)

    this.subscription = this.router.events
      .pipe(filter((routeEvent) => routeEvent instanceof NavigationEnd))
      .subscribe(() => (this.snav.opened ? this.snav.close() : noop()))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener)
  }
}
