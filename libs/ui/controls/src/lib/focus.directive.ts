import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[controlFocus]'
})
export class FocusDirective implements AfterViewInit {
  @Input('controlFocus') controlFocus: boolean
  constructor(private elRef: ElementRef<HTMLElement>) { }

  ngAfterViewInit() {
    if (this.controlFocus && this.elRef.nativeElement) {
      this.elRef.nativeElement.focus()
    }
  }
  focus() {
    this.elRef.nativeElement.focus()
  }
  blur() {
    this.elRef.nativeElement.blur()
  }
}
