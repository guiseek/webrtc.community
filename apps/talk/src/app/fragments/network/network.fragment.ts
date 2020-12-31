import { Component, ElementRef, AfterViewInit, Input } from '@angular/core'
import { asyncScheduler, interval } from 'rxjs'
import { take } from 'rxjs/operators'
import { NetworkService } from './network.service'

@Component({
  selector: 'talk-network',
  templateUrl: './network.fragment.svg',
  styleUrls: ['./network.fragment.scss'],
})
export class NetworkFragment implements AfterViewInit {
  @Input() period = 500
  @Input() steps: string[] = []
  get svg() {
    return this.elRef.nativeElement
  }
  constructor(
    private elRef: ElementRef<SVGElement>,
    private networkService: NetworkService
  ) {}

  ngAfterViewInit(): void {
    if (!!this.steps.length) {
      this.connect(this.steps)
    }
    this.networkService.connection$.subscribe(this.connect)
  }

  public connect(steps: string[]) {
    let n = 0
    interval(this.period, asyncScheduler)
      .pipe(take(steps.length))
      .subscribe(() => {
        const el = this.svg.querySelector(steps[n])
        if (el) el.classList.add('active')
        n++
      })
  }
}
