import { FormBuilder, Validators } from '@angular/forms'
import { Component, OnInit } from '@angular/core'
import { AuthFacade } from '@quertc/user/domain'
import { catchError } from 'rxjs/operators'
import { Subject, throwError } from 'rxjs'
import { User } from '@quertc/core'

@Component({
  selector: 'user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss'],
})
export class UserSignupComponent implements OnInit {
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

  constructor(private authFacade: AuthFacade, private builder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.valid) {
      this.error.next()
      this.authFacade
        .signup(this.form.value)
        .pipe(
          catchError(({ error }) => {
            this.error.next(error.message)
            return throwError(error)
          })
        )
        .subscribe((response) => {
          console.log(response)
        })
    }
  }
}
