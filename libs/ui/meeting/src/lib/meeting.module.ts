import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatSliderModule } from '@angular/material/slider'
import { MatTooltipModule } from '@angular/material/tooltip'
import { RTC_CONFIGURATION } from './meeting-injectors'
import { MediaService } from './services/media.service'
import { CallingComponent } from './components/calling/calling.component'
import { MuteButtonComponent } from './components/mute-button/mute-button.component'

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    MatTooltipModule,
  ],
  providers: [
    MediaService,
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
  declarations: [CallingComponent, MuteButtonComponent],
  exports: [CallingComponent, MuteButtonComponent],
})
export class MeetingModule {}
