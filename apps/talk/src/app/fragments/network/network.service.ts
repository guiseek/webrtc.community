import { BehaviorSubject } from 'rxjs'
import { Injectable } from '@angular/core'

@Injectable()
export class NetworkService {
  connection = new BehaviorSubject<string[]>([])
  connection$ = this.connection.asObservable()

  connect(steps: string[]) {
    this.connection.next(steps)
  }
}
