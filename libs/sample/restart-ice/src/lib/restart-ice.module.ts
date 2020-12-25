import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { RestartIceComponent } from './restart-ice.component'

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RestartIceComponent,
      },
    ]),
  ],
  declarations: [RestartIceComponent],
})
export class RestartIceModule {}
