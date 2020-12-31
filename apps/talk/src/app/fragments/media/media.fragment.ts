import { Component, Input } from '@angular/core';
import { PeerSide } from '../../typings';

@Component({
  selector: 'talk-media',
  templateUrl: './media.fragment.svg',
  styleUrls: ['./media.fragment.scss']
})
export class MediaFragment {
  @Input() side: PeerSide = 'A'
}
