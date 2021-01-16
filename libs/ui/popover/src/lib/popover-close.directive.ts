import { PopoverRef } from './popover-ref'
import { Directive, Input, Optional, HostListener } from '@angular/core'

@Directive({
  selector: '[commPopoverClose]',
})
export class PopoverCloseDirective<T = any> {
  @Input('commPopoverClose') popoverResult!: T

  constructor(@Optional() private popoverRef: PopoverRef<T>) {}

  @HostListener('click') onClick(): void {
    console.log('close')
    if (!this.popoverRef) {
      console.error('commPopoverClose is not supported within a template')
      return
    }

    this.popoverRef.close(this.popoverResult)
  }
}
