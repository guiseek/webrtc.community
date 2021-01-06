import { Component, TemplateRef } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  exs = [
    { route: '/restart-ice', name: '', icon: '' },
    { route: '/peer-to-peer', name: '', icon: '' },
    { route: '/perfect-negotiation', name: '', icon: '' },
    { route: '/munge-sdp', name: '', icon: '' },
    { route: '/screen-share', name: '', icon: '' },
  ]
  samples = [
    { route: '/restart-ice', icon: 'swap_calls', label: 'Reiniciar candidato' },
    {
      route: '/perfect-negotiation',
      icon: 'import_export',
      label: 'Negociação perfeita',
    },
    { route: '/peer-to-peer', icon: 'call_received', label: 'Ponto a ponto' },
    { route: '/munge-sdp', icon: 'alt_route', label: 'Munge SDP' },
    { route: '/screen-share', icon: 'screen_share', label: 'Compartilhar tela' },
  ]

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
  constructor(private dialog: MatDialog) {}

  openDialog(template: TemplateRef<HTMLElement>, isDev = false) {
    this.dialog.open(template, {
      closeOnNavigation: true,
      hasBackdrop: true,
      restoreFocus: true,
      data: { isDev },
    })
  }
}
