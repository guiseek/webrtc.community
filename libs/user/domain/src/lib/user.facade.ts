import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { UserDataService } from './user-data.service'
import { User } from '@webrtc-comm/core'

@Injectable()
export class UserFacade {
  user = new BehaviorSubject<Partial<User>>({})
  user$ = this.user.asObservable()
  constructor(private userDataService: UserDataService) {}

  loadById(id: string) {
    this.userDataService.loadById(id).subscribe((user) => {
      this.user.next(user)
    })
  }
}
