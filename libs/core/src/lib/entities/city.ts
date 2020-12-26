export class City {
  id: number
  nome: string
  microrregiao: Microrregiao
  'regiao-imediata': RegiaoImediata
}

export class Microrregiao {
  id: number
  nome: string
  mesorregiao: Mesorregiao
}

export class Mesorregiao {
  id: number
  nome: string
  UF: Uf
}

export class Uf {
  id: number
  sigla: string
  nome: string
  regiao?: Uf
}

export class RegiaoImediata {
  id: number
  nome: string
  'regiao-intermediaria': Mesorregiao
}
