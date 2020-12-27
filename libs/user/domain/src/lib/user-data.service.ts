import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { User, UserSignup } from '@quertc/core'

@Injectable()
export class UserDataService {
  static api = '/user'
  constructor(private http: HttpClient) {}

  load() {
    // const params = new HttpParams().set('param', 'value')
    // const headers = new HttpHeaders().set('Accept', 'application/json')
    // return this.http.get<User[]>(UserDataService.api)
    return this.http.get<User>(UserDataService.api + '/info')
  }

  signup(user: UserSignup) {
    return this.http.post<User>(UserDataService.api + '/signup', user)
  }
}
