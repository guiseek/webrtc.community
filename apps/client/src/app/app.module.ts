import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { NgModule } from '@angular/core'

import { OverlogModule } from '@quertc/overlog'
import { ControlsModule } from '@quertc/controls'
import { CarouselModule } from '@quertc/carousel'
import { SignalingChannel } from '@quertc/core'
import { MeetingModule } from '@quertc/meeting'

import { AppComponent } from './app.component'
import { LayoutModule } from '@angular/cdk/layout'
import { MatIconModule } from '@angular/material/icon'

import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card'
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
import { DataAccessModule } from '@quertc/data/access'
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
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatSidenavModule,
    MatTooltipModule,
    ControlsModule,
    CarouselModule,
    MeetingModule,
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
