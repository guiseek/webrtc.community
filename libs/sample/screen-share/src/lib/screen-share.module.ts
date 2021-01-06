import { MeetingModule } from '@quertc/meeting';
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { ScreenShareComponent } from './screen-share.component'

@NgModule({
  imports: [
    CommonModule,
    MeetingModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: ScreenShareComponent }
    ]),
  ],
  declarations: [ScreenShareComponent],
})
export class ScreenShareModule {}
