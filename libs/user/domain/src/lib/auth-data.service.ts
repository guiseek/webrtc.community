import { AuthStorage } from '@quertc/data/access'
import { AuthResponse, User, UserSignup } from '@quertc/core'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { UserDataService } from './user-data.service'
import { switchMap } from 'rxjs/operators'

@Injectable()
export class AuthDataService {
  static api = '/auth/login'
  constructor(
    private http: HttpClient,
    private userDataService: UserDataService,
    private tokenStorage: AuthStorage
  ) {}

  login(credentials: Pick<User, 'email' | 'pass'>) {
    return this.http.post<AuthResponse>(AuthDataService.api, credentials).pipe(
      switchMap((auth) => {
        this.tokenStorage.storeToken(auth)
        return this.userDataService.load()
      })
    )
  }
  load() {
    return this.userDataService.load()
    //  = new BehaviorSubject<User>()
  }
  signup(user: UserSignup) {
    return this.userDataService.signup(user)
  }

  logout() {
    this.tokenStorage.clearStorage()
  }
}
