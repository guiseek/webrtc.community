import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';

import { RevealDirective } from './reveal.directive';

describe('RevealDirective ', () => {
  let spectator: SpectatorDirective<RevealDirective>;
  const createDirective = createDirectiveFactory(RevealDirective);

  it('should change the background color', () => {
    spectator = createDirective(`<div talkReveal>Testing RevealDirective</div>`);

    spectator.dispatchMouseEvent(spectator.element, 'mouseover');

    expect(spectator.element).toBe({
      backgroundColor: 'rgba(0,0,0, 0.1)'
    });

    spectator.dispatchMouseEvent(spectator.element, 'mouseout');
    expect(spectator.element).toBe({
      backgroundColor: '#fff'
    });
  });

});
