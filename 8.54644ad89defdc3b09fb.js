(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{R3tv:function(t,e,i){"use strict";i.r(e),i.d(e,"RestartIceComponent",function(){return R}),i.d(e,"RestartIceModule",function(){return x});var o=i("Huv7"),c=i("t7Mq"),n=i("xgIS"),s=i("XNiG"),a=i("2Vo4"),r=i("1G5W"),d=i("fXoL"),l=i("Wp6s"),h=i("ofXK"),p=i("/t3+"),b=i("bTqV");const g=["localVideo"],m=["remoteVideo"];function u(t,e){if(1&t&&(d.Pb(0),d.Rb(1,"div"),d.Ac(2," ID: "),d.Rb(3,"span",20),d.Ac(4),d.Qb(),d.Qb(),d.Rb(5,"div"),d.Ac(6," IP: "),d.Rb(7,"span",20),d.Ac(8),d.Qb(),d.Ac(9," Port: "),d.Rb(10,"span",20),d.Ac(11),d.Qb(),d.Ac(12," Protocol: "),d.Rb(13,"span",20),d.Ac(14),d.Qb(),d.Qb(),d.Ob()),2&t){const t=d.cc();d.zb(4),d.Bc(t.localCandidate.id),d.zb(4),d.Bc(t.localCandidate.ip),d.zb(3),d.Bc(t.localCandidate.port),d.zb(3),d.Bc(t.localCandidate.protocol)}}function f(t,e){1&t&&(d.Rb(0,"span",21),d.Ac(1,"Not connected"),d.Qb())}function C(t,e){if(1&t&&(d.Pb(0),d.Rb(1,"div"),d.Ac(2," ID: "),d.Rb(3,"span",20),d.Ac(4),d.Qb(),d.Qb(),d.Rb(5,"div"),d.Ac(6," IP: "),d.Rb(7,"span",20),d.Ac(8),d.Qb(),d.Ac(9," Port: "),d.Rb(10,"span",20),d.Ac(11),d.Qb(),d.Ac(12," Protocol: "),d.Rb(13,"span",20),d.Ac(14),d.Qb(),d.Qb(),d.Ob()),2&t){const t=d.cc();d.zb(4),d.Bc(t.remoteCandidate.id),d.zb(4),d.Bc(t.remoteCandidate.ip),d.zb(3),d.Bc(t.remoteCandidate.port),d.zb(3),d.Bc(t.remoteCandidate.protocol)}}function v(t,e){1&t&&(d.Rb(0,"span",21),d.Ac(1,"Not connected"),d.Qb())}const S=t=>Object(n.a)(t,"loadedmetadata"),O=o.b;let R=(()=>{class t{constructor(t){this.overlog=t,this.subject$=new s.a,this.offerOptions={offerToReceiveAudio:!0,offerToReceiveVideo:!0},this._startButton=new a.a(!1),this.startButton$=this._startButton.asObservable(),this._callButton=new a.a(!0),this.callButton$=this._callButton.asObservable(),this._restartButton=new a.a(!0),this.restartButton$=this._restartButton.asObservable(),this._hangupButton=new a.a(!0),this.hangupButton$=this._hangupButton.asObservable(),this.getName=t=>t===this.pc1?"pc1":"pc2",this.getOtherPc=t=>t===this.pc1?this.pc2:this.pc1,this.gotStream=t=>{O.log("Received local stream"),this.localVideo.srcObject=t,this.localStream=t,this._callButton.next(!1)},this.start=()=>{O.log("Requesting local stream"),this._startButton.next(!0),navigator.mediaDevices.getUserMedia({audio:!0,video:!0}).then(this.gotStream).catch(t=>alert("getUserMedia() error: "+t.name))},this.restart=()=>{this._restartButton.next(!0),this.offerOptions.iceRestart=!0,this.overlog.show({text:"pc1 createOffer restart"}),this.pc1.createOffer(this.offerOptions).then(this.onCreateOfferSuccess,this.onCreateSessionDescriptionError)},this.call=()=>{this._callButton.next(!0),this._hangupButton.next(!1),O.log("Starting call"),this.startTime=window.performance.now();const t=this.localStream.getVideoTracks(),e=this.localStream.getAudioTracks();t.length>0&&O.log("Using video device: "+t[0].label),e.length>0&&O.log("Using audio device: "+e[0].label),this.createPeers(),this.pc2.onicecandidate=t=>this.onIceCandidate(this.pc2,t),this.pc1.oniceconnectionstatechange=t=>{this.onIceStateChange(this.pc1,t),this.pc1&&this.pc1.iceConnectionState===o.d.Connected&&this._restartButton.next(!1)},this.pc2.oniceconnectionstatechange=t=>this.onIceStateChange(this.pc2,t),this.pc2.ontrack=this.gotRemoteStream,this.localStream.getTracks().forEach(t=>this.pc1.addTrack(t,this.localStream)),O.log("Added local stream to this.pc1"),this.overlog.show({text:"this.pc1 createOffer start"}),this.pc1.createOffer(this.offerOptions).then(this.onCreateOfferSuccess,this.onCreateSessionDescriptionError)},this.onCreateSessionDescriptionError=t=>{O.log("Failed to create session description: "+t.toString())},this.onCreateOfferSuccess=t=>{O.log("Offer from pc1\n"+t.sdp),O.log("pc1 setLocalDescription start"),this.pc1.setLocalDescription(t).then(()=>this.onSetLocalSuccess(this.pc1),this.onSetSessionDescriptionError),O.log("pc2 setRemoteDescription start"),this.pc2.setRemoteDescription(t).then(()=>this.onSetRemoteSuccess(this.pc2),this.onSetSessionDescriptionError),O.log("pc2 createAnswer start"),this.pc2.createAnswer().then(this.onCreateAnswerSuccess,this.onCreateSessionDescriptionError)},this.onSetLocalSuccess=t=>{O.log(this.getName(t)+" setLocalDescription complete")},this.onSetRemoteSuccess=t=>{O.log(this.getName(t)+" setRemoteDescription complete")},this.onSetSessionDescriptionError=t=>{O.log("Failed to set session description: "+t.toString())},this.gotRemoteStream=t=>{this.remoteVideo.srcObject!==t.streams[0]&&(this.remoteVideo.srcObject=t.streams[0],this.overlog.show({text:"pc2 received remote stream"}))},this.onCreateAnswerSuccess=t=>{O.log("Answer from pc2:\n"+t.sdp),O.log("pc2 setLocalDescription start"),this.pc2.setLocalDescription(t).then(()=>this.onSetLocalSuccess(this.pc2),this.onSetSessionDescriptionError),O.log("pc1 setRemoteDescription start"),this.pc1.setRemoteDescription(t).then(()=>this.onSetRemoteSuccess(this.pc1),this.onSetSessionDescriptionError)},this.onIceCandidate=(t,e)=>{e.candidate&&(this.getOtherPc(t).addIceCandidate(e.candidate).then(()=>this.onAddIceCandidateSuccess(t),e=>this.onAddIceCandidateError(t,e)),O.log(`${this.getName(t)} ICE candidate: \n${e.candidate?e.candidate.candidate:"(null)"}`))},this.onAddIceCandidateSuccess=t=>{O.log(this.getName(t)+" addIceCandidate success")},this.onAddIceCandidateError=(t,e)=>{O.log(`${this.getName(t)} failed to add ICE Candidate: ${e.toString()}`)},this.onIceStateChange=(t,e)=>{t&&(O.log(`${this.getName(t)} ICE state: ${t.iceConnectionState}`),O.log("ICE state change event: ",e),t.iceConnectionState!==o.d.Connected&&t.iceConnectionState!==o.d.Completed||this.checkStats(t))},this.checkStats=t=>{t.getStats(null).then(e=>{let i=null,o={};e.forEach(t=>{"transport"===t.type&&(i=e.get(t.selectedCandidatePairId))}),i||e.forEach(t=>{"candidate-pair"===t.type&&"succeeded"===t.state&&t.selected&&(i=t)}),i&&i.remoteCandidateId&&e.forEach(t=>{"remote-candidate"===t.type&&t.id===i.remoteCandidateId&&(o=t)}),o&&o.id&&(t===this.pc1?this.localCandidate=o:this.remoteCandidate=o)})},this.createPeers()}ngAfterViewInit(){this.localVideo=this.localVideoRef.nativeElement,this.remoteVideo=this.remoteVideoRef.nativeElement,S(this.localVideo).pipe(Object(r.a)(this.subject$)).subscribe(({target:t})=>{O.log(`Local video: ${t.videoWidth}x${t.videoHeight}px`)}),S(this.remoteVideo).pipe(Object(r.a)(this.subject$)).subscribe(({target:t})=>{O.log(`Remote video: ${t.videoWidth}x${t.videoHeight}px`)}),this.remoteVideo.onresize=()=>{if(O.log(`Remote video size changed to ${this.remoteVideo.videoWidth}x${this.remoteVideo.videoHeight}px`),this.startTime){const t=window.performance.now()-this.startTime;O.log(`Setup time: ${t.toFixed(3)}ms`),this.startTime=null,this.checkStats(this.pc1),this.checkStats(this.pc2)}}}createPeers(){const t={iceServers:[]};this.pc1=this.pc1=new RTCPeerConnection(t),O.log("Created local peer connection object this.pc1"),this.pc1.onicecandidate=t=>this.onIceCandidate(this.pc1,t),this.pc2=this.pc2=new RTCPeerConnection(t),O.log("Created remote peer connection object this.pc2")}hangup(){this.overlog.show({text:"Ending call"}),this.pc1.close(),this.pc2.close(),Object.defineProperties(this.pc1,{}),Object.defineProperties(this.pc2,{}),this._hangupButton.next(!0),this._restartButton.next(!0),this._callButton.next(!1)}ngOnDestroy(){this.localStream&&this.localStream.getTracks().forEach(t=>t.stop())}}return t.\u0275fac=function(e){return new(e||t)(d.Lb(c.b))},t.\u0275cmp=d.Fb({type:t,selectors:[["comm-restart-ice"]],viewQuery:function(t,e){if(1&t&&(d.Dc(g,!0),d.Dc(m,!0)),2&t){let t;d.lc(t=d.Zb())&&(e.localVideoRef=t.first),d.lc(t=d.Zb())&&(e.remoteVideoRef=t.first)}},decls:36,vars:16,consts:[["id","video"],["mat-card-title","","for","localCandidate"],["mat-card-subtitle","","id","localCandidate"],[4,"ngIf","ngIfElse"],["localOff",""],["mat-card-image","","id","localVideo","playsinline","","autoplay","","muted",""],["localVideo",""],["mat-card-subtitle","","id","remoteCandidate"],["remoteOff",""],["mat-card-image","","id","remoteVideo","playsinline","","autoplay","","muted",""],["remoteVideo",""],["color","accent",1,"toolbar-footer"],["mat-button","","id","startButton",3,"disabled","click"],["startButton",""],["mat-button","","id","callButton",3,"disabled","click"],["callButton",""],["mat-button","","id","restartButton",3,"disabled","click"],["restartButton",""],["mat-button","","id","hangupButton",3,"disabled","click"],["hangupButton",""],[1,"glare"],[1,"mat-hint"]],template:function(t,e){if(1&t&&(d.Rb(0,"div",0),d.Rb(1,"mat-card"),d.Rb(2,"label",1),d.Ac(3,"Local candidate"),d.Qb(),d.Rb(4,"p",2),d.yc(5,u,15,4,"ng-container",3),d.yc(6,f,2,0,"ng-template",null,4,d.zc),d.Qb(),d.Mb(8,"video",5,6),d.Qb(),d.Rb(10,"mat-card"),d.Rb(11,"label",1),d.Ac(12,"Remote candidate "),d.Qb(),d.Rb(13,"p",7),d.yc(14,C,15,4,"ng-container",3),d.yc(15,v,2,0,"ng-template",null,8,d.zc),d.Qb(),d.Mb(17,"video",9,10),d.Qb(),d.Qb(),d.Rb(19,"mat-toolbar",11),d.Rb(20,"button",12,13),d.Yb("click",function(){return e.start()}),d.dc(22,"async"),d.Ac(23," Start "),d.Qb(),d.Rb(24,"button",14,15),d.Yb("click",function(){return e.call()}),d.dc(26,"async"),d.Ac(27," Call "),d.Qb(),d.Rb(28,"button",16,17),d.Yb("click",function(){return e.restart()}),d.dc(30,"async"),d.Ac(31," Restart ICE "),d.Qb(),d.Rb(32,"button",18,19),d.Yb("click",function(){return e.hangup()}),d.dc(34,"async"),d.Ac(35," Hang Up "),d.Qb(),d.Qb()),2&t){const t=d.mc(7),i=d.mc(16);d.zb(5),d.hc("ngIf",e.localCandidate)("ngIfElse",t),d.zb(9),d.hc("ngIf",e.remoteCandidate)("ngIfElse",i),d.zb(6),d.hc("disabled",d.ec(22,8,e.startButton$)),d.zb(4),d.hc("disabled",d.ec(26,10,e.callButton$)),d.zb(4),d.hc("disabled",d.ec(30,12,e.restartButton$)),d.zb(4),d.hc("disabled",d.ec(34,14,e.hangupButton$))}},directives:[l.a,l.f,l.e,h.l,l.c,p.a,b.b],pipes:[h.b],styles:["[_nghost-%COMP%]{display:block;padding-bottom:64px;width:100%;--width:100%}video[_ngcontent-%COMP%]{width:var(--width);height:calc(var(--width) * .75);-o-object-fit:cover;object-fit:cover;margin:0}.glare[_ngcontent-%COMP%]{color:#000}div#video[_ngcontent-%COMP%]{display:flex;row-gap:8px;-moz-column-gap:8px;column-gap:8px;padding:8px}div#video[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;width:calc(50% - 32px)}div#video[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;flex-direction:row}div#video[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-right:12px}div#video[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%] > video[_ngcontent-%COMP%]{width:100%}@media screen and (max-width:400px){button[_ngcontent-%COMP%]{margin:0 11px 10px 0}}@media screen and (max-width:720px){div#video[_ngcontent-%COMP%]{flex-direction:column}div#video[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%]{width:calc(100% - 26px);flex:1}div#video[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:90%;flex-direction:column}}.toolbar-footer[_ngcontent-%COMP%]{position:fixed;bottom:0;justify-content:center}"]}),t})();var w=i("tyNb");let x=(()=>{class t{}return t.\u0275mod=d.Jb({type:t}),t.\u0275inj=d.Ib({factory:function(e){return new(e||t)},imports:[[h.c,l.d,p.b,b.c,w.d.forChild([{path:"",component:R}])]]}),t})()}}]);