import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MungeSdpComponent } from './munge-sdp.component'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: MungeSdpComponent,
      },
    ]),
  ],
  declarations: [MungeSdpComponent],
})
export class MungeSdpModule {}
