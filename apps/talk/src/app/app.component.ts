import { OnInit, ViewChild, Component } from '@angular/core'
import { RevealSlideChangeEvent } from '@webrtc-comm/reveal'
import { timer } from 'rxjs'
import { NetworkFragment, SvgFragment } from './fragments'
import { SignalingSlide } from './slides'
import { schedule } from './utilities/slides.utils'

@Component({
  selector: 'talk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit  {
  @ViewChild(SvgFragment) channelFragment: SvgFragment

  @ViewChild(SignalingSlide)
  signalingSlide: SignalingSlide

  @ViewChild(NetworkFragment)
  networkFragment: NetworkFragment
  showTurnStun = false
  showFirewall = false

  title = 'talk'

  peerA = false
  peerB = false

  steps = [
    '#Oval-9',
    '#Line-2-3',
    '#Oval-12',
    '#Line-3-4',
    '#Oval-11',
    '#Line-3-5',
    '#Oval-6',
    '#Line-3-2',
    '#Oval-3',
  ]

  constructor() {}

  ngOnInit() {
    console.log(this.peerA)
    timer(4000).subscribe(() => {
      console.log(this.peerA)
      this.peerA = true

      this.peerB = true
    })
  }
  onSlideChanged({ indexh, indexv }: RevealSlideChangeEvent) {
    console.log(indexh, indexv)
    switch (`${indexh},${indexv}`) {
      case '6,0': {
        schedule(3000, () => this.signalingSlide.createOffer())
        break
      }
      case '7,0': {
        schedule(3000, () => this.networkFragment.connect(this.steps))
        schedule(10000, () => (this.showFirewall = true))
        break
      }
    }
  }
}
