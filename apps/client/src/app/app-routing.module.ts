import { HomeComponent } from './home/home.component'
import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'restart-ice',
    loadChildren: () =>
      import('@webrtc-comm/restart-ice').then((m) => m.RestartIceModule),
  },
  {
    path: 'peer-to-peer',
    loadChildren: () =>
      import('@webrtc-comm/peer-to-peer').then((m) => m.PeerToPeerModule),
  },
  {
    path: 'perfect-negotiation',
    loadChildren: () =>
      import('@webrtc-comm/perfect-negotiation').then(
        (m) => m.PerfectNegotiationModule
      ),
  },
  {
    path: 'user-signup',
    loadChildren: () =>
      import('@webrtc-comm/user-signup').then((module) => module.UserSignupModule),
  },
  {
    path: 'user-profile',
    loadChildren: () =>
      import('@webrtc-comm/user-profile').then((module) => module.UserProfileModule),
  },
  {
    path: 'munge-sdp',
    loadChildren: () =>
      import('@webrtc-comm/munge-sdp').then((module) => module.MungeSdpModule),
  },
  {
    path: 'screen-share',
    loadChildren: () =>
      import('@webrtc-comm/screen-share').then((module) => module.ScreenShareModule),
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabled',
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
