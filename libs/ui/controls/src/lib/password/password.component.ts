import { ControlAccessor } from './../control-accessor'
import { NG_VALUE_ACCESSOR, NgControl } from '@angular/forms'
import {
  Component,
  forwardRef,
  Input,
  OnInit,
  EventEmitter,
  Output,
  Optional,
  Self,
} from '@angular/core'

const PassProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ControlAccessor),
  multi: true,
}

@Component({
  selector: 'control-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers: [ControlAccessor, PassProvider],
})
export class PasswordComponent extends ControlAccessor implements OnInit {
  @Input() label: string
  @Input() placeholder = ''

  protected _value: any = ''

  public get value(): any {
    return this._value
  }
  public set value(value: any) {
    this._value = value
  }

  show = false

  @Input() newer: boolean = false

  @Output() valueChange = new EventEmitter<MediaDeviceInfo>()
  constructor(@Optional() @Self() public ngControl: NgControl) {
    super()
    if (this.ngControl) {
      this.ngControl.valueAccessor = this
    }
  }

  ngOnInit(): void {}
}
