(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{zOaj:function(e,t,i){"use strict";i.r(t),i.d(t,"PerfectNegotiationComponent",function(){return v}),i.d(t,"PerfectNegotiationModule",function(){return P}),i.d(t,"PerfectNegotiation",function(){return d});var n=i("mrSG"),s=i("Huv7"),o=i("ikaO"),c=i("1G5W"),r=i("XNiG"),a=i("fXoL");let d=(()=>{class e{constructor(e,t){this.signaling=e,this.stream=t,this.destroy$=new r.a,this.makingOffer=!1,this.ignoreOffer=!1,this.isSettingRemoteAnswerPending=!1,this.offerOptions={offerToReceiveAudio:!0,offerToReceiveVideo:!0},this.start=()=>Object(n.a)(this,void 0,void 0,function*(){try{this.stream.currentStream=yield this.stream.getUserMedia();for(const e of this.stream.currentStream.getTracks())this.pc.addTrack(e,this.stream.currentStream);this.setVideo(this.selfView,[this.stream.currentStream]),this.selfView.muted=!0}catch(e){console.error(e)}})}ngAfterViewInit(){}makeOffer(e){return Object(n.a)(this,void 0,void 0,function*(){try{this.makingOffer=!0,yield this.pc.setLocalDescription(yield this.pc.createOffer(e)),this.pc.localDescription&&this.signaling.send({sender:this.sender,description:this.pc.localDescription})}catch(t){console.error(t)}finally{this.makingOffer=!1}})}afterViewComplete(){this.pc.addEventListener("icecandidate",({candidate:e})=>{e&&this.signaling.send({sender:this.sender,candidate:e})}),this.pc.addEventListener("negotiationneeded",()=>Object(n.a)(this,void 0,void 0,function*(){this.makeOffer(this.offerOptions)})),this.signaling.message$.pipe(Object(c.a)(this.destroy$)).subscribe(({sender:e,description:t,candidate:i})=>Object(n.a)(this,void 0,void 0,function*(){console.log("sender: ",e);try{if(t){const i=!this.makingOffer&&("stable"==this.pc.signalingState||this.isSettingRemoteAnswerPending),n=t.type==s.c.Offer&&!i;if(this.ignoreOffer=e===this.sender&&n,this.ignoreOffer)return;this.isSettingRemoteAnswerPending=t.type==s.c.Answer,yield this.pc.setRemoteDescription(t),this.isSettingRemoteAnswerPending=!1,t.type==s.c.Offer&&(yield this.pc.setLocalDescription(yield this.pc.createAnswer()),this.pc.localDescription&&this.signaling.send({description:this.pc.localDescription}))}else if(i)try{yield this.pc.addIceCandidate(i)}catch(n){if(!this.ignoreOffer)throw n}}catch(n){console.error(n)}}))}setVideo(e,[t]){e.srcObject||(e.srcObject=t)}hangup(){console.log("Ending call"),this.stream.currentStream.getTracks().forEach(e=>e.stop()),this.pc&&(this.pc.close(),Object.defineProperties(this.pc,{}))}ngOnDestroy(){this.hangup(),this.destroy$.next(),this.destroy$.complete()}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(s.e),a.Lb(o.b))},e.\u0275cmp=a.Fb({type:e,selectors:[["ng-component"]],decls:0,vars:0,template:function(e,t){},encapsulation:2}),e})();var l=i("MAu8"),h=i("ofXK"),f=i("Wp6s"),g=i("W8GM"),p=i("YVGP");const m=["selfView"],u=["remoteView"];function b(e,t){if(1&e&&(a.Qb(0,"div",7),a.Mb(1,"quertc-calling",8,9),a.cc(3,"async"),a.Pb()),2&e){const e=a.bc();a.zb(1),a.gc("active",!0===a.dc(3,1,e.active$))}}let v=(()=>{class e extends d{constructor(e,t){super(e,t),this.signaling=e,this.stream=t,this.active=new r.a,this.active$=this.active.asObservable(),this.restart=()=>Object(n.a)(this,void 0,void 0,function*(){this.offerOptions.iceRestart=!0,this.makeOffer(this.offerOptions)})}ngAfterViewInit(){this.sender=Object(l.b)(),this.selfView=this.selfViewRef.nativeElement,this.remoteView=this.remoteViewRef.nativeElement,this.pc=new RTCPeerConnection({iceServers:[{urls:"stun:stun.stunprotocol.org:3478"}]}),this.dc=this.pc.createDataChannel("channel"),this.dc.addEventListener("open",()=>{console.log("OPEN"),window.setTimeout(()=>{this.dc.send("allloooww")},3e3)}),this.dc.addEventListener("message",({data:e})=>console.log("MESSAGE 1: ",e)),this.dc.addEventListener("error",e=>console.log("ERROR: ",e)),this.dc.addEventListener("close",()=>console.log("CLOSE")),this.dc.addEventListener("bufferedamountlow",e=>console.log("BUFFER: ",e)),this.pc.addEventListener("datachannel",({channel:e})=>{const t=e;t.addEventListener("message",({data:e})=>{console.log("MESSAGE 2: ",e)}),t.addEventListener("open",()=>console.log("OPEN")),t.addEventListener("error",e=>console.log("ERROR: ",e)),t.addEventListener("close",()=>console.log("CLOSE")),this.receiver=t}),this.pc.addEventListener("track",({track:e,streams:t})=>{e.addEventListener("unmute",()=>{this.setVideo(this.remoteView,t),this.active.next(!0)})}),this.afterViewComplete(),this.start()}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(s.e),a.Lb(o.b))},e.\u0275cmp=a.Fb({type:e,selectors:[["quertc-perfect-negotiation"]],viewQuery:function(e,t){if(1&e&&(a.Cc(m,!0),a.Cc(u,!0)),2&e){let e;a.kc(e=a.Yb())&&(t.selfViewRef=e.first),a.kc(e=a.Yb())&&(t.remoteViewRef=e.first)}},features:[a.wb],decls:10,vars:4,consts:[["class","center",4,"ngIf"],["id","remote"],["autoplay",""],["remoteView",""],["id","local",1,"mat-elevation-z2"],["selfView",""],[3,"video"],[1,"center"],[3,"active"],["calling",""]],template:function(e,t){if(1&e&&(a.xc(0,b,4,3,"div",0),a.cc(1,"async"),a.Qb(2,"div",1),a.Mb(3,"video",2,3),a.Pb(),a.Qb(5,"mat-card",4),a.Mb(6,"video",2,5),a.Qb(8,"mat-card-actions"),a.Mb(9,"quertc-mute-button",6),a.Pb(),a.Pb()),2&e){const e=a.lc(7);a.gc("ngIf",null===a.dc(1,2,t.active$)),a.zb(9),a.gc("video",e)}},directives:[h.l,f.a,f.b,g.a,p.a],pipes:[h.b],styles:["[_nghost-%COMP%]{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative}[_nghost-%COMP%]   .center[_ngcontent-%COMP%]{position:absolute;text-align:center;max-width:150px}[_nghost-%COMP%]   .center[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:16px;line-height:1.2}#remote[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;align-items:center;justify-content:center}#remote[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{max-width:100vw;height:100%;-o-object-fit:cover;object-fit:cover}#local[_ngcontent-%COMP%]{right:4px;width:240px;height:auto;max-width:240px;border-radius:8px;background:rgba(0,0,0,.02);overflow:hidden;position:fixed;padding:0;bottom:4px}#local[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:inherit;height:auto;-o-object-fit:cover;object-fit:cover;margin-bottom:-8px}#local[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%]{position:absolute;bottom:0;margin:0 6px -3px;z-index:10;color:#fff}"]}),e})();var O=i("tyNb"),w=i("NFeN"),y=i("bTqV");let P=(()=>{class e{}return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(t){return new(t||e)},imports:[[h.c,o.c,f.d,w.b,y.c,O.d.forChild([{path:"",component:v}])]]}),e})()}}]);