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
  private currentUser = new BehaviorSubject<Partial<User>>({})
  currentUser$ = this.currentUser.pipe(filter((u) => !!u))
  constructor(private authDataService: AuthDataService) {}

  checkAuthentication() {
    return this.authDataService
      .load()
      .pipe(map((user) => setNextAndReturn(this.currentUser, user)))
  }

  login(credentials: AuthLogin) {
    return this.authDataService
      .login(credentials)
      .pipe(map((user) => setNextAndReturn(this.currentUser, user)))
  }

  signup(user: UserSignup) {
    return this.authDataService.signup(user)
  }

  logout() {
    this.authDataService.logout()
  }
}
