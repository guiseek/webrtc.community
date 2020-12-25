import { PerfectNegotiationComponent } from './containers/perfect-negotiation/perfect-negotiation.component'
import { HomeComponent } from './home/home.component'
import { Routes } from '@angular/router'

export const DOCS_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'restart-ice',
    loadChildren: () =>
      import('@quertc/restart-ice').then((m) => m.RestartIceModule),
  },
  {
    path: 'peer-to-peer',
    loadChildren: () =>
      import('@quertc/peer-to-peer').then((m) => m.PeerToPeerModule),
  },
  {
    path: 'perfect-negotiation',
    component: PerfectNegotiationComponent,
  },
]
