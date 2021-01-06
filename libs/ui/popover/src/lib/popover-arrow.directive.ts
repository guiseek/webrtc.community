import { takeUntil } from 'rxjs/operators'
import { PopoverRef } from './popover-ref'
import { Subject } from 'rxjs'
import {
  Directive,
  HostBinding,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core'

@Directive({
  selector: '[quertcPopoverArrow]',
})
export class PopoverArrowDirective implements OnDestroy {
  @HostBinding('style.width.px')
  @HostBinding('style.height.px')
  arrowSize: number

  @HostBinding('style.top.px')
  offsetTop?: number

  @HostBinding('style.right.px')
  offsetRight?: number

  @HostBinding('style.bottom.px')
  offsetBottom?: number

  @HostBinding('style.left.px')
  offsetLeft?: number

  private destroy$ = new Subject<void>()

  constructor(private popoverRef: PopoverRef, private cd: ChangeDetectorRef) {
    this.arrowSize = popoverRef.config.arrowSize

    popoverRef
      .positionChanges()
      .pipe(takeUntil(this.destroy$))
      .subscribe((p) => {
        const { offsetX = 30, offsetY = 20 } = p.connectionPair

        this.offsetTop = (offsetY >= 0 ? offsetY * -1 : null) ?? 0
        this.offsetLeft = (offsetX < 0 ? offsetX * -1 : null) ?? 0
        this.offsetBottom = (offsetY < 0 ? offsetY : null) ?? 0
        this.offsetRight = (offsetX >= 0 ? offsetX : null) ?? 0

        this.cd.detectChanges()
      })
  }

  ngOnDestroy(): void {
    this.destroy$.unsubscribe()
  }
}
