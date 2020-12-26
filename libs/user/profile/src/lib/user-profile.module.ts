import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field'

import { UserProfileComponent } from './user-profile.component'
import { LoginComponent } from './login/login.component'
import { InfoComponent } from './info/info.component'
import { RoomsComponent } from './rooms/rooms.component'
import { A11yModule } from '@angular/cdk/a11y'

@NgModule({
  imports: [
    A11yModule,
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: '',
        component: UserProfileComponent,
        children: [
          { path: '', redirectTo: 'info' },
          {
            path: 'info',
            component: InfoComponent,
          },
          {
            path: 'rooms',
            component: RoomsComponent,
          },
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
  exports: [UserProfileComponent],
})
export class UserProfileModule {}
