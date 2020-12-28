import { AuthFacade } from '@quertc/user/domain'
import {
  Component,
  AfterViewInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, Validators } from '@angular/forms'
import { catchError } from 'rxjs/operators'
import { throwError, Subject, Observable } from 'rxjs'
import { AuthResponse } from '@quertc/core'

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements AfterViewInit, OnDestroy {
  destroy$ = new Subject<void>()

  @ViewChild('emailEl') emailRef!: ElementRef<HTMLInputElement>

  form = this.builder.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })
  auth$!: Observable<AuthResponse>

  error = new Subject<any>()
  error$ = this.error.asObservable()

  constructor(
    private router: Router,
    private authFacade: AuthFacade,
    private builder: FormBuilder
  ) {}

  ngAfterViewInit(): void {
    if (this.emailRef.nativeElement) {
      this.emailRef.nativeElement.focus()
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.error.next()
      this.authFacade
        .login(this.form.value)
        .pipe(
          catchError(({ error }) => {
            this.error.next(error?.message)
            return throwError(error)
          })
        )
        .subscribe((response) => this.router.navigate(['/', 'user-profile']))
    }
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
