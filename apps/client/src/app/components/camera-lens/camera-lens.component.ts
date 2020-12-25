import { Component, HostBinding } from '@angular/core'

@Component({
  selector: 'app-camera-lens',
  templateUrl: './camera-lens.component.html',
  styleUrls: ['./camera-lens.component.scss'],
})
export class CameraLensComponent {
  @HostBinding('class.app-camera-lens')
  cameraLens = true
}
