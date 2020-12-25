import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { PeerToPeerComponent } from './peer-to-peer.component'

@NgModule({
  imports: [
    CommonModule,
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
