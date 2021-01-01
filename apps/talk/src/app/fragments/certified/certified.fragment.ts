import { Component, Input } from '@angular/core'
import { PeerSide } from '../../typings'

@Component({
  selector: 'talk-certified',
  templateUrl: './certified.fragment.svg',
  styleUrls: ['./certified.fragment.scss'],
})
export class CertifiedFragment {
  @Input() side: PeerSide = 'A'
}
