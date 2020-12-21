# QueRTC?

## Reprodução de exemplos

- [Negociação perfeita](./apps/client/src/app/containers/perfect-negotiation)
- [Reiniciar candidatos](./apps/client/src/app/containers/restart-ice)

---
## Execute

Instale com `npm install`

Faça o build com `npm run build`

O resultado estará nos diretórios dentro de `dist`

Teste com `npm run dev`

---

## Desenvolva

Execute com `npm run dev`

Escreva testes com `npm run tdd`

---

## Comunidade

### Sugestões
Tem uma sugestão sobre algum exemplo para reprodução? [Abra uma solicitação](https://github.com/guiseek/quertc/issues/new) para que possamos providenciar.

### Discussões
Quer entender melhor algum tópico? [inicie uma discussão](https://github.com/guiseek/quertc/discussions/new) para que outras pessoas coloquem seus pontos de vista.


## Estrutura
```sh
apps
├── client
│   ├── src
│   │   ├── app
│   │   │   ├── components
│   │   │   │   ├── call-avatar
│   │   │   │   │   ├── call-avatar.component.html
│   │   │   │   │   ├── call-avatar.component.scss
│   │   │   │   │   ├── call-avatar.component.ts
│   │   │   ├── containers
│   │   │   │   ├── perfect-negotiation
│   │   │   │   │   ├── README.md # <- Negociação perfeita
│   │   │   │   │   ├── perfect-negotiation.component.html
│   │   │   │   │   ├── perfect-negotiation.component.scss
│   │   │   │   │   └── perfect-negotiation.component.ts
│   │   │   │   └── restart-ice
│   │   │   │       ├── README.md # <- Reiniciar candidato
│   │   │   │       ├── restart-ice.component.html
│   │   │   │       ├── restart-ice.component.scss
│   │   │   │       └── restart-ice.component.ts
│   │   │   ├── signaling.adapter.ts # <- Angular Adapter
│   │   │   └── signaling.utils.ts
│   │   ├── assets
│   │   ├── envs
│   │   │   ├── env.prod.ts
│   │   │   └── env.ts
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── main.ts
│      
└── server
    ├── src
    │   ├── api.gateway.spec.ts
    │   ├── api.gateway.ts # <- Retransmite mensagens  (socket.io) 
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

