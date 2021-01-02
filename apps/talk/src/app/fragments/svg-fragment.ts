import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core'

@Component({
  selector: '[talkSvgFragment], [talk-svg-fragment]',
  template: `<ng-content select="svg,image"></ng-content>`,
})
export class SvgFragment {
  @Output() loadContent = new EventEmitter<SVGElement>()
  constructor(public elRef: ElementRef<HTMLObjectElement>) {
    console.log(elRef.nativeElement.contentDocument)
    elRef.nativeElement.addEventListener('load', (ev) => {
      const content = elRef.nativeElement.contentDocument
      this.loadContent.emit(content.children.item(0) as SVGElement)
    })
  }
}
