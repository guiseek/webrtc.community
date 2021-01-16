import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { ControlsModule } from '@webrtc-comm/controls'
import { A11yModule } from '@angular/cdk/a11y'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { UserSignupComponent } from './user-signup.component'
import { UserDomainModule } from '@webrtc-comm/user/domain'

@NgModule({
  imports: [
    A11yModule,
    CommonModule,
    ControlsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    UserDomainModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserSignupComponent,
      },
    ]),
  ],
  declarations: [UserSignupComponent],
})
export class UserSignupModule {}
