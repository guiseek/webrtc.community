import {
  OnInit,
  ViewChild,
  Component,
  ElementRef,
  AfterViewInit,
} from '@angular/core'
import { timer } from 'rxjs'
import { NetworkFragment } from './fragments'

@Component({
  selector: 'talk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
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
  ngAfterViewInit() {
    console.log(this.networkFragment)
    window.setTimeout(() => {
      this.networkFragment.connect(this.steps)
    }, 2000)
    window.setTimeout(() => {
      this.showFirewall = true
    }, 7000)
    window.setTimeout(() => {
      this.showTurnStun = true
    }, 10000)
  }
}
