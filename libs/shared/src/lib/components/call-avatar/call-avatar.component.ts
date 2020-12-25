import { Component, Input } from '@angular/core'

@Component({
  selector: 'quertc-call-avatar',
  templateUrl: './call-avatar.component.html',
  styleUrls: ['./call-avatar.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CallAvatarComponent {
  @Input() src: string
  @Input() alt = 'avatar'

  // private _animation: boolean | undefined = false
  // public get animation(): boolean | undefined {
  //   return this._animation ?? false
  // }
  @Input()
  public animation = false
  // (value: boolean | undefined) {
  //   this._animation = value ?? false
  // }
}
