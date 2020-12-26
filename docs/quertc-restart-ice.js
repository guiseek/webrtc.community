;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['quertc-restart-ice'],
  {
    /***/ LzEj:
      /*!******************************************************************!*\
  !*** ./libs/sample/restart-ice/src/lib/restart-ice.component.ts ***!
  \******************************************************************/
      /*! exports provided: RestartIceComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'RestartIceComponent',
          function () {
            return RestartIceComponent
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _quertc_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @quertc/core */ 'Huv7'
        )
        /* harmony import */ var _quertc_overlog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @quertc/overlog */ 't7Mq'
        )
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs */ 'qCKp'
        )
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! rxjs/operators */ 'kU1M'
        )
        /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/material/card */ 'Wp6s'
        )
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/common */ 'ofXK'
        )
        /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/material/toolbar */ '/t3+'
        )
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @angular/material/button */ 'bTqV'
        )

        const _c0 = ['localVideo']
        const _c1 = ['remoteVideo']
        function RestartIceComponent_ng_container_5_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵelementContainerStart'
            ](0)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              1,
              'div'
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2, ' ID: ')
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              3,
              'span',
              20
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](4)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              5,
              'div'
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](6, ' IP: ')
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              7,
              'span',
              20
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](8)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](9, ' Port: ')
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              10,
              'span',
              20
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](11)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
              12,
              ' Protocol: '
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              13,
              'span',
              20
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](14)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵelementContainerEnd'
            ]()
          }
          if (rf & 2) {
            const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵnextContext'
            ]()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](
              ctx_r0.localCandidate.id
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](
              ctx_r0.localCandidate.ip
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](
              ctx_r0.localCandidate.port
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](
              ctx_r0.localCandidate.protocol
            )
          }
        }
        function RestartIceComponent_ng_template_6_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              0,
              'span',
              21
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
              1,
              'Not connected'
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
          }
        }
        function RestartIceComponent_ng_container_14_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵelementContainerStart'
            ](0)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              1,
              'div'
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2, ' ID: ')
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              3,
              'span',
              20
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](4)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              5,
              'div'
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](6, ' IP: ')
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              7,
              'span',
              20
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](8)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](9, ' Port: ')
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              10,
              'span',
              20
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](11)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
              12,
              ' Protocol: '
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              13,
              'span',
              20
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](14)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵelementContainerEnd'
            ]()
          }
          if (rf & 2) {
            const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵnextContext'
            ]()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](
              ctx_r4.remoteCandidate.id
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](
              ctx_r4.remoteCandidate.ip
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](
              ctx_r4.remoteCandidate.port
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](
              ctx_r4.remoteCandidate.protocol
            )
          }
        }
        function RestartIceComponent_ng_template_15_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              0,
              'span',
              21
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
              1,
              'Not connected'
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
          }
        }
        const fromLoadedEvent = (element) => {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__['fromEvent'])(
            element,
            'loadedmetadata'
          )
        }
        const console = _quertc_core__WEBPACK_IMPORTED_MODULE_1__['Logger']
        class RestartIceComponent {
          constructor(overlog) {
            this.overlog = overlog
            this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__['Subject']()
            this.offerOptions = {
              offerToReceiveAudio: true,
              offerToReceiveVideo: true,
            }
            this._startButton = new rxjs__WEBPACK_IMPORTED_MODULE_3__[
              'BehaviorSubject'
            ](false)
            this.startButton$ = this._startButton.asObservable()
            this._callButton = new rxjs__WEBPACK_IMPORTED_MODULE_3__[
              'BehaviorSubject'
            ](true)
            this.callButton$ = this._callButton.asObservable()
            this._restartButton = new rxjs__WEBPACK_IMPORTED_MODULE_3__[
              'BehaviorSubject'
            ](true)
            this.restartButton$ = this._restartButton.asObservable()
            this._hangupButton = new rxjs__WEBPACK_IMPORTED_MODULE_3__[
              'BehaviorSubject'
            ](true)
            this.hangupButton$ = this._hangupButton.asObservable()
            this.getName = (pc) => {
              return pc === this.pc1 ? 'pc1' : 'pc2'
            }
            this.getOtherPc = (pc) => {
              return pc === this.pc1 ? this.pc2 : this.pc1
            }
            this.gotStream = (stream) => {
              console.log('Received local stream')
              this.localVideo.srcObject = stream
              this.localStream = stream
              this._callButton.next(false)
            }
            this.start = () => {
              console.log('Requesting local stream')
              this._startButton.next(true)
              navigator.mediaDevices
                .getUserMedia({
                  audio: true,
                  video: true,
                })
                .then(this.gotStream)
                .catch((e) => alert(`getUserMedia() error: ${e.name}`))
            }
            // Simula um reinício de gelo.
            this.restart = () => {
              this._restartButton.next(true)
              this.offerOptions.iceRestart = true
              this.overlog.show({ text: 'pc1 createOffer restart' })
              this.pc1
                .createOffer(this.offerOptions)
                .then(
                  this.onCreateOfferSuccess,
                  this.onCreateSessionDescriptionError
                )
            }
            this.call = () => {
              this._callButton.next(true)
              this._hangupButton.next(false)
              console.log('Starting call')
              this.startTime = window.performance.now()
              const videoTracks = this.localStream.getVideoTracks()
              const audioTracks = this.localStream.getAudioTracks()
              if (videoTracks.length > 0) {
                console.log(`Using video device: ${videoTracks[0].label}`)
              }
              if (audioTracks.length > 0) {
                console.log(`Using audio device: ${audioTracks[0].label}`)
              }
              this.createPeers()
              this.pc2.onicecandidate = (e) => this.onIceCandidate(this.pc2, e)
              this.pc1.oniceconnectionstatechange = (e) => {
                this.onIceStateChange(this.pc1, e)
                if (
                  this.pc1 &&
                  this.pc1.iceConnectionState ===
                    _quertc_core__WEBPACK_IMPORTED_MODULE_1__['PeerState']
                      .Connected
                ) {
                  this._restartButton.next(false)
                }
              }
              this.pc2.oniceconnectionstatechange = (e) =>
                this.onIceStateChange(this.pc2, e)
              this.pc2.ontrack = this.gotRemoteStream
              this.localStream
                .getTracks()
                .forEach((track) => this.pc1.addTrack(track, this.localStream))
              console.log('Added local stream to this.pc1')
              this.overlog.show({ text: 'this.pc1 createOffer start' })
              this.pc1
                .createOffer(this.offerOptions)
                .then(
                  this.onCreateOfferSuccess,
                  this.onCreateSessionDescriptionError
                )
            }
            this.onCreateSessionDescriptionError = (error) => {
              console.log(
                `Failed to create session description: ${error.toString()}`
              )
            }
            this.onCreateOfferSuccess = (desc) => {
              console.log(`Offer from pc1\n${desc.sdp}`)
              console.log('pc1 setLocalDescription start')
              this.pc1
                .setLocalDescription(desc)
                .then(
                  () => this.onSetLocalSuccess(this.pc1),
                  this.onSetSessionDescriptionError
                )
              console.log('pc2 setRemoteDescription start')
              this.pc2
                .setRemoteDescription(desc)
                .then(
                  () => this.onSetRemoteSuccess(this.pc2),
                  this.onSetSessionDescriptionError
                )
              console.log('pc2 createAnswer start')
              // Como o lado 'remoto' não tem fluxo de mídia, precisamos
              // para passar as restrições certas para que ele
              // aceitar a oferta de áudio e vídeo.
              this.pc2
                .createAnswer()
                .then(
                  this.onCreateAnswerSuccess,
                  this.onCreateSessionDescriptionError
                )
            }
            this.onSetLocalSuccess = (pc) => {
              console.log(`${this.getName(pc)} setLocalDescription complete`)
            }
            this.onSetRemoteSuccess = (pc) => {
              console.log(`${this.getName(pc)} setRemoteDescription complete`)
            }
            this.onSetSessionDescriptionError = (error) => {
              console.log(
                `Failed to set session description: ${error.toString()}`
              )
            }
            this.gotRemoteStream = (e) => {
              if (this.remoteVideo.srcObject !== e.streams[0]) {
                this.remoteVideo.srcObject = e.streams[0]
                this.overlog.show({ text: 'pc2 received remote stream' })
              }
            }
            this.onCreateAnswerSuccess = (desc) => {
              console.log(`Answer from pc2:\n${desc.sdp}`)
              console.log('pc2 setLocalDescription start')
              this.pc2
                .setLocalDescription(desc)
                .then(
                  () => this.onSetLocalSuccess(this.pc2),
                  this.onSetSessionDescriptionError
                )
              console.log('pc1 setRemoteDescription start')
              this.pc1
                .setRemoteDescription(desc)
                .then(
                  () => this.onSetRemoteSuccess(this.pc1),
                  this.onSetSessionDescriptionError
                )
            }
            this.onIceCandidate = (pc, event) => {
              if (event.candidate) {
                this.getOtherPc(pc)
                  .addIceCandidate(event.candidate)
                  .then(
                    () => this.onAddIceCandidateSuccess(pc),
                    (err) => this.onAddIceCandidateError(pc, err)
                  )
                console.log(
                  `${this.getName(pc)} ICE candidate: \n${
                    event.candidate ? event.candidate.candidate : '(null)'
                  }`
                )
              }
            }
            this.onAddIceCandidateSuccess = (pc) => {
              console.log(`${this.getName(pc)} addIceCandidate success`)
            }
            this.onAddIceCandidateError = (pc, error) => {
              console.log(
                `${this.getName(
                  pc
                )} failed to add ICE Candidate: ${error.toString()}`
              )
            }
            this.onIceStateChange = (pc, event) => {
              if (pc) {
                console.log(
                  `${this.getName(pc)} ICE state: ${pc.iceConnectionState}`
                )
                console.log('ICE state change event: ', event)
                // TODO: livre-se disso em favor de http://w3c.github.io/webrtc-pc/#widl-RTCIceTransport-onselectedcandidatepairchange
                if (
                  pc.iceConnectionState ===
                    _quertc_core__WEBPACK_IMPORTED_MODULE_1__['PeerState']
                      .Connected ||
                  pc.iceConnectionState ===
                    _quertc_core__WEBPACK_IMPORTED_MODULE_1__['PeerState']
                      .Completed
                ) {
                  this.checkStats(pc)
                }
              }
            }
            this.checkStats = (pc) => {
              pc.getStats(null).then((results) => {
                // descobrir o ip do par
                let activeCandidatePair = null
                let remoteCandidate = {}
                // Procure o par candidato, primeiro o caminho da especificação.
                results.forEach((report) => {
                  if (report.type === 'transport') {
                    activeCandidatePair = results.get(
                      report.selectedCandidatePairId
                    )
                  }
                })
                // Fallback para Firefox.
                if (!activeCandidatePair) {
                  results.forEach((report) => {
                    if (
                      report.type === 'candidate-pair' &&
                      report.state === 'succeeded' &&
                      report.selected
                    ) {
                      activeCandidatePair = report
                    }
                  })
                }
                if (
                  activeCandidatePair &&
                  activeCandidatePair.remoteCandidateId
                ) {
                  results.forEach((report) => {
                    if (
                      report.type === 'remote-candidate' &&
                      report.id === activeCandidatePair.remoteCandidateId
                    ) {
                      remoteCandidate = report
                    }
                  })
                }
                if (remoteCandidate && remoteCandidate.id) {
                  if (pc === this.pc1) {
                    this.localCandidate = remoteCandidate
                  } else {
                    this.remoteCandidate = remoteCandidate
                  }
                }
              })
            }
            this.createPeers()
          }
          ngAfterViewInit() {
            this.localVideo = this.localVideoRef.nativeElement
            this.remoteVideo = this.remoteVideoRef.nativeElement
            fromLoadedEvent(this.localVideo)
              .pipe(
                Object(
                  rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['takeUntil']
                )(this.subject$)
              )
              .subscribe(({ target }) => {
                console.log(
                  `Local video: ${target.videoWidth}x${target.videoHeight}px`
                )
              })
            fromLoadedEvent(this.remoteVideo)
              .pipe(
                Object(
                  rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['takeUntil']
                )(this.subject$)
              )
              .subscribe(({ target }) => {
                console.log(
                  `Remote video: ${target.videoWidth}x${target.videoHeight}px`
                )
              })
            this.remoteVideo.onresize = () => {
              console.log(
                `Remote video size changed to ${this.remoteVideo.videoWidth}x${this.remoteVideo.videoHeight}px`
              )
              // Usaremos o primeiro retorno de chamada do tamanho como uma
              // indicação de que o vídeo começou a ser reproduzido.
              if (this.startTime) {
                const elapsedTime = window.performance.now() - this.startTime
                console.log(`Setup time: ${elapsedTime.toFixed(3)}ms`)
                this.startTime = null
                // Execute essas funções novamente para obter os relatórios getStats()
                // com o tipo candidatePair e preencher os elementos de identificação do candidato.
                this.checkStats(this.pc1)
                this.checkStats(this.pc2)
              }
            }
          }
          createPeers() {
            const servers = {
              iceServers: [],
            }
            this.pc1 = this.pc1 = new RTCPeerConnection(servers)
            console.log('Created local peer connection object this.pc1')
            this.pc1.onicecandidate = (e) => this.onIceCandidate(this.pc1, e)
            this.pc2 = this.pc2 = new RTCPeerConnection(servers)
            console.log('Created remote peer connection object this.pc2')
          }
          hangup() {
            this.overlog.show({ text: 'Ending call' })
            this.pc1.close()
            this.pc2.close()
            Object.defineProperties(this.pc1, {})
            Object.defineProperties(this.pc2, {})
            this._hangupButton.next(true)
            this._restartButton.next(true)
            this._callButton.next(false)
          }
          ngOnDestroy() {
            if (this.localStream) {
              this.localStream.getTracks().forEach((t) => t.stop())
            }
          }
        }
        RestartIceComponent.ɵfac = function RestartIceComponent_Factory(t) {
          return new (t || RestartIceComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _quertc_overlog__WEBPACK_IMPORTED_MODULE_2__['OverlogService']
            )
          )
        }
        RestartIceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineComponent'
        ]({
          type: RestartIceComponent,
          selectors: [['quertc-restart-ice']],
          viewQuery: function RestartIceComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵviewQuery'](
                _c0,
                true
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵviewQuery'](
                _c1,
                true
              )
            }
            if (rf & 2) {
              let _t
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵqueryRefresh'](
                (_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  'ɵɵloadQuery'
                ]())
              ) && (ctx.localVideoRef = _t.first)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵqueryRefresh'](
                (_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  'ɵɵloadQuery'
                ]())
              ) && (ctx.remoteVideoRef = _t.first)
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
          template: function RestartIceComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                0,
                'div',
                0
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                1,
                'mat-card'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                2,
                'label',
                1
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                3,
                'Local candidate'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                4,
                'p',
                2
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                5,
                RestartIceComponent_ng_container_5_Template,
                15,
                4,
                'ng-container',
                3
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                6,
                RestartIceComponent_ng_template_6_Template,
                2,
                0,
                'ng-template',
                null,
                4,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  'ɵɵtemplateRefExtractor'
                ]
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
                8,
                'video',
                5,
                6
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                10,
                'mat-card'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                11,
                'label',
                1
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                12,
                'Remote candidate '
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                13,
                'p',
                7
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                14,
                RestartIceComponent_ng_container_14_Template,
                15,
                4,
                'ng-container',
                3
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                15,
                RestartIceComponent_ng_template_15_Template,
                2,
                0,
                'ng-template',
                null,
                8,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  'ɵɵtemplateRefExtractor'
                ]
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
                17,
                'video',
                9,
                10
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                19,
                'mat-toolbar',
                11
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                20,
                'button',
                12,
                13
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function RestartIceComponent_Template_button_click_20_listener() {
                  return ctx.start()
                }
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](22, 'async')
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                23,
                ' Start '
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                24,
                'button',
                14,
                15
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function RestartIceComponent_Template_button_click_24_listener() {
                  return ctx.call()
                }
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](26, 'async')
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](27, ' Call ')
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                28,
                'button',
                16,
                17
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function RestartIceComponent_Template_button_click_28_listener() {
                  return ctx.restart()
                }
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](30, 'async')
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                31,
                ' Restart ICE '
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                32,
                'button',
                18,
                19
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function RestartIceComponent_Template_button_click_32_listener() {
                  return ctx.hangup()
                }
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](34, 'async')
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                35,
                ' Hang Up '
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            }
            if (rf & 2) {
              const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                'ɵɵreference'
              ](7)
              const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                'ɵɵreference'
              ](16)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                ctx.localCandidate
              )('ngIfElse', _r1)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](9)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                ctx.remoteCandidate
              )('ngIfElse', _r5)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](6)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'disabled',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](
                  22,
                  8,
                  ctx.startButton$
                )
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'disabled',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](
                  26,
                  10,
                  ctx.callButton$
                )
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'disabled',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](
                  30,
                  12,
                  ctx.restartButton$
                )
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'disabled',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](
                  34,
                  14,
                  ctx.hangupButton$
                )
              )
            }
          },
          directives: [
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__['MatCard'],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__['MatCardTitle'],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__[
              'MatCardSubtitle'
            ],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__['NgIf'],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__['MatCardImage'],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__[
              'MatToolbar'
            ],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__['MatButton'],
          ],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__['AsyncPipe']],
          styles: [
            '[_nghost-%COMP%] {\n  display: block;\n  padding-bottom: 64px;\n  width: 100%;\n  --width: 100%;\n}\n\nvideo[_ngcontent-%COMP%] {\n  width: var(--width);\n  height: calc(var(--width) * 0.75);\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: 0;\n}\n\n.glare[_ngcontent-%COMP%] {\n  color: black;\n}\n\ndiv#video[_ngcontent-%COMP%] {\n  display: flex;\n  row-gap: 8px;\n  -moz-column-gap: 8px;\n       column-gap: 8px;\n  padding: 8px;\n}\n\ndiv#video[_ngcontent-%COMP%]    > .mat-card[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n  width: calc(50% - 32px);\n}\n\ndiv#video[_ngcontent-%COMP%]    > .mat-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\ndiv#video[_ngcontent-%COMP%]    > .mat-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n\ndiv#video[_ngcontent-%COMP%]    > .mat-card[_ngcontent-%COMP%]    > video[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media screen and (max-width: 400px) {\n  button[_ngcontent-%COMP%] {\n    margin: 0 11px 10px 0;\n  }\n}\n\n@media screen and (max-width: 720px) {\n  div#video[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  div#video[_ngcontent-%COMP%]    > .mat-card[_ngcontent-%COMP%] {\n    width: calc(100% - 26px);\n    flex: 1;\n  }\n  div#video[_ngcontent-%COMP%]    > .mat-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 90%;\n    flex-direction: column;\n  }\n}\n\n.toolbar-footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Jlc3RhcnQtaWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBREE7RUFDRSxxQkFBQTtFQVFBLG1CQUFBO0VBQ0EsdUJBQUE7QUFIRjs7QUFMRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQU9KOztBQU5JO0VBQ0Usa0JBQUE7QUFRTjs7QUFIRTtFQUNFLFdBQUE7QUFLSjs7QUFEQTtFQUNFO0lBQ0UscUJBQUE7RUFJRjtBQUNGOztBQURBO0VBQ0U7SUFDRSxzQkFBQTtFQUdGO0VBRkU7SUFDRSx3QkFBQTtJQUNBLE9BQUE7RUFJSjtFQUhJO0lBQ0UsY0FBQTtJQUNBLHNCQUFBO0VBS047QUFDRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUFFRiIsImZpbGUiOiJyZXN0YXJ0LWljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctYm90dG9tOiA2NHB4O1xuICB3aWR0aDogMTAwJTtcbiAgLS13aWR0aDogMTAwJTtcbn1cblxudmlkZW8ge1xuICB3aWR0aDogdmFyKC0td2lkdGgpO1xuICBoZWlnaHQ6IGNhbGModmFyKC0td2lkdGgpICogMC43NSk7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXJnaW46IDA7XG59XG4uZ2xhcmUge1xuICBjb2xvcjogYmxhY2s7XG59XG5kaXYjdmlkZW8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICByb3ctZ2FwOiA4cHg7XG4gIGNvbHVtbi1nYXA6IDhweDtcbiAgcGFkZGluZzogOHB4O1xufVxuZGl2I3ZpZGVvID4gLm1hdC1jYXJkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZGl2IHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICB9XG4gIH1cbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gMzJweCk7XG4gID4gdmlkZW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIGJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwIDExcHggMTBweCAwO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIGRpdiN2aWRlbyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICA+IC5tYXQtY2FyZCB7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjZweCk7XG4gICAgICBmbGV4OiAxO1xuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udG9vbGJhci1mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */',
          ],
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            RestartIceComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'quertc-restart-ice',
                    templateUrl: './restart-ice.component.html',
                    styleUrls: ['./restart-ice.component.scss'],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _quertc_overlog__WEBPACK_IMPORTED_MODULE_2__[
                      'OverlogService'
                    ],
                },
              ]
            },
            {
              localVideoRef: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'],
                  args: ['localVideo'],
                },
              ],
              remoteVideoRef: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'],
                  args: ['remoteVideo'],
                },
              ],
            }
          )
        })()

        /***/
      },

    /***/ R3tv:
      /*!**********************************************!*\
  !*** ./libs/sample/restart-ice/src/index.ts ***!
  \**********************************************/
      /*! exports provided: RestartIceComponent, RestartIceModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _lib_restart_ice_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./lib/restart-ice.component */ 'LzEj'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'RestartIceComponent',
          function () {
            return _lib_restart_ice_component__WEBPACK_IMPORTED_MODULE_0__[
              'RestartIceComponent'
            ]
          }
        )

        /* harmony import */ var _lib_restart_ice_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./lib/restart-ice.module */ 'S1bc'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'RestartIceModule',
          function () {
            return _lib_restart_ice_module__WEBPACK_IMPORTED_MODULE_1__[
              'RestartIceModule'
            ]
          }
        )

        /***/
      },

    /***/ S1bc:
      /*!***************************************************************!*\
  !*** ./libs/sample/restart-ice/src/lib/restart-ice.module.ts ***!
  \***************************************************************/
      /*! exports provided: RestartIceModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'RestartIceModule',
          function () {
            return RestartIceModule
          }
        )
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/router */ 'tyNb'
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */ 'ofXK'
        )
        /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/material/card */ 'Wp6s'
        )
        /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/material/toolbar */ '/t3+'
        )
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/material/button */ 'bTqV'
        )
        /* harmony import */ var _restart_ice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./restart-ice.component */ 'LzEj'
        )

        class RestartIceModule {}
        RestartIceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          'ɵɵdefineNgModule'
        ]({ type: RestartIceModule })
        RestartIceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          'ɵɵdefineInjector'
        ]({
          factory: function RestartIceModule_Factory(t) {
            return new (t || RestartIceModule)()
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_2__['CommonModule'],
              _angular_material_card__WEBPACK_IMPORTED_MODULE_3__[
                'MatCardModule'
              ],
              _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__[
                'MatToolbarModule'
              ],
              _angular_material_button__WEBPACK_IMPORTED_MODULE_5__[
                'MatButtonModule'
              ],
              _angular_router__WEBPACK_IMPORTED_MODULE_0__[
                'RouterModule'
              ].forChild([
                {
                  path: '',
                  component:
                    _restart_ice_component__WEBPACK_IMPORTED_MODULE_6__[
                      'RestartIceComponent'
                    ],
                },
              ]),
            ],
          ],
        })
        ;(function () {
          ;(typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__[
              'ɵɵsetNgModuleScope'
            ](RestartIceModule, {
              declarations: [
                _restart_ice_component__WEBPACK_IMPORTED_MODULE_6__[
                  'RestartIceComponent'
                ],
              ],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__['CommonModule'],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__[
                  'MatCardModule'
                ],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__[
                  'MatToolbarModule'
                ],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__[
                  'MatButtonModule'
                ],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__['RouterModule'],
              ],
            })
        })()
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵsetClassMetadata'](
            RestartIceModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['NgModule'],
                args: [
                  {
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_2__[
                        'CommonModule'
                      ],
                      _angular_material_card__WEBPACK_IMPORTED_MODULE_3__[
                        'MatCardModule'
                      ],
                      _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__[
                        'MatToolbarModule'
                      ],
                      _angular_material_button__WEBPACK_IMPORTED_MODULE_5__[
                        'MatButtonModule'
                      ],
                      _angular_router__WEBPACK_IMPORTED_MODULE_0__[
                        'RouterModule'
                      ].forChild([
                        {
                          path: '',
                          component:
                            _restart_ice_component__WEBPACK_IMPORTED_MODULE_6__[
                              'RestartIceComponent'
                            ],
                        },
                      ]),
                    ],
                    declarations: [
                      _restart_ice_component__WEBPACK_IMPORTED_MODULE_6__[
                        'RestartIceComponent'
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
  },
])
//# sourceMappingURL=quertc-restart-ice.js.map
