import { UserFacade } from '@quertc/user/domain'
import { uuid } from '@quertc/core'
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'user-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent implements OnInit {
  currentUser$ = this.userFacade.user$
  constructor(private userFacade: UserFacade) {}

  ngOnInit(): void {
  }
}
