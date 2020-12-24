import { Component, HostBinding } from '@angular/core'

@Component({
  selector: 'app-github-corner, a[app-github-corner]',
  templateUrl: './github-corner.component.html',
  styleUrls: ['./github-corner.component.scss'],
})
export class GithubCornerComponent {
  @HostBinding('class.github-corner')
  githubCorner = true
}
