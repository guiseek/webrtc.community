import { environment } from './../../environments/environment'
import { ActivatedRoute } from '@angular/router'
import { Component } from '@angular/core'

@Component({
  selector: 'embed-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent {
  source: string
  poster = '/assets/poster.png'
  videos = [
    '/Researching%20WebRTC%20-%20%0AHussein%20Nasser%20-%20HD%20720p.mov',
    '/Researching%20WebRTC%20-%20Hussein%20Nasser%20-%20HD%20720p%202.mp4',
  ]
  constructor(readonly route: ActivatedRoute) {
    let { video } = this.route.snapshot.params
    this.source = `${environment.cdn}/${
      this.videos[this.videos[video] ? video : 0]
    }`
  }
}
