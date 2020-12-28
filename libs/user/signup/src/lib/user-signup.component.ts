import { Router } from '@angular/router'
import { FormBuilder, Validators } from '@angular/forms'
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'
import { AuthFacade } from '@quertc/user/domain'
import { catchError } from 'rxjs/operators'
import { Subject, throwError } from 'rxjs'

@Component({
  selector: 'user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss'],
})
export class UserSignupComponent implements AfterViewInit {
  destroy$ = new Subject<void>()

  @ViewChild('nameEl') nameRef!: ElementRef<HTMLInputElement>

  form = this.builder.group(
    {
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
    },
    { updateOn: 'blur' }
  )
  error = new Subject<any>()
  error$ = this.error.asObservable()

  constructor(
    private router: Router,
    private authFacade: AuthFacade,
    private builder: FormBuilder
  ) {}

  ngAfterViewInit(): void {
    // if (this.nameRef.nativeElement) {
    //   this.nameRef.nativeElement.focus()
    // }
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
