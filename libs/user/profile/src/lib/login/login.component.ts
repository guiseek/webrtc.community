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
import { HttpClient } from '@angular/common/http'
import { catchError, takeUntil } from 'rxjs/operators'
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

  form = this.builder.group(
    {
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
    },
    { updateOn: 'blur' }
  )
  auth$!: Observable<AuthResponse>

  error = new Subject<any>()
  error$ = this.error.asObservable()

  constructor(
    private router: Router,
    private http: HttpClient,
    private builder: FormBuilder
  ) {}

  ngAfterViewInit(): void {
    if (this.emailRef.nativeElement) {
      this.emailRef.nativeElement.focus()
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.auth$ = this.http
        .post<AuthResponse>('/auth/login', this.form.value)
        .pipe(
          catchError(({ error }) => {
            this.error.next(error.message)
            return throwError(error)
          })
        )
      this.auth$.pipe(takeUntil(this.destroy$)).subscribe((response) => {
        this.router.navigate(['/', 'user', 'profile'])
      })
    }
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
