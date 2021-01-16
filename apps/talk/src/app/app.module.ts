import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { RevealModule } from '@webrtc-comm/reveal'

import { AppComponent } from './app.component'
import { RouterModule } from '@angular/router'
import {
  MediaFragment,
  NetworkService,
  NetworkFragment,
  NotebookFragment,
  TurnStunFragment,
  SecurityFragment,
  CertifiedFragment,
  FirewallFragment,
  SvgFragment,
} from './fragments'
import { SignalingSlide, OverviewSlide } from './slides'

@NgModule({
  declarations: [
    AppComponent,
    SecurityFragment,
    CertifiedFragment,
    MediaFragment,
    NotebookFragment,
    NetworkFragment,
    TurnStunFragment,
    FirewallFragment,
    SvgFragment,
    SignalingSlide,
    OverviewSlide,
  ],
  imports: [
    BrowserModule,
    RevealModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
  ],
  providers: [NetworkService],
  bootstrap: [AppComponent],
})
export class AppModule {}
