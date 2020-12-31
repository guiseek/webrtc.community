import { Component, Input } from '@angular/core';
import { PeerSide } from '../../typings';

@Component({
  selector: 'talk-notebook',
  templateUrl: './notebook.fragment.svg',
  styleUrls: ['./notebook.fragment.scss']
})
export class NotebookFragment {
  @Input() side: PeerSide = 'A'
}
