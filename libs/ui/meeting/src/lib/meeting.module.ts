import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MediaService } from './services/media.service'
import { CallingComponent } from './components/calling/calling.component'
import { RTC_CONFIGURATION } from './meeting-injectors'

@NgModule({
  imports: [CommonModule],
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
  declarations: [CallingComponent],
  exports: [CallingComponent],
})
export class MeetingModule {}
