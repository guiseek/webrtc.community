import {
  Input,
  Output,
  Component,
  EventEmitter,
  HostListener,
} from '@angular/core'
@Component({
  selector: 'comm-mute-button',
  templateUrl: './mute-button.component.html',
  styleUrls: ['./mute-button.component.scss'],
})
export class MuteButtonComponent {
  private _video: HTMLVideoElement
  public get video(): HTMLVideoElement {
    return this._video
  }
  @Input()
  public set video(value: HTMLVideoElement) {
    this._video = value
    if (this.video) {
      this._muted = this.video.muted
    }
  }

  @Input() volume = 1

  @Output() volumeChanged = new EventEmitter<number>()

  private _muted = false
  @Input()
  get muted() {
    return this._muted
  }
  set muted(v: boolean) {
    this._muted = v
    if (this.video) {
      this.video.muted = this._muted
    }
  }

  @Output() mutedChanged = new EventEmitter<boolean>()

  @Input() keyboard = true

  // constructor(private evt: EventHandler) {}

  setVolume(value: number): void {
    this.volume = value
    this.video.volume = this.volume
    this.volumeChanged.emit(this.volume)

    if (this.volume > 0) this.setMuted(false)
  }

  setMuted(value: boolean): void {
    if (this.muted !== value) this.toggleMuted()
  }

  toggleMuted(): void {
    this.muted = !this.muted
    this.updateMuted()
  }

  updateMuted(): void {
    this.video.muted = this.muted
    this.mutedChanged.emit(this.muted)
  }

  @HostListener('document:keyup.m', ['$event'])
  onMuteKey(event: KeyboardEvent) {
    if (this.keyboard) {
      this.toggleMuted()
      event.preventDefault()
    }
  }
}
