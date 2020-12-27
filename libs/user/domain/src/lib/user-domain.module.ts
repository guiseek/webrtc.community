import { UserDataService } from './user-data.service'
import { NgModule } from '@angular/core'
import { AuthDataService } from './auth-data.service'
import { AuthFacade } from './auth.facade'

@NgModule({
  providers: [AuthFacade, AuthDataService, UserDataService],
})
export class UserDomainModule {}
