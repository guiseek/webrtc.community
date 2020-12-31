;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    swqP: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'MungeSdpModule', function () {
          return R
        })
      var o = n('3Pt+'),
        i = n('ofXK'),
        a = n('tyNb'),
        c = n('mrSG'),
        s = n('fXoL')
      const r = ['getMediaButtonRefButton'],
        d = ['createPeerConnectionRefButton'],
        l = ['createOfferRefButton'],
        h = ['setOfferRefButton'],
        u = ['createAnswerRefButton'],
        f = ['setAnswerRefButton'],
        b = ['hangupRefButton'],
        g = ['localTextarea'],
        C = ['remoteTextarea'],
        m = ['audioSrc'],
        p = ['videoSrc'],
        v = ['localVideoRefEl'],
        S = ['remoteVideoRefEl'],
        P = ['selectSource']
      let O = (() => {
          class e {
            constructor() {
              ;(this.dataChannelOptions = { ordered: !0 }),
                (this.dataChannelCounter = 0),
                (this.offerOptions = {
                  offerToReceiveAudio: !0,
                  offerToReceiveVideo: !0,
                }),
                (this.gotRemoteStream = (e) => {
                  console.log(this.remoteVideo),
                    console.log(this.remoteVideoRef.nativeElement),
                    this.remoteVideo ||
                      (this.remoteVideo = this.remoteVideoRef.nativeElement),
                    this.remoteVideo.srcObject !== e.streams[0] &&
                      ((this.remoteVideo.srcObject = e.streams[0]),
                      console.log('Fluxo remoto recebido'))
                }),
                (this.onIceCandidate = (e, t) =>
                  Object(c.a)(this, void 0, void 0, function* () {
                    try {
                      t.candidate &&
                        (yield this.getOtherPc(e).addIceCandidate(t.candidate)),
                        this.onAddIceCandidateSuccess(e)
                    } catch (n) {
                      this.onAddIceCandidateError(e, n)
                    }
                    console.log(
                      `${this.getName(e)} Candidato ICE:\n${
                        t.candidate ? t.candidate.candidate : '(null)'
                      }`
                    )
                  })),
                (this.receiveChannelCallback = (e) => {
                  console.log('Receber retorno de chamada do canal'),
                    (this.receiveChannel = e.channel),
                    (this.receiveChannel.onmessage = this.onReceiveMessageCallback),
                    (this.receiveChannel.onopen = this.onReceiveChannelStateChange),
                    (this.receiveChannel.onclose = this.onReceiveChannelStateChange)
                }),
                (this.onReceiveMessageCallback = (e) => {
                  ;(this.dataChannelDataReceived = e.data),
                    console.log(
                      'Contador de recebimento DataChannel: ' +
                        this.dataChannelDataReceived
                    )
                }),
                (this.onSendChannelStateChange = () => {
                  const e = this.sendChannel.readyState
                  console.log('O estado do canal de envio \xe9: ' + e),
                    'open' === e
                      ? (this.sendDataLoop = window.setInterval(
                          this.sendData,
                          1e3
                        ))
                      : clearInterval(this.sendDataLoop)
                }),
                (this.onReceiveChannelStateChange = () => {
                  console.log(
                    'O estado do canal de recep\xe7\xe3o \xe9: ' +
                      this.receiveChannel.readyState
                  )
                })
            }
            ngOnInit() {
              return Object(c.a)(this, void 0, void 0, function* () {
                try {
                  const e = yield navigator.mediaDevices.enumerateDevices()
                  this.gotSources(e)
                } catch (e) {
                  console.log(e)
                }
              })
            }
            ngAfterViewInit() {
              ;(this.getMediaButton = this.getMediaButtonRef.nativeElement),
                (this.createPeerConnectionButton = this.createPeerConnectionButtonRef.nativeElement),
                (this.createOfferButton = this.createOfferRef.nativeElement),
                (this.setOfferButton = this.setOfferRef.nativeElement),
                (this.createAnswerButton = this.createAnswerRef.nativeElement),
                (this.setAnswerButton = this.setAnswerRef.nativeElement),
                (this.hangupButton = this.hangupRef.nativeElement),
                (this.offerSdpTextarea = this.offerSdpTextareaRef.nativeElement),
                (this.answerSdpTextarea = this.answerSdpTextareaRef.nativeElement),
                (this.selectSource = this.selectSourceRef.nativeElement),
                (this.audioSelect = this.audioSelectRef.nativeElement),
                (this.videoSelect = this.videoSelectRef.nativeElement),
                (this.localVideo = this.localVideoRef.nativeElement),
                (this.remoteVideo = this.remoteVideoRef.nativeElement)
            }
            gotSources(e) {
              this.selectSource.classList.remove('hidden')
              let t = 0,
                n = 0
              for (let o = 0; o < e.length; o++) {
                const i = document.createElement('option')
                ;(i.value = e[o].deviceId),
                  (i.text = e[o].label),
                  'audioinput' === e[o].kind
                    ? (t++,
                      '' === i.text && (i.text = 'Audio ' + t),
                      this.audioSelect.appendChild(i))
                    : 'videoinput' === e[o].kind
                    ? (n++,
                      '' === i.text && (i.text = 'Video ' + n),
                      this.videoSelect.appendChild(i))
                    : console.log('desconhecido', JSON.stringify(e[o]))
              }
            }
            getMedia() {
              return Object(c.a)(this, void 0, void 0, function* () {
                ;(this.getMediaButton.disabled = !0),
                  (this.createPeerConnectionButton.disabled = !1),
                  (this.localVideo.muted = !0),
                  this.localStream &&
                    ((this.localVideo.srcObject = null),
                    this.localStream.getTracks().forEach((e) => e.stop()))
                const e = this.audioSelect.value
                console.log('Fonte de \xe1udio selecionada: ' + e)
                const t = this.videoSelect.value
                console.log('Fonte de v\xeddeo selecionada: ' + t)
                const n = {
                  audio: { optional: [{ sourceId: e }] },
                  video: { optional: [{ sourceId: t }] },
                }
                console.log('Solicitou fluxo local')
                try {
                  const e = yield navigator.mediaDevices.getUserMedia(n)
                  this.gotStream(e)
                } catch (o) {
                  console.log('navigator.getUserMedia error: ', o)
                }
              })
            }
            gotStream(e) {
              console.log('Fluxo local recebido'),
                (this.localVideo.srcObject = e),
                (this.localStream = e)
            }
            createPeerConnection() {
              ;(this.createPeerConnectionButton.disabled = !0),
                (this.createOfferButton.disabled = !1),
                (this.createAnswerButton.disabled = !1),
                (this.setOfferButton.disabled = !1),
                (this.setAnswerButton.disabled = !1),
                (this.hangupButton.disabled = !1),
                console.log('Chamada inicial')
              const e = this.localStream.getVideoTracks(),
                t = this.localStream.getAudioTracks()
              e.length > 0 &&
                console.log('Usando dispositivo de v\xeddeo: ' + e[0].label),
                t.length > 0 &&
                  console.log('Usando dispositivo de \xe1udio: ' + t[0].label),
                (this.localPeerConnection = this.localPeerConnection = new RTCPeerConnection(
                  { iceServers: [] }
                )),
                console.log(
                  'Objeto de conex\xe3o ponto a ponto local criado localPeerConnection'
                ),
                (this.localPeerConnection.onicecandidate = (e) =>
                  this.onIceCandidate(this.localPeerConnection, e)),
                (this.sendChannel = this.localPeerConnection.createDataChannel(
                  'sendDataChannel',
                  this.dataChannelOptions
                )),
                (this.sendChannel.onopen = this.onSendChannelStateChange),
                (this.sendChannel.onclose = this.onSendChannelStateChange),
                (this.sendChannel.onerror = this.onSendChannelStateChange),
                (this.remotePeerConnection = this.remotePeerConnection = new RTCPeerConnection(
                  { iceServers: [] }
                )),
                console.log(
                  'Criado objeto de conex\xe3o de ponto remoto remotePeerConnection'
                ),
                (this.remotePeerConnection.onicecandidate = (e) =>
                  this.onIceCandidate(this.remotePeerConnection, e)),
                (this.remotePeerConnection.ontrack = this.gotRemoteStream),
                (this.remotePeerConnection.ondatachannel = this.receiveChannelCallback),
                this.localStream
                  .getTracks()
                  .forEach((e) =>
                    this.localPeerConnection.addTrack(e, this.localStream)
                  ),
                console.log('Adicionando stream local \xe0 conex\xe3o de par')
            }
            onSetSessionDescriptionSuccess() {
              console.log('Definir o sucesso da descri\xe7\xe3o da sess\xe3o.')
            }
            onSetSessionDescriptionError(e) {
              console.log(
                'Falha ao definir a descri\xe7\xe3o da sess\xe3o: ' +
                  e.toString()
              )
            }
            createOffer() {
              return Object(c.a)(this, void 0, void 0, function* () {
                try {
                  const e = yield this.localPeerConnection.createOffer(
                    this.offerOptions
                  )
                  this.gotDescription1(e)
                } catch (e) {
                  this.onCreateSessionDescriptionError(e)
                }
              })
            }
            onCreateSessionDescriptionError(e) {
              console.log(
                'Falha ao criar a descri\xe7\xe3o da sess\xe3o: ' + e.toString()
              )
            }
            setOffer() {
              return Object(c.a)(this, void 0, void 0, function* () {
                const e = this.offerSdpTextarea.value
                    .split('\n')
                    .map((e) => e.trim())
                    .join('\r\n'),
                  t = { type: 'offer', sdp: e }
                console.log('Oferta modificada de localPeerConnection\n' + e)
                try {
                  yield this.localPeerConnection.setLocalDescription(t),
                    this.onSetSessionDescriptionSuccess()
                } catch (n) {
                  this.onSetSessionDescriptionError(n)
                }
                try {
                  yield this.remotePeerConnection.setRemoteDescription(t),
                    this.onSetSessionDescriptionSuccess()
                } catch (n) {
                  this.onSetSessionDescriptionError(n)
                }
              })
            }
            gotDescription1(e) {
              ;(this.offerSdpTextarea.disabled = !1),
                (this.offerSdpTextarea.value = e.sdp ? e.sdp : '')
            }
            createAnswer() {
              return Object(c.a)(this, void 0, void 0, function* () {
                try {
                  const e = yield this.remotePeerConnection.createAnswer()
                  this.gotDescription2(e)
                } catch (e) {
                  this.onCreateSessionDescriptionError(e)
                }
              })
            }
            setAnswer() {
              return Object(c.a)(this, void 0, void 0, function* () {
                const e = {
                  type: 'answer',
                  sdp: this.answerSdpTextarea.value
                    .split('\n')
                    .map((e) => e.trim())
                    .join('\r\n'),
                }
                try {
                  yield this.remotePeerConnection.setLocalDescription(e),
                    this.onSetSessionDescriptionSuccess()
                } catch (t) {
                  this.onSetSessionDescriptionError(t)
                }
                try {
                  yield this.localPeerConnection.setRemoteDescription(e),
                    this.onSetSessionDescriptionSuccess()
                } catch (t) {
                  this.onSetSessionDescriptionError(t)
                }
              })
            }
            gotDescription2(e) {
              ;(this.answerSdpTextarea.disabled = !1),
                (this.answerSdpTextarea.value = e.sdp ? e.sdp : '')
            }
            sendData() {
              var e, t
              'open' ===
                (null === (e = this.sendChannel) || void 0 === e
                  ? void 0
                  : e.readyState) &&
                (null === (t = this.sendChannel) ||
                  void 0 === t ||
                  t.send('' + this.dataChannelCounter),
                console.log(
                  'Contador de envio de DataChannel: ' + this.dataChannelCounter
                ),
                this.dataChannelCounter++)
            }
            hangup() {
              ;(this.remoteVideo.srcObject = null),
                console.log('Terminando chamada'),
                this.localStream.getTracks().forEach((e) => e.stop()),
                this.sendChannel.close(),
                this.receiveChannel && this.receiveChannel.close(),
                this.localPeerConnection.close(),
                this.remotePeerConnection.close(),
                Object.assign(this.localPeerConnection, null),
                Object.assign(this.remotePeerConnection, null),
                (this.offerSdpTextarea.disabled = !0),
                (this.answerSdpTextarea.disabled = !0),
                (this.getMediaButton.disabled = !1),
                (this.createPeerConnectionButton.disabled = !0),
                (this.createOfferButton.disabled = !0),
                (this.setOfferButton.disabled = !0),
                (this.createAnswerButton.disabled = !0),
                (this.setAnswerButton.disabled = !0),
                (this.hangupButton.disabled = !0)
            }
            getOtherPc(e) {
              return e === this.localPeerConnection
                ? this.remotePeerConnection
                : this.localPeerConnection
            }
            getName(e) {
              return e === this.localPeerConnection
                ? 'localPeerConnection'
                : 'remotePeerConnection'
            }
            onAddIceCandidateSuccess(e) {
              console.log('IceCandidate adicionado com sucesso.')
            }
            onAddIceCandidateError(e, t) {
              console.log(
                'Falha ao adicionar IceCandidate: ' + (t ? t.toString() : '')
              )
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)()
            }),
            (e.ɵcmp = s.Fb({
              type: e,
              selectors: [['quertc-munge-sdp']],
              viewQuery: function (e, t) {
                if (
                  (1 & e &&
                    (s.Bc(r, !0),
                    s.Bc(d, !0),
                    s.Bc(l, !0),
                    s.Bc(h, !0),
                    s.Bc(u, !0),
                    s.Bc(f, !0),
                    s.Bc(b, !0),
                    s.Bc(g, !0),
                    s.Bc(C, !0),
                    s.Bc(m, !0),
                    s.Bc(p, !0),
                    s.Bc(v, !0),
                    s.Bc(S, !0),
                    s.Bc(P, !0)),
                  2 & e)
                ) {
                  let e
                  s.kc((e = s.Yb())) && (t.getMediaButtonRef = e.first),
                    s.kc((e = s.Yb())) &&
                      (t.createPeerConnectionButtonRef = e.first),
                    s.kc((e = s.Yb())) && (t.createOfferRef = e.first),
                    s.kc((e = s.Yb())) && (t.setOfferRef = e.first),
                    s.kc((e = s.Yb())) && (t.createAnswerRef = e.first),
                    s.kc((e = s.Yb())) && (t.setAnswerRef = e.first),
                    s.kc((e = s.Yb())) && (t.hangupRef = e.first),
                    s.kc((e = s.Yb())) && (t.offerSdpTextareaRef = e.first),
                    s.kc((e = s.Yb())) && (t.answerSdpTextareaRef = e.first),
                    s.kc((e = s.Yb())) && (t.audioSelectRef = e.first),
                    s.kc((e = s.Yb())) && (t.videoSelectRef = e.first),
                    s.kc((e = s.Yb())) && (t.localVideoRef = e.first),
                    s.kc((e = s.Yb())) && (t.remoteVideoRef = e.first),
                    s.kc((e = s.Yb())) && (t.selectSourceRef = e.first)
                }
              },
              decls: 60,
              vars: 0,
              consts: [
                ['id', 'selectSource', 1, 'hidden'],
                ['selectSource', ''],
                ['id', 'select'],
                [1, 'source'],
                ['for', 'audioSrc'],
                ['id', 'audioSrc'],
                ['audioSrc', ''],
                ['for', 'videoSrc'],
                ['id', 'videoSrc'],
                ['videoSrc', ''],
                ['id', 'buttons'],
                ['id', 'getMedia', 3, 'click'],
                ['getMediaButtonRefButton', ''],
                ['id', 'createPeerConnection', 'disabled', '', 3, 'click'],
                ['createPeerConnectionRefButton', ''],
                ['id', 'createOffer', 'disabled', '', 3, 'click'],
                ['createOfferRefButton', ''],
                ['id', 'setOffer', 'disabled', '', 3, 'click'],
                ['setOfferRefButton', ''],
                ['id', 'createAnswer', 'disabled', '', 3, 'click'],
                ['createAnswerRefButton', ''],
                ['id', 'setAnswer', 'disabled', '', 3, 'click'],
                ['setAnswerRefButton', ''],
                ['id', 'hangup', 'disabled', '', 3, 'click'],
                ['hangupRefButton', ''],
                ['id', 'preview'],
                ['id', 'local'],
                ['playsinline', '', 'autoplay', '', 'muted', ''],
                ['localVideoRefEl', ''],
                ['localTextarea', ''],
                ['id', 'remote'],
                ['playsinline', '', 'autoplay', ''],
                ['remoteVideoRefEl', ''],
                ['remoteTextarea', ''],
              ],
              template: function (e, t) {
                1 & e &&
                  (s.Qb(0, 'div', 0, 1),
                  s.Qb(2, 'div', 2),
                  s.yc(
                    3,
                    ' Selecione uma fonte de \xe1udio e v\xeddeo e clique em '
                  ),
                  s.Qb(4, 'strong'),
                  s.yc(5, 'Obter m\xeddia'),
                  s.Pb(),
                  s.yc(6, ': '),
                  s.Pb(),
                  s.Qb(7, 'div', 3),
                  s.Qb(8, 'label', 4),
                  s.yc(9, 'Fonte de \xe1udio:'),
                  s.Pb(),
                  s.Mb(10, 'select', 5, 6),
                  s.Pb(),
                  s.Qb(12, 'div', 3),
                  s.Qb(13, 'label', 7),
                  s.yc(14, 'Fonte de v\xeddeo:'),
                  s.Pb(),
                  s.Mb(15, 'select', 8, 9),
                  s.Pb(),
                  s.Pb(),
                  s.Qb(17, 'div', 10),
                  s.Qb(18, 'button', 11, 12),
                  s.Xb('click', function () {
                    return t.getMedia()
                  }),
                  s.yc(20, ' Obter m\xeddia '),
                  s.Pb(),
                  s.Qb(21, 'button', 13, 14),
                  s.Xb('click', function () {
                    return t.createPeerConnection()
                  }),
                  s.yc(23, ' Criar conex\xe3o de par '),
                  s.Pb(),
                  s.Qb(24, 'button', 15, 16),
                  s.Xb('click', function () {
                    return t.createOffer()
                  }),
                  s.yc(26, ' Criar oferta '),
                  s.Pb(),
                  s.Qb(27, 'button', 17, 18),
                  s.Xb('click', function () {
                    return t.setOffer()
                  }),
                  s.yc(29, ' Definir oferta '),
                  s.Pb(),
                  s.Qb(30, 'button', 19, 20),
                  s.Xb('click', function () {
                    return t.createAnswer()
                  }),
                  s.yc(32, ' Crie uma resposta '),
                  s.Pb(),
                  s.Qb(33, 'button', 21, 22),
                  s.Xb('click', function () {
                    return t.setAnswer()
                  }),
                  s.yc(35, ' Definir resposta '),
                  s.Pb(),
                  s.Qb(36, 'button', 23, 24),
                  s.Xb('click', function () {
                    return t.hangup()
                  }),
                  s.yc(38, ' Desligar '),
                  s.Pb(),
                  s.Pb(),
                  s.Qb(39, 'div', 25),
                  s.Qb(40, 'div', 26),
                  s.Qb(41, 'h2'),
                  s.yc(42, 'Local'),
                  s.Pb(),
                  s.Mb(43, 'video', 27, 28),
                  s.Qb(45, 'h2'),
                  s.yc(46, 'Oferecer SDP'),
                  s.Pb(),
                  s.Mb(47, 'textarea', null, 29),
                  s.Mb(49, 'br'),
                  s.Mb(50, 'br'),
                  s.Pb(),
                  s.Qb(51, 'div', 30),
                  s.Qb(52, 'h2'),
                  s.yc(53, 'Remoto'),
                  s.Pb(),
                  s.Mb(54, 'video', 31, 32),
                  s.Qb(56, 'h2'),
                  s.yc(57, 'Responder SDP'),
                  s.Pb(),
                  s.Mb(58, 'textarea', null, 33),
                  s.Pb(),
                  s.Pb())
              },
              styles: [
                'button[_ngcontent-%COMP%]{margin:0 20px 20px 0;vertical-align:top;width:155px}div#buttons[_ngcontent-%COMP%]{border-bottom:1px solid #eee;margin:1em 0;padding:0 0 1em}div#local[_ngcontent-%COMP%]{margin:0 20px 0 0}div#preview[_ngcontent-%COMP%]{border-bottom:1px solid #eee;margin:0 0 1em;padding:0 0 .5em}div#preview[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;width:calc(50% - 12px)}div#select[_ngcontent-%COMP%], div#selectSource[_ngcontent-%COMP%], div.source[_ngcontent-%COMP%]{margin:0 0 1em}div.source[_ngcontent-%COMP%]{display:inline-block}form[_ngcontent-%COMP%]{margin:0 0 1em;white-space:nowrap}h2[_ngcontent-%COMP%]{margin:0 0 .5em}label[_ngcontent-%COMP%]{margin:0 .4em 0 0}textarea[_ngcontent-%COMP%]{color:#444;font-size:.9em;font-weight:300;height:7em;padding:5px;width:calc(100% - 10px)}video[_ngcontent-%COMP%]{height:225px}@media screen and (max-width:550px){button[_ngcontent-%COMP%]{font-weight:500;height:56px;line-height:1.3em;margin:0 7px 15px 0;width:86px}button[_ngcontent-%COMP%]:nth-child(3n+0){margin:0 0 15px}video[_ngcontent-%COMP%]{height:96px}}@media screen and (max-width:800px){button[_ngcontent-%COMP%]{margin:0 15px 15px 0;width:155px}div#selectSource[_ngcontent-%COMP%]{margin:0 0 .5em}div.source[_ngcontent-%COMP%]{margin:0 0 .2em}select[_ngcontent-%COMP%]{margin:0 1.5em 0 0}textarea[_ngcontent-%COMP%]{font-size:.7em}}@media screen and (max-width:500px){textarea[_ngcontent-%COMP%]{font-size:.5em}}',
              ],
            })),
            e
          )
        })(),
        R = (() => {
          class e {}
          return (
            (e.ɵmod = s.Jb({ type: e })),
            (e.ɵinj = s.Ib({
              factory: function (t) {
                return new (t || e)()
              },
              imports: [[i.c, o.l, a.e.forChild([{ path: '', component: O }])]],
            })),
            e
          )
        })()
    },
  },
])
