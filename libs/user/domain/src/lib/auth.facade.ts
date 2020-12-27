import { Injectable } from '@angular/core'
import { AuthDataService } from './auth-data.service'
import { BehaviorSubject } from 'rxjs'
import { AuthLogin, User, UserSignup } from '@quertc/core'
import { filter } from 'rxjs/operators'

@Injectable()
export class AuthFacade {
  private currentUserSubject = new BehaviorSubject<Partial<User>>({})
  currentUser$ = this.currentUserSubject.pipe(filter((u) => !!u))
  constructor(private authDataService: AuthDataService) {}

  login(credentials: AuthLogin) {
    return this.authDataService.login(credentials)
    // .subscribe((user) => {
    //   this.currentUserSubject.next(user)
    // })
  }
  signup(user: UserSignup) {
    return this.authDataService.signup(user)
  }
}
