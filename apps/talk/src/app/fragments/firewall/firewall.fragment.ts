import { Component, Input } from '@angular/core';
import { PeerSide } from '../../typings';

@Component({
  selector: 'talk-firewall',
  templateUrl: './firewall.fragment.svg',
  styleUrls: ['./firewall.fragment.scss']
})
export class FirewallFragment {
  @Input() side: PeerSide = 'A'
}
