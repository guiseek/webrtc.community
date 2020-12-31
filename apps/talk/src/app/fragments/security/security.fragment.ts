import { Component, Input } from '@angular/core';
import { PeerSide } from '../../typings';

@Component({
  selector: 'talk-security',
  templateUrl: './security.fragment.svg',
  styleUrls: ['./security.fragment.scss']
})
export class SecurityFragment {
  @Input() side: PeerSide = 'A'
}
