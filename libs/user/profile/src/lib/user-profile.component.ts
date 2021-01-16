import { Router } from '@angular/router'
import { AuthFacade, UserFacade } from '@webrtc-comm/user/domain'
import { Component } from '@angular/core'
import { filter, map, switchMap, tap } from 'rxjs/operators'

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  routeActive = 'info'
  currentUser$ = this.authFacade.currentUser$
  tabs = [
    { route: 'info', label: 'Info' },
    { route: 'rooms', label: 'Canais' },
  ]
  constructor(private router: Router, private authFacade: AuthFacade) {}

  logout() {
    this.authFacade.logout()
    this.router.navigate(['/'])
  }
}
