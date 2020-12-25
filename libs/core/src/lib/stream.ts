export const defaultConstraints: MediaStreamConstraints = {
  audio: { echoCancellation: true },
  video: {
    facingMode: 'user',
    frameRate: 30,
    width: {
      max: 1280,
      ideal: 800,
    },
  },
}

export class Stream {
  public currentStream: MediaStream

  constructor(
    public constraints: MediaStreamConstraints = defaultConstraints
  ) {}

  getUserMedia(constraints?: MediaStreamConstraints) {
    return navigator.mediaDevices.getUserMedia(
      constraints ? constraints : this.constraints
    )
  }

  async getDevices(deviceKind?: MediaDeviceKind) {
    const filter = ({ kind }) => kind === deviceKind
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
