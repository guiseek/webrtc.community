import { take } from 'rxjs/operators';
import { interval, asyncScheduler } from 'rxjs';
import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'talk-overview',
  templateUrl: './overview.slide.svg',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements AfterViewInit {
  @Input() period = 500
  @Input() steps: string[] = ['#line-1', '#line-2']
  get svg() {
    return this.elRef.nativeElement
  }
  constructor(
    private elRef: ElementRef<SVGElement>
  )
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
