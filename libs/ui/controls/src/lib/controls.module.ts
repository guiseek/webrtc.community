import { MatInputModule } from '@angular/material/input'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field'
import { DevicesComponent } from './devices/devices.component'
import { CodeComponent } from './code/code.component'
import { RoomComponent } from './room/room.component'
import { FocusDirective } from './focus.directive'

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DevicesComponent,
    CodeComponent,
    RoomComponent,
    FocusDirective,
  ],
  exports: [DevicesComponent, CodeComponent, RoomComponent, FocusDirective],
})
export class ControlsModule {}
