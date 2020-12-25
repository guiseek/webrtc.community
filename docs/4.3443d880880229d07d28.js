;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    E4j7: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'PeerToPeerComponent', function () {
          return p
        }),
        i.d(t, 'PeerToPeerModule', function () {
          return m
        })
      var n = i('mrSG'),
        o = i('XNiG'),
        c = i('Huv7'),
        s = i('2Mw2'),
        r = i('fXoL'),
        a = i('ofXK'),
        d = i('WX4o')
      const h = ['selfView'],
        l = ['remoteView']
      function f(e, t) {
        1 & e &&
          (r.Ob(0),
          r.Qb(1, 'div', 6),
          r.Mb(2, 'quertc-call-avatar', 7),
          r.Qb(3, 'h3', 8),
          r.xc(4, 'Convite algu\xe9m ou abra em outra janela'),
          r.Pb(),
          r.Pb(),
          r.Nb()),
          2 & e && (r.zb(2), r.gc('animation', !0))
      }
      let p = (() => {
        class e {
          constructor(e, t) {
            ;(this.signaling = e),
              (this.media = t),
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
                Object(n.a)(this, void 0, void 0, function* () {
                  try {
                    this.media.currentStream = yield this.media.getUserMedia(
                      this.constraints
                    )
                    for (const e of this.media.currentStream.getTracks())
                      this.pc.addTrack(e, this.media.currentStream)
                    this.selfView.srcObject = this.media.currentStream
                  } catch (e) {
                    console.error(e)
                  }
                }))
          }
          ngOnInit() {}
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
                Object(n.a)(this, void 0, void 0, function* () {
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
              this.signaling.message$.subscribe(
                ({ description: e, candidate: t }) =>
                  Object(n.a)(this, void 0, void 0, function* () {
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
              ),
              this.start()
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(r.Lb(c.d), r.Lb(s.a))
          }),
          (e.ɵcmp = r.Fb({
            type: e,
            selectors: [['quertc-peer-to-peer']],
            viewQuery: function (e, t) {
              if ((1 & e && (r.Ac(h, !0), r.Ac(l, !0)), 2 & e)) {
                let e
                r.jc((e = r.Yb())) && (t.selfViewRef = e.first),
                  r.jc((e = r.Yb())) && (t.remoteViewRef = e.first)
              }
            },
            decls: 8,
            vars: 3,
            consts: [
              [4, 'ngIf'],
              ['id', 'remote'],
              ['autoplay', ''],
              ['remoteView', ''],
              ['id', 'self'],
              ['selfView', ''],
              [1, 'center'],
              [3, 'animation'],
              [1, 'mat-h3', 'mat-hint'],
            ],
            template: function (e, t) {
              1 & e &&
                (r.vc(0, f, 5, 1, 'ng-container', 0),
                r.cc(1, 'async'),
                r.Qb(2, 'div', 1),
                r.Mb(3, 'video', 2, 3),
                r.Pb(),
                r.Qb(5, 'div', 4),
                r.Mb(6, 'video', 2, 5),
                r.Pb()),
                2 & e && r.gc('ngIf', null === r.dc(1, 1, t.active$))
            },
            directives: [a.k, d.a],
            pipes: [a.b],
            styles: [
              '[_nghost-%COMP%]{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative}[_nghost-%COMP%]   .center[_ngcontent-%COMP%]{position:absolute;text-align:center;max-width:150px}[_nghost-%COMP%]   .center[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:16px;line-height:1.2}#remote[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;align-items:center;justify-content:center}#remote[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{max-width:100vw;height:100%;-o-object-fit:cover;object-fit:cover}#self[_ngcontent-%COMP%]{position:fixed;bottom:0;right:0;border-radius:50%;overflow:hidden;width:150px;height:150px;display:flex;align-items:center;justify-content:center;border:3px solid #fff;border-radius:100%}#self[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:auto;height:154px;-o-object-fit:contain;object-fit:contain}',
            ],
          })),
          e
        )
      })()
      var u = i('tyNb')
      let m = (() => {
        class e {}
        return (
          (e.ɵmod = r.Jb({ type: e })),
          (e.ɵinj = r.Ib({
            factory: function (t) {
              return new (t || e)()
            },
            imports: [[a.c, s.c, u.d.forChild([{ path: '', component: p }])]],
          })),
          e
        )
      })()
    },
  },
])
