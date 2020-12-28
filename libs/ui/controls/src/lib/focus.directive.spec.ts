import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';

import { FocusDirective } from './focus.directive';

describe('FocusDirective ', () => {
  let spectator: SpectatorDirective<FocusDirective>;
  const createDirective = createDirectiveFactory(FocusDirective);

  it('should change the background color', () => {
    spectator = createDirective(`<div controlFocus>Testing FocusDirective</div>`);

    spectator.dispatchMouseEvent(spectator.element, 'mouseover');

    expect(spectator.element).toHaveStyle({
      backgroundColor: 'rgba(0,0,0, 0.1)'
    });

    spectator.dispatchMouseEvent(spectator.element, 'mouseout');
    expect(spectator.element).toHaveStyle({
      backgroundColor: '#fff'
    });
  });

});
