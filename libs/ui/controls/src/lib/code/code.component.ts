import { FocusMonitor } from '@angular/cdk/a11y'
import { coerceBooleanProperty } from '@angular/cdk/coercion'
import {
  Component,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  OnDestroy,
  Optional,
  Self,
  ViewChild,
} from '@angular/core'
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NgControl,
  Validators,
} from '@angular/forms'
import {
  MAT_FORM_FIELD,
  MatFormField,
  MatFormFieldControl,
} from '@angular/material/form-field'
import { Subject } from 'rxjs'

export class Code {
  constructor(
    public timeLow: string,
    public timeMid: string,
    public timeHiAndVersion: string
  ) {}
}

@Component({
  selector: 'control-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
  providers: [{ provide: MatFormFieldControl, useExisting: CodeComponent }],
})
export class CodeComponent
  implements ControlValueAccessor, MatFormFieldControl<Code>, OnDestroy {
  static nextId = 0
  @ViewChild('timeLow') timeLowInput: HTMLInputElement
  @ViewChild('timeMid') timeMidInput: HTMLInputElement
  @ViewChild('timeHiAndVersion') timeHiAndVersionInput: HTMLInputElement

  _readOnly = false
  get readOnly() {
    return this._readOnly
  }
  @Input()
  @HostBinding('attr.readOnly')
  set readOnly(v: string | boolean) {
    this._readOnly = v === false ? false : true
  }

  parts: FormGroup
  stateChanges = new Subject<void>()
  @Input() focused = false
  controlType = 'control-code-input'

  @HostBinding('attr.id')
  id = `control-code-input-${CodeComponent.nextId++}`

  onChange = (_: any) => {}
  onTouched = () => {}

  get empty() {
    const {
      value: { timeLow, timeMid, timeHiAndVersion },
    } = this.parts

    return !timeLow && !timeMid && !timeHiAndVersion
  }

  @HostBinding('class.control-floating')
  get shouldLabelFloat() {
    return this.focused || !this.empty
  }

  @Input('aria-describedby') userAriaDescribedBy: string

  @Input()
  get placeholder(): string {
    return this._placeholder
  }
  set placeholder(value: string) {
    this._placeholder = value
    this.stateChanges.next()
  }
  private _placeholder: string

  @Input()
  get required(): boolean {
    return this._required
  }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value)
    this.stateChanges.next()
  }
  private _required = false

  @Input()
  get disabled(): boolean {
    return this._disabled
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value)
    this._disabled ? this.parts.disable() : this.parts.enable()
    this.stateChanges.next()
  }
  private _disabled = false

  @Input()
  get value(): Code | null {
    if (this.parts.valid) {
      const {
        value: { timeLow, timeMid, timeHiAndVersion },
      } = this.parts
      return new Code(timeLow, timeMid, timeHiAndVersion)
    }
    return null
  }
  set value(tel: Code | null) {
    const { timeLow, timeMid, timeHiAndVersion } = tel || new Code('', '', '')
    this.parts.setValue({ timeLow, timeMid, timeHiAndVersion })
    this.stateChanges.next()
  }

  get errorState(): boolean {
    return this.parts.invalid && this.parts.dirty
  }

  constructor(
    formBuilder: FormBuilder,
    private _focusMonitor: FocusMonitor,
    private _elementRef: ElementRef<HTMLElement>,
    @Optional() @Inject(MAT_FORM_FIELD) public _formField: MatFormField,
    @Optional() @Self() public ngControl: NgControl
  ) {
    this.parts = formBuilder.group({
      timeLow: [
        null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8),
          Validators.pattern(/^[0-9a-f]{8}$/i),
        ],
      ],
      timeMid: [
        null,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4),
          Validators.pattern(/^[0-9a-f]{4}$/i),
        ],
      ],
      timeHiAndVersion: [
        null,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4),
          Validators.pattern(/^[0-5][0-9a-f]{3}$/i),
        ],
      ],
    })

    _focusMonitor.monitor(_elementRef, true).subscribe((origin) => {
      if (this.focused && !origin) {
        this.onTouched()
      }
      this.focused = !!origin
      this.stateChanges.next()
    })

    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this
    }
  }

  autoFocusNext(
    control: AbstractControl,
    nextElement?: HTMLInputElement
  ): void {
    if (!control.errors && nextElement) {
      this._focusMonitor.focusVia(nextElement, 'program')
    }
  }

  autoFocusPrev(control: AbstractControl, prevElement: HTMLInputElement): void {
    if (control.value.length < 1) {
      this._focusMonitor.focusVia(prevElement, 'program')
    }
  }

  ngOnDestroy() {
    this.stateChanges.complete()
    this._focusMonitor.stopMonitoring(this._elementRef)
  }

  setDescribedByIds(ids: string[]) {
    const controlElement = this._elementRef.nativeElement.querySelector(
      '.control-code-input-container'
    )!
    controlElement.setAttribute('aria-describedby', ids.join(' '))
  }

  onContainerClick() {
    if (this.parts.controls.timeHiAndVersion.valid) {
      this._focusMonitor.focusVia(this.timeHiAndVersionInput, 'program')
    } else if (this.parts.controls.timeMid.valid) {
      this._focusMonitor.focusVia(this.timeHiAndVersionInput, 'program')
    } else if (this.parts.controls.timeLow.valid) {
      this._focusMonitor.focusVia(this.timeMidInput, 'program')
    } else {
      this._focusMonitor.focusVia(this.timeLowInput, 'program')
    }
  }

  writeValue(tel: Code | null): void {
    this.value = tel
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  _handleInput(control: AbstractControl, nextElement?: HTMLInputElement): void {
    this.autoFocusNext(control, nextElement)
    this.onChange(this.value)
  }

  static ngAcceptInputType_disabled: boolean | string | null | undefined
  static ngAcceptInputType_required: boolean | string | null | undefined
}
