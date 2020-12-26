import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MeetingModule } from '@quertc/meeting'
import { PerfectNegotiationComponent } from './perfect-negotiation.component'

@NgModule({
  imports: [
    CommonModule,
    MeetingModule,
    RouterModule.forChild([
      {
        path: '',
        component: PerfectNegotiationComponent,
      },
    ]),
  ],
  declarations: [PerfectNegotiationComponent],
})
export class PerfectNegotiationModule {}
