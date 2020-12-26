;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['quertc-peer-to-peer'],
  {
    /***/ '3LEx':
      /*!********************************************************************!*\
  !*** ./libs/sample/peer-to-peer/src/lib/peer-to-peer.component.ts ***!
  \********************************************************************/
      /*! exports provided: PeerToPeerComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerToPeerComponent',
          function () {
            return PeerToPeerComponent
          }
        )
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */ 'mrSG'
        )
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs */ 'qCKp'
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _quertc_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @quertc/core */ 'Huv7'
        )
        /* harmony import */ var _quertc_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @quertc/shared */ '2Mw2'
        )

        const _c0 = ['selfView']
        const _c1 = ['remoteView']
        class PeerToPeerComponent {
          constructor(signaling, media) {
            this.signaling = signaling
            this.media = media
            this.constraints = { audio: true, video: true }
            this.active = new rxjs__WEBPACK_IMPORTED_MODULE_1__['Subject']()
            this.active$ = this.active.asObservable()
            this.offerOptions = {
              offerToReceiveAudio: true,
              offerToReceiveVideo: true,
            }
            // call start() to initiate
            this.start = () => {
              this.addCameraMic()
            }
            // add camera and microphone to connection
            this.addCameraMic = () =>
              Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
                this,
                void 0,
                void 0,
                function* () {
                  try {
                    // get a local stream, show it in a self-view and add it to be sent
                    this.media.currentStream = yield this.media.getUserMedia(
                      this.constraints
                    )
                    for (const track of this.media.currentStream.getTracks()) {
                      this.pc.addTrack(track, this.media.currentStream)
                    }
                    this.selfView.srcObject = this.media.currentStream
                  } catch (err) {
                    console.error(err)
                  }
                }
              )
          }
          ngOnInit() {}
          ngAfterViewInit() {
            this.selfView = this.selfViewRef.nativeElement
            this.remoteView = this.remoteViewRef.nativeElement
            this.pc = new RTCPeerConnection({
              iceServers: [{ urls: 'stun:stun.stunprotocol.org:3478' }],
            })
            // send any ice candidates to the other peer
            this.pc.addEventListener('icecandidate', ({ candidate }) => {
              if (candidate) {
                this.signaling.send({ candidate })
              }
            })
            // let the "negotiationneeded" event trigger offer generation
            this.pc.onnegotiationneeded = () =>
              Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
                this,
                void 0,
                void 0,
                function* () {
                  try {
                    yield this.pc.setLocalDescription(
                      yield this.pc.createOffer(this.offerOptions)
                    )
                    // send the offer to the other peer
                    if (this.pc.localDescription) {
                      this.signaling.send({
                        description: this.pc.localDescription,
                      })
                    }
                  } catch (err) {
                    console.error(err)
                  }
                }
              )
            this.pc.ontrack = ({ track, streams }) => {
              // once media for a remote track arrives, show it in the remote video element
              track.onunmute = () => {
                // don't set srcObject again if it is already set.
                if (this.remoteView.srcObject) return
                this.remoteView.srcObject = streams[0]
                // this.active.next(true)
              }
            }
            this.signaling.message$.subscribe(
              ({ sender, description, candidate }) =>
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
                  this,
                  void 0,
                  void 0,
                  function* () {
                    try {
                      if (description) {
                        yield this.pc.setRemoteDescription(description)
                        // if we got an offer, we need to reply with an answer
                        if (description.type == 'offer') {
                          if (!this.selfView.srcObject) {
                            // blocks negotiation on permission (not recommended in production code)
                            yield this.addCameraMic()
                          }
                          yield this.pc.setLocalDescription(
                            yield this.pc.createAnswer()
                          )
                          if (this.pc.localDescription) {
                            this.signaling.send({
                              description: this.pc.localDescription,
                            })
                          }
                        }
                      } else if (candidate) {
                        yield this.pc.addIceCandidate(candidate)
                      }
                    } catch (err) {
                      console.error(err)
                    }
                  }
                )
            )
            this.start()
          }
        }
        PeerToPeerComponent.ɵfac = function PeerToPeerComponent_Factory(t) {
          return new (t || PeerToPeerComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵdirectiveInject'](
              _quertc_core__WEBPACK_IMPORTED_MODULE_3__['SignalingChannel']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵdirectiveInject'](
              _quertc_shared__WEBPACK_IMPORTED_MODULE_4__['MediaStreamService']
            )
          )
        }
        PeerToPeerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__[
          'ɵɵdefineComponent'
        ]({
          type: PeerToPeerComponent,
          selectors: [['quertc-peer-to-peer']],
          viewQuery: function PeerToPeerComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵviewQuery'](
                _c0,
                true
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵviewQuery'](
                _c1,
                true
              )
            }
            if (rf & 2) {
              let _t
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵqueryRefresh'](
                (_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__[
                  'ɵɵloadQuery'
                ]())
              ) && (ctx.selfViewRef = _t.first)
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵqueryRefresh'](
                (_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__[
                  'ɵɵloadQuery'
                ]())
              ) && (ctx.remoteViewRef = _t.first)
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
          template: function PeerToPeerComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementStart'](
                0,
                'div',
                0
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelement'](
                1,
                'video',
                1,
                2
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementStart'](
                3,
                'div',
                3
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelement'](
                4,
                'video',
                1,
                4
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementEnd']()
            }
          },
          styles: [
            '[_nghost-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n[_nghost-%COMP%]   .center[_ngcontent-%COMP%] {\n  position: absolute;\n  text-align: center;\n  max-width: 150px;\n}\n[_nghost-%COMP%]   .center[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  line-height: 1.2;\n}\n#remote[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#remote[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  max-width: 100vw;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n#self[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  border-radius: 50%;\n  overflow: hidden;\n  width: 150px;\n  height: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: solid 3px #fff;\n  border-radius: 100%;\n}\n#self[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: auto;\n  height: 154px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BlZXItdG8tcGVlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDTjtBQWlCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFkRjtBQWVFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQWJKO0FBaUJBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBZEY7QUFlRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQWJKIiwiZmlsZSI6InBlZXItdG8tcGVlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAuY2VudGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1heC13aWR0aDogMTUwcHg7XG5cbiAgICBoMyB7XG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICB9XG4gIH1cbn1cblxuLy8gOmhvc3Qge1xuLy8gICBmbGV4OiAxO1xuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4vLyAgIHF1ZXJ0Yy1jYWxsLWF2YXRhciB7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICB9XG4vLyB9XG5cbiNyZW1vdGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdmlkZW8ge1xuICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICB9XG59XG5cbiNzZWxmIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogc29saWQgM3B4ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHZpZGVvIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDE1NHB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIH1cbn1cbiJdfQ== */',
          ],
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵsetClassMetadata'](
            PeerToPeerComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__['Component'],
                args: [
                  {
                    selector: 'quertc-peer-to-peer',
                    templateUrl: './peer-to-peer.component.html',
                    styleUrls: ['./peer-to-peer.component.scss'],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _quertc_core__WEBPACK_IMPORTED_MODULE_3__[
                      'SignalingChannel'
                    ],
                },
                {
                  type:
                    _quertc_shared__WEBPACK_IMPORTED_MODULE_4__[
                      'MediaStreamService'
                    ],
                },
              ]
            },
            {
              selfViewRef: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__['ViewChild'],
                  args: ['selfView'],
                },
              ],
              remoteViewRef: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__['ViewChild'],
                  args: ['remoteView'],
                },
              ],
            }
          )
        })()

        /***/
      },

    /***/ '3uR4':
      /*!*****************************************************************!*\
  !*** ./libs/sample/peer-to-peer/src/lib/peer-to-peer.module.ts ***!
  \*****************************************************************/
      /*! exports provided: PeerToPeerModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerToPeerModule',
          function () {
            return PeerToPeerModule
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */ 'ofXK'
        )
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */ 'tyNb'
        )
        /* harmony import */ var _quertc_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @quertc/shared */ '2Mw2'
        )
        /* harmony import */ var _peer_to_peer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./peer-to-peer.component */ '3LEx'
        )

        class PeerToPeerModule {}
        PeerToPeerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineNgModule'
        ]({ type: PeerToPeerModule })
        PeerToPeerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineInjector'
        ]({
          factory: function PeerToPeerModule_Factory(t) {
            return new (t || PeerToPeerModule)()
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
              _quertc_shared__WEBPACK_IMPORTED_MODULE_3__['SharedModule'],
              _angular_router__WEBPACK_IMPORTED_MODULE_2__[
                'RouterModule'
              ].forChild([
                {
                  path: '',
                  component:
                    _peer_to_peer_component__WEBPACK_IMPORTED_MODULE_4__[
                      'PeerToPeerComponent'
                    ],
                },
              ]),
            ],
          ],
        })
        ;(function () {
          ;(typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵsetNgModuleScope'
            ](PeerToPeerModule, {
              declarations: [
                _peer_to_peer_component__WEBPACK_IMPORTED_MODULE_4__[
                  'PeerToPeerComponent'
                ],
              ],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _quertc_shared__WEBPACK_IMPORTED_MODULE_3__['SharedModule'],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterModule'],
              ],
              exports: [
                _peer_to_peer_component__WEBPACK_IMPORTED_MODULE_4__[
                  'PeerToPeerComponent'
                ],
              ],
            })
        })()
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            PeerToPeerModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__[
                        'CommonModule'
                      ],
                      _quertc_shared__WEBPACK_IMPORTED_MODULE_3__[
                        'SharedModule'
                      ],
                      _angular_router__WEBPACK_IMPORTED_MODULE_2__[
                        'RouterModule'
                      ].forChild([
                        {
                          path: '',
                          component:
                            _peer_to_peer_component__WEBPACK_IMPORTED_MODULE_4__[
                              'PeerToPeerComponent'
                            ],
                        },
                      ]),
                    ],
                    declarations: [
                      _peer_to_peer_component__WEBPACK_IMPORTED_MODULE_4__[
                        'PeerToPeerComponent'
                      ],
                    ],
                    exports: [
                      _peer_to_peer_component__WEBPACK_IMPORTED_MODULE_4__[
                        'PeerToPeerComponent'
                      ],
                    ],
                  },
                ],
              },
            ],
            null,
            null
          )
        })()

        /***/
      },

    /***/ E4j7:
      /*!***********************************************!*\
  !*** ./libs/sample/peer-to-peer/src/index.ts ***!
  \***********************************************/
      /*! exports provided: PeerToPeerComponent, PeerToPeerModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _lib_peer_to_peer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./lib/peer-to-peer.component */ '3LEx'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerToPeerComponent',
          function () {
            return _lib_peer_to_peer_component__WEBPACK_IMPORTED_MODULE_0__[
              'PeerToPeerComponent'
            ]
          }
        )

        /* harmony import */ var _lib_peer_to_peer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./lib/peer-to-peer.module */ '3uR4'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerToPeerModule',
          function () {
            return _lib_peer_to_peer_module__WEBPACK_IMPORTED_MODULE_1__[
              'PeerToPeerModule'
            ]
          }
        )

        /***/
      },
  },
])
//# sourceMappingURL=quertc-peer-to-peer.js.map
