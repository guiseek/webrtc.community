import { InjectionToken, TemplateRef } from '@angular/core'
import { ConnectionPositionPair } from '@angular/cdk/overlay'

export class OverlogData {
  type?: OverlogType = 'info'
  text?: string
  template?: TemplateRef<any>
  templateContext?: {}
  duration?: number
  config?: OverlogConfig
}

export type OverlogType = 'warn' | 'info' | 'success' | 'default'

export interface OverlogConfig {
  position?: {
    top?: number
    right?: number
    bottom?: number
  }
  animation?: {
    fadeOut: number
    fadeIn: number
  }
}

export const defaultOverlogConfig: OverlogConfig = {
  position: {
    top: 20,
    right: 20,
    bottom: 20,
  },
  animation: {
    fadeOut: 500,
    fadeIn: 0,
  },
}

export const defaultPositions: ConnectionPositionPair[] = [
  // top center
  {
    overlayX: 'center',
    overlayY: 'bottom',
    originX: 'center',
    originY: 'top',
    panelClass: ['bottom', 'center'],
  },
  // top left
  {
    overlayX: 'start',
    overlayY: 'bottom',
    originX: 'center',
    originY: 'top',
  },
  // top right
  {
    overlayX: 'end',
    overlayY: 'bottom',
    originX: 'center',
    originY: 'top',
    panelClass: ['bottom', 'right'],
  },
  // bottom center
  {
    overlayX: 'center',
    overlayY: 'top',
    originX: 'center',
    originY: 'bottom',
    panelClass: ['top', 'center'],
  },
  // bottom left
  {
    overlayX: 'start',
    overlayY: 'top',
    originX: 'center',
    originY: 'bottom',
    panelClass: ['top', 'left'],
  },
  // bottom right
  {
    overlayX: 'end',
    overlayY: 'top',
    originX: 'center',
    originY: 'bottom',
    panelClass: ['top', 'right'],
  },
]

export const OVERLOG_CONFIG = new InjectionToken('OverlogConfig')
