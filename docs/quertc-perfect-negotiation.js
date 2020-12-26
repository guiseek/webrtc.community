;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['quertc-perfect-negotiation'],
  {
    /***/ '5KNM':
      /*!*******************************************************************************!*\
  !*** ./libs/sample/perfect-negotiation/src/lib/perfect-negotiation.module.ts ***!
  \*******************************************************************************/
      /*! exports provided: PerfectNegotiationModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PerfectNegotiationModule',
          function () {
            return PerfectNegotiationModule
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
        /* harmony import */ var _perfect_negotiation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./perfect-negotiation.component */ 'URWb'
        )

        class PerfectNegotiationModule {}
        PerfectNegotiationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineNgModule'
        ]({ type: PerfectNegotiationModule })
        PerfectNegotiationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineInjector'
        ]({
          factory: function PerfectNegotiationModule_Factory(t) {
            return new (t || PerfectNegotiationModule)()
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
                    _perfect_negotiation_component__WEBPACK_IMPORTED_MODULE_4__[
                      'PerfectNegotiationComponent'
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
            ](PerfectNegotiationModule, {
              declarations: [
                _perfect_negotiation_component__WEBPACK_IMPORTED_MODULE_4__[
                  'PerfectNegotiationComponent'
                ],
              ],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _quertc_shared__WEBPACK_IMPORTED_MODULE_3__['SharedModule'],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterModule'],
              ],
            })
        })()
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            PerfectNegotiationModule,
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
                            _perfect_negotiation_component__WEBPACK_IMPORTED_MODULE_4__[
                              'PerfectNegotiationComponent'
                            ],
                        },
                      ]),
                    ],
                    declarations: [
                      _perfect_negotiation_component__WEBPACK_IMPORTED_MODULE_4__[
                        'PerfectNegotiationComponent'
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

    /***/ URWb:
      /*!**********************************************************************************!*\
  !*** ./libs/sample/perfect-negotiation/src/lib/perfect-negotiation.component.ts ***!
  \**********************************************************************************/
      /*! exports provided: PerfectNegotiationComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PerfectNegotiationComponent',
          function () {
            return PerfectNegotiationComponent
          }
        )
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */ 'mrSG'
        )
        /* harmony import */ var _quertc_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @quertc/core */ 'Huv7'
        )
        /* harmony import */ var _quertc_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @quertc/controls */ 'MAu8'
        )
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs */ 'qCKp'
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _quertc_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @quertc/shared */ '2Mw2'
        )

        const _c0 = ['selfView']
        const _c1 = ['remoteView']
        class PerfectNegotiationComponent {
          constructor(signaling, stream) {
            this.signaling = signaling
            this.stream = stream
            this.title = 'client-app'
            // localStream: MediaStream
            this.active = new rxjs__WEBPACK_IMPORTED_MODULE_3__['Subject']()
            this.active$ = this.active.asObservable()
            this.sender = Object(
              _quertc_controls__WEBPACK_IMPORTED_MODULE_2__['code']
            )()
            /**
             * manter o controle de algum estado de
             * negociação para evitar corridas e erros
             */
            this.makingOffer = false
            this.ignoreOffer = false
            this.isSettingRemoteAnswerPending = false
            this.offerOptions = {
              offerToReceiveAudio: true,
              offerToReceiveVideo: true,
            }
            this.start = () =>
              Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
                this,
                void 0,
                void 0,
                function* () {
                  try {
                    this.stream.currentStream = yield this.stream.getUserMedia()
                    for (const track of this.stream.currentStream.getTracks()) {
                      this.pc.addTrack(track, this.stream.currentStream)
                    }
                    this.selfView.srcObject = this.stream.currentStream
                    this.selfView.muted = true
                  } catch (err) {
                    console.error(err)
                  }
                }
              )
            this.restart = () =>
              Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
                this,
                void 0,
                void 0,
                function* () {
                  this.offerOptions.iceRestart = true
                  this.makeOffer(this.offerOptions)
                }
              )
          }
          makeOffer(options) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
              this,
              void 0,
              void 0,
              function* () {
                try {
                  this.makingOffer = true
                  yield this.pc.setLocalDescription(
                    yield this.pc.createOffer(options)
                  )
                  if (this.pc.localDescription) {
                    this.signaling.send({
                      sender: this.sender,
                      description: this.pc.localDescription,
                    })
                  }
                } catch (err) {
                  console.error(err)
                } finally {
                  this.makingOffer = false
                }
              }
            )
          }
          ngAfterViewInit() {
            this.selfView = this.selfViewRef.nativeElement
            this.remoteView = this.remoteViewRef.nativeElement
            this.pc = new RTCPeerConnection({
              iceServers: [{ urls: 'stun:stun.stunprotocol.org:3478' }],
            })
            this.pc.addEventListener('track', ({ track, streams }) => {
              // assim que a mídia para uma trilha remota chegar, mostre-a no elemento de vídeo remoto
              track.addEventListener('unmute', () => {
                // não defina srcObject novamente se já estiver definido.
                if (this.remoteView.srcObject) return
                this.remoteView.srcObject = streams[0]
                this.active.next(true)
              })
            })
            //
            //
            //  A lógica de negociação perfeita, separada do resto da aplicação
            //
            // enviar qualquer candidato de gelo para o outro par
            this.pc.addEventListener('icecandidate', ({ candidate }) => {
              if (candidate) {
                this.signaling.send({ sender: this.sender, candidate })
              }
            })
            // deixe o evento "necessário para a negociação" gerar a oferta
            this.pc.addEventListener('negotiationneeded', () =>
              Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
                this,
                void 0,
                void 0,
                function* () {
                  this.makeOffer(this.offerOptions)
                }
              )
            )
            this.subs = this.signaling.message$.subscribe(
              ({ sender, description, candidate }) =>
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
                  this,
                  void 0,
                  void 0,
                  function* () {
                    console.log('sender: ', sender)
                    try {
                      if (description) {
                        // Uma oferta pode chegar enquanto estamos ocupados processando SRD (resposta).
                        // Nesse caso, estaremos "estáveis" no momento em que a oferta for processada
                        // então é seguro encadear em nossa Cadeia de Operações agora.
                        const readyForOffer =
                          !this.makingOffer &&
                          (this.pc.signalingState == 'stable' ||
                            this.isSettingRemoteAnswerPending)
                        const offerCollision =
                          description.type ==
                            _quertc_core__WEBPACK_IMPORTED_MODULE_1__[
                              'PeerEvent'
                            ].Offer && !readyForOffer
                        const polite = sender === this.sender
                        this.ignoreOffer = polite && offerCollision
                        if (this.ignoreOffer) {
                          return
                        }
                        this.isSettingRemoteAnswerPending =
                          description.type ==
                          _quertc_core__WEBPACK_IMPORTED_MODULE_1__['PeerEvent']
                            .Answer
                        yield this.pc.setRemoteDescription(description) // SRD reverte conforme necessário
                        this.isSettingRemoteAnswerPending = false
                        if (
                          description.type ==
                          _quertc_core__WEBPACK_IMPORTED_MODULE_1__['PeerEvent']
                            .Offer
                        ) {
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
                        try {
                          yield this.pc.addIceCandidate(candidate)
                        } catch (err) {
                          if (!this.ignoreOffer) throw err // Suprimir os candidatos da oferta ignorada
                        }
                      }
                    } catch (err) {
                      console.error(err)
                    }
                  }
                )
            )
            this.start()
          }
          hangup() {
            console.log('Ending call')
            this.stream.currentStream.getTracks().forEach((t) => t.stop())
            if (this.pc) {
              this.pc.close()
              Object.defineProperties(this.pc, {})
            }
          }
          ngOnDestroy() {
            this.hangup()
            if (this.subs) {
              this.subs.unsubscribe()
            }
          }
        }
        PerfectNegotiationComponent.ɵfac = function PerfectNegotiationComponent_Factory(
          t
        ) {
          return new (t || PerfectNegotiationComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_4__['ɵɵdirectiveInject'](
              _quertc_core__WEBPACK_IMPORTED_MODULE_1__['SignalingChannel']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_4__['ɵɵdirectiveInject'](
              _quertc_shared__WEBPACK_IMPORTED_MODULE_5__['MediaStreamService']
            )
          )
        }
        PerfectNegotiationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__[
          'ɵɵdefineComponent'
        ]({
          type: PerfectNegotiationComponent,
          selectors: [['quertc-perfect-negotiation']],
          viewQuery: function PerfectNegotiationComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__['ɵɵviewQuery'](
                _c0,
                true
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_4__['ɵɵviewQuery'](
                _c1,
                true
              )
            }
            if (rf & 2) {
              let _t
              _angular_core__WEBPACK_IMPORTED_MODULE_4__['ɵɵqueryRefresh'](
                (_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__[
                  'ɵɵloadQuery'
                ]())
              ) && (ctx.selfViewRef = _t.first)
              _angular_core__WEBPACK_IMPORTED_MODULE_4__['ɵɵqueryRefresh'](
                (_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__[
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
          template: function PerfectNegotiationComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__['ɵɵelementStart'](
                0,
                'div',
                0
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_4__['ɵɵelement'](
                1,
                'video',
                1,
                2
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_4__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_4__['ɵɵelementStart'](
                3,
                'div',
                3
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_4__['ɵɵelement'](
                4,
                'video',
                1,
                4
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_4__['ɵɵelementEnd']()
            }
          },
          styles: [
            '[_nghost-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n[_nghost-%COMP%]   .center[_ngcontent-%COMP%] {\n  position: absolute;\n  text-align: center;\n  max-width: 150px;\n}\n[_nghost-%COMP%]   .center[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  line-height: 1.2;\n}\n#remote[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#remote[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  max-width: 100vw;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n#self[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  border-radius: 50%;\n  overflow: hidden;\n  width: 150px;\n  height: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: solid 3px #fff;\n  border-radius: 100%;\n}\n#self[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: auto;\n  height: 154px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BlcmZlY3QtbmVnb3RpYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0k7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBQ047QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFERjtBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUFKO0FBSUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUVFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FBQUoiLCJmaWxlIjoicGVyZmVjdC1uZWdvdGlhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAuY2VudGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1heC13aWR0aDogMTUwcHg7XG5cbiAgICBoMyB7XG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICB9XG4gIH1cbn1cblxuI3JlbW90ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB2aWRlbyB7XG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbn1cblxuI3NlbGYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiBzb2xpZCAzcHggI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgdmlkZW8ge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMTU0cHg7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgfVxufVxuIl19 */',
          ],
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__['ɵsetClassMetadata'](
            PerfectNegotiationComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__['Component'],
                args: [
                  {
                    selector: 'quertc-perfect-negotiation',
                    templateUrl: './perfect-negotiation.component.html',
                    styleUrls: ['./perfect-negotiation.component.scss'],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _quertc_core__WEBPACK_IMPORTED_MODULE_1__[
                      'SignalingChannel'
                    ],
                },
                {
                  type:
                    _quertc_shared__WEBPACK_IMPORTED_MODULE_5__[
                      'MediaStreamService'
                    ],
                },
              ]
            },
            {
              selfViewRef: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_4__['ViewChild'],
                  args: ['selfView'],
                },
              ],
              remoteViewRef: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_4__['ViewChild'],
                  args: ['remoteView'],
                },
              ],
            }
          )
        })()

        /***/
      },

    /***/ zOaj:
      /*!******************************************************!*\
  !*** ./libs/sample/perfect-negotiation/src/index.ts ***!
  \******************************************************/
      /*! exports provided: PerfectNegotiationComponent, PerfectNegotiationModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _lib_perfect_negotiation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./lib/perfect-negotiation.component */ 'URWb'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PerfectNegotiationComponent',
          function () {
            return _lib_perfect_negotiation_component__WEBPACK_IMPORTED_MODULE_0__[
              'PerfectNegotiationComponent'
            ]
          }
        )

        /* harmony import */ var _lib_perfect_negotiation_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./lib/perfect-negotiation.module */ '5KNM'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PerfectNegotiationModule',
          function () {
            return _lib_perfect_negotiation_module__WEBPACK_IMPORTED_MODULE_1__[
              'PerfectNegotiationModule'
            ]
          }
        )

        /***/
      },
  },
])
//# sourceMappingURL=quertc-perfect-negotiation.js.map
