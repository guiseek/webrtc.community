import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MeetingModule } from '@webrtc-comm/meeting'
import { OverlogModule } from '@webrtc-comm/overlog'
import { PeerToPeerComponent } from './peer-to-peer.component'

@NgModule({
  imports: [
    CommonModule,
    MeetingModule,
    OverlogModule,
    RouterModule.forChild([
      {
        path: '',
        component: PeerToPeerComponent,
      },
    ]),
  ],
  declarations: [PeerToPeerComponent],
  exports: [PeerToPeerComponent],
})
export class PeerToPeerModule {}
