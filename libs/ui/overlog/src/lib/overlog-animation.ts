import {
  AnimationTriggerMetadata,
  trigger,
  state,
  transition,
  style,
  animate,
  animation,
  keyframes
} from '@angular/animations';

export const overlogAnimations: {
  readonly fadeOverlog: AnimationTriggerMetadata;
} = {
  fadeOverlog: trigger('fadeAnimation', [
    state('default', style({ opacity: 1 })),
    transition('void => *', [style({ opacity: 0 }), animate('{{ fadeIn }}ms')]),
    transition(
      'default => closing',
      animate('{{ fadeOut }}ms', style({ opacity: 0 })),
    ),
  ])
};

export type OverlogAnimationState = 'default' | 'closing';

export const pulseAnimation = animation([
  style({ transform: 'scale(1)' }),
  animate(
    '{{ timings }}',
    keyframes([
      style({ transform: 'scale(1)', offset: 0 }),
      style({ transform: 'scale(2)', offset: 0.5 }),
      style({ transform: 'scale(1)', offset: 1 }),
    ]),
  ),
]);

export const slideInAnimation = animation([
  style({ transform: 'translateY({{ from }})', opacity: 0 }),
  animate('{{ timings }}', style('*')),
]);

export const slideOutAnimation = animation([
  animate('{{ timings }}', style({ transform: 'translateY({{ to }})', opacity: 0 })),
]);
