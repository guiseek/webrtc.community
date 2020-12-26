import { Component, HostBinding, Input } from '@angular/core'

@Component({
  selector: 'quertc-calling',
  templateUrl: './calling.component.html',
  styleUrls: ['./calling.component.scss'],
})
export class CallingComponent {
  private _active: boolean

  // constructor(private ) {}

  @Input('active')
  public set active(value: boolean) {
    this._active = value
  }

  public get active(): boolean {
    return this._active
  }

  @HostBinding('class.active')
  get isCalling() {
    return this._active
  }
}
