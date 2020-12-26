import { FormBuilder, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
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

  constructor(private http: HttpClient, private builder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form.value)
    if (this.form.valid) {
      this.http
        .post<User>('/user/signup', this.form.value)
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
