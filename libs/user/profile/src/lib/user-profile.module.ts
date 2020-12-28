import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTabsModule } from '@angular/material/tabs'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field'

import { UserProfileComponent } from './user-profile.component'
import { LoginComponent } from './login/login.component'
import { InfoComponent } from './info/info.component'
import { RoomsComponent } from './rooms/rooms.component'
import { A11yModule } from '@angular/cdk/a11y'
import { UserDomainModule } from '@quertc/user/domain'
import { UserProfileGuard } from './user-profile.guard'

@NgModule({
  imports: [
    A11yModule,
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    UserDomainModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: '',
        component: UserProfileComponent,
        canActivate: [UserProfileGuard],
        children: [
          {
            path: 'info',
            component: InfoComponent,
          },
          {
            path: 'rooms',
            component: RoomsComponent,
          },
          { path: '**', redirectTo: 'info' },
        ],
      },
    ]),
  ],
  declarations: [
    UserProfileComponent,
    LoginComponent,
    InfoComponent,
    RoomsComponent,
  ],
  providers: [UserProfileGuard],
  exports: [UserProfileComponent],
})
export class UserProfileModule {}
