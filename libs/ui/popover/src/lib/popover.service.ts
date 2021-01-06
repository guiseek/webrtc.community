import { Injectable, Injector, TemplateRef, ElementRef, InjectionToken } from '@angular/core';
import { Overlay, ConnectionPositionPair } from '@angular/cdk/overlay';
import {
  ComponentType,
  ComponentPortal,
  PortalInjector,
  TemplatePortal,
} from '@angular/cdk/portal';
import { PopoverRef } from './popover-ref';
import { PopoverComponent } from './popover.component';
import { Popover } from './popover';

export const POPOVER_DATA = new InjectionToken('popover.data');

@Injectable({
  providedIn: 'root',
})
export class PopoverService {
  constructor(private overlay: Overlay, private injector: Injector) {}

  open<D = any>(
    componentOrTemplate: ComponentType<any> | TemplateRef<any>,
    target: ElementRef | HTMLElement,
    config: Partial<Popover<D>> = {}
  ): PopoverRef<D> {
    const popoverConfig = Object.assign(new Popover(), config);

    const arrowSize = popoverConfig.arrowSize;
    const arrowOffset = popoverConfig.arrowOffset;
    const panelOffset = arrowSize / 2;

    // preferred positions, in order of priority
    const positions: ConnectionPositionPair[] = [
      // top center
      {
        overlayX: 'center',
        overlayY: 'bottom',
        originX: 'center',
        originY: 'top',
        panelClass: ['bottom', 'center'],
        offsetY: -1 * panelOffset,
      },
      // bottom center
      {
        overlayX: 'center',
        overlayY: 'top',
        originX: 'center',
        originY: 'bottom',
        panelClass: ['top', 'center'],
        offsetY: panelOffset,
      },


      // top left
      {
        overlayX: 'start',
        overlayY: 'bottom',
        originX: 'center',
        originY: 'top',
        panelClass: ['bottom', 'left'],
        offsetX: -1 * arrowOffset,
        offsetY: -1 * panelOffset,
      },
      // top right
      {
        overlayX: 'end',
        overlayY: 'bottom',
        originX: 'center',
        originY: 'top',
        panelClass: ['bottom', 'right'],
        offsetX: arrowOffset,
        offsetY: -1 * panelOffset,
      },
      // bottom left
      {
        overlayX: 'start',
        overlayY: 'top',
        originX: 'center',
        originY: 'bottom',
        panelClass: ['top', 'left'],
        offsetX: -1 * arrowOffset,
        offsetY: panelOffset,
      },
      // bottom right
      {
        overlayX: 'end',
        overlayY: 'top',
        originX: 'center',
        originY: 'bottom',
        panelClass: ['top', 'right'],
        offsetX: arrowOffset,
        offsetY: panelOffset,
      },
    ];

    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(target)
      .withPush(false)
      .withFlexibleDimensions(false)
      .withPositions(positions);

    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });

    const popoverRef = new PopoverRef(
      overlayRef,
      positionStrategy,
      popoverConfig
    );

    const popover = overlayRef.attach(
      new ComponentPortal(
        PopoverComponent,
        null,
        new PortalInjector(
          this.injector,
          new WeakMap<any, any>([[PopoverRef, popoverRef]])
        )
      )
    ).instance;

    if (componentOrTemplate instanceof TemplateRef) {
      // rendering a provided template dynamically
      popover.attachTemplatePortal(
        new TemplatePortal(componentOrTemplate, (null as any), {
          $implicit: config.data,
          popover: popoverRef,
        })
      );
    } else {
      // rendering a provided component dynamically
      popover.attachComponentPortal(
        new ComponentPortal(
          componentOrTemplate,
          null,
          new PortalInjector(
            this.injector,
            new WeakMap<any, any>([
              [POPOVER_DATA, config.data],
              [PopoverRef, popoverRef],
            ])
          )
        )
      );
    }

    return popoverRef;
  }
}
