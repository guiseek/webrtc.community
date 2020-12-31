import { code } from '@quertc/controls'
import { Router } from '@angular/router'
import { FormBuilder, Validators } from '@angular/forms'
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'
import { AuthFacade } from '@quertc/user/domain'
import { catchError } from 'rxjs/operators'
import { Subject, throwError } from 'rxjs'
import { CookieStorage } from '@quertc/data/access'
import { FocusMonitor } from '@angular/cdk/a11y'

@Component({
  selector: 'user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss'],
})
export class UserSignupComponent implements AfterViewInit {
  destroy$ = new Subject<void>()

  @ViewChild('nameEl') nameRef!: ElementRef<HTMLInputElement>

  form = this.builder.group({
    name: ['', Validators.required],
    code: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    pass: ['', [Validators.required, Validators.minLength(6)]],
  })
  error = new Subject<any>()
  error$ = this.error.asObservable()

  constructor(
    private router: Router,
    private _focusMonitor: FocusMonitor,
    private cookieStorage: CookieStorage,
    private authFacade: AuthFacade,
    private builder: FormBuilder
  ) {}

  ngAfterViewInit(): void {
    let guest = this.cookieStorage.get('guest')
    if (!guest) guest = code()
    const [timeLow, timeMid, timeHiAndVersion] = guest.split('-')
    this.form.patchValue({ code: { timeLow, timeMid, timeHiAndVersion } })
    this._focusMonitor.focusVia(this.nameRef.nativeElement, 'program')
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
        .subscribe((response) => this.router.navigate(['/', 'user-profile']))
    }
  }
}
