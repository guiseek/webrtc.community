import { ControlsModule } from '@webrtc-comm/controls'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MungeSdpComponent } from './munge-sdp.component'

@NgModule({
  imports: [
    CommonModule,
    ControlsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
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
