;(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    R3tv: function (t, e, i) {
      'use strict'
      i.r(e),
        i.d(e, 'RestartIceComponent', function () {
          return O
        }),
        i.d(e, 'RestartIceModule', function () {
          return y
        })
      var o = i('Huv7'),
        c = i('t7Mq'),
        n = i('xgIS'),
        a = i('XNiG'),
        s = i('2Vo4'),
        r = i('1G5W'),
        d = i('fXoL'),
        l = i('Wp6s'),
        h = i('ofXK'),
        p = i('/t3+'),
        b = i('bTqV')
      const g = ['localVideo'],
        u = ['remoteVideo']
      function m(t, e) {
        if (
          (1 & t &&
            (d.Ob(0),
            d.Qb(1, 'div'),
            d.yc(2, ' ID: '),
            d.Qb(3, 'span', 20),
            d.yc(4),
            d.Pb(),
            d.Pb(),
            d.Qb(5, 'div'),
            d.yc(6, ' IP: '),
            d.Qb(7, 'span', 20),
            d.yc(8),
            d.Pb(),
            d.yc(9, ' Port: '),
            d.Qb(10, 'span', 20),
            d.yc(11),
            d.Pb(),
            d.yc(12, ' Protocol: '),
            d.Qb(13, 'span', 20),
            d.yc(14),
            d.Pb(),
            d.Pb(),
            d.Nb()),
          2 & t)
        ) {
          const t = d.bc()
          d.zb(4),
            d.zc(t.localCandidate.id),
            d.zb(4),
            d.zc(t.localCandidate.ip),
            d.zb(3),
            d.zc(t.localCandidate.port),
            d.zb(3),
            d.zc(t.localCandidate.protocol)
        }
      }
      function f(t, e) {
        1 & t && (d.Qb(0, 'span', 21), d.yc(1, 'Not connected'), d.Pb())
      }
      function C(t, e) {
        if (
          (1 & t &&
            (d.Ob(0),
            d.Qb(1, 'div'),
            d.yc(2, ' ID: '),
            d.Qb(3, 'span', 20),
            d.yc(4),
            d.Pb(),
            d.Pb(),
            d.Qb(5, 'div'),
            d.yc(6, ' IP: '),
            d.Qb(7, 'span', 20),
            d.yc(8),
            d.Pb(),
            d.yc(9, ' Port: '),
            d.Qb(10, 'span', 20),
            d.yc(11),
            d.Pb(),
            d.yc(12, ' Protocol: '),
            d.Qb(13, 'span', 20),
            d.yc(14),
            d.Pb(),
            d.Pb(),
            d.Nb()),
          2 & t)
        ) {
          const t = d.bc()
          d.zb(4),
            d.zc(t.remoteCandidate.id),
            d.zb(4),
            d.zc(t.remoteCandidate.ip),
            d.zb(3),
            d.zc(t.remoteCandidate.port),
            d.zb(3),
            d.zc(t.remoteCandidate.protocol)
        }
      }
      function v(t, e) {
        1 & t && (d.Qb(0, 'span', 21), d.yc(1, 'Not connected'), d.Pb())
      }
      const P = (t) => Object(n.a)(t, 'loadedmetadata'),
        S = o.a
      let O = (() => {
        class t {
          constructor(t) {
            ;(this.overlog = t),
              (this.subject$ = new a.a()),
              (this.offerOptions = {
                offerToReceiveAudio: !0,
                offerToReceiveVideo: !0,
              }),
              (this._startButton = new s.a(!1)),
              (this.startButton$ = this._startButton.asObservable()),
              (this._callButton = new s.a(!0)),
              (this.callButton$ = this._callButton.asObservable()),
              (this._restartButton = new s.a(!0)),
              (this.restartButton$ = this._restartButton.asObservable()),
              (this._hangupButton = new s.a(!0)),
              (this.hangupButton$ = this._hangupButton.asObservable()),
              (this.getName = (t) => (t === this.pc1 ? 'pc1' : 'pc2')),
              (this.getOtherPc = (t) => (t === this.pc1 ? this.pc2 : this.pc1)),
              (this.gotStream = (t) => {
                S.log('Received local stream'),
                  (this.localVideo.srcObject = t),
                  (this.localStream = t),
                  this._callButton.next(!1)
              }),
              (this.start = () => {
                S.log('Requesting local stream'),
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
                  S.log('Starting call'),
                  (this.startTime = window.performance.now())
                const t = this.localStream.getVideoTracks(),
                  e = this.localStream.getAudioTracks()
                t.length > 0 && S.log('Using video device: ' + t[0].label),
                  e.length > 0 && S.log('Using audio device: ' + e[0].label),
                  this.createPeers(),
                  (this.pc2.onicecandidate = (t) =>
                    this.onIceCandidate(this.pc2, t)),
                  (this.pc1.oniceconnectionstatechange = (t) => {
                    this.onIceStateChange(this.pc1, t),
                      this.pc1 &&
                        this.pc1.iceConnectionState === o.c.Connected &&
                        this._restartButton.next(!1)
                  }),
                  (this.pc2.oniceconnectionstatechange = (t) =>
                    this.onIceStateChange(this.pc2, t)),
                  (this.pc2.ontrack = this.gotRemoteStream),
                  this.localStream
                    .getTracks()
                    .forEach((t) => this.pc1.addTrack(t, this.localStream)),
                  S.log('Added local stream to this.pc1'),
                  this.overlog.show({ text: 'this.pc1 createOffer start' }),
                  this.pc1
                    .createOffer(this.offerOptions)
                    .then(
                      this.onCreateOfferSuccess,
                      this.onCreateSessionDescriptionError
                    )
              }),
              (this.onCreateSessionDescriptionError = (t) => {
                S.log('Failed to create session description: ' + t.toString())
              }),
              (this.onCreateOfferSuccess = (t) => {
                S.log('Offer from pc1\n' + t.sdp),
                  S.log('pc1 setLocalDescription start'),
                  this.pc1
                    .setLocalDescription(t)
                    .then(
                      () => this.onSetLocalSuccess(this.pc1),
                      this.onSetSessionDescriptionError
                    ),
                  S.log('pc2 setRemoteDescription start'),
                  this.pc2
                    .setRemoteDescription(t)
                    .then(
                      () => this.onSetRemoteSuccess(this.pc2),
                      this.onSetSessionDescriptionError
                    ),
                  S.log('pc2 createAnswer start'),
                  this.pc2
                    .createAnswer()
                    .then(
                      this.onCreateAnswerSuccess,
                      this.onCreateSessionDescriptionError
                    )
              }),
              (this.onSetLocalSuccess = (t) => {
                S.log(this.getName(t) + ' setLocalDescription complete')
              }),
              (this.onSetRemoteSuccess = (t) => {
                S.log(this.getName(t) + ' setRemoteDescription complete')
              }),
              (this.onSetSessionDescriptionError = (t) => {
                S.log('Failed to set session description: ' + t.toString())
              }),
              (this.gotRemoteStream = (t) => {
                this.remoteVideo.srcObject !== t.streams[0] &&
                  ((this.remoteVideo.srcObject = t.streams[0]),
                  this.overlog.show({ text: 'pc2 received remote stream' }))
              }),
              (this.onCreateAnswerSuccess = (t) => {
                S.log('Answer from pc2:\n' + t.sdp),
                  S.log('pc2 setLocalDescription start'),
                  this.pc2
                    .setLocalDescription(t)
                    .then(
                      () => this.onSetLocalSuccess(this.pc2),
                      this.onSetSessionDescriptionError
                    ),
                  S.log('pc1 setRemoteDescription start'),
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
                  S.log(
                    `${this.getName(t)} ICE candidate: \n${
                      e.candidate ? e.candidate.candidate : '(null)'
                    }`
                  ))
              }),
              (this.onAddIceCandidateSuccess = (t) => {
                S.log(this.getName(t) + ' addIceCandidate success')
              }),
              (this.onAddIceCandidateError = (t, e) => {
                S.log(
                  `${this.getName(
                    t
                  )} failed to add ICE Candidate: ${e.toString()}`
                )
              }),
              (this.onIceStateChange = (t, e) => {
                t &&
                  (S.log(
                    `${this.getName(t)} ICE state: ${t.iceConnectionState}`
                  ),
                  S.log('ICE state change event: ', e),
                  (t.iceConnectionState !== o.c.Connected &&
                    t.iceConnectionState !== o.c.Completed) ||
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
              P(this.localVideo)
                .pipe(Object(r.a)(this.subject$))
                .subscribe(({ target: t }) => {
                  S.log(`Local video: ${t.videoWidth}x${t.videoHeight}px`)
                }),
              P(this.remoteVideo)
                .pipe(Object(r.a)(this.subject$))
                .subscribe(({ target: t }) => {
                  S.log(`Remote video: ${t.videoWidth}x${t.videoHeight}px`)
                }),
              (this.remoteVideo.onresize = () => {
                if (
                  (S.log(
                    `Remote video size changed to ${this.remoteVideo.videoWidth}x${this.remoteVideo.videoHeight}px`
                  ),
                  this.startTime)
                ) {
                  const t = window.performance.now() - this.startTime
                  S.log(`Setup time: ${t.toFixed(3)}ms`),
                    (this.startTime = null),
                    this.checkStats(this.pc1),
                    this.checkStats(this.pc2)
                }
              })
          }
          createPeers() {
            const t = { iceServers: [] }
            ;(this.pc1 = this.pc1 = new RTCPeerConnection(t)),
              S.log('Created local peer connection object this.pc1'),
              (this.pc1.onicecandidate = (t) =>
                this.onIceCandidate(this.pc1, t)),
              (this.pc2 = this.pc2 = new RTCPeerConnection(t)),
              S.log('Created remote peer connection object this.pc2')
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
            return new (e || t)(d.Lb(c.b))
          }),
          (t.ɵcmp = d.Fb({
            type: t,
            selectors: [['quertc-restart-ice']],
            viewQuery: function (t, e) {
              if ((1 & t && (d.Bc(g, !0), d.Bc(u, !0)), 2 & t)) {
                let t
                d.kc((t = d.Yb())) && (e.localVideoRef = t.first),
                  d.kc((t = d.Yb())) && (e.remoteVideoRef = t.first)
              }
            },
            decls: 36,
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
              ['mat-button', '', 'id', 'restartButton', 3, 'disabled', 'click'],
              ['restartButton', ''],
              ['mat-button', '', 'id', 'hangupButton', 3, 'disabled', 'click'],
              ['hangupButton', ''],
              [1, 'glare'],
              [1, 'mat-hint'],
            ],
            template: function (t, e) {
              if (
                (1 & t &&
                  (d.Qb(0, 'div', 0),
                  d.Qb(1, 'mat-card'),
                  d.Qb(2, 'label', 1),
                  d.yc(3, 'Local candidate'),
                  d.Pb(),
                  d.Qb(4, 'p', 2),
                  d.wc(5, m, 15, 4, 'ng-container', 3),
                  d.wc(6, f, 2, 0, 'ng-template', null, 4, d.xc),
                  d.Pb(),
                  d.Mb(8, 'video', 5, 6),
                  d.Pb(),
                  d.Qb(10, 'mat-card'),
                  d.Qb(11, 'label', 1),
                  d.yc(12, 'Remote candidate '),
                  d.Pb(),
                  d.Qb(13, 'p', 7),
                  d.wc(14, C, 15, 4, 'ng-container', 3),
                  d.wc(15, v, 2, 0, 'ng-template', null, 8, d.xc),
                  d.Pb(),
                  d.Mb(17, 'video', 9, 10),
                  d.Pb(),
                  d.Pb(),
                  d.Qb(19, 'mat-toolbar', 11),
                  d.Qb(20, 'button', 12, 13),
                  d.Xb('click', function () {
                    return e.start()
                  }),
                  d.cc(22, 'async'),
                  d.yc(23, ' Start '),
                  d.Pb(),
                  d.Qb(24, 'button', 14, 15),
                  d.Xb('click', function () {
                    return e.call()
                  }),
                  d.cc(26, 'async'),
                  d.yc(27, ' Call '),
                  d.Pb(),
                  d.Qb(28, 'button', 16, 17),
                  d.Xb('click', function () {
                    return e.restart()
                  }),
                  d.cc(30, 'async'),
                  d.yc(31, ' Restart ICE '),
                  d.Pb(),
                  d.Qb(32, 'button', 18, 19),
                  d.Xb('click', function () {
                    return e.hangup()
                  }),
                  d.cc(34, 'async'),
                  d.yc(35, ' Hang Up '),
                  d.Pb(),
                  d.Pb()),
                2 & t)
              ) {
                const t = d.lc(7),
                  i = d.lc(16)
                d.zb(5),
                  d.gc('ngIf', e.localCandidate)('ngIfElse', t),
                  d.zb(9),
                  d.gc('ngIf', e.remoteCandidate)('ngIfElse', i),
                  d.zb(6),
                  d.gc('disabled', d.dc(22, 8, e.startButton$)),
                  d.zb(4),
                  d.gc('disabled', d.dc(26, 10, e.callButton$)),
                  d.zb(4),
                  d.gc('disabled', d.dc(30, 12, e.restartButton$)),
                  d.zb(4),
                  d.gc('disabled', d.dc(34, 14, e.hangupButton$))
              }
            },
            directives: [l.a, l.f, l.e, h.l, l.c, p.a, b.b],
            pipes: [h.b],
            styles: [
              '[_nghost-%COMP%]{display:block;padding-bottom:64px;width:100%;--width:100%}video[_ngcontent-%COMP%]{width:var(--width);height:calc(var(--width) * .75);-o-object-fit:cover;object-fit:cover;margin:0}.glare[_ngcontent-%COMP%]{color:#000}div#video[_ngcontent-%COMP%]{display:flex;row-gap:8px;-moz-column-gap:8px;column-gap:8px;padding:8px}div#video[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;width:calc(50% - 32px)}div#video[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;flex-direction:row}div#video[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-right:12px}div#video[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%] > video[_ngcontent-%COMP%]{width:100%}@media screen and (max-width:400px){button[_ngcontent-%COMP%]{margin:0 11px 10px 0}}@media screen and (max-width:720px){div#video[_ngcontent-%COMP%]{flex-direction:column}div#video[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%]{width:calc(100% - 26px);flex:1}div#video[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:90%;flex-direction:column}}.toolbar-footer[_ngcontent-%COMP%]{position:fixed;bottom:0;justify-content:center}',
            ],
          })),
          t
        )
      })()
      var w = i('tyNb')
      let y = (() => {
        class t {}
        return (
          (t.ɵmod = d.Jb({ type: t })),
          (t.ɵinj = d.Ib({
            factory: function (e) {
              return new (e || t)()
            },
            imports: [
              [h.c, l.d, p.b, b.c, w.e.forChild([{ path: '', component: O }])],
            ],
          })),
          t
        )
      })()
    },
  },
])
