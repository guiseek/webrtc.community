import { Inject, Injectable } from '@angular/core'
import { MEDIA_STREAM } from '../meeting-injectors'

/**
 * @dynamic
 */
@Injectable({
  providedIn: 'root',
})
export class MediaService {
  constructor(
    @Inject(MEDIA_STREAM) public constraints: MediaStreamConstraints
  ) {}

  public currentStream: MediaStream

  getUserMedia(constraints?: MediaStreamConstraints) {
    return navigator.mediaDevices.getUserMedia(
      constraints ? constraints : this.constraints
    )
  }

  async getDevices(deviceKind?: MediaDeviceKind) {
    const filter = ({ kind }: MediaDeviceInfo) => kind === deviceKind
    const devices = await navigator.mediaDevices.enumerateDevices()
    return deviceKind ? devices.filter(filter) : devices
  }

  getDisplayMedia(): Promise<MediaStream> {
    const configuration = { video: true }
    const mediaDevices = navigator.mediaDevices
    if ('getDisplayMedia' in navigator) {
      return (navigator as any).getDisplayMedia(configuration)
    } else if ('getDisplayMedia' in mediaDevices) {
      return (mediaDevices as any).getDisplayMedia(configuration)
    } else {
      return mediaDevices.getUserMedia({
        video: { mediaSourcee: 'screen' },
      } as MediaStreamConstraints)
    }
  }
}
