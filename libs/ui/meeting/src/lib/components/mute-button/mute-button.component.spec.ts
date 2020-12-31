import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';

import { MuteButtonComponent } from './mute-button.component';

describe('MuteButtonComponent', () => {
  let spectator: SpectatorHost<MuteButtonComponent>;

  const createHost = createHostFactory(MuteButtonComponent);

  it('should create', () => {
    spectator = createHost(`<zippy title="Zippy title"></zippy>`);
    expect(spectator.component).toBeTruthy();
  });

  it('should...', () => {
    spectator = createHost(`<zippy title="Zippy title">Zippy content</zippy>`);
    spectator.click('.zippy__title');
    expect(spectator.query('.arrow')).toHaveText('Close');
  });

  it('should...', () => {
    spectator = createHost(`<zippy title="Zippy title"></zippy>`);
    spectator.click('.zippy__title');
    expect(spectator.query('.zippy__content')).toExist();
    spectator.click('.zippy__title');
    expect('.zippy__content').not.toExist();
  });

});
