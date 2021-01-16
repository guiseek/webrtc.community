import { AuthFacade } from '@webrtc-comm/user/domain'
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'user-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent implements OnInit {
  currentUser$ = this.authFacade.currentUser$
  constructor(private authFacade: AuthFacade) {}

  ngOnInit(): void {}
}
