import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'
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
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { ReactiveFormsModule } from '@angular/forms'
import { ServiceWorkerModule } from '@angular/service-worker'
import {
  CameraLensComponent,
  FooterComponent,
  GithubCornerComponent,
  NavbarComponent,
} from './components'
import { SignalingFactory, SIGNALING_CLIENT } from './adapters'
import { HomeComponent } from './home/home.component'
import { env } from './../envs/env'
import { LogoComponent } from './components/logo/logo.component'
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
    MatFormFieldModule,
    MatTooltipModule,
    ControlsModule,
    CarouselModule,
    MeetingModule,
    ReactiveFormsModule,
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
