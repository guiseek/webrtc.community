# Quertc

# Reprodução de [exemplo](https://www.w3.org/TR/webrtc/?fbclid=IwAR12z6ZC2IxvCNGfkEU8ADBZU9A6XWNSmT2GnbWvllxWoLjHUlljPK3Fnv8#perfect-negotiation-example) w3c

## Execução

Instale com `npm install`

Execute com `npm run dev`


## [10.7](https://www.w3.org/TR/webrtc/?fbclid=IwAR12z6ZC2IxvCNGfkEU8ADBZU9A6XWNSmT2GnbWvllxWoLjHUlljPK3Fnv8#perfect-negotiation-example) Perfect Negotiation Example
Perfect negotiation is a recommended pattern to manage negotiation transparently, abstracting this asymmetric task away from the rest of an application. This pattern has advantages over one side always being the offerer, as it lets applications operate on both peer connection objects simultaneously without risk of glare (an offer coming in outside of "`stable`" state). The rest of the application may use any and all modification methods and attributes, without worrying about signaling state races.

It designates different roles to the two peers, with behavior to resolve signaling collisions between them:

1. The **polite peer** uses rollback to avoid collision with an incoming offer.

1. The **impolite peer** ignores an incoming offer when this would collide with its own.

Together, they manage signaling for the rest of the application in a manner that doesn't deadlock. The example assumes a `polite` boolean variable indicating the designated role:


>
> [EXAMPLE 18](https://www.w3.org/TR/webrtc/?fbclid=IwAR12z6ZC2IxvCNGfkEU8ADBZU9A6XWNSmT2GnbWvllxWoLjHUlljPK3Fnv8#example-18)
>
> ```js
> const signaling = new SignalingChannel(); // handles JSON.stringify/parse
> const constraints = {audio: true, video: true};
> const configuration = {iceServers: [{urls: 'stun:stun.example.org'}]};
> const pc = new RTCPeerConnection(configuration);
> 
> // call start() anytime on either end to add camera and microphone to connection
> async function start() {
>   try {
>     const stream = await navigator.mediaDevices.getUserMedia(constraints);
>     for (const track of stream.getTracks()) {
>       pc.addTrack(track, stream);
>     }
>     selfView.srcObject = stream;
>   } catch (err) {
>     console.error(err);
>   }
> }
> 
> pc.ontrack = ({track, streams}) => {
>   // once media for a remote track arrives, show it in the remote video element
>   track.onunmute = () => {
>     // don't set srcObject again if it is already set.
>     if (remoteView.srcObject) return;
>     remoteView.srcObject = streams[0];
>   };
> };
> 
> // - The perfect negotiation logic, separated from the rest of the application ---
> 
> // keep track of some negotiation state to prevent races and errors
> let makingOffer = false;
> let ignoreOffer = false;
> let isSettingRemoteAnswerPending = false;
> 
> // send any ice candidates to the other peer
> pc.onicecandidate = ({candidate}) => signaling.send({candidate});
> 
> // let the "negotiationneeded" event trigger offer generation
> pc.onnegotiationneeded = async () => {
>   try {
>     makingOffer = true;
>     await pc.setLocalDescription();
>     signaling.send({description: pc.localDescription});
>   } catch (err) {
>      console.error(err);
>   } finally {
>     makingOffer = false;
>   }
> };
> 
> signaling.onmessage = async ({data: {description, candidate}}) => {
>   try {
>     if (description) {
>       // An offer may come in while we are busy processing SRD(answer).
>       // In this case, we will be in "stable" by the time the offer is processed
>       // so it is safe to chain it on our Operations Chain now.
>       const readyForOffer =
>           !makingOffer &&
>           (pc.signalingState == "stable" || isSettingRemoteAnswerPending);
>       const offerCollision = description.type == "offer" && !readyForOffer;
> 
>       ignoreOffer = !polite && offerCollision;
>       if (ignoreOffer) {
>         return;
>       }
>       isSettingRemoteAnswerPending = description.type == "answer";
>       await pc.setRemoteDescription(description); // SRD rolls back as needed
>       isSettingRemoteAnswerPending = false;
>       if (description.type == "offer") {
>         await pc.setLocalDescription();
>         signaling.send({description: pc.localDescription});
>       }
>     } else if (candidate) {
>       try {
>         await pc.addIceCandidate(candidate);
>       } catch (err) {
>         if (!ignoreOffer) throw err; // Suppress ignored offer's candidates
>       }
>     }
>   } catch (err) {
>     console.error(err);
>   }
> }
> ```
>


## Estrutura
```sh
apps
├── client
│   ├── src
│   │   ├── app
│   │   │   ├── app.component.html
│   │   │   ├── app.component.scss
│   │   │   ├── app.component.spec.ts
│   │   │   ├── app.component.ts
│   │   │   ├── app.module.ts
│   │   │   ├── signaling.adapter.ts # <- Angular Adapter
│   │   │   └── signaling.utils.ts
│   │   ├── index.html
│   │   ├── main.ts
│      
└── server
    ├── src
    │   ├── api.gateway.spec.ts
    │   ├── api.gateway.ts # <- Retransmite mensagens (socket.io) 
    │   ├── app.module.ts
    │   └── main.ts

libs
└── core
    ├── src
    │   ├── index.ts
    │   └── lib
    │       ├── signaling-channel.interface.ts
    │       └── signaling-channel.ts # <- Agnóstico (socket.io-client)
```

