import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserModule, DomSanitizer } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { NgModule } from '@angular/core'

import { PopoverModule } from '@webrtc-comm/popover'
import { OverlogModule } from '@webrtc-comm/overlog'
import { ControlsModule } from '@webrtc-comm/controls'
import { CarouselModule } from '@webrtc-comm/carousel'
import { SignalingChannel } from '@webrtc-comm/core'
import { MEDIA_STREAM, MeetingModule } from '@webrtc-comm/meeting'

import { AppComponent } from './app.component'
import { LayoutModule } from '@angular/cdk/layout'
import { MatIconModule, MatIconRegistry } from '@angular/material/icon'

import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card'
import { MatMenuModule } from '@angular/material/menu'
import { MatDialogModule } from '@angular/material/dialog'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatDividerModule } from '@angular/material/divider'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { ServiceWorkerModule } from '@angular/service-worker'
import {
  CameraLensComponent,
  FooterComponent,
  GithubCornerComponent,
  NavbarComponent,
  LogoComponent,
} from './components'
import { SignalingFactory, SIGNALING_CLIENT } from './adapters'
import { AuthTokenInterceptor } from './interceptors'
import { HomeComponent } from './home/home.component'
import { DataAccessModule } from '@webrtc-comm/data/access'
import { env } from './../envs/env'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CameraLensComponent,
    HomeComponent,
    FooterComponent,
    GithubCornerComponent,
    LogoComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    BrowserModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatSidenavModule,
    MatTooltipModule,
    ControlsModule,
    CarouselModule,
    MeetingModule,
    PopoverModule,
    RouterModule,
    DataAccessModule.forRoot({
      endpoint: env.endpoint,
    }),
    OverlogModule.forRoot(),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: env.prod }),
  ],
  providers: [
    {
      provide: SIGNALING_CLIENT,
      useValue: env.signaling,
    },
    {
      provide: SignalingChannel,
      useFactory: SignalingFactory,
      deps: [SIGNALING_CLIENT],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true,
    },
    {
      provide: MEDIA_STREAM,
      useValue: env.media,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'whatsapp',
      sanitizer.bypassSecurityTrustResourceUrl('assets/whatsapp.svg')
    )
  }
}
