## Simples Exemplo Ponto-a-ponto

- [Em português](#pt-br)
- [Original em inglês](#original)
- [Código apresentado](#code)

### <a name="pt-br"></a> _pt-br_

Quando dois pares decidem que vão estabelecer uma conexão um com o outro, ambos passam por essas etapas. A configuração do servidor STUN / TURN descreve um servidor que eles podem usar para obter coisas como seu endereço IP público ou para configurar o NAT traversal. Eles também precisam enviar dados para o canal de sinalização ([[`SignalingChannel`]](libs/core/src/lib/signaling-channel.ts)) entre si, usando o mesmo mecanismo fora de banda usado para estabelecer que eles iriam se comunicar em primeiro lugar.

### <a name="original"></a> Original _(inglês)_

## 10.1 Simple Peer-to-peer Example[](https://www.w3.org/TR/webrtc/#simple-peer-to-peer-example)

When two peers decide they are going to set up a connection to each other, they both go through these steps. The STUN/TURN server configuration describes a server they can use to get things like their public IP address or to set up NAT traversal. They also have to send data for the signaling channel to each other using the same out-of-band mechanism they used to establish that they were going to communicate in the first place.

### <a name="code"></a> Code

> [EXAMPLE 9](https://www.w3.org/TR/webrtc/#example-9)
>
> ```js
> const signaling = new SignalingChannel() // handles JSON.stringify/parse
> const constraints = { audio: true, video: true }
> const configuration = { iceServers: [{ urls: 'stun:stun.example.org' }] }
> const pc = new RTCPeerConnection(configuration)
>
> // send any ice candidates to the other peer
> pc.onicecandidate = ({ candidate }) => signaling.send({ candidate })
>
> // let the "negotiationneeded" event trigger offer generation
> pc.onnegotiationneeded = async () => {
>   try {
>     await pc.setLocalDescription()
>     // send the offer to the other peer
>     signaling.send({ description: pc.localDescription })
>   } catch (err) {
>     console.error(err)
>   }
> }
>
> pc.ontrack = ({ track, streams }) => {
>   // once media for a remote track arrives, show it in the remote video element
>   track.onunmute = () => {
>     // don't set srcObject again if it is already set.
>     if (remoteView.srcObject) return
>     remoteView.srcObject = streams[0]
>   }
> }
>
> // call start() to initiate
> function start() {
>   addCameraMic()
> }
>
> // add camera and microphone to connection
> async function addCameraMic() {
>   try {
>     // get a local stream, show it in a self-view and add it to be sent
>     const stream = await navigator.mediaDevices.getUserMedia(constraints)
>     for (const track of stream.getTracks()) {
>       pc.addTrack(track, stream)
>     }
>     selfView.srcObject = stream
>   } catch (err) {
>     console.error(err)
>   }
> }
>
> signaling.onmessage = async ({ data: { description, candidate } }) => {
>   try {
>     if (description) {
>       await pc.setRemoteDescription(description)
>       // if we got an offer, we need to reply with an answer
>       if (description.type == 'offer') {
>         if (!selfView.srcObject) {
>           // blocks negotiation on permission (not recommended in production code)
>           await addCameraMic()
>         }
>         await pc.setLocalDescription()
>         signaling.send({ description: pc.localDescription })
>       }
>     } else if (candidate) {
>       await pc.addIceCandidate(candidate)
>     }
>   } catch (err) {
>     console.error(err)
>   }
> }
> ```
