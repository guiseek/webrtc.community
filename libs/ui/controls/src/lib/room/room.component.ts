import { MatFormFieldControl } from '@angular/material/form-field'
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

const RoomProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ControlAccessor),
  multi: true,
}

@Component({
  selector: 'control-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
  providers: [ControlAccessor, RoomProvider],
})
export class RoomComponent extends ControlAccessor implements OnInit {
  @Input() label: string
  @Input() placeholder = ''

  protected _value: any = ''
  public get value(): any {
    return this._value
  }
  public set value(value: any) {
    this._value = value
  }

  @Output() valueChange = new EventEmitter<MediaDeviceInfo>()
  constructor(@Optional() @Self() public ngControl: NgControl) {
    super()
    if (this.ngControl) {
      this.ngControl.valueAccessor = this
    }
  }

  ngOnInit(): void {}
}
