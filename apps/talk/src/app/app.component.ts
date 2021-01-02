import {
  OnInit,
  ViewChild,
  Component,
  ElementRef,
  AfterViewInit,
} from '@angular/core'
import { RevealSlideChangeEvent } from '@quertc/reveal'
import { timer } from 'rxjs'
import { NetworkFragment, SvgFragment } from './fragments'

@Component({
  selector: 'talk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(SvgFragment) channelFragment: SvgFragment

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
  onLoadChannel(svg: SVGElement) {
    // console.log(collection.item(0));
    // console.log(svg)
    // console.log(svg.querySelectorAll('path'))
  }
  onSlideChanged({ indexh, indexv }: RevealSlideChangeEvent) {
    console.log(indexh, indexv)
    switch (`${indexh},${indexv}`) {
      case '7,0': {
        window.setTimeout(() => {
          this.networkFragment.connect(this.steps)
        }, 3000)
        break
      }
    }
  }
  ngAfterViewInit() {
    // const channel = this.channelFragment.elRef.nativeElement
    // const lineOne = channel.querySelector('#Line-1')
    // const lineOneTwo = channel.querySelector('#Line-1-2')
    // window.setTimeout(() => {
    //   console.log(channel.childElementCount)
    // }, 1000)
    // console.log(this.networkFragment)
    // window.setTimeout(() => {
    //   this.networkFragment.connect(this.steps)
    // }, 2000)
    // window.setTimeout(() => {
    //   this.showFirewall = true
    // }, 7000)
    // window.setTimeout(() => {
    //   this.showTurnStun = true
    // }, 10000)
  }
}
