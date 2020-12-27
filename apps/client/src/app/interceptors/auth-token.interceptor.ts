import { catchError } from 'rxjs/operators'
import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { Router } from '@angular/router'
import { AuthStorage } from '@quertc/data/access'

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private tokenStorage: AuthStorage, private router: Router) {
    console.log(tokenStorage)
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.tokenStorage.getStoredTokenValue()
    if (token) request = this.getCloneRequestWithToken(request, token)
    console.log('token: ', token)

    return next.handle(request).pipe(
      catchError((err) => {
        this.catchRedirectError(err)
        return throwError(err)
      })
    )
    // return next.handle(request);
  }
  getCloneRequestWithToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    })
  }
  catchRedirectError(err: any): void {
    if (err instanceof HttpErrorResponse) {
      if (err.status === 401) {
        this.router.navigateByUrl('/user-profile/login')
      }
    }
  }
}
