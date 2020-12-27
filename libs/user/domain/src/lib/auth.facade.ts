import { Injectable } from '@angular/core'
import { AuthDataService } from './auth-data.service'
import { BehaviorSubject } from 'rxjs'
import { AuthLogin, User, UserSignup } from '@quertc/core'
import { filter, map } from 'rxjs/operators'

export const setNextAndReturn = <T = any>(
  subject: BehaviorSubject<T>,
  value: T
) => {
  subject.next(value)
  return value
}
@Injectable()
export class AuthFacade {
  private currentUserSubject = new BehaviorSubject<Partial<User>>({})
  currentUser$ = this.currentUserSubject.pipe(filter((u) => !!u))
  constructor(private authDataService: AuthDataService) {}

  checkAuthentication() {
    return this.authDataService
      .load()
      .pipe(map((user) => setNextAndReturn(this.currentUserSubject, user)))
  }

  login(credentials: AuthLogin) {
    return this.authDataService
      .login(credentials)
      .pipe(map((user) => setNextAndReturn(this.currentUserSubject, user)))
  }

  signup(user: UserSignup) {
    return this.authDataService.signup(user)
  }

  logout() {
    this.authDataService.logout()
  }
}
