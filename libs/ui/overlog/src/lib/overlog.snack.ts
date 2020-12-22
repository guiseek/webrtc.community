import { Component, OnInit, OnDestroy, Inject } from '@angular/core'
import { AnimationEvent } from '@angular/animations'
import { overlogAnimations, OverlogAnimationState } from './overlog-animation'
import { OverlogData, OVERLOG_CONFIG, OverlogConfig } from './overlog-config'
import { OverlogRef } from './overlog-ref'

@Component({
  selector: 'quertc-overlog',
  template: `
    <i class="material-icons" (click)="close()">close</i>
    <div
      [class]="'overlog ' + data.type"
      [@fadeAnimation]="{
        value: animationState,
        params: {
          fadeIn: overlogConfig.animation.fadeIn,
          fadeOut: overlogConfig.animation.fadeOut
        }
      }"
      (@fadeAnimation.done)="onFadeFinished($event)"
    >
      {{ data.text }}
    </div>
  `,
  styleUrls: ['./overlog.snack.scss'],
  animations: [overlogAnimations.fadeOverlog],
})
export class OverlogSnack implements OnInit, OnDestroy {
  animationState: OverlogAnimationState = 'default'
  iconType: string

  private intervalId: number

  constructor(
    readonly data: OverlogData,
    readonly ref: OverlogRef,
    @Inject(OVERLOG_CONFIG) public overlogConfig: OverlogConfig
  ) {
    this.iconType = data.type === 'success' ? 'done' : data.type
  }
  ngOnInit() {
    const { duration } = this.data
    this.intervalId = window.setTimeout(() => {
      this.animationState = 'closing'
    }, duration || 5000)
  }

  ngOnDestroy() {
    window.clearTimeout(this.intervalId)
  }

  close() {
    this.ref.close()
  }

  onFadeFinished(event: AnimationEvent) {
    const { toState } = event
    const isFadeOut = (toState as OverlogAnimationState) === 'closing'
    const itFinished = this.animationState === 'closing'

    if (isFadeOut && itFinished) {
      this.close()
    }
  }
}
