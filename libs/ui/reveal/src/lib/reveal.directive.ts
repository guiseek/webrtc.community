import { RevealSlideChangeEvent } from './reveal.types'
import { DOCUMENT } from '@angular/common'
import {
  Directive,
  Inject,
  OnInit,
  HostBinding,
  Output,
  EventEmitter,
  HostListener,
  Renderer2,
} from '@angular/core'

/**
 * @dynamic
 */
@Directive({
  selector: '[talkReveal], [talk-reveal]',
})
export class RevealDirective implements OnInit {
  @HostBinding('class') styleClass = 'reveal'
  @Output() slideChanged = new EventEmitter<RevealSlideChangeEvent>()
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {
    const revealLink = this.renderer.createElement('link')
    this.renderer.setAttribute(revealLink, 'rel', 'stylesheet')
    const cdn =
      '//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/monokai.min.css'
    this.renderer.setAttribute(revealLink, 'src', cdn)
    this.document.head.appendChild(revealLink)
  }

  @HostListener('slidechanged', ['$event'])
  onSlideChanged(evt: RevealSlideChangeEvent) {
    this.slideChanged.emit(evt)
  }

  async ngOnInit() {
    const Reveal = await import('reveal.js')
    const Markdown = await import('reveal.js/plugin/markdown/markdown.esm.js')
    const Highlight = await import('reveal.js/plugin/highlight/highlight.js')
    const deck = new Reveal.default({
      autoPlayMedia: true,
      plugins: [Markdown.default, Highlight.default],
    })
    deck.initialize({ hash: true })
  }
}
