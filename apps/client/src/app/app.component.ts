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
import { timer } from 'rxjs'
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnDestroy {
  @ViewChild('snav') snav: MatSidenav

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
    this.router.events.pipe(
      filter((routeEvent) => routeEvent instanceof NavigationEnd)
    ).subscribe((data => {
      console.log('data route: ', data);

    }))
    timer(1000).subscribe((data) => {
      console.log(this.snav)
    })
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener)
  }
}
