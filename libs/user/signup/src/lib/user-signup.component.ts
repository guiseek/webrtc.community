import { code, stringToCode } from '@webrtc-comm/controls'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'
import { AuthFacade } from '@webrtc-comm/user/domain'
import { catchError } from 'rxjs/operators'
import { Subject, throwError } from 'rxjs'
import { CookieStorage } from '@webrtc-comm/data/access'
import { FocusMonitor } from '@angular/cdk/a11y'

@Component({
  selector: 'user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss'],
})
export class UserSignupComponent implements AfterViewInit {
  destroy$ = new Subject<void>()

  @ViewChild('formEl') groupRef!: ElementRef<HTMLFormElement>
  group!: HTMLFormElement

  @ViewChild('nameEl') nameRef!: ElementRef<HTMLInputElement>

  form = this.builder.group({
    name: ['', Validators.required],
    code: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    pass: ['', [Validators.required, Validators.minLength(6)]],
  })
  get email() {
    return this.form.get('email')
  }
  get pass() {
    return this.form.get('pass')
  }
  error = new Subject<any>()
  error$ = this.error.asObservable()

  constructor(
    private router: Router,
    private focus: FocusMonitor,
    private cookieStorage: CookieStorage,
    private authFacade: AuthFacade,
    private builder: FormBuilder
  ) {}

  ngAfterViewInit(): void {
    this.group = this.groupRef.nativeElement
    console.log(this.group);

    let guest = this.cookieStorage.get('guest')
    if (!guest) guest = code()

    this.form.patchValue({ code: stringToCode(guest) })
    this.focus.focusVia(this.nameRef.nativeElement, 'program')
  }

  onSubmit() {
    if (this.form.valid) {
      this.error.next()
      this.authFacade
        .signup(this.form.value)
        .pipe(
          catchError(({ error }) => {
            this.error.next(error?.message)
            return throwError(error)
          })
        )
        .subscribe((response) => {
          this.router.navigate(['/', 'user-profile'])
        })
    }
  }
}
