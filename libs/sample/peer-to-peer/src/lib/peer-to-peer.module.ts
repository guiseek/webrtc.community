import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { SharedModule } from '@quertc/shared'
import { PeerToPeerComponent } from './peer-to-peer.component'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
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
