import { PerfectNegotiationComponent } from './containers/perfect-negotiation/perfect-negotiation.component'
import { PeerToPeerComponent } from './containers/peer-to-peer/peer-to-peer.component'
// import { RestartIceComponent } from './containers/restart-ice/restart-ice.component'
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
    // component: RestartIceComponent,
  },
  {
    path: 'peer-to-peer',
    component: PeerToPeerComponent,
  },
  {
    path: 'perfect-negotiation',
    component: PerfectNegotiationComponent,
  },
]
