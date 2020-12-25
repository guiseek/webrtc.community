import { DOCS_ROUTES } from './routes'
import { MatFormFieldModule } from '@angular/material/form-field'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { SignalingChannel } from '@quertc/core'
import { OverlogModule } from '@quertc/overlog'
import { ControlsModule } from '@quertc/controls'
import { CarouselModule } from '@quertc/carousel'

import { AppComponent } from './app.component'
import { RouterModule } from '@angular/router'
import { LayoutModule } from '@angular/cdk/layout'
import { MatIconModule } from '@angular/material/icon'

import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatDividerModule } from '@angular/material/divider'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { CallAvatarComponent, CameraLensComponent } from './components'
import { SignalingFactory, SIGNALING_CLIENT } from './adapters'
import { MediaStreamService } from './services'
import {
  PerfectNegotiationComponent,
  RestartIceComponent,
  PeerToPeerComponent,
} from './containers'
import { HomeComponent } from './home/home.component'
import { env } from './../envs/env'
import { ReactiveFormsModule } from '@angular/forms'
import { FooterComponent } from './components/footer/footer.component'
import { GithubCornerComponent } from './components/github-corner/github-corner.component'

@NgModule({
  declarations: [
    AppComponent,
    CallAvatarComponent,
    PerfectNegotiationComponent,
    RestartIceComponent,
    PeerToPeerComponent,
    CameraLensComponent,
    HomeComponent,
    FooterComponent,
    GithubCornerComponent,
  ],
  imports: [
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
    ReactiveFormsModule,
    OverlogModule.forRoot(),
    RouterModule.forRoot(DOCS_ROUTES, {
      initialNavigation: 'enabled',
      useHash: true,
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    MediaStreamService,
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
