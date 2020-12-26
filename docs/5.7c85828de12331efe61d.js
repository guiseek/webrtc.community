;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    zOaj: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'PerfectNegotiationComponent', function () {
          return p
        }),
        i.d(t, 'PerfectNegotiationModule', function () {
          return b
        })
      var n = i('mrSG'),
        s = i('Huv7'),
        r = i('MAu8'),
        c = i('XNiG'),
        o = i('ikaO'),
        a = i('fXoL'),
        h = i('ofXK'),
        f = i('YVGP')
      const d = ['selfView'],
        l = ['remoteView']
      function g(e, t) {
        if (
          (1 & e &&
            (a.Qb(0, 'div', 6),
            a.Mb(1, 'quertc-calling', 7, 8),
            a.cc(3, 'async'),
            a.Pb()),
          2 & e)
        ) {
          const e = a.bc()
          a.zb(1), a.gc('active', !0 === a.dc(3, 1, e.active$))
        }
      }
      let p = (() => {
        class e {
          constructor(e, t) {
            ;(this.signaling = e),
              (this.stream = t),
              (this.title = 'client-app'),
              (this.active = new c.a()),
              (this.active$ = this.active.asObservable()),
              (this.sender = Object(r.b)()),
              (this.makingOffer = !1),
              (this.ignoreOffer = !1),
              (this.isSettingRemoteAnswerPending = !1),
              (this.offerOptions = {
                offerToReceiveAudio: !0,
                offerToReceiveVideo: !0,
              }),
              (this.start = () =>
                Object(n.a)(this, void 0, void 0, function* () {
                  try {
                    this.stream.currentStream = yield this.stream.getUserMedia()
                    for (const e of this.stream.currentStream.getTracks())
                      this.pc.addTrack(e, this.stream.currentStream)
                    ;(this.selfView.srcObject = this.stream.currentStream),
                      (this.selfView.muted = !0)
                  } catch (e) {
                    console.error(e)
                  }
                })),
              (this.restart = () =>
                Object(n.a)(this, void 0, void 0, function* () {
                  ;(this.offerOptions.iceRestart = !0),
                    this.makeOffer(this.offerOptions)
                }))
          }
          makeOffer(e) {
            return Object(n.a)(this, void 0, void 0, function* () {
              try {
                ;(this.makingOffer = !0),
                  yield this.pc.setLocalDescription(
                    yield this.pc.createOffer(e)
                  ),
                  this.pc.localDescription &&
                    this.signaling.send({
                      sender: this.sender,
                      description: this.pc.localDescription,
                    })
              } catch (t) {
                console.error(t)
              } finally {
                this.makingOffer = !1
              }
            })
          }
          ngAfterViewInit() {
            ;(this.selfView = this.selfViewRef.nativeElement),
              (this.remoteView = this.remoteViewRef.nativeElement),
              (this.pc = new RTCPeerConnection({
                iceServers: [{ urls: 'stun:stun.stunprotocol.org:3478' }],
              })),
              this.pc.addEventListener('track', ({ track: e, streams: t }) => {
                e.addEventListener('unmute', () => {
                  this.remoteView.srcObject ||
                    ((this.remoteView.srcObject = t[0]), this.active.next(!0))
                })
              }),
              this.pc.addEventListener('icecandidate', ({ candidate: e }) => {
                e && this.signaling.send({ sender: this.sender, candidate: e })
              }),
              this.pc.addEventListener('negotiationneeded', () =>
                Object(n.a)(this, void 0, void 0, function* () {
                  this.makeOffer(this.offerOptions)
                })
              ),
              (this.subs = this.signaling.message$.subscribe(
                ({ sender: e, description: t, candidate: i }) =>
                  Object(n.a)(this, void 0, void 0, function* () {
                    console.log('sender: ', e)
                    try {
                      if (t) {
                        const i =
                            !this.makingOffer &&
                            ('stable' == this.pc.signalingState ||
                              this.isSettingRemoteAnswerPending),
                          n = t.type == s.b.Offer && !i
                        if (
                          ((this.ignoreOffer = e === this.sender && n),
                          this.ignoreOffer)
                        )
                          return
                        ;(this.isSettingRemoteAnswerPending =
                          t.type == s.b.Answer),
                          yield this.pc.setRemoteDescription(t),
                          (this.isSettingRemoteAnswerPending = !1),
                          t.type == s.b.Offer &&
                            (yield this.pc.setLocalDescription(
                              yield this.pc.createAnswer()
                            ),
                            this.pc.localDescription &&
                              this.signaling.send({
                                description: this.pc.localDescription,
                              }))
                      } else if (i)
                        try {
                          yield this.pc.addIceCandidate(i)
                        } catch (n) {
                          if (!this.ignoreOffer) throw n
                        }
                    } catch (n) {
                      console.error(n)
                    }
                  })
              )),
              this.start()
          }
          hangup() {
            console.log('Ending call'),
              this.stream.currentStream.getTracks().forEach((e) => e.stop()),
              this.pc && (this.pc.close(), Object.defineProperties(this.pc, {}))
          }
          ngOnDestroy() {
            this.hangup(), this.subs && this.subs.unsubscribe()
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(a.Lb(s.d), a.Lb(o.b))
          }),
          (e.ɵcmp = a.Fb({
            type: e,
            selectors: [['quertc-perfect-negotiation']],
            viewQuery: function (e, t) {
              if ((1 & e && (a.zc(o.a, !0), a.zc(d, !0), a.zc(l, !0)), 2 & e)) {
                let e
                a.ic((e = a.Yb())) && (t.calling = e.first),
                  a.ic((e = a.Yb())) && (t.selfViewRef = e.first),
                  a.ic((e = a.Yb())) && (t.remoteViewRef = e.first)
              }
            },
            decls: 8,
            vars: 3,
            consts: [
              ['class', 'center', 4, 'ngIf'],
              ['id', 'remote'],
              ['autoplay', ''],
              ['remoteView', ''],
              ['id', 'self'],
              ['selfView', ''],
              [1, 'center'],
              [3, 'active'],
              ['calling', ''],
            ],
            template: function (e, t) {
              1 & e &&
                (a.uc(0, g, 4, 3, 'div', 0),
                a.cc(1, 'async'),
                a.Qb(2, 'div', 1),
                a.Mb(3, 'video', 2, 3),
                a.Pb(),
                a.Qb(5, 'div', 4),
                a.Mb(6, 'video', 2, 5),
                a.Pb()),
                2 & e && a.gc('ngIf', null === a.dc(1, 1, t.active$))
            },
            directives: [h.k, f.a],
            pipes: [h.b],
            styles: [
              '[_nghost-%COMP%]{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative}[_nghost-%COMP%]   .center[_ngcontent-%COMP%]{position:absolute;text-align:center;max-width:150px}[_nghost-%COMP%]   .center[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:16px;line-height:1.2}#remote[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;align-items:center;justify-content:center}#remote[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{max-width:100vw;height:100%;-o-object-fit:cover;object-fit:cover}#self[_ngcontent-%COMP%]{position:fixed;bottom:0;right:0;border-radius:50%;overflow:hidden;width:150px;height:150px;display:flex;align-items:center;justify-content:center;border:3px solid #fff;border-radius:100%}#self[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:auto;height:154px;-o-object-fit:contain;object-fit:contain}',
            ],
          })),
          e
        )
      })()
      var u = i('tyNb')
      let b = (() => {
        class e {}
        return (
          (e.ɵmod = a.Jb({ type: e })),
          (e.ɵinj = a.Ib({
            factory: function (t) {
              return new (t || e)()
            },
            imports: [[h.c, o.c, u.d.forChild([{ path: '', component: p }])]],
          })),
          e
        )
      })()
    },
  },
])
