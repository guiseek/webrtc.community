import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

@Component({
  selector: 'app-call-avatar',
  templateUrl: './call-avatar.component.html',
  styleUrls: ['./call-avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CallAvatarComponent {
  @Input() src: string
  @Input() alt = 'avatar'

  private _animation: boolean
  public get animation(): boolean {
    return this._animation
  }
  @Input()
  public set animation(value: boolean) {
    this._animation = value
  }
}
