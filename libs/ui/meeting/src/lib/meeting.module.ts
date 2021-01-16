import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'
import { MatSliderModule } from '@angular/material/slider'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MEDIA_STREAM, RTC_CONFIGURATION } from './meeting-injectors'
import { CallingComponent } from './components/calling/calling.component'
import { MuteButtonComponent } from './components/mute-button/mute-button.component'
import { ShareButtonComponent } from './components/share-button/share-button.component'
import { CheckAudioComponent } from './components/check-audio/check-audio.component'
import { MediaService } from './services/media.service'

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    MatTooltipModule,
    MatProgressBarModule,
  ],
  providers: [
    MediaService,
    {
      provide: MEDIA_STREAM,
      useValue: {},
    },
    {
      provide: RTC_CONFIGURATION,
      useValue: {
        iceServers: [
          // { urls: 'stun:stun.stunprotocol.org:3478' },
          { urls: 'stun:stun.services.mozilla.com' },
          { urls: 'stun:stun.l.google.com:19302' },
        ],
      },
    },
  ],
  declarations: [
    CallingComponent,
    MuteButtonComponent,
    ShareButtonComponent,
    CheckAudioComponent,
  ],
  exports: [
    CallingComponent,
    MuteButtonComponent,
    ShareButtonComponent,
    CheckAudioComponent,
  ],
})
export class MeetingModule {}
