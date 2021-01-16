import { PopoverService } from './popover.service'
import { PopoverRef } from './popover-ref'
import {
  Directive,
  Input,
  TemplateRef,
  ElementRef,
  HostListener,
} from '@angular/core'
import { ComponentType } from '@angular/cdk/portal'

@Directive({
  selector: '[commPopoverOpen]',
})
export class PopoverOpenDirective<T = any> {
  @Input('commPopoverOpen') popoverOpen!:
    | ComponentType<any>
    | TemplateRef<any>
  @Input() popoverData: any
  @Input() popoverAnchor!: EventTarget

  constructor(
    public elementRef: ElementRef,
    // @Optional() private popoverRef: PopoverRef<T>,
    private service: PopoverService
  ) {}

  @HostListener('click')
  onClick(): void {
    const eTarget = this.popoverAnchor
      ? this.popoverAnchor
      : this.elementRef.nativeElement

    this.service.open(this.popoverOpen, eTarget, {
      data: this.popoverData,
    })
  }
}
