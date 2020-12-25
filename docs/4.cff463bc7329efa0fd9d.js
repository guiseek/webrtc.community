;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    R3tv: function (t, e, i) {
      'use strict'
      i.r(e),
        i.d(e, 'RestartIceModule', function () {
          return O
        }),
        i.d(e, 'RestartIceComponent', function () {
          return w
        }),
        i.d(e, 'PeerStats', function () {
          return r.d
        }),
        i.d(e, 'SignalingChannel', function () {
          return r.f
        }),
        i.d(e, 'Logger', function () {
          return r.a
        }),
        i.d(e, 'PeerEvent', function () {
          return r.b
        }),
        i.d(e, 'PeerState', function () {
          return r.c
        }),
        i.d(e, 'RTCPeerMock', function () {
          return r.e
        })
      var o = i('tyNb'),
        c = i('ofXK'),
        n = i('Wp6s'),
        s = i('/t3+'),
        a = i('bTqV'),
        r = i('Huv7'),
        d = i('t7Mq'),
        l = i('xgIS'),
        h = i('XNiG'),
        p = i('2Vo4'),
        b = i('1G5W'),
        u = i('fXoL')
      const g = ['localVideo'],
        m = ['remoteVideo']
      function f(t, e) {
        if (
          (1 & t &&
            (u.Ob(0),
            u.xc(1, ' ID: '),
            u.Qb(2, 'span', 20),
            u.xc(3),
            u.Pb(),
            u.xc(4, ' - IP: '),
            u.Qb(5, 'span', 20),
            u.xc(6),
            u.Pb(),
            u.xc(7, ' - Port: '),
            u.Qb(8, 'span', 20),
            u.xc(9),
            u.Pb(),
            u.xc(10, ' - Protocol: '),
            u.Qb(11, 'span', 20),
            u.xc(12),
            u.Pb(),
            u.Nb()),
          2 & t)
        ) {
          const t = u.bc()
          u.zb(3),
            u.yc(t.localCandidate.id),
            u.zb(3),
            u.yc(t.localCandidate.ip),
            u.zb(3),
            u.yc(t.localCandidate.port),
            u.zb(3),
            u.yc(t.localCandidate.protocol)
        }
      }
      function C(t, e) {
        1 & t && (u.Qb(0, 'span', 21), u.xc(1, 'Not connected'), u.Pb())
      }
      function S(t, e) {
        if (
          (1 & t &&
            (u.Ob(0),
            u.xc(1, ' ID: '),
            u.Qb(2, 'span', 20),
            u.xc(3),
            u.Pb(),
            u.xc(4, ' - IP: '),
            u.Qb(5, 'span', 20),
            u.xc(6),
            u.Pb(),
            u.xc(7, ' - Port: '),
            u.Qb(8, 'span', 20),
            u.xc(9),
            u.Pb(),
            u.xc(10, ' - Protocol: '),
            u.Qb(11, 'span', 20),
            u.xc(12),
            u.Pb(),
            u.Nb()),
          2 & t)
        ) {
          const t = u.bc()
          u.zb(3),
            u.yc(t.remoteCandidate.id),
            u.zb(3),
            u.yc(t.remoteCandidate.ip),
            u.zb(3),
            u.yc(t.remoteCandidate.port),
            u.zb(3),
            u.yc(t.remoteCandidate.protocol)
        }
      }
      function v(t, e) {
        1 & t && (u.Qb(0, 'span', 21), u.xc(1, 'Not connected'), u.Pb())
      }
      const x = (t) => Object(l.a)(t, 'loadedmetadata'),
        P = r.a
      let w = (() => {
          class t {
            constructor(t) {
              ;(this.overlog = t),
                (this.subject$ = new h.a()),
                (this.offerOptions = {
                  offerToReceiveAudio: !0,
                  offerToReceiveVideo: !0,
                }),
                (this._startButton = new p.a(!1)),
                (this.startButton$ = this._startButton.asObservable()),
                (this._callButton = new p.a(!0)),
                (this.callButton$ = this._callButton.asObservable()),
                (this._restartButton = new p.a(!0)),
                (this.restartButton$ = this._restartButton.asObservable()),
                (this._hangupButton = new p.a(!0)),
                (this.hangupButton$ = this._hangupButton.asObservable()),
                (this.getName = (t) => (t === this.pc1 ? 'pc1' : 'pc2')),
                (this.getOtherPc = (t) =>
                  t === this.pc1 ? this.pc2 : this.pc1),
                (this.gotStream = (t) => {
                  P.log('Received local stream'),
                    (this.localVideo.srcObject = t),
                    (this.localStream = t),
                    this._callButton.next(!1)
                }),
                (this.start = () => {
                  P.log('Requesting local stream'),
                    this._startButton.next(!0),
                    navigator.mediaDevices
                      .getUserMedia({ audio: !0, video: !0 })
                      .then(this.gotStream)
                      .catch((t) => alert('getUserMedia() error: ' + t.name))
                }),
                (this.restart = () => {
                  this._restartButton.next(!0),
                    (this.offerOptions.iceRestart = !0),
                    this.overlog.show({ text: 'pc1 createOffer restart' }),
                    this.pc1
                      .createOffer(this.offerOptions)
                      .then(
                        this.onCreateOfferSuccess,
                        this.onCreateSessionDescriptionError
                      )
                }),
                (this.call = () => {
                  this._callButton.next(!0),
                    this._hangupButton.next(!1),
                    P.log('Starting call'),
                    (this.startTime = window.performance.now())
                  const t = this.localStream.getVideoTracks(),
                    e = this.localStream.getAudioTracks()
                  t.length > 0 && P.log('Using video device: ' + t[0].label),
                    e.length > 0 && P.log('Using audio device: ' + e[0].label),
                    this.createPeers(),
                    (this.pc2.onicecandidate = (t) =>
                      this.onIceCandidate(this.pc2, t)),
                    (this.pc1.oniceconnectionstatechange = (t) => {
                      this.onIceStateChange(this.pc1, t),
                        this.pc1 &&
                          this.pc1.iceConnectionState === r.c.Connected &&
                          this._restartButton.next(!1)
                    }),
                    (this.pc2.oniceconnectionstatechange = (t) =>
                      this.onIceStateChange(this.pc2, t)),
                    (this.pc2.ontrack = this.gotRemoteStream),
                    this.localStream
                      .getTracks()
                      .forEach((t) => this.pc1.addTrack(t, this.localStream)),
                    P.log('Added local stream to this.pc1'),
                    this.overlog.show({ text: 'this.pc1 createOffer start' }),
                    this.pc1
                      .createOffer(this.offerOptions)
                      .then(
                        this.onCreateOfferSuccess,
                        this.onCreateSessionDescriptionError
                      )
                }),
                (this.onCreateSessionDescriptionError = (t) => {
                  P.log('Failed to create session description: ' + t.toString())
                }),
                (this.onCreateOfferSuccess = (t) => {
                  P.log('Offer from pc1\n' + t.sdp),
                    P.log('pc1 setLocalDescription start'),
                    this.pc1
                      .setLocalDescription(t)
                      .then(
                        () => this.onSetLocalSuccess(this.pc1),
                        this.onSetSessionDescriptionError
                      ),
                    P.log('pc2 setRemoteDescription start'),
                    this.pc2
                      .setRemoteDescription(t)
                      .then(
                        () => this.onSetRemoteSuccess(this.pc2),
                        this.onSetSessionDescriptionError
                      ),
                    P.log('pc2 createAnswer start'),
                    this.pc2
                      .createAnswer()
                      .then(
                        this.onCreateAnswerSuccess,
                        this.onCreateSessionDescriptionError
                      )
                }),
                (this.onSetLocalSuccess = (t) => {
                  P.log(this.getName(t) + ' setLocalDescription complete')
                }),
                (this.onSetRemoteSuccess = (t) => {
                  P.log(this.getName(t) + ' setRemoteDescription complete')
                }),
                (this.onSetSessionDescriptionError = (t) => {
                  P.log('Failed to set session description: ' + t.toString())
                }),
                (this.gotRemoteStream = (t) => {
                  this.remoteVideo.srcObject !== t.streams[0] &&
                    ((this.remoteVideo.srcObject = t.streams[0]),
                    this.overlog.show({ text: 'pc2 received remote stream' }))
                }),
                (this.onCreateAnswerSuccess = (t) => {
                  P.log('Answer from pc2:\n' + t.sdp),
                    P.log('pc2 setLocalDescription start'),
                    this.pc2
                      .setLocalDescription(t)
                      .then(
                        () => this.onSetLocalSuccess(this.pc2),
                        this.onSetSessionDescriptionError
                      ),
                    P.log('pc1 setRemoteDescription start'),
                    this.pc1
                      .setRemoteDescription(t)
                      .then(
                        () => this.onSetRemoteSuccess(this.pc1),
                        this.onSetSessionDescriptionError
                      )
                }),
                (this.onIceCandidate = (t, e) => {
                  e.candidate &&
                    (this.getOtherPc(t)
                      .addIceCandidate(e.candidate)
                      .then(
                        () => this.onAddIceCandidateSuccess(t),
                        (e) => this.onAddIceCandidateError(t, e)
                      ),
                    P.log(
                      `${this.getName(t)} ICE candidate: \n${
                        e.candidate ? e.candidate.candidate : '(null)'
                      }`
                    ))
                }),
                (this.onAddIceCandidateSuccess = (t) => {
                  P.log(this.getName(t) + ' addIceCandidate success')
                }),
                (this.onAddIceCandidateError = (t, e) => {
                  P.log(
                    `${this.getName(
                      t
                    )} failed to add ICE Candidate: ${e.toString()}`
                  )
                }),
                (this.onIceStateChange = (t, e) => {
                  t &&
                    (P.log(
                      `${this.getName(t)} ICE state: ${t.iceConnectionState}`
                    ),
                    P.log('ICE state change event: ', e),
                    (t.iceConnectionState !== r.c.Connected &&
                      t.iceConnectionState !== r.c.Completed) ||
                      this.checkStats(t))
                }),
                (this.checkStats = (t) => {
                  t.getStats(null).then((e) => {
                    let i = null,
                      o = {}
                    e.forEach((t) => {
                      'transport' === t.type &&
                        (i = e.get(t.selectedCandidatePairId))
                    }),
                      i ||
                        e.forEach((t) => {
                          'candidate-pair' === t.type &&
                            'succeeded' === t.state &&
                            t.selected &&
                            (i = t)
                        }),
                      i &&
                        i.remoteCandidateId &&
                        e.forEach((t) => {
                          'remote-candidate' === t.type &&
                            t.id === i.remoteCandidateId &&
                            (o = t)
                        }),
                      o &&
                        o.id &&
                        (t === this.pc1
                          ? (this.localCandidate = o)
                          : (this.remoteCandidate = o))
                  })
                }),
                this.createPeers()
            }
            ngAfterViewInit() {
              ;(this.localVideo = this.localVideoRef.nativeElement),
                (this.remoteVideo = this.remoteVideoRef.nativeElement),
                x(this.localVideo)
                  .pipe(Object(b.a)(this.subject$))
                  .subscribe(({ target: t }) => {
                    P.log(`Local video: ${t.videoWidth}x${t.videoHeight}px`)
                  }),
                x(this.remoteVideo)
                  .pipe(Object(b.a)(this.subject$))
                  .subscribe(({ target: t }) => {
                    P.log(`Remote video: ${t.videoWidth}x${t.videoHeight}px`)
                  }),
                (this.remoteVideo.onresize = () => {
                  if (
                    (P.log(
                      `Remote video size changed to ${this.remoteVideo.videoWidth}x${this.remoteVideo.videoHeight}px`
                    ),
                    this.startTime)
                  ) {
                    const t = window.performance.now() - this.startTime
                    P.log(`Setup time: ${t.toFixed(3)}ms`),
                      (this.startTime = null),
                      this.checkStats(this.pc1),
                      this.checkStats(this.pc2)
                  }
                })
            }
            createPeers() {
              const t = { iceServers: [] }
              ;(this.pc1 = this.pc1 = new RTCPeerConnection(t)),
                P.log('Created local peer connection object this.pc1'),
                (this.pc1.onicecandidate = (t) =>
                  this.onIceCandidate(this.pc1, t)),
                (this.pc2 = this.pc2 = new RTCPeerConnection(t)),
                P.log('Created remote peer connection object this.pc2')
            }
            hangup() {
              this.overlog.show({ text: 'Ending call' }),
                this.pc1.close(),
                this.pc2.close(),
                Object.defineProperties(this.pc1, {}),
                Object.defineProperties(this.pc2, {}),
                this._hangupButton.next(!0),
                this._restartButton.next(!0),
                this._callButton.next(!1)
            }
            ngOnDestroy() {
              this.localStream &&
                this.localStream.getTracks().forEach((t) => t.stop())
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(u.Lb(d.b))
            }),
            (t.ɵcmp = u.Fb({
              type: t,
              selectors: [['quertc-restart-ice']],
              viewQuery: function (t, e) {
                if ((1 & t && (u.Ac(g, !0), u.Ac(m, !0)), 2 & t)) {
                  let t
                  u.jc((t = u.Yb())) && (e.localVideoRef = t.first),
                    u.jc((t = u.Yb())) && (e.remoteVideoRef = t.first)
                }
              },
              decls: 39,
              vars: 16,
              consts: [
                ['id', 'video'],
                ['mat-card-title', '', 'for', 'localCandidate'],
                ['mat-card-subtitle', '', 'id', 'localCandidate'],
                [4, 'ngIf', 'ngIfElse'],
                ['localOff', ''],
                [
                  'mat-card-image',
                  '',
                  'id',
                  'localVideo',
                  'playsinline',
                  '',
                  'autoplay',
                  '',
                  'muted',
                  '',
                ],
                ['localVideo', ''],
                ['mat-card-subtitle', '', 'id', 'remoteCandidate'],
                ['remoteOff', ''],
                [
                  'mat-card-image',
                  '',
                  'id',
                  'remoteVideo',
                  'playsinline',
                  '',
                  'autoplay',
                  '',
                  'muted',
                  '',
                ],
                ['remoteVideo', ''],
                ['color', 'accent', 1, 'toolbar-footer'],
                ['mat-button', '', 'id', 'startButton', 3, 'disabled', 'click'],
                ['startButton', ''],
                ['mat-button', '', 'id', 'callButton', 3, 'disabled', 'click'],
                ['callButton', ''],
                [
                  'mat-button',
                  '',
                  'id',
                  'restartButton',
                  3,
                  'disabled',
                  'click',
                ],
                ['restartButton', ''],
                [
                  'mat-button',
                  '',
                  'id',
                  'hangupButton',
                  3,
                  'disabled',
                  'click',
                ],
                ['hangupButton', ''],
                [1, 'glare'],
                [1, 'mat-hint'],
              ],
              template: function (t, e) {
                if (
                  (1 & t &&
                    (u.Qb(0, 'mat-toolbar'),
                    u.Qb(1, 'h1'),
                    u.xc(2, 'restart-ice works!'),
                    u.Pb(),
                    u.Pb(),
                    u.Qb(3, 'div', 0),
                    u.Qb(4, 'mat-card'),
                    u.Qb(5, 'label', 1),
                    u.xc(6, 'Local candidate'),
                    u.Pb(),
                    u.Qb(7, 'p', 2),
                    u.vc(8, f, 13, 4, 'ng-container', 3),
                    u.vc(9, C, 2, 0, 'ng-template', null, 4, u.wc),
                    u.Pb(),
                    u.Mb(11, 'video', 5, 6),
                    u.Pb(),
                    u.Qb(13, 'mat-card'),
                    u.Qb(14, 'label', 1),
                    u.xc(15, 'Remote candidate '),
                    u.Pb(),
                    u.Qb(16, 'p', 7),
                    u.vc(17, S, 13, 4, 'ng-container', 3),
                    u.vc(18, v, 2, 0, 'ng-template', null, 8, u.wc),
                    u.Pb(),
                    u.Mb(20, 'video', 9, 10),
                    u.Pb(),
                    u.Pb(),
                    u.Qb(22, 'mat-toolbar', 11),
                    u.Qb(23, 'button', 12, 13),
                    u.Xb('click', function () {
                      return e.start()
                    }),
                    u.cc(25, 'async'),
                    u.xc(26, ' Start '),
                    u.Pb(),
                    u.Qb(27, 'button', 14, 15),
                    u.Xb('click', function () {
                      return e.call()
                    }),
                    u.cc(29, 'async'),
                    u.xc(30, ' Call '),
                    u.Pb(),
                    u.Qb(31, 'button', 16, 17),
                    u.Xb('click', function () {
                      return e.restart()
                    }),
                    u.cc(33, 'async'),
                    u.xc(34, ' Restart ICE '),
                    u.Pb(),
                    u.Qb(35, 'button', 18, 19),
                    u.Xb('click', function () {
                      return e.hangup()
                    }),
                    u.cc(37, 'async'),
                    u.xc(38, ' Hang Up '),
                    u.Pb(),
                    u.Pb()),
                  2 & t)
                ) {
                  const t = u.kc(10),
                    i = u.kc(19)
                  u.zb(8),
                    u.gc('ngIf', e.localCandidate)('ngIfElse', t),
                    u.zb(9),
                    u.gc('ngIf', e.remoteCandidate)('ngIfElse', i),
                    u.zb(6),
                    u.gc('disabled', u.dc(25, 8, e.startButton$)),
                    u.zb(4),
                    u.gc('disabled', u.dc(29, 10, e.callButton$)),
                    u.zb(4),
                    u.gc('disabled', u.dc(33, 12, e.restartButton$)),
                    u.zb(4),
                    u.gc('disabled', u.dc(37, 14, e.hangupButton$))
                }
              },
              directives: [s.a, n.a, n.e, n.d, c.k, n.b, a.b],
              pipes: [c.b],
              styles: [
                '[_nghost-%COMP%]{display:block;padding-bottom:64px;width:100%;--width:100%}video[_ngcontent-%COMP%]{width:var(--width);height:calc(var(--width) * .75);-o-object-fit:cover;object-fit:cover;margin:0}.glare[_ngcontent-%COMP%]{color:#000}div#video[_ngcontent-%COMP%]{display:flex;row-gap:8px;-moz-column-gap:8px;column-gap:8px;padding:8px}div#video[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;width:calc(50% - 32px)}div#video[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%] > video[_ngcontent-%COMP%]{width:100%}@media screen and (max-width:400px){button[_ngcontent-%COMP%]{margin:0 11px 10px 0}}.toolbar-footer[_ngcontent-%COMP%]{position:fixed;bottom:0;justify-content:center}',
              ],
            })),
            t
          )
        })(),
        O = (() => {
          class t {}
          return (
            (t.ɵmod = u.Jb({ type: t })),
            (t.ɵinj = u.Ib({
              factory: function (e) {
                return new (e || t)()
              },
              imports: [
                [
                  c.c,
                  n.c,
                  s.b,
                  a.c,
                  o.d.forChild([{ path: '', component: w }]),
                ],
              ],
            })),
            t
          )
        })()
    },
  },
])
