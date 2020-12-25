import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '@quertc/shared'
import { ReactiveFormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field'
import { DevicesComponent } from './devices/devices.component'
import { CodeComponent } from './code/code.component'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  declarations: [DevicesComponent, CodeComponent],
  exports: [DevicesComponent, CodeComponent],
})
export class ControlsModule {}
