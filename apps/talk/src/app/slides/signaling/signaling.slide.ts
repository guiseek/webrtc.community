import { Component, ElementRef } from '@angular/core'
import { schedule } from '../../utilities/slides.utils'

@Component({
  selector: 'talk-signaling',
  templateUrl: './signaling.slide.svg',
  styleUrls: ['./signaling.slide.scss'],
})
export class SignalingSlide {
  constructor(private elRef: ElementRef<SVGElement>) {}
  createOffer() {
    const svg = this.elRef.nativeElement
    const rtcSignaling: SVGElement = svg.querySelector('#rtc-signaling')
    const path: SVGPathElement = rtcSignaling.querySelector('#signaling')
    const length = path.getTotalLength()
    if (svg) {
      path.classList.add('offer')
      path.style.strokeDasharray = `${length}`
      path.style.strokeDashoffset = `${length}`

      schedule(8000, () => path.classList.remove('offer'))
      schedule(12000, () => path.classList.add('answer'))
      schedule(20000, () => path.classList.remove('answer'))
    }
  }
}
