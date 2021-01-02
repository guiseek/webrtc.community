import { take } from 'rxjs/operators'
import { interval, asyncScheduler } from 'rxjs'
import { Component, AfterViewInit, ElementRef, Input } from '@angular/core'

@Component({
  selector: 'talk-signaling',
  templateUrl: './signaling.slide.svg',
  styleUrls: ['./signaling.slide.scss'],
})
export class SignalingSlide implements AfterViewInit {
  @Input() period = 500
  @Input() steps: string[] = ['#line-1', '#line-2']
  get svg() {
    return this.elRef.nativeElement
  }
  constructor(
    private elRef: ElementRef<SVGElement>
  ) // private networkService: NetworkService
  {}

  ngAfterViewInit(): void {
    if (!!this.steps.length) {
      this.connect(this.steps)
    }
    // this.networkService.connection$.subscribe(this.connect)
  }

  public connect(steps: string[]) {
    let n = 0
    interval(this.period, asyncScheduler)
      .pipe(take(steps.length))
      .subscribe(() => {
        const el: SVGPathElement = this.svg.querySelector(steps[n])
        const length = el.getTotalLength()
        el.style.strokeDasharray = `${length}`
        el.style.strokeDashoffset = `${length}`
        if (el) el.classList.add('active')
        n++
      })
  }
}
