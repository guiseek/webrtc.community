;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    E4j7: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'PeerToPeerComponent', function () {
          return l
        }),
        i.d(t, 'PeerToPeerModule', function () {
          return u
        })
      var s = i('mrSG'),
        n = i('t7Mq'),
        o = i('XNiG'),
        r = i('Huv7'),
        c = i('ikaO'),
        a = i('fXoL')
      const h = ['selfView'],
        d = ['remoteView']
      let l = (() => {
        class e {
          constructor(e, t, i) {
            ;(this.signaling = e),
              (this.overlog = t),
              (this.stream = i),
              (this.constraints = { audio: !0, video: !0 }),
              (this.active = new o.a()),
              (this.active$ = this.active.asObservable()),
              (this.offerOptions = {
                offerToReceiveAudio: !0,
                offerToReceiveVideo: !0,
              }),
              (this.start = () => {
                this.addCameraMic()
              }),
              (this.addCameraMic = () =>
                Object(s.a)(this, void 0, void 0, function* () {
                  try {
                    this.stream.currentStream = yield this.stream.getUserMedia(
                      this.constraints
                    )
                    for (const e of this.stream.currentStream.getTracks())
                      this.pc.addTrack(e, this.stream.currentStream)
                    this.selfView.srcObject = this.stream.currentStream
                  } catch (e) {
                    console.error(e)
                  }
                }))
          }
          ngAfterViewInit() {
            ;(this.selfView = this.selfViewRef.nativeElement),
              (this.remoteView = this.remoteViewRef.nativeElement),
              (this.pc = new RTCPeerConnection({
                iceServers: [{ urls: 'stun:stun.stunprotocol.org:3478' }],
              })),
              this.pc.addEventListener('icecandidate', ({ candidate: e }) => {
                e && this.signaling.send({ candidate: e })
              }),
              (this.pc.onnegotiationneeded = () =>
                Object(s.a)(this, void 0, void 0, function* () {
                  try {
                    yield this.pc.setLocalDescription(
                      yield this.pc.createOffer(this.offerOptions)
                    ),
                      this.pc.localDescription &&
                        this.signaling.send({
                          description: this.pc.localDescription,
                        })
                  } catch (e) {
                    console.error(e)
                  }
                })),
              (this.pc.ontrack = ({ track: e, streams: t }) => {
                e.onunmute = () => {
                  this.remoteView.srcObject ||
                    (this.remoteView.srcObject = t[0])
                }
              }),
              (this.subs = this.signaling.message$.subscribe(
                ({ description: e, candidate: t }) =>
                  Object(s.a)(this, void 0, void 0, function* () {
                    try {
                      e
                        ? (yield this.pc.setRemoteDescription(e),
                          'offer' == e.type &&
                            (this.selfView.srcObject ||
                              (yield this.addCameraMic()),
                            yield this.pc.setLocalDescription(
                              yield this.pc.createAnswer()
                            ),
                            this.pc.localDescription &&
                              this.signaling.send({
                                description: this.pc.localDescription,
                              })))
                        : t && (yield this.pc.addIceCandidate(t))
                    } catch (i) {
                      console.error(i)
                    }
                  })
              )),
              this.start()
          }
          hangup() {
            this.overlog.show({ text: 'Ending call' }),
              this.stream.currentStream.getTracks().forEach((e) => e.stop()),
              this.pc && (this.pc.close(), Object.defineProperties(this.pc, {}))
          }
          ngOnDestroy() {
            this.hangup(), this.subs && this.subs.unsubscribe()
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(a.Lb(r.d), a.Lb(n.b), a.Lb(c.b))
          }),
          (e.ɵcmp = a.Fb({
            type: e,
            selectors: [['quertc-peer-to-peer']],
            viewQuery: function (e, t) {
              if ((1 & e && (a.Bc(h, !0), a.Bc(d, !0)), 2 & e)) {
                let e
                a.kc((e = a.Yb())) && (t.selfViewRef = e.first),
                  a.kc((e = a.Yb())) && (t.remoteViewRef = e.first)
              }
            },
            decls: 6,
            vars: 0,
            consts: [
              ['id', 'remote'],
              ['autoplay', ''],
              ['remoteView', ''],
              ['id', 'self'],
              ['selfView', ''],
            ],
            template: function (e, t) {
              1 & e &&
                (a.Qb(0, 'div', 0),
                a.Mb(1, 'video', 1, 2),
                a.Pb(),
                a.Qb(3, 'div', 3),
                a.Mb(4, 'video', 1, 4),
                a.Pb())
            },
            styles: [
              '[_nghost-%COMP%]{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative}[_nghost-%COMP%]   .center[_ngcontent-%COMP%]{position:absolute;text-align:center;max-width:150px}[_nghost-%COMP%]   .center[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:16px;line-height:1.2}#remote[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;align-items:center;justify-content:center}#remote[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{max-width:100vw;height:100%;-o-object-fit:cover;object-fit:cover}#self[_ngcontent-%COMP%]{position:fixed;bottom:0;right:0;border-radius:50%;overflow:hidden;width:150px;height:150px;display:flex;align-items:center;justify-content:center;border:3px solid #fff;border-radius:100%}#self[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:auto;height:154px;-o-object-fit:contain;object-fit:contain}',
            ],
          })),
          e
        )
      })()
      var f = i('ofXK'),
        p = i('tyNb')
      let u = (() => {
        class e {}
        return (
          (e.ɵmod = a.Jb({ type: e })),
          (e.ɵinj = a.Ib({
            factory: function (t) {
              return new (t || e)()
            },
            imports: [
              [f.c, c.c, n.a, p.e.forChild([{ path: '', component: l }])],
            ],
          })),
          e
        )
      })()
    },
  },
])
