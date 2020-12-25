import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { SharedModule } from '@quertc/shared'
import { PerfectNegotiationComponent } from './perfect-negotiation.component'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
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
