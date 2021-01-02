import { Platform } from '@angular/cdk/platform'
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core'

@Component({
  selector: `[quertc-share-button], [quertcShareButton]`,
  templateUrl: './share-button.component.html',
  styleUrls: ['./share-button.component.scss'],
})
export class ShareButtonComponent implements OnInit {
  @Input() message: string
  app: 'whatsapp' = 'whatsapp'

  @Output() onShare = new EventEmitter<string>()

  constructor(private platform: Platform) {}

  ngOnInit(): void {
    if (!this.message) {
      this.message = `
        Bora ver a nova plataforma de comunicação livre?
      `
    }
  }

  onClick() {
    const url = 'https://webrtc.community/#/perfect-negotiation'
    window.open(
      (this.platform.isBrowser
        ? 'https://api.whatsapp.com/send?text='
        : 'whatsapp://send?text=') +
        encodeURIComponent(this.message.trim() + '\n' + url)
    )
  }
}
