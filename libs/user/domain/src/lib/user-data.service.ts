import { Injectable } from '@angular/core'
import { User, UserSignup } from '@webrtc-comm/core'
import { DataAccessService } from '@webrtc-comm/data/access'

@Injectable()
export class UserDataService extends DataAccessService {
  load() {
    // const params = new HttpParams().set('param', 'value')
    // const headers = new HttpHeaders().set('Accept', 'application/json')
    // return this.http.get<User[]>(UserDataService.api)
    return this.http.get<User>(this.endpoint + '/user/info')
  }

  signup(user: UserSignup) {
    return this.http.post<User>(this.endpoint + '/user/signup', user)
  }

  loadById(id: string) {
    return this.http.get<User>(`${this.endpoint}/user/${id}`)
  }
}
