import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MeetingModule } from '@webrtc-comm/meeting'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { PerfectNegotiationComponent } from './perfect-negotiation.component'
import { PerfectNegotiation } from './perfect-negotiation'

@NgModule({
  imports: [
    CommonModule,
    MeetingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PerfectNegotiationComponent,
      },
    ]),
  ],
  declarations: [PerfectNegotiation, PerfectNegotiationComponent],
})
export class PerfectNegotiationModule {}
