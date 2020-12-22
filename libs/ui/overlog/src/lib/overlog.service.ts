import { Injectable, Injector, Inject, ElementRef } from '@angular/core'
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal'
import {
  FlexibleConnectedPositionStrategyOrigin,
  Overlay,
} from '@angular/cdk/overlay'
import { OverlogSnack } from './overlog.snack'
import { OverlogRef } from './overlog-ref'
import {
  OverlogData,
  OVERLOG_CONFIG,
  OverlogConfig,
  defaultPositions,
} from './overlog-config'

@Injectable({
  providedIn: 'root',
})
export class OverlogService {
  private lastOverlog: OverlogRef

  constructor(
    private overlay: Overlay,
    private parentInjector: Injector,
    @Inject(OVERLOG_CONFIG) private overlogConfig: OverlogConfig
  ) {}

  show(data: OverlogData, config?: Partial<OverlogConfig>) {
    this.overlogConfig = Object.assign({}, this.overlogConfig, config)
    const positionStrategy = this.getPositionStrategy()
    const overlayRef = this.overlay.create({ positionStrategy })

    const overlogRef = new OverlogRef(overlayRef)
    this.lastOverlog = overlogRef

    const injector = this.getInjector(data, overlogRef, this.parentInjector)
    const overlogPortal = new ComponentPortal(OverlogSnack, null, injector)

    overlayRef.attach(overlogPortal)

    return overlogRef
  }
  showFrom(data: OverlogData, target: ElementRef | HTMLElement) {
    const positionStrategy = this.getConnectedPosition(target)
    const overlayRef = this.overlay.create({ positionStrategy })
    const overlogRef = new OverlogRef(overlayRef)
    this.lastOverlog = overlogRef

    const injector = this.getInjector(data, overlogRef, this.parentInjector)
    const overlogPortal = new ComponentPortal(OverlogSnack, null, injector)

    overlayRef.attach(overlogPortal)

    return overlogRef
  }
  getConnectedPosition(target: FlexibleConnectedPositionStrategyOrigin) {
    return this.overlay
      .position()
      .flexibleConnectedTo(target)
      .withFlexibleDimensions(false)
      .withPush(true)
      .withPositions(defaultPositions)
  }
  getPositionStrategy() {
    return this.overlay
      .position()
      .global()
      .top(this.getPosition())
      .right(this.overlogConfig.position.right + 'px')
  }

  getPosition() {
    const lastOverlogIsVisible =
      this.lastOverlog && this.lastOverlog.isVisible()
    const position = lastOverlogIsVisible
      ? this.lastOverlog.getPosition().bottom
      : this.overlogConfig.position.top

    return position + 'px'
  }

  getInjector(
    data: OverlogData,
    overlogRef: OverlogRef,
    parentInjector: Injector
  ) {
    const tokens = new WeakMap()

    tokens.set(OverlogData, data)
    tokens.set(OverlogRef, overlogRef)

    return new PortalInjector(parentInjector, tokens)
  }
}
