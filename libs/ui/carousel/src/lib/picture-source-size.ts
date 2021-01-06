import { Directive, HostBinding, Input } from '@angular/core'

type PicSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xlg'

@Directive({
  selector: 'source[pictureSize]',
})
export class PictureSourceSize {
  private _pictureSize!: PicSize
  public get pictureSize(): PicSize {
    return this._pictureSize
  }
  @Input()
  public set pictureSize(value: PicSize) {
    this._pictureSize = value
  }

  @HostBinding('attr.media') get getMedia() {
    return this.sizes[this.pictureSize]
  }

  sizes: Record<PicSize, string> = {
    xxs: '(max-width:539px)',
    xs: '(min-width:540px) and (max-width:767px)',
    sm: '(min-width:768px) and (max-width:1083px)',
    md: '(min-width:1084px) and (max-width:1399px)',
    lg: '(min-width:1400px) and (max-width:1778px)',
    xlg: '(min-width:1778px)',
  }
  constructor() {}
}
