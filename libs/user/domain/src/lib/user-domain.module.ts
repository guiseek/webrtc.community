import { NgModule } from '@angular/core'
import { UserDataService } from './user-data.service'
import { AuthDataService } from './auth-data.service'
import { AuthFacade } from './auth.facade'
import { UserFacade } from './user.facade'

@NgModule({
  providers: [AuthFacade, AuthDataService, UserFacade, UserDataService],
})
export class UserDomainModule {}
