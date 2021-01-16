import { AuthFacade } from '@webrtc-comm/user/domain'
import { Injectable } from '@angular/core'
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable()
export class UserProfileGuard implements CanActivate {
  constructor(private authFacade: AuthFacade) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.authFacade.checkAuthentication().pipe(map((user) => !!user))
  }
}
