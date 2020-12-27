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
      import('@quertc/restart-ice').then((m) => m.RestartIceModule),
  },
  {
    path: 'peer-to-peer',
    loadChildren: () =>
      import('@quertc/peer-to-peer').then((m) => m.PeerToPeerModule),
  },
  {
    path: 'perfect-negotiation',
    loadChildren: () =>
      import('@quertc/perfect-negotiation').then(
        (m) => m.PerfectNegotiationModule
      ),
  },
  {
    path: 'user-signup',
    loadChildren: () =>
      import('@quertc/user-signup').then((module) => module.UserSignupModule),
  },
  {
    path: 'user-profile',
    loadChildren: () =>
      import('@quertc/user-profile').then((module) => module.UserProfileModule),
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
