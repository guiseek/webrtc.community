import { take } from 'rxjs/operators'
import { interval, asyncScheduler, timer } from 'rxjs'
import { AfterViewInit, Component, ElementRef, Input } from '@angular/core'

@Component({
  selector: 'talk-overview',
  templateUrl: './overview.slide.svg',
  styleUrls: ['./overview.slide.scss'],
})
export class OverviewSlide implements AfterViewInit {
  @Input() period = 500
  @Input() steps: string[] = [
    '#Oval-3',
    '#Line-3-2',
    '#Oval-5',
    '#Line-3-4',
    '#Oval-7',
    '#Line-3-7',
    '#Oval-10',
    '#Line-3-8',
    '#Oval-11',
  ]
  svg: SVGElement
  constructor(private elRef: ElementRef<SVGElement>) {}

  ngAfterViewInit(): void {
    this.svg = this.elRef.nativeElement

    const rtcSignaling: SVGElement = this.svg.querySelector('#rtc-signaling')
    const path: SVGPathElement = rtcSignaling.querySelector('#signaling')
    const length = path.getTotalLength()
    if (this.svg) {
      path.classList.add('active')
      path.style.strokeDasharray = `${length}`
      path.style.strokeDashoffset = `${length}`

      if (!!this.steps.length) {
        this.connect(this.steps)
        timer(this.period * this.steps.length + 1000)
          .pipe(take(1))
          .subscribe(() => {
            rtcSignaling.style.display = 'none'
          })
      }
    }
  }

  public connect(steps: string[]) {
    const svg: SVGGElement = this.svg.querySelector('#network')
    let n = 0
    interval(this.period, asyncScheduler)
      .pipe(take(steps.length))
      .subscribe(() => {
        const el: SVGPathElement = svg.querySelector(steps[n])
        if (el) el.classList.add('active')
        n++
      })
  }
}
