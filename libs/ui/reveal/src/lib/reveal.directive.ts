import { DOCUMENT } from '@angular/common';
import { Directive, Inject, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[talkReveal], [talk-reveal]'
})
export class RevealDirective implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('src', '//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/monokai.min.css')
    this.document.head.appendChild(link);
  }
  @HostBinding('class') styleClass = 'reveal';
  async ngOnInit() {
    const Reveal = await import('reveal.js');
    const Markdown = await import('reveal.js/plugin/markdown/markdown.esm.js');
    const Highlight = await import('reveal.js/plugin/highlight/highlight.js');
    const deck = new Reveal.default({
      plugins: [Markdown.default, Highlight.default],
    });
    deck.initialize({
      hash: true,
    });
  }
}
