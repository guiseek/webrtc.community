import { Injectable } from '@angular/core'
import { env } from '../../envs/env'

/**
 * Google Analytics Service - captures app behaviors and sends them to Google Analytics (GA).
 * Presupposes that GA script has been loaded from a script on the host web page.
 * Associates data with a GA "property" from the env (`gaClientId`).
 */
@Injectable({ providedIn: 'root' })
export class GaService {
  private previousUrl: string

  constructor() {
    this.ga('create', env.gaClientId, 'auto', 'client')
  }

  locationChanged(url: string) {
    this.sendPage(url)
  }

  sendPage(url: string) {
    // Won't re-send if the url hasn't changed.
    if (url === this.previousUrl || !env.prod) {
      return
    }
    this.previousUrl = url
    this.ga('client.set', 'page', url)
    this.ga('client.send', 'pageview')
  }

  ga(...args: any[]) {
    const gaFn = (window as any)['ga']
    if (gaFn) {
      gaFn(...args)
    }
  }
}
