import { Popover } from './popover'
import { Subject, Observable } from 'rxjs'
import {
  OverlayRef,
  FlexibleConnectedPositionStrategy,
  ConnectedOverlayPositionChange,
} from '@angular/cdk/overlay'
import { filter } from 'rxjs/operators'

export class PopoverRef<T = any> {
  private afterClosedSubject = new Subject<T>()

  constructor(
    private overlayRef: OverlayRef,
    private positionStrategy: FlexibleConnectedPositionStrategy,
    public config: Popover<T>
  ) {
    if (!config.disableClose) {
      this.overlayRef.backdropClick().subscribe(() => {
        this.close()
      })

      this.overlayRef
        .keydownEvents()
        .pipe(filter((event) => event.key === 'Escape'))
        .subscribe(() => {
          this.close()
        })
    }
  }

  close(dialogResult?: T): void {
    this.afterClosedSubject.next(dialogResult)
    this.afterClosedSubject.complete()

    this.overlayRef.dispose()
  }

  afterClosed(): Observable<T> {
    return this.afterClosedSubject.asObservable()
  }

  positionChanges(): Observable<ConnectedOverlayPositionChange> {
    return this.positionStrategy.positionChanges
  }
}
