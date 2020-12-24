import { Component } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  banners = [
    {
      src: 'assets/banners/peer-to-peer.svg',
      alt: 'Ponto a ponto',
      action: '',
    },
    { src: 'assets/banners/live.svg', alt: 'Tempo real', action: '' },
    { src: 'assets/banners/broadcast.svg', alt: 'Difusor', action: '' },
    {
      src: 'assets/banners/multi-protocols.svg',
      alt: 'Multi protocolo',
      action: '',
    },
    { src: 'assets/banners/security.svg', alt: 'Seguro', action: '' },
    { src: 'assets/banners/easy.svg', alt: 'Simples', action: '' },
  ]
}
