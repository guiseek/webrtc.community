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
    },
    { src: 'assets/banners/live.svg', alt: 'Tempo real' },
    { src: 'assets/banners/broadcast.svg', alt: 'Difusor' },
    {
      src: 'assets/banners/multi-protocols.svg',
      alt: 'Multi protocolo',
    },
    { src: 'assets/banners/security.svg', alt: 'Seguro' },
    { src: 'assets/banners/easy.svg', alt: 'Simples' },
  ]
}
