// import { LogService } from './../log/log.service';
/*
 *  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core'

@Component({
  selector: 'quertc-munge-sdp',
  templateUrl: './munge-sdp.component.html',
  styleUrls: ['./munge-sdp.component.scss'],
})
export class MungeSdpComponent implements OnInit, AfterViewInit {
  @ViewChild('getMediaButtonRefButton') getMediaButtonRef!: ElementRef<
    HTMLButtonElement
  >
  getMediaButton!: HTMLButtonElement

  @ViewChild('createPeerConnectionRefButton')
  createPeerConnectionButtonRef!: ElementRef<HTMLButtonElement>
  createPeerConnectionButton!: HTMLButtonElement

  @ViewChild('createOfferRefButton') createOfferRef!: ElementRef<
    HTMLButtonElement
  >
  createOfferButton!: HTMLButtonElement

  @ViewChild('setOfferRefButton') setOfferRef!: ElementRef<HTMLButtonElement>
  setOfferButton!: HTMLButtonElement

  @ViewChild('createAnswerRefButton') createAnswerRef!: ElementRef<
    HTMLButtonElement
  >
  createAnswerButton!: HTMLButtonElement

  @ViewChild('setAnswerRefButton') setAnswerRef!: ElementRef<HTMLButtonElement>
  setAnswerButton!: HTMLButtonElement

  @ViewChild('hangupRefButton') hangupRef!: ElementRef<HTMLButtonElement>
  hangupButton!: HTMLButtonElement

  @ViewChild('localTextarea') offerSdpTextareaRef!: ElementRef<
    HTMLTextAreaElement
  >
  offerSdpTextarea!: HTMLTextAreaElement

  @ViewChild('remoteTextarea') answerSdpTextareaRef!: ElementRef<
    HTMLTextAreaElement
  >
  answerSdpTextarea!: HTMLTextAreaElement

  @ViewChild('audioSrc') audioSelectRef!: ElementRef<HTMLSelectElement>
  audioSelect!: HTMLSelectElement

  @ViewChild('videoSrc') videoSelectRef!: ElementRef<HTMLSelectElement>
  videoSelect!: HTMLSelectElement

  @ViewChild('localVideoRefEl') localVideoRef!: ElementRef<HTMLVideoElement>
  localVideo!: HTMLVideoElement

  @ViewChild('remoteVideoRefEl') remoteVideoRef!: ElementRef<HTMLVideoElement>
  remoteVideo!: HTMLVideoElement

  @ViewChild('selectSource') selectSourceRef!: ElementRef<HTMLDivElement>
  selectSource!: HTMLDivElement

  dataChannelDataReceived!: RTCDataChannel

  localPeerConnection!: RTCPeerConnection
  remotePeerConnection!: RTCPeerConnection
  localStream!: MediaStream
  sendChannel!: RTCDataChannel
  receiveChannel!: RTCDataChannel
  dataChannelOptions: RTCDataChannelInit = { ordered: true }
  dataChannelCounter = 0
  sendDataLoop!: number

  offerOptions: RTCOfferOptions = {
    offerToReceiveAudio: true,
    offerToReceiveVideo: true,
  }

  constructor() {} // private logger: LogService

  async ngOnInit() {
    try {
      const enumerateDevices = await navigator.mediaDevices.enumerateDevices()
      this.gotSources(enumerateDevices)
    } catch (e) {
      console.log(e)
    }
  }

  ngAfterViewInit() {
    this.getMediaButton = this.getMediaButtonRef.nativeElement

    this.createPeerConnectionButton = this.createPeerConnectionButtonRef.nativeElement

    this.createOfferButton = this.createOfferRef.nativeElement

    this.setOfferButton = this.setOfferRef.nativeElement

    this.createAnswerButton = this.createAnswerRef.nativeElement

    this.setAnswerButton = this.setAnswerRef.nativeElement

    this.hangupButton = this.hangupRef.nativeElement

    this.offerSdpTextarea = this.offerSdpTextareaRef.nativeElement

    this.answerSdpTextarea = this.answerSdpTextareaRef.nativeElement

    this.selectSource = this.selectSourceRef.nativeElement

    this.audioSelect = this.audioSelectRef.nativeElement

    this.videoSelect = this.videoSelectRef.nativeElement

    this.localVideo = this.localVideoRef.nativeElement

    this.remoteVideo = this.remoteVideoRef.nativeElement
  }

  gotSources(sourceInfos: string | any[]) {
    this.selectSource.classList.remove('hidden')
    let audioCount = 0
    let videoCount = 0
    for (let i = 0; i < sourceInfos.length; i++) {
      const option = document.createElement('option')
      option.value = sourceInfos[i].deviceId
      option.text = sourceInfos[i].label
      if (sourceInfos[i].kind === 'audioinput') {
        audioCount++
        if (option.text === '') {
          option.text = `Audio ${audioCount}`
        }
        this.audioSelect.appendChild(option)
      } else if (sourceInfos[i].kind === 'videoinput') {
        videoCount++
        if (option.text === '') {
          option.text = `Video ${videoCount}`
        }
        this.videoSelect.appendChild(option)
      } else {
        console.log('desconhecido', JSON.stringify(sourceInfos[i]))
      }
    }
  }

  async getMedia() {
    this.getMediaButton.disabled = true
    this.createPeerConnectionButton.disabled = false
    this.localVideo.muted = true
    if (this.localStream) {
      this.localVideo.srcObject = null
      this.localStream.getTracks().forEach((track) => track.stop())
    }
    const audioSource = this.audioSelect.value
    console.log(`Fonte de áudio selecionada: ${audioSource}`)
    const videoSource = this.videoSelect.value
    console.log(`Fonte de vídeo selecionada: ${videoSource}`)

    const constraints: MediaStreamConstraints = {
      audio: {
        optional: [
          {
            sourceId: audioSource,
          },
        ],
      },
      video: {
        optional: [
          {
            sourceId: videoSource,
          },
        ],
      },
    } as MediaStreamConstraints
    console.log('Solicitou fluxo local')
    try {
      const userMedia = await navigator.mediaDevices.getUserMedia(constraints)
      this.gotStream(userMedia)
    } catch (e) {
      console.log('navigator.getUserMedia error: ', e)
    }
  }

  gotStream(stream: MediaStream) {
    console.log('Fluxo local recebido')
    this.localVideo.srcObject = stream
    this.localStream = stream
  }

  createPeerConnection() {
    this.createPeerConnectionButton.disabled = true
    this.createOfferButton.disabled = false
    this.createAnswerButton.disabled = false
    this.setOfferButton.disabled = false
    this.setAnswerButton.disabled = false
    this.hangupButton.disabled = false
    console.log('Chamada inicial')
    const videoTracks = this.localStream.getVideoTracks()
    const audioTracks = this.localStream.getAudioTracks()

    if (videoTracks.length > 0) {
      console.log(`Usando dispositivo de vídeo: ${videoTracks[0].label}`)
    }

    if (audioTracks.length > 0) {
      console.log(`Usando dispositivo de áudio: ${audioTracks[0].label}`)
    }
    const servers = null

    this.localPeerConnection = this.localPeerConnection = new RTCPeerConnection(
      servers ?? {
        iceServers: [],
      }
    )
    console.log(
      'Objeto de conexão ponto a ponto local criado localPeerConnection'
    )
    this.localPeerConnection.onicecandidate = (e) =>
      this.onIceCandidate(this.localPeerConnection, e)
    this.sendChannel = this.localPeerConnection.createDataChannel(
      'sendDataChannel',
      this.dataChannelOptions
    )
    this.sendChannel.onopen = this.onSendChannelStateChange
    this.sendChannel.onclose = this.onSendChannelStateChange
    this.sendChannel.onerror = this.onSendChannelStateChange

    this.remotePeerConnection = this.remotePeerConnection = new RTCPeerConnection(
      servers ?? {
        iceServers: [],
      }
    )
    console.log('Criado objeto de conexão de ponto remoto remotePeerConnection')
    this.remotePeerConnection.onicecandidate = (e) =>
      this.onIceCandidate(this.remotePeerConnection, e)
    this.remotePeerConnection.ontrack = this.gotRemoteStream
    this.remotePeerConnection.ondatachannel = this.receiveChannelCallback

    this.localStream
      .getTracks()
      .forEach((track) =>
        this.localPeerConnection.addTrack(track, this.localStream)
      )
    console.log('Adicionando stream local à conexão de par')
  }
  onSetSessionDescriptionSuccess() {
    console.log('Definir o sucesso da descrição da sessão.')
  }
  onSetSessionDescriptionError(error: { toString: () => any }) {
    console.log(`Falha ao definir a descrição da sessão: ${error.toString()}`)
  }
  async createOffer() {
    try {
      const offer = await this.localPeerConnection.createOffer(
        this.offerOptions
      )
      this.gotDescription1(offer)
    } catch (e) {
      this.onCreateSessionDescriptionError(e)
    }
  }
  onCreateSessionDescriptionError(error: { toString: () => any }) {
    console.log(`Falha ao criar a descrição da sessão: ${error.toString()}`)
  }

  async setOffer() {
    // Restaura o SDP da textarea. Certifique-se de usar CRLF, que é o que é gerado
    // embora https://tools.ietf.org/html/rfc4566#section-5 requeira
    // analisadores para lidar com LF e CRLF.
    const sdp = this.offerSdpTextarea.value
      .split('\n')
      .map((l) => l.trim())
      .join('\r\n')
    const offer: RTCSessionDescriptionInit = {
      type: 'offer',
      sdp: sdp,
    }
    console.log(`Oferta modificada de localPeerConnection\n${sdp}`)

    try {
      await this.localPeerConnection.setLocalDescription(offer)
      this.onSetSessionDescriptionSuccess()
    } catch (e) {
      this.onSetSessionDescriptionError(e)
    }

    try {
      await this.remotePeerConnection.setRemoteDescription(offer)
      this.onSetSessionDescriptionSuccess()
    } catch (e) {
      this.onSetSessionDescriptionError(e)
    }
  }
  gotDescription1(description: RTCSessionDescriptionInit) {
    this.offerSdpTextarea.disabled = false
    this.offerSdpTextarea.value = description.sdp ? description.sdp : ''
  }
  async createAnswer() {
    // Como o lado 'remoto' não tem fluxo de mídia, precisamos
    // para passar as restrições corretas para que
    // aceite a oferta de áudio e vídeo.
    try {
      const answer = await this.remotePeerConnection.createAnswer()
      this.gotDescription2(answer)
    } catch (e) {
      this.onCreateSessionDescriptionError(e)
    }
  }

  async setAnswer() {
    // Restaura o SDP da textarea. Certifique-se de usar CRLF, que é o que é gerado
    // embora https://tools.ietf.org/html/rfc4566#section-5 requeira
    // analisadores para lidar com LF e CRLF.
    const sdp = this.answerSdpTextarea.value
      .split('\n')
      .map((l) => l.trim())
      .join('\r\n')
    const answer: RTCSessionDescriptionInit = {
      type: 'answer',
      sdp: sdp,
    }

    try {
      await this.remotePeerConnection.setLocalDescription(answer)
      this.onSetSessionDescriptionSuccess()
    } catch (e) {
      this.onSetSessionDescriptionError(e)
    }

    // console.log(`Resposta modificada de remotePeerConnection\n${sdp}`);
    try {
      await this.localPeerConnection.setRemoteDescription(answer)
      this.onSetSessionDescriptionSuccess()
    } catch (e) {
      this.onSetSessionDescriptionError(e)
    }
  }
  gotDescription2(description: RTCSessionDescriptionInit) {
    this.answerSdpTextarea.disabled = false
    this.answerSdpTextarea.value = description.sdp ? description.sdp : ''
  }

  sendData() {
    if (this.sendChannel?.readyState === 'open') {
      this.sendChannel?.send(`${this.dataChannelCounter}`)
      console.log(
        `Contador de envio de DataChannel: ${this.dataChannelCounter}`
      )
      this.dataChannelCounter++
    }
  }

  hangup() {
    this.remoteVideo.srcObject = null
    console.log('Terminando chamada')
    this.localStream.getTracks().forEach((track) => track.stop())
    this.sendChannel.close()
    if (this.receiveChannel) {
      this.receiveChannel.close()
    }
    this.localPeerConnection.close()
    this.remotePeerConnection.close()
    Object.assign(this.localPeerConnection, null)
    Object.assign(this.remotePeerConnection, null)
    this.offerSdpTextarea.disabled = true
    this.answerSdpTextarea.disabled = true
    this.getMediaButton.disabled = false
    this.createPeerConnectionButton.disabled = true
    this.createOfferButton.disabled = true
    this.setOfferButton.disabled = true
    this.createAnswerButton.disabled = true
    this.setAnswerButton.disabled = true
    this.hangupButton.disabled = true
  }

  gotRemoteStream = (e: RTCTrackEvent) => {
    console.log(this.remoteVideo)
    console.log(this.remoteVideoRef.nativeElement)
    if (!this.remoteVideo) {
      this.remoteVideo = this.remoteVideoRef.nativeElement
    }
    if (this.remoteVideo.srcObject !== e.streams[0]) {
      this.remoteVideo.srcObject = e.streams[0]
      console.log('Fluxo remoto recebido')
    }
  }

  getOtherPc(pc: RTCPeerConnection) {
    return pc === this.localPeerConnection
      ? this.remotePeerConnection
      : this.localPeerConnection
  }

  getName(pc: RTCPeerConnection) {
    return pc === this.localPeerConnection
      ? 'localPeerConnection'
      : 'remotePeerConnection'
  }

  onIceCandidate = async (
    pc: RTCPeerConnection,
    event: RTCPeerConnectionIceEvent
  ) => {
    try {
      if (event.candidate) {
        await this.getOtherPc(pc).addIceCandidate(event.candidate)
      }
      this.onAddIceCandidateSuccess(pc)
    } catch (e: unknown) {
      this.onAddIceCandidateError(pc, e as Error)
    }

    console.log(
      `${this.getName(pc)} Candidato ICE:\n${
        event.candidate ? event.candidate.candidate : '(null)'
      }`
    )
  }

  onAddIceCandidateSuccess(pc: RTCPeerConnection) {
    console.log('IceCandidate adicionado com sucesso.')
  }
  onAddIceCandidateError(pc: RTCPeerConnection, error?: Error) {
    console.log(
      `Falha ao adicionar IceCandidate: ${error ? error.toString() : ''}`
    )
  }

  receiveChannelCallback = (event: RTCDataChannelEvent) => {
    console.log('Receber retorno de chamada do canal')
    this.receiveChannel = event.channel
    this.receiveChannel.onmessage = this.onReceiveMessageCallback
    this.receiveChannel.onopen = this.onReceiveChannelStateChange
    this.receiveChannel.onclose = this.onReceiveChannelStateChange
  }

  onReceiveMessageCallback = (event: MessageEvent) => {
    this.dataChannelDataReceived = event.data
    console.log(
      `Contador de recebimento DataChannel: ${this.dataChannelDataReceived}`
    )
  }

  onSendChannelStateChange = () => {
    const readyState = this.sendChannel.readyState
    console.log(`O estado do canal de envio é: ${readyState}`)
    if (readyState === 'open') {
      this.sendDataLoop = window.setInterval(this.sendData, 1000)
    } else {
      clearInterval(this.sendDataLoop)
    }
  }
  onReceiveChannelStateChange = () => {
    const readyState = this.receiveChannel.readyState
    console.log(`O estado do canal de recepção é: ${readyState}`)
  }
}
