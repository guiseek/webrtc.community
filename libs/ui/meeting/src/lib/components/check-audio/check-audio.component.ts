import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core'

@Component({
  selector: 'comm-check-audio',
  templateUrl: './check-audio.component.html',
  styleUrls: ['./check-audio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckAudioComponent {
  value = 0
  stream: MediaStream
  context: AudioContext
  script: ScriptProcessorNode
  mic: MediaStreamAudioSourceNode

  meterRefresh: number
  checking = false

  constructor(private cdr: ChangeDetectorRef) {}

  start() {
    this.checking = true
    const context = new AudioContext()
    const config = { audio: true, video: false }
    navigator.mediaDevices.getUserMedia(config).then((stream) => {
      this.stream = stream
      this.check(context, stream)
    })
  }

  check(context: AudioContext, stream: MediaStream) {
    this.script = context.createScriptProcessor(2048, 1, 1)
    // necessary to make sample run, but should not be.
    this.script.connect(context.destination)
    this.mic = context.createMediaStreamSource(stream)
    this.mic.connect(this.script)

    let instant: number
    this.script.addEventListener('audioprocess', (evt) => {
      const input = evt.inputBuffer.getChannelData(0)

      let i: number
      let sum = 0.0
      for (i = 0; i < input.length; i++) {
        sum += input[i] * input[i]
      }

      instant = Math.sqrt(sum / input.length)
    })

    this.meterRefresh = setInterval(() => {
      this.value = Math.floor(instant * 100)
      this.cdr.detectChanges()
    }, 200)
  }

  stop() {
    this.checking = false
    this.stream.getTracks().forEach((track) => track.stop())
    this.mic.mediaStream.getTracks().forEach((track) => track.stop())
    clearInterval(this.meterRefresh)
    this.script.disconnect()
    this.mic.disconnect()
    this.value = 0
  }
}
